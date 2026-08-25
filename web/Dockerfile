
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
ENV NODE_ENV=production
CMD npm run dev