package com.factorial.metric.server.service;

import com.factorial.metric.server.persistence.entity.MetricEntity;
import com.factorial.metric.server.service.dto.MetricDto;

import java.util.concurrent.TimeUnit;

public interface MetricService {
    MetricDto getMetricByTimeUnit(TimeUnit timeUnit);

    void save(MetricEntity metric);
}
