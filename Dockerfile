# Step 1: Use an official Node.js image as the base
FROM node:18 as build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (if exists)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the entire project to the working directory
COPY . .

# Step 6: Build the app for production
RUN npm run build

# Step 7: Use a lightweight Nginx server to serve the built files
FROM nginx:alpine

# Step 8: Copy the built files from the previous stage to the Nginx web directory
COPY --from=build /app/dist /usr/share/nginx/html

# Step 9: Expose port 80 to allow access to the container
EXPOSE 80

# Step 10: Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
