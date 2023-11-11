package com.factorial.metric.server.persistence.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MetricRepository<T,A> {
    List<A> findByMinuteAvg();

    List<A> findByHourAvg();

    List<A> findByDayAvg();
}
