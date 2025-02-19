"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_node_1 = require("@opentelemetry/sdk-node");
const auto_instrumentations_node_1 = require("@opentelemetry/auto-instrumentations-node");
const exporter_prometheus_1 = require("@opentelemetry/exporter-prometheus");
const api_1 = require("@opentelemetry/api");
// Set up the Prometheus exporter to expose metrics at /metrics on port 9091
const prometheusExporter = new exporter_prometheus_1.PrometheusExporter({ port: 9090, endpoint: '/metrics' }, () => console.log('Prometheus scrape endpoint: http://localhost:9090/metrics'));
// For troubleshooting, set the log level to DiagLogLevel.DEBUG
api_1.diag.setLogger(new api_1.DiagConsoleLogger(), api_1.DiagLogLevel.INFO);
// Initialize the OpenTelemetry SDK with auto-instrumentations for common modules
const sdk = new sdk_node_1.NodeSDK({
    metricReader: prometheusExporter,
    instrumentations: [(0, auto_instrumentations_node_1.getNodeAutoInstrumentations)()],
});
sdk.start();
console.log('OpenTelemetry initialized with Prometheus Exporter');
// .then(() => console.log('OpenTelemetry initialized with Prometheus Exporter'))
// .catch((error) => console.error('Error initializing OpenTelemetry SDK', error));
//# sourceMappingURL=otel-setup.js.map