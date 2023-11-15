import React, {useEffect, useState} from 'react';
import './App.css';
import {LineChart} from "@mui/x-charts";
import {Button, ToggleButton, ToggleButtonGroup} from "@mui/material";
import {useAuth} from "oidc-react";


function App() {
    const [time, setTime] = useState('DAYS');
    const [series, setSeries] = useState([]);
    const [xaxis, setXaxis] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const auth = useAuth()


    const fetchMetrics = (t: string | undefined) => {
        const url = `http://localhost:3000/metric?timeUnit=${t}`
        console.log(url)
        auth.userManager.getUser().then(value => {
                if (value) {
                    fetch(url, {headers: {'Authorization': 'Bearer ' + value?.id_token}})
                        .then((response) => response.json())
                        .then((data) => {
                            setSeries(data.series);
                            setXaxis(data.xAxis)
                            if (data.series.length > 0)
                                setIsLoaded(true);
                            console.log(data.series.length)
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
            console.log(newTime)
            fetchMetrics(newTime)
        }

    };

    useEffect(() => {
        fetchMetrics(time);
    }, []);

    function refresh() {
        fetchMetrics(time);
    }

    if (isLoaded) {
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
                        <Button variant="contained" onClick={() => refresh()}>Refresh</Button>
                    </ToggleButtonGroup>
                </div>
                <LineChart
                    margin={{left: 60, top: 10, right: 20}}
                    xAxis={[{data: xaxis, scaleType: 'point', label: time}]}
                    series={[
                        {
                            data: series, curve: "natural", area: true
                        },
                    ]}
                    width={800}
                    height={400}

                />
            </div>
        )
    } else return (<div className="App"></div>)

}

export default App;
