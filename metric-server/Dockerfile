FROM maven:3.9.5-eclipse-temurin-17-alpine AS build
COPY ./src src
COPY ./pom.xml pom.xml
RUN mvn clean install

FROM eclipse-temurin:17.0.8.1_1-jre-alpine
COPY ./entrypoint.sh entrypoint.sh
COPY --from=build /target/metric-*.jar metric-server.jar

ENTRYPOINT ["sh","entrypoint.sh"]