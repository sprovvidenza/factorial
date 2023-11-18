import React, {useContext} from "react";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {Box, Button, Container, Grid, TextField} from "@mui/material";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, {Dayjs} from "dayjs";
import {useAuth} from "oidc-react";
import {MetricContext} from "./Context";

export default function InputMetric() {

    const [time, setTime] = React.useState<Dayjs | null>(dayjs());
    const [value, setValue] = React.useState(10);
    const auth = useAuth()
    const metricContext = useContext(MetricContext);
    const eventSaveData = () => {
        auth.userManager.getUser().then(value => saveData(value?.id_token, metricContext.tenant))
    };

    const saveData = (token: string | undefined, tenant: string | undefined) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'},
            body: JSON.stringify({
                metadata: {sensorId: 5578, type: "temperature"},
                timestamp: time?.toISOString(),
                value: value
            })
        };
        fetch(`http://localhost:3000/metric?tenant=${tenant}`, requestOptions)
            .then((response) => console.log(response))
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    return (
        <div className='insertData'>
            <Box sx={{flexGrow: 5}}>
                <Grid container direction="row" alignItems="flex-start" justifyContent="flex-start">
                    <Grid item>
                        <Container>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker views={['year', 'day', 'hours', 'minutes', 'seconds']} label="Time"
                                                value={time} onChange={(value, context) => setTime(value)}/>
                            </LocalizationProvider>
                        </Container>
                    </Grid>
                    <Grid item>
                        <TextField id="value" defaultValue={value} label="Value" variant="standard"
                                   inputProps={{type: 'number'}}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(Number(event.target.value))}/>
                    </Grid>
                    <Grid item><Button variant="contained" onClick={() => eventSaveData()}>Add</Button></Grid>

                </Grid>
            </Box>
        </div>

    );
}


