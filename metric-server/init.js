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
        "timestamp": ISODate("2023-11-19T00:01:00.000Z"),
        "value": 12
    }
] )

