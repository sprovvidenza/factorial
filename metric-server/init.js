db = new Mongo().getDB("factorial");
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
        "timestamp": ISODate("2023-05-18T00:01:00.000Z"),
        "temp": 12
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-05-18T04:05:00.000Z"),
        "temp": 11
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-05-18T08:15:00.000Z"),
        "temp": 16
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-05-18T12:22:00.000Z"),
        "temp": 18
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-05-18T16:00:00.000Z"),
        "temp": 5
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-05-18T20:58:00.000Z"),
        "temp": 0
    }, {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-05-19T22:12:00.000Z"),
        "temp": 1
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-05-19T04:12:00.000Z"),
        "temp": 6
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-05-19T08:15:00.000Z"),
        "temp": 22
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-05-19T12:00:00.000Z"),
        "temp": 34
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-05-19T16:01:00.000Z"),
        "temp": 120
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-05-19T20:02:00.000Z"),
        "temp": 60
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-05-20T20:58:00.000Z"),
        "temp": 56
    }, {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-05-20T22:12:00.000Z"),
        "temp": 10
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-05-20T04:12:00.000Z"),
        "temp": 12
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-05-20T08:15:00.000Z"),
        "temp": 11
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-05-20T12:00:00.000Z"),
        "temp": 12
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-05-20T16:01:00.000Z"),
        "temp": 17
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2023-05-20T18:02:00.000Z"),
        "temp": 15
    }
] )

