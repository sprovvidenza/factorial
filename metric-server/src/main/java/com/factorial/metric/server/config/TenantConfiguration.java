package com.factorial.metric.server.config;

import com.factorial.metric.server.utils.TenantProvider;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import static java.lang.String.format;
import static java.util.Objects.isNull;
import static java.util.Optional.ofNullable;

@Configuration
public class TenantConfiguration {

    private static final String TENANT = "tenant";
    private static final String STATE = "state";
    private static final String DELIMITER = ":";
    private static final String ERROR_MESSAGE = "Tenant is not present as query string %s in request %s.";


    @Bean
    public TenantProvider tenantProvider() {
        return new TenantProvider() {
            @Override
            public String get() {
                ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();

                if (isNull(servletRequestAttributes))
                    throw new IllegalArgumentException(ERROR_MESSAGE);

                HttpServletRequest request = servletRequestAttributes.getRequest();
                String tenant = request.getParameter(TENANT);

                return ofNullable(tenant).orElseThrow(
                        () -> new IllegalArgumentException(format(ERROR_MESSAGE, TENANT, request.getRequestURI())));
            }
        };
    }
}
