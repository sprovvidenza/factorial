package com.factorial.metric.server.persistence.repository;

import com.factorial.metric.server.persistence.entity.MetricEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MetricRepository extends MongoRepository<MetricEntity, String> {
}
