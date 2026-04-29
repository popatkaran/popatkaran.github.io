---
title: 'service-mesh-viz'
slug: 'service-mesh-viz'
description: 'Real-time service dependency graph visualiser for Kubernetes-based microservice architectures'
excerpt: 'Live topology map of your microservice mesh. Pulls from Prometheus, Jaeger, and Kubernetes API to render dependency graphs, latency heatmaps, and error rate overlays.'
category: 'observability'
status: 'stable'
license: 'Apache 2.0'
lastCommit: '1 week ago'
tags: ['kubernetes', 'observability', 'microservices', 'prometheus', 'jaeger', 'service-mesh']
stats:
  stars: 1543
  forks: 187
  contributors: 22
  version: 'v3.0.1'
  buildStatus: 'passing'
  coverage: 81
links:
  github: 'https://github.com/example/service-mesh-viz'
  docs: 'https://service-mesh-viz.io/docs'
  demo: 'https://demo.service-mesh-viz.io'
featured: false
seo:
  metaTitle: 'service-mesh-viz - Real-Time Microservice Topology Visualiser'
  metaDescription: 'Live dependency graph and latency heatmap for Kubernetes microservice architectures. Integrates with Prometheus and Jaeger.'
  keywords: ['service mesh', 'kubernetes', 'microservices', 'observability', 'prometheus', 'jaeger']
  canonicalUrl: '/projects/service-mesh-viz'
  ogImage: '/images/projects/service-mesh-viz-og.jpg'
---

## Overview

service-mesh-viz renders a live topology map of your microservice architecture by pulling data from Prometheus metrics, Jaeger traces, and the Kubernetes API. It surfaces latency hotspots, error rate spikes, and dependency cycles in real time.

## Quick Start

```bash
helm repo add smviz https://charts.service-mesh-viz.io
helm install smviz smviz/service-mesh-viz \
  --set prometheus.url=http://prometheus:9090 \
  --set jaeger.url=http://jaeger:16686
```

## Features

- Live dependency graph with configurable refresh interval
- Latency heatmap overlay per service and endpoint
- Error rate badges with threshold alerting
- Cycle detection in service dependency graphs
- Export topology snapshots as SVG or JSON
