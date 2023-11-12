package com.factorial.metric.server.persistence.entity;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.stream.Stream;

public class AggregationMetricEntityDate {
    private String year, month, day, hour, minute;

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getHour() {
        return hour;
    }

    public void setHour(String hour) {
        this.hour = hour;
    }

    public String getMinute() {
        return minute;
    }

    public void setMinute(String minute) {
        this.minute = minute;
    }

    @Override
    public String toString() {
        List<String> times = Stream.of(year, month, day, hour, minute).map(s -> {
            if (Objects.isNull(s)) return "00";
            if (s.length() == 1) return String.format("0%s", s);
            return s;
        }).toList();
        return String.format("%s-%s-%s %s:%s", times.toArray());
    }
}
