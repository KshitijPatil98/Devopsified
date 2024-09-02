#SIZE IS 1.5 GB
#With multistage docker file (check the Dockerfile_Multistage) is 220mb

# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /node-app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app will run on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
