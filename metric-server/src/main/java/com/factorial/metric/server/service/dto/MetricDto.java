package com.factorial.metric.server.service.dto;

import java.util.List;

public class MetricDto {
    private List<String> xAxis;
    private List<Double> series;

    public MetricDto(List<String> xAxis, List<Double> series) {
        this.xAxis = xAxis;
        this.series = series;
    }

    public List<String> getxAxis() {
        return xAxis;
    }

    public void setxAxis(List<String> xAxis) {
        this.xAxis = xAxis;
    }

    public List<Double> getSeries() {
        return series;
    }

    public void setSeries(List<Double> series) {
        this.series = series;
    }
}
