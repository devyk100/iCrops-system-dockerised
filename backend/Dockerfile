# Use the official Node.js image from the Docker Hub
FROM node:22-slim

# Set the working directory
WORKDIR /app

# Install Python 3.11
RUN apt-get update && apt-get install -y python3.11 python3-pip python3-geopandas
# Copy the package.json and install dependencies
# COPY package.json .
COPY . .

# Copy the requirements file and install Python dependencies
# COPY app/requirements.txt .
# RUN pip3 install --no-cache-dir -r requirements.txt

RUN npm install
RUN apt-get install -y zip
RUN rm -rf savedImages && mkdir savedImages
# Copy the rest of the application

# Expose the port the app runs on
EXPOSE 8080

# Run the application
CMD ["npm", "run", "dev"]
