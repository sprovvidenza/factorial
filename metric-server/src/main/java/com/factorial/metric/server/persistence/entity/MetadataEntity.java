package com.factorial.metric.server.persistence.entity;

public class MetadataEntity {
    private String sensorId, type;

    public MetadataEntity(String sensorId, String type) {
        this.sensorId = sensorId;
        this.type = type;
    }

    public String getSensorId() {
        return sensorId;
    }

    public void setSensorId(String sensorId) {
        this.sensorId = sensorId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
