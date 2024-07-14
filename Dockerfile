# Utiliser l'image de base de Node.js
FROM node:20.12.2-alpine3.18 as base

# Étape des dépendances
FROM base as deps
WORKDIR /app
ADD package.json package-lock.json ./
RUN npm ci

# Étape des dépendances de production uniquement
FROM base as production-deps
WORKDIR /app
ADD package.json package-lock.json ./
RUN npm ci --omit=dev

# Étape de build
FROM base as build
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
ADD . .
COPY .env .env
RUN node ace build

# Étape de production
FROM base
ENV NODE_ENV=production
WORKDIR /app
COPY --from=production-deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app
COPY .env .env
EXPOSE 8080
CMD ["node", "./bin/server.js"]