# Use Node.js 18 as the base image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Install build dependencies for Gatsby and Node.js
RUN apk add --no-cache python3 make g++ bash git

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Gatsby site
RUN yarn build

# Use a lightweight web server for the production image
FROM nginx:alpine AS production

# Copy the built Gatsby site to the Nginx web server directory
COPY --from=builder /app/public /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]