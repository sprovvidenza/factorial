package com.factorial.metric.server.persistence.repository;

import com.factorial.metric.server.persistence.entity.AggregationMetricEntity;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AggMetricRepository extends MongoRepository<AggregationMetricEntity, String> {

    @Aggregation(pipeline = {
            "{$project: {date: {$dateToParts: { date:  \"$timestamp\"}}, temp:  1}}",
            "{$group:{_id: {date: {year: \"$date.year\", month: \"$date.month\", day: \"$date.day\", hour: \"$date.hour\", minute: \"$date.minute\"}}, avgValue: {$avg: \"$temp\"}}}",
            "{$sort: {\"_id.date\": 1}}"
    })
    List<AggregationMetricEntity> findByMinuteAvg();

    @Aggregation(pipeline = {
            "{$project: {date: {$dateToParts: { date:  \"$timestamp\"}}, temp:  1}}",
            "{$group:{_id: {date: {year: \"$date.year\", month: \"$date.month\", day: \"$date.day\", hour: \"$date.hour\"}}, avgValue: {$avg: \"$temp\"}}}",
            "{$sort: {\"_id.date\": 1}}"
    })
    List<AggregationMetricEntity> findByHourAvg();

    @Aggregation(pipeline = {
            "{$project: {date: {$dateToParts: { date:  \"$timestamp\"}}, temp:  1}}",
            "{$group:{_id: {date: {year: \"$date.year\", month: \"$date.month\", day: \"$date.day\"}}, avgValue: {$avg: \"$temp\"}}}",
            "{$sort: {\"_id.date\": 1}}"
    })
    List<AggregationMetricEntity> findByDayAvg();

}
