package com.factorial.metric.server.persistence.entity;

import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Document(collection = "weather")
public class MetricEntity {
    private MetadataEntity metadata;
    private Instant timestamp;
    private Double value;

    public MetricEntity(MetadataEntity metadata, Instant timestamp, Double value) {
        this.metadata = metadata;
        this.timestamp = timestamp;
        this.value = value;
    }

    public MetadataEntity getMetadata() {
        return metadata;
    }

    public void setMetadata(MetadataEntity metadata) {
        this.metadata = metadata;
    }

    public Instant getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Instant timestamp) {
        this.timestamp = timestamp;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }
}
