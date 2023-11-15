import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AuthProvider} from "oidc-react";
import InputMetric from "./InputMetric";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const oidcConfig = {
    onSignIn: async (user: any) => {
        console.log(user);
        window.location.hash = '';
    },
    authority: 'http://localhost:3000',
    clientId: 'oidc-client',
    redirectUri: 'http://localhost:3000',
    loadUserInfo: false,
    automaticSilentRenew: false,
}
root.render(
    <React.Fragment>
        <AuthProvider {...oidcConfig}>
            <App/>
            <InputMetric></InputMetric>
        </AuthProvider>
    </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
