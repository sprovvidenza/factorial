package com.factorial.metric.server.persistence.repository;

import com.factorial.metric.server.persistence.entity.AggregationMetricEntity;
import com.factorial.metric.server.persistence.entity.MetricEntity;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.DateOperators;
import org.springframework.data.mongodb.core.aggregation.DateOperators.DateToParts;
import org.springframework.data.mongodb.core.aggregation.ProjectionOperation;

import java.util.List;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;
import static org.springframework.data.mongodb.core.aggregation.DateOperators.DateToParts.*;

public class MetricRepositoryImpl implements MetricRepository<MetricEntity, AggregationMetricEntity> {

    private final MongoTemplate mongoTemplate;

    public MetricRepositoryImpl(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public List<AggregationMetricEntity> findByMinuteAvg() {

        Aggregation aggregation = newAggregation(
                project("temp", "data").and(dateToParts("$timestamp"))
//                group(fields("$date.year", "$date.month", "$date.day", "$date.hour", "$date.minute")),
//                sort(Sort.Direction.ASC, "_id.date")
        );
        AggregationResults<AggregationMetricEntity> aggregate = mongoTemplate.aggregate(aggregation, "weather", AggregationMetricEntity.class);

        return aggregate.getMappedResults();
    }

    @Override
    public List<AggregationMetricEntity> findByHourAvg() {
        return null;
    }

    @Override
    public List<AggregationMetricEntity> findByDayAvg() {
        return null;
    }
}
