package com.factorial.metric.server.factory;

import com.factorial.metric.server.utils.TenantProvider;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoDatabase;
import org.springframework.dao.DataAccessException;
import org.springframework.data.mongodb.core.SimpleMongoClientDatabaseFactory;

public class MultitenantMongoClientDatabaseFactory extends SimpleMongoClientDatabaseFactory {
    private static final String DATABASE_NAME = "default";

    private final TenantProvider tenantProvider;

    public MultitenantMongoClientDatabaseFactory(MongoClient mongoClient, TenantProvider tenantProvider) {
        super(mongoClient, DATABASE_NAME);

        this.tenantProvider = tenantProvider;
    }

    @Override
    public MongoDatabase getMongoDatabase() throws DataAccessException {
        return getMongoDatabase(tenantProvider.get().toLowerCase());
    }
}
