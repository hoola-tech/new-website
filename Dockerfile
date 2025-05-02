# Use Node.js 18 as the base image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Install dependencies for building the Gatsby site
RUN apk add git

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

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