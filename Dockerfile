FROM node:14 AS builder
WORKDIR /app
COPY . .
RUN npm install --unsafe-perm

FROM node:14-alpine
WORKDIR /app
COPY --from=builder /app ./
CMD ["npm", "run", "prod"]
