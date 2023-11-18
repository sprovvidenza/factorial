db = new Mongo().getDB("dev");
db.createCollection(
    "weather", {
        timeseries: {
            timeField: "timestamp",
            metaField: "metadata",
            granularity: "seconds"
        },
    });

db.weather.insertMany( [
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-11-19T00:01:00.000Z"),
        "value": 12
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-11-19T01:01:00.000Z"),
        "value": 15
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-11-19T01:02:00.000Z"),
        "value": 25
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-11-19T01:02:06.000Z"),
        "value": 15
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-11-20T00:01:00.000Z"),
        "value": 25
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-11-20T12:22:00.000Z"),
        "value": 32
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-11-20T13:12:10.000Z"),
        "value": 22
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-11-21T00:01:00.000Z"),
        "value": 16
    }
] )

db = new Mongo().getDB("uat");
db.createCollection(
    "weather", {
        timeseries: {
            timeField: "timestamp",
            metaField: "metadata",
            granularity: "seconds"
        },
    });

db.weather.insertMany( [
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-11-19T00:01:00.000Z"),
        "value": 2
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-11-19T01:01:00.000Z"),
        "value": 15
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-11-19T01:02:00.000Z"),
        "value": 54
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-11-19T01:02:06.000Z"),
        "value": 15
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-11-20T00:01:00.000Z"),
        "value": 55
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-11-20T12:22:00.000Z"),
        "value": 38
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-11-20T13:12:10.000Z"),
        "value": 2
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-11-21T00:01:00.000Z"),
        "value": 16
    }
] )

db = new Mongo().getDB("prod");
db.createCollection(
    "weather", {
        timeseries: {
            timeField: "timestamp",
            metaField: "metadata",
            granularity: "seconds"
        },
    });

db.weather.insertMany( [
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-11-19T00:01:00.000Z"),
        "value": 11
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-11-19T01:01:00.000Z"),
        "value": 15
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-11-19T01:02:00.000Z"),
        "value": 250
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-11-19T01:02:06.000Z"),
        "value": 150
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-11-20T00:01:00.000Z"),
        "value": 325
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-11-20T12:22:00.000Z"),
        "value": 35
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-11-20T13:12:10.000Z"),
        "value": 22
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-11-21T00:01:00.000Z"),
        "value": 160
    }
] )



