import React, {useContext} from "react";

const MetricContext = React.createContext({
    tenant: "Dev"
});
const useTenant = () => useContext(MetricContext)

export {MetricContext, useTenant}