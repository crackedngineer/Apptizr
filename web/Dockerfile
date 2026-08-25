
# # Base image
# FROM node:24-bookworm-slim AS base
# # FROM node:22-bullseye AS base
# # install any build deps if needed
# RUN apt-get update \
#     && apt-get install -y --no-install-recommends \
#         build-essential ca-certificates \
#     && rm -rf /var/lib/apt/lists/*
# WORKDIR /app
# COPY package*.json ./
# EXPOSE 3000

# # Builder stage
# FROM base AS builder
# WORKDIR /app
# COPY . .
# RUN npm run build

# # Development stage
# FROM base AS dev
# ENV NODE_ENV=production
# RUN npm install 
# COPY . .
# CMD ["npm", "run", "dev"]


FROM node:24-bookworm-slim

WORKDIR /app
COPY package*.json ./
RUN npm install && npm install --no-save --platform=linuxgnu --arch=x64 lightningcss
COPY . .
EXPOSE 3000

# Dependencies stage
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install

# Builder stage
FROM base AS builder
WORKDIR /app
ENV NEXT_PUBLIC_DEPLOYMENT_PLATFORM=docker
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# Production stage
FROM base AS production
WORKDIR /app

ENV NODE_ENV=production
RUN npm ci

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs


COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

CMD npm start
