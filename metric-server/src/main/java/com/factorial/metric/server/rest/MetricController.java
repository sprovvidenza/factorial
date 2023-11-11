package com.factorial.metric.server.rest;

import com.factorial.metric.server.persistence.entity.AggregationMetricEntity;
import com.factorial.metric.server.persistence.repository.ExRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MetricController {

    private final ExRepository metricRepository;

    public MetricController(ExRepository metricRepository) {
        this.metricRepository = metricRepository;
    }

    @GetMapping(path = "/metric/minute", produces = {"application/json"})
    public List<AggregationMetricEntity> getMetricByMinute() {
        return metricRepository.findByMinuteAvg();
    }

    @GetMapping(path = "/metric/hour", produces = {"application/json"})
    public List<AggregationMetricEntity> getMetricByHour() {
        return metricRepository.findByHourAvg();
    }

    @GetMapping(path = "/metric/day", produces = {"application/json"})
    public List<AggregationMetricEntity> getMetricByDay() {
        return metricRepository.findByDayAvg();
    }
}
