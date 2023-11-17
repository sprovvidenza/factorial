import React, {useState} from 'react';
import './App.css';
import Chart from "./Chart";
import {AuthProvider} from "oidc-react";
import {AppBar, Avatar, Button, Menu, MenuItem, Toolbar} from "@mui/material";
import {MetricContext} from "./Context";


function App() {
    const oidcConfig = {
        onSignIn: async (user: any) => {
            console.log(user);
            window.location.href = "http://localhost:3000";
        },
        authority: 'http://localhost:3000',
        clientId: 'oidc-client',
        redirectUri: 'http://localhost:3000',
        loadUserInfo: false,
        automaticSilentRenew: false,
    }
    const [metricContext, setMetricContext] = useState({tenant: 'Dev'});
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const handleClose = (event: any) => {
        setAnchorEl(null);
        console.log(event.target.innerText)
        setMetricContext({tenant: event.target.innerText})
    };

    return (
        <AuthProvider {...oidcConfig}>
            <AppBar position={"static"}>
                <Toolbar>
                    <Avatar className="logo"
                            src="https://play-lh.googleusercontent.com/PBsR6LdntQHFtg-NLxWn1X5-YKudfr9KBDaYr7VmzgXdeD8GydecNuX7xt3tAMxFrZg=w240-h480-rw"></Avatar>

                    <Button
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        color={"inherit"}
                    >
                        {metricContext.tenant}
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}

                    >
                        <MenuItem value="Tenant1" onClick={handleClose}>Dev</MenuItem>
                        <MenuItem value="Tenant2" onClick={handleClose}>Uat</MenuItem>
                        <MenuItem value="Tenant3" onClick={handleClose}>Prod</MenuItem>
                    </Menu>

                </Toolbar>

            </AppBar>

            <MetricContext.Provider value={metricContext}>
                <Chart/>
            </MetricContext.Provider>
        </AuthProvider>
    )


}

export default App;
