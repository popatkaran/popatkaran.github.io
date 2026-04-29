---
title: 'policy-gate'
slug: 'policy-gate'
description: 'Policy-as-code enforcement layer for microservice APIs using OPA and declarative YAML rules'
excerpt: 'Enforce access control, rate limits, and data governance policies across microservices without touching application code. Declarative YAML rules evaluated by Open Policy Agent.'
category: 'security'
status: 'beta'
license: 'MIT'
lastCommit: '6 days ago'
tags: ['security', 'opa', 'policy-as-code', 'microservices', 'access-control', 'api-gateway']
stats:
  stars: 421
  forks: 51
  contributors: 7
  version: 'v0.8.0'
  buildStatus: 'passing'
  coverage: 83
links:
  github: 'https://github.com/example/policy-gate'
  docs: 'https://policy-gate.dev/docs'
featured: false
seo:
  metaTitle: 'policy-gate - Policy-as-Code for Microservice APIs'
  metaDescription: 'Enforce access control and data governance across microservices with declarative YAML policies evaluated by Open Policy Agent.'
  keywords: ['policy as code', 'opa', 'open policy agent', 'microservices', 'access control', 'api security']
  canonicalUrl: '/projects/policy-gate'
  ogImage: '/images/projects/policy-gate-og.jpg'
---

## Overview

policy-gate is a sidecar-compatible policy enforcement layer that evaluates declarative YAML rules using Open Policy Agent. It intercepts API requests at the gateway or sidecar level, enforcing access control, rate limits, and data governance without modifying application code.

## Quick Start

```yaml
# policies/api-access.yaml
rules:
  - path: /api/admin/*
    require:
      role: admin
      mfa: true
  - path: /api/users/*
    rateLimit:
      requests: 100
      window: 60s
```

## Features

- Declarative YAML policy definitions compiled to Rego
- Sidecar and API gateway deployment modes
- Role-based and attribute-based access control
- Rate limiting and quota enforcement
- Audit log with policy decision context
- Hot-reload policies without restart
