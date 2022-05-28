FROM node:12

WORKDIR /var/task

# Copy handler function and package.json
COPY package.json .

# Install NPM dependencies for function
RUN npm install

RUN npm install serverless@2.72.3 -g

COPY . .

EXPOSE 3000

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD ["sls", "offline"]