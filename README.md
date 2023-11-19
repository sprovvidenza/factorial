# Welcome to Metric Dashboard!

This is a dashboard where is possible to visualize and analyze metrics.


# Application
Application image.
In this application you can select metric by tenant(in this case the tenant are dev, uat and prod) and also you can filter by minutes, hours and days.


## Setup

To run the application is necessary doing:

- add on your file host this section

> 127.0.0.1		idp

- run this command

> docker-compose up --build

The application will be available on http://localhost:3000

## Tech

To made this application have been used this technologies:

- [Spring Authorization Server](https://github.com/spring-projects/spring-authorization-server) to create the IDP
- [Spring Boot](https://spring.io/projects/spring-boot) to made the metric server
- [MongoDb and own time series collection](https://www.mongodb.com/docs/manual/core/timeseries-collections/) to persist the metrics.
- [React](https://react.dev/learn) and [Material UI](https://mui.com/material-ui/getting-started/) for the frontend layer


## Sequence diagrams
```mermaid
sequenceDiagram
User ->> App: User open the metric app
App->>IDP: The app redirect to /oauth2/authorize
IDP ->> App: The IDP return the authorization code on specified callback
App->>IDP: The app call /oauth/token
IDP ->> App: The IDP return the ID Token


App->>Metric Server: The app call /metric with bearer token to get the metrics data
Metric Server->>IDP: The metric call /oauth2/jwks
IDP->>Metric Server: Return the pub key 
Metric Server->>Metric Server: validate token
Metric Server->>App: Return the metric data requested
```

And this will produce a flow chart:

```mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
```