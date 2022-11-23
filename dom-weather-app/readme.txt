How to start the container?

1. Run the command:   docker build -t dom-weather-app:1.0 .

It is required to create a local image of weather app from Dockerfile.

2. Next, run the command:    docker-compose -f dom-weather-app.yaml up

App will log the port to the console, and then you can access it on your localhost.