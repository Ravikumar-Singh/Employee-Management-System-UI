# Stage 1: Build the Angular app
FROM node:14 AS build
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install -g @angular/cli@9
RUN npm install

# Copy all files and build the app
COPY . .
RUN ng build --prod

# Stage 2: Run with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/angular9-springboot-client /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
