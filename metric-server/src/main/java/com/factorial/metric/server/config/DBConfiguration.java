package com.factorial.metric.server.config;

import com.factorial.metric.server.factory.MultitenantMongoClientDatabaseFactory;
import com.factorial.metric.server.utils.TenantProvider;
import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.boot.autoconfigure.mongo.MongoProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.MongoDatabaseFactory;
import org.springframework.data.mongodb.SpringDataMongoDB;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.convert.MappingMongoConverter;

import static java.util.concurrent.TimeUnit.MILLISECONDS;
import static org.bson.UuidRepresentation.JAVA_LEGACY;

@Configuration
public class DBConfiguration {

    @Bean
    public MongoTemplate mongoTemplate(MongoDatabaseFactory mongoDbFactory, MappingMongoConverter converter) {
        return new MongoTemplate(mongoDbFactory, converter);
    }
    @Bean
    public MongoDatabaseFactory mongoDbFactory(MongoProperties properties, TenantProvider tenantProvider) {
        final ConnectionString connectionString = new ConnectionString(properties.getUri());
        return new MultitenantMongoClientDatabaseFactory(mongoClient(connectionString), tenantProvider);
    }

    private MongoClient mongoClient(ConnectionString connectionString) {
        return createMongoClient(mongoClientSettings(connectionString));
    }

    private MongoClient createMongoClient(MongoClientSettings settings) {
        return MongoClients.create(settings, SpringDataMongoDB.driverInformation());
    }

    private MongoClientSettings mongoClientSettings(ConnectionString connectionString) {
        MongoClientSettings.Builder builder = MongoClientSettings.builder();
        builder.uuidRepresentation(JAVA_LEGACY);
        builder.applyConnectionString(connectionString);
        builder.applyToConnectionPoolSettings(
                connectionPoolBuilder -> connectionPoolBuilder.maxConnectionIdleTime(60_000, MILLISECONDS));

        return builder.build();
    }
}
