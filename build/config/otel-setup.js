"use strict";
// import { NodeSDK } from '@opentelemetry/sdk-node';
// import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
// import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';
// import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';
// Set up the Prometheus exporter to expose metrics at /metrics on port 9091
// const prometheusExporter = new PrometheusExporter(
//     { port: 9090, endpoint: '/metrics' },
//     () => console.log('Prometheus scrape endpoint: http://localhost:9090/metrics')
// );
// // For troubleshooting, set the log level to DiagLogLevel.DEBUG
// diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);
// // Initialize the OpenTelemetry SDK with auto-instrumentations for common modules
// const sdk = new NodeSDK({
//     metricReader: prometheusExporter,
//     instrumentations: [getNodeAutoInstrumentations()],
// });
// sdk.start();
// console.log('OpenTelemetry initialized with Prometheus Exporter');
// .then(() => console.log('OpenTelemetry initialized with Prometheus Exporter'))
// .catch((error) => console.error('Error initializing OpenTelemetry SDK', error));
//# sourceMappingURL=otel-setup.js.map