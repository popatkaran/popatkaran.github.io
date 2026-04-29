---
title: 'schema-drift'
slug: 'schema-drift'
description: 'Database schema drift detector that compares live schema against migration history and raises CI alerts'
excerpt: 'Catch schema drift before it reaches production. Compares your live database schema against your migration history and fails CI when they diverge.'
category: 'developer-tooling'
status: 'stable'
license: 'MIT'
lastCommit: '2 weeks ago'
tags: ['database', 'migrations', 'ci-cd', 'schema', 'developer-tooling', 'postgresql']
stats:
  stars: 612
  forks: 74
  contributors: 9
  version: 'v2.3.0'
  buildStatus: 'passing'
  coverage: 94
links:
  github: 'https://github.com/example/schema-drift'
  docs: 'https://schema-drift.dev'
featured: false
seo:
  metaTitle: 'schema-drift - Database Schema Drift Detection for CI'
  metaDescription: 'Detect database schema drift in CI pipelines. Compares live schema against migration history for PostgreSQL, MySQL, and SQLite.'
  keywords: ['schema drift', 'database migrations', 'ci cd', 'postgresql', 'developer tooling']
  canonicalUrl: '/projects/schema-drift'
  ogImage: '/images/projects/schema-drift-og.jpg'
---

## Overview

schema-drift compares your live database schema against the expected state derived from your migration history. When they diverge — due to manual changes, failed rollbacks, or environment inconsistencies — it fails the CI pipeline and reports exactly what changed.

## Quick Start

```bash
npx schema-drift check \
  --db postgres://user:pass@localhost/mydb \
  --migrations ./migrations
```

## Features

- Supports PostgreSQL, MySQL, and SQLite
- Detects added, removed, and modified columns, indexes, and constraints
- GitHub Actions and GitLab CI integration
- JSON and Markdown diff reports
- Configurable ignore patterns for non-critical drift
