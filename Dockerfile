# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

# Build the React app
RUN npm run build

# Install a lightweight web server
RUN npm install -g serve

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the web server and serve the built application
CMD ["serve", "-s", "build", "-l", "3000"]
