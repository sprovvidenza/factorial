package com.factorial.metric.server.rest;

import com.factorial.metric.server.persistence.entity.MetricEntity;
import com.factorial.metric.server.service.MetricService;
import com.factorial.metric.server.service.dto.MetricDto;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;
import java.util.concurrent.TimeUnit;

@RestController
public class MetricController {

    private final MetricService metricService;
    public MetricController(MetricService metricService) {
        this.metricService = metricService;
    }

    @GetMapping(path = "/metric", params = "timeUnit",produces = {"application/json"})
    public MetricDto getMetricByMinute(@RequestParam(required = false) TimeUnit timeUnit) {
        if(Objects.isNull(timeUnit))
            return metricService.getMetricByTimeUnit(TimeUnit.DAYS);
        return metricService.getMetricByTimeUnit(timeUnit);
    }

    @PostMapping(path = "/metric")
    public void saveMetric(@RequestBody MetricEntity metric){
        metricService.save(metric);
    }


}
