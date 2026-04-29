---
title: 'arch-lens'
slug: 'arch-lens'
description: 'Static analysis tool that generates Architecture Decision Records from code diffs and PR descriptions'
excerpt: 'Automatically extract and generate ADRs from pull requests, code diffs, and commit messages. Integrates with GitHub Actions and outputs structured Markdown or JSON.'
category: 'developer-tooling'
status: 'active'
license: 'MIT'
lastCommit: '3 days ago'
tags: ['architecture', 'adr', 'static-analysis', 'github-actions', 'developer-tooling']
stats:
  stars: 847
  forks: 92
  contributors: 11
  version: 'v1.2.0'
  buildStatus: 'passing'
  coverage: 88
links:
  github: 'https://github.com/example/arch-lens'
  docs: 'https://arch-lens.dev/docs'
featured: true
seo:
  metaTitle: 'arch-lens - Automatic ADR Generation from Code Diffs'
  metaDescription: 'Static analysis tool that generates Architecture Decision Records from pull requests and code diffs. GitHub Actions integration included.'
  keywords: ['adr', 'architecture decision records', 'static analysis', 'github actions', 'developer tooling']
  canonicalUrl: '/projects/arch-lens'
  ogImage: '/images/projects/arch-lens-og.jpg'
---

## Overview

arch-lens analyses pull requests, commit messages, and code diffs to automatically surface and draft Architecture Decision Records. It reduces the gap between what teams build and what they document.

## Quick Start

```yaml
# .github/workflows/adr.yml
- uses: example/arch-lens@v1
  with:
    output: docs/adr
    format: markdown
```

## Features

- Extracts architectural signals from PR descriptions and diffs
- Generates structured ADR drafts in Markdown or JSON
- GitHub Actions and GitLab CI integration
- Configurable signal patterns via `.arch-lens.yml`
- Links ADRs to the commits that triggered them
