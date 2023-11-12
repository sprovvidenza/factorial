import React, {useEffect, useState} from 'react';
import './App.css';
import {LineChart} from "@mui/x-charts";
import FormControl from '@mui/material/FormControl';
import {InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";



function App() {
    const [time, setTime] = useState('DAYS');
    const [series, setSeries] = useState([]);
    const [xaxis, setXaxis] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);


    const fetchMetrics = (t: string | undefined) => {
        const url = `http://localhost:3000/metric?timeUnit=${t}`
        console.log(url)
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setIsLoaded(true);
                setSeries(data.series);
                setXaxis(data.xAxis)
                console.log(data)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    const handleChange = (event: SelectChangeEvent) => {
        setTime(event.target.value as string);
        console.log(event.target.value as string)
        fetchMetrics(event.target.value)

    };

    useEffect(() => {
        fetchMetrics(time);
    }, []);

    if (isLoaded) {
        return (
            <div className="App">
                <FormControl sx={{m: 1, width: 100}}>
                    <InputLabel id="demo-simple-select-label">Time</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={time}
                        label="Time"
                        onChange={handleChange}
                        defaultValue={'DAYS'}
                    >
                        <MenuItem value={'MINUTES'}>Minutes</MenuItem>
                        <MenuItem value={'HOURS'}>Hours</MenuItem>
                        <MenuItem value={'DAYS'}>Days</MenuItem>
                    </Select>
                </FormControl>
                <LineChart
                    xAxis={[{data: xaxis, scaleType: 'point', label: time}]}
                    series={[
                        {
                            data: series, curve: "natural", area: false
                        },
                    ]}
                    width={800}
                    height={400}
                />

            </div>
        );
    } else return (<div className="App"></div>)

}

export default App;
