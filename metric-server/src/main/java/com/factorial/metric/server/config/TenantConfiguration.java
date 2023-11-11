package com.factorial.metric.server.config;

import com.factorial.metric.server.utils.TenantProvider;

public class TenantConfiguration {
    public TenantProvider tenantProvider(){
        return new TenantProvider() {
            @Override
            public String get() {
                return null;
            }
        };
    }
}
