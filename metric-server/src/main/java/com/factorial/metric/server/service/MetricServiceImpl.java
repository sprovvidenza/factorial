package com.factorial.metric.server.service;

import com.factorial.metric.server.persistence.entity.AggregationMetricEntity;
import com.factorial.metric.server.persistence.repository.AggMetricRepository;
import com.factorial.metric.server.service.dto.MetricDto;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class MetricServiceImpl implements MetricService {

    private final AggMetricRepository repo;

    public MetricServiceImpl(AggMetricRepository repo) {
        this.repo = repo;
    }

    @Override
    public MetricDto getMetricByTimeUnit(TimeUnit timeUnit) {
        switch (timeUnit) {
            case DAYS -> {
                return convertToDTO(repo.findByDayAvg());
            }
            case HOURS -> {
                return convertToDTO(repo.findByHourAvg());
            }
            case MINUTES -> {
                return convertToDTO(repo.findByMinuteAvg());
            }
        }
        throw new NotFoundException();
    }

    private MetricDto convertToDTO(List<AggregationMetricEntity> aggMetrics) {
        ArrayList<String> xAxis = new ArrayList<>();
        ArrayList<Double> series = new ArrayList<>();
        aggMetrics.forEach(aggMetric -> {
            xAxis.add(aggMetric.getId().getDate().toString());
            series.add(aggMetric.getAvgValue());
        });

        return new MetricDto(xAxis, series);
    }

}
