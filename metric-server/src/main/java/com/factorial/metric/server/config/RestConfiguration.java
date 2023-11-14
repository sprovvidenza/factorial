package com.factorial.metric.server.config;

import com.factorial.metric.server.persistence.repository.AggMetricRepository;
import com.factorial.metric.server.persistence.repository.MetricRepository;
import com.factorial.metric.server.service.MetricService;
import com.factorial.metric.server.service.MetricServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RestConfiguration {

    @Bean
    public MetricService metricService(AggMetricRepository aggMetricRepository, MetricRepository metricRepository) {
        return new MetricServiceImpl(aggMetricRepository, metricRepository);
    }
}
