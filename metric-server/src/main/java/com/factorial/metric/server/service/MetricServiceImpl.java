package com.factorial.metric.server.service;

import com.factorial.metric.server.persistence.entity.AggregationMetricEntity;
import com.factorial.metric.server.persistence.entity.MetricEntity;
import com.factorial.metric.server.persistence.repository.AggMetricRepository;
import com.factorial.metric.server.persistence.repository.MetricRepository;
import com.factorial.metric.server.service.dto.MetricDto;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class MetricServiceImpl implements MetricService {

    private final AggMetricRepository aggRepository;
    private final MetricRepository metricRepository;

    public MetricServiceImpl(AggMetricRepository aggRepository, MetricRepository metricRepository) {
        this.aggRepository = aggRepository;
        this.metricRepository = metricRepository;
    }

    @Override
    public MetricDto getMetricByTimeUnit(TimeUnit timeUnit) {
        switch (timeUnit) {
            case DAYS -> {
                return convertToDTO(aggRepository.findByDayAvg());
            }
            case HOURS -> {
                return convertToDTO(aggRepository.findByHourAvg());
            }
            case MINUTES -> {
                return convertToDTO(aggRepository.findByMinuteAvg());
            }
        }
        throw new NotFoundException();
    }

    @Override
    public void save(MetricEntity metric) {
        metricRepository.save(metric);
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
