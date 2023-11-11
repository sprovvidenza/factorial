package com.factorial.metric.server.persistence.entity;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "weather")
public class AggregationMetricEntity {
    private AggregationMetricEntityId id;
    private Double avgValue;

    public AggregationMetricEntityId getId() {
        return id;
    }

    public void setId(AggregationMetricEntityId id) {
        this.id = id;
    }

    public Double getAvgValue() {
        return avgValue;
    }

    public void setAvgValue(Double avgValue) {
        this.avgValue = avgValue;
    }
}
