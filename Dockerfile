FROM oven/bun:latest AS base-bun
FROM node:23-alpine AS base-node

# Build stage
FROM base-bun AS builder

# Set working directory
WORKDIR /app

COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Environment variables at build time
# ARG NUXT_SESSION_PASSWORD
# ENV NUXT_SESSION_PASSWORD=${NUXT_SESSION_PASSWORD}

# Build the Nuxt application
RUN bun run build
CMD [ "ls -ls" ]

# Production stage
FROM base-node AS runner

# Set working directory
WORKDIR /app

# Copy built app from builder stage
COPY --from=builder /app/.output /app/.output

# Environment variables at build time
# ARG NUXT_SESSION_PASSWORD
# ENV NUXT_SESSION_PASSWORD=${NUXT_SESSION_PASSWORD}

# Set environment variable
# ENV NODE_ENV=production

# Command to run the application
CMD ["node", ".output/server/index.mjs"]
