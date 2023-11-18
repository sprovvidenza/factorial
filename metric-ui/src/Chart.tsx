import React, {useContext, useEffect, useState} from "react";
import {useAuth} from "oidc-react";
import {LineChart} from "@mui/x-charts";
import {Button, ToggleButton, ToggleButtonGroup} from "@mui/material";
import InputMetric from "./InputMetric";
import {MetricContext} from "./Context";

function Chart() {
    const [time, setTime] = useState('DAYS');
    const [series, setSeries] = useState([]);
    const [xaxis, setXaxis] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const auth = useAuth()
    const metricContext = useContext(MetricContext);


    const fetchMetrics = (time: string | undefined, tenant: string) => {
        const url = `http://localhost:3000/metric?timeUnit=${time}&tenant=${tenant}`
        console.log(url)
        console.log("Tenant is "+ metricContext.tenant)
        auth.userManager.getUser()
            .catch(reason => console.log(reason))
            .then(value => {
                    if (value) {
                        fetch(url, {headers: {'Authorization': 'Bearer ' + value?.id_token}})
                            .then((response) => response.json())
                            .then((data) => {
                                setSeries(data.series);
                                setXaxis(data.xAxis)
                                if (data.series.length > 0)
                                    setIsLoaded(true);
                                console.log(data.series)
                            })
                            .catch((err) => {
                                console.log(err.message);
                            })
                    }
                }
            )

    }

    const handleChange = (event: React.MouseEvent<HTMLElement>, newTime: string) => {
        if (newTime != null) {
            setTime(newTime);
            fetchMetrics(newTime, metricContext.tenant)
        }

    };

    useEffect(() => {
        console.log("Use Effect")
        fetchMetrics(time, metricContext.tenant)
    }, [metricContext]);

    function refresh() {
        fetchMetrics(time, metricContext.tenant);
    }


    if(isLoaded){
        return (
            <div className="App">
                <div className="menu">
                    <ToggleButtonGroup
                        color="primary"
                        value={time}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                    >
                        <ToggleButton value="MINUTES">Minutes</ToggleButton>
                        <ToggleButton value="HOURS">Hours</ToggleButton>
                        <ToggleButton value="DAYS">Days</ToggleButton>

                        <Button className="refresh" variant="contained" onClick={() => refresh()}>Refresh</Button>
                    </ToggleButtonGroup>
                </div>

                <div className='chart'>
                    <LineChart
                        margin={{left: 60, top: 10, right: 20}}
                        xAxis={[{data: xaxis, scaleType: 'point', label: time}]}
                        series={[
                            {
                                label:metricContext.tenant, data: series, curve: "natural", area: true
                            },
                        ]}
                        width={800}
                        height={400}
                    />
                </div>
                <div className='addMetric'>
                    <InputMetric></InputMetric>
                </div>
            </div>
        )
    }else return (<div className={"empty"}></div>)


}

export default Chart