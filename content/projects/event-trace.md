---
title: 'event-trace'
slug: 'event-trace'
description: 'Distributed event tracing library for event-driven architectures with automatic correlation ID propagation'
excerpt: 'End-to-end tracing for event-driven systems. Automatically propagates correlation IDs across Kafka, RabbitMQ, and HTTP boundaries with OpenTelemetry-compatible output.'
category: 'observability'
status: 'active'
license: 'Apache 2.0'
lastCommit: '4 days ago'
tags: ['observability', 'tracing', 'event-driven', 'kafka', 'opentelemetry', 'distributed-systems']
stats:
  stars: 934
  forks: 108
  contributors: 14
  version: 'v1.5.2'
  buildStatus: 'passing'
  coverage: 90
links:
  github: 'https://github.com/example/event-trace'
  docs: 'https://event-trace.io/docs'
featured: false
seo:
  metaTitle: 'event-trace - Distributed Tracing for Event-Driven Architectures'
  metaDescription: 'Automatic correlation ID propagation across Kafka, RabbitMQ, and HTTP. OpenTelemetry-compatible distributed tracing for event-driven systems.'
  keywords: ['distributed tracing', 'event driven', 'kafka', 'opentelemetry', 'correlation id', 'observability']
  canonicalUrl: '/projects/event-trace'
  ogImage: '/images/projects/event-trace-og.jpg'
---

## Overview

event-trace provides automatic correlation ID propagation across message broker and HTTP boundaries. It instruments Kafka consumers and producers, RabbitMQ channels, and HTTP clients without requiring manual trace context management.

## Quick Start

```go
import "github.com/example/event-trace"

// Wrap your Kafka consumer
consumer := eventtrace.WrapConsumer(kafkaConsumer,
  eventtrace.WithOTLP("http://otel-collector:4317"),
)
```

## Features

- Zero-config correlation ID propagation for Kafka and RabbitMQ
- OpenTelemetry OTLP export
- HTTP middleware for Express, Gin, and Echo
- Baggage propagation across async boundaries
- Sampling rate configuration per topic or queue
