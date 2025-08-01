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
ARG NUXT_PUBLIC_API_BASE
ENV NUXT_PUBLIC_API_BASE=${NUXT_PUBLIC_API_BASE}

# Build the Nuxt application
RUN bun run build

# Production stage
FROM base-node AS runner

# Set working directory
WORKDIR /app

# Copy built app from builder stage
COPY --from=builder /app/.output /app/.output

# Build-time environment variables are already baked into the build
# Runtime environment variables can be passed via docker-compose.yaml

# Set environment variable
# ENV NODE_ENV=production

# Command to run the application
CMD ["node", ".output/server/index.mjs"]
