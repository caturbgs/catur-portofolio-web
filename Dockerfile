FROM oven/bun:1.4.2-alpine AS builder
WORKDIR /app
RUN apk add --no-cache g++ make python3
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build:ssr

FROM oven/bun:1.4.2-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
  HOST=0.0.0.0 \
  PORT=3000
COPY --from=builder --chown=bun:bun /app/node_modules /app/node_modules
COPY --from=builder --chown=bun:bun /app/.output /app/.output
# Resolve runtime dependencies from the complete Bun install. Nuxt's pruned
# server tree omits transitive packages such as ofetch and uncrypto.
RUN rm -rf /app/.output/server/node_modules
USER bun
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD ["bun", "-e", "fetch('http://127.0.0.1:3000/').then(r=>{if(!r.ok)process.exit(1)}).catch(()=>process.exit(1))"]
CMD ["bun", ".output/server/index.mjs"]
