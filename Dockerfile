# Use Node.js 18 as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Install build dependencies for Gatsby and Node.js
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    bash \
    git \
    autoconf \
    automake \
    libtool \
    nasm \
    libjpeg-turbo-dev

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN yarn install && test -d node_modules

# Build the Gatsby site
RUN yarn build

# Expose port 80
EXPOSE 9000

# Start Nginx
CMD ["yarn", "serve"]