import type { AboutConfig } from '@terminal-bird/theme';

export const aboutConfig: AboutConfig = {
  sections: {
    hero: '100%',
    coreServices: '100%',
    expertise: '100%',
    principles: '100%',
    certifications: '100%',
    cta: '100%',
  },
  metadata: {
    description:
      'Karan Popat is a Lead Software Engineer and Tech Architect based in Berlin with 12+ years of experience in Go microservices, PHP e-commerce platforms, and production-grade AI workflows.',
  },
  hero: {
    title: 'Who is Karan Popat?',
    subtitle:
      'I am a Lead Software Engineer and Technology Architect based in Berlin, Germany, with over 12 years of experience building and scaling Tier-1 e-commerce backends. At Accenture I lead a team of 8+ engineers, own the architecture of Go microservices and event-driven systems, and champion engineering practices that ship reliable software at pace.\n\nOver the past year I have moved beyond traditional backend work into production AI — building agentic workflows with n8n, CrewAI, Claude Code, Amazon Q, and Gemini CLI that eliminate manual toil and accelerate delivery cycles. I write about what I build on my blog and believe that the next step-change in engineering productivity comes from engineers who can bridge deep system design with practical AI integration.',
  },
  coreServices: {
    title: 'Core Services',
    description: 'What I bring to the table',
    services: [
      {
        title: 'Backend Architecture & Microservices',
        value: 'Go · PHP · Kafka · Kubernetes',
        description:
          'End-to-end design and delivery of high-availability, event-driven microservice platforms — from domain modelling and API design through to production observability on AWS/EKS.',
        href: '#',
      },
      {
        title: 'AI Workflow Engineering',
        value: 'n8n · CrewAI · Claude Code',
        description:
          'Production-grade agentic automation pipelines: multi-agent research systems, LLM-assisted code review, automated order processing, and content generation workflows that save 70+ hours of manual work per week.',
        href: '#',
      },
      {
        title: 'E-commerce Platform Engineering',
        value: 'Spryker · Magento · Adobe Commerce',
        description:
          'Architecture and engineering leadership for complex e-commerce backends — Spryker and Magento/Adobe Commerce customisation, GraphQL API layers, and performance-at-scale strategies.',
        href: '#',
      },
      {
        title: 'Engineering Leadership & Mentoring',
        value: 'Team of 8+ · TDD · CI/CD',
        description:
          'Growing high-performing engineering teams through hands-on mentoring, establishing TDD/BDD practices, driving CI/CD adoption, and shaping career paths for senior and mid-level engineers.',
        href: '#',
      },
    ],
  },
  expertise: {
    title: 'Technical Expertise',
    description: 'Technologies and tools I work with',
    skills: [
      {
        title: 'Languages',
        value: 'Go · PHP · JavaScript · TypeScript',
        description:
          'Primary: Go (microservices, CLI tooling) and PHP (Spryker, Magento/Adobe Commerce). Secondary: TypeScript/React for full-stack feature work.',
        href: '#',
      },
      {
        title: 'Data & Messaging',
        value: 'Kafka · Redis · PostgreSQL · DynamoDB',
        description:
          'Event-driven architecture with Kafka/CDC pipelines, caching strategies with Redis, and polyglot persistence across relational and NoSQL stores.',
        href: '#',
      },
      {
        title: 'Search & Discovery',
        value: 'Elasticsearch · Hybrid BM25/Semantic',
        description:
          'Large-scale product search architecture: Elasticsearch, hybrid BM25 + semantic ranking, LLM-augmented query understanding, and two-stage retrieval pipelines.',
        href: '#',
      },
      {
        title: 'Infrastructure & Cloud',
        value: 'AWS · Docker · Kubernetes (EKS) · Terraform',
        description:
          'Cloud-native delivery on AWS — containerised workloads on EKS, infrastructure-as-code with Terraform, and observability with Datadog.',
        href: '#',
      },
      {
        title: 'AI & Automation',
        value: 'n8n · CrewAI · Claude Code · Amazon Q · Gemini CLI',
        description:
          'Production agentic workflows, prompt engineering, LLM parameter configuration, and AI-assisted development practices that delivered 40% faster code delivery.',
        href: '#',
      },
      {
        title: 'API & Integration',
        value: 'GraphQL · REST · gRPC',
        description:
          'GraphQL schema design, RESTful API governance, and service mesh integration for distributed e-commerce platforms.',
        href: '#',
      },
    ],
  },
  principles: {
    title: 'Engineering Principles',
    description: 'Core values that guide my work',
    principles: [
      {
        title: 'Ownership Over Output',
        value: 'Build it. Own it. Improve it.',
        description:
          'I treat every system I touch as if it were my own — writing ADRs, tracking production incidents to root cause, and never treating launch as a finish line.',
        href: '#',
      },
      {
        title: 'Test-Driven by Default',
        value: 'TDD · BDD · CI/CD',
        description:
          'High-quality software begins before the first line of implementation code. Unit, integration, and acceptance tests are first-class citizens, not afterthoughts.',
        href: '#',
      },
      {
        title: 'AI as a Force Multiplier',
        value: 'Automate the toil. Amplify the craft.',
        description:
          'AI tools should eliminate repetitive work so engineers can focus on architecture, design, and domain understanding — not boilerplate.',
        href: '#',
      },
      {
        title: 'Raise the Bar',
        value: 'Standards compound over time.',
        description:
          'Code reviews, architectural decisions, and team rituals are all opportunities to lift the baseline. Unreasonably high standards today become the new normal tomorrow.',
        href: '#',
      },
      {
        title: 'Learn in Public',
        value: 'Write. Share. Iterate.',
        description:
          'Engineering knowledge multiplies when shared. I maintain a structured technical blog covering everything from microservice patterns to agentic AI — because teaching is the fastest way to deepen understanding.',
        href: '#',
      },
    ],
  },
  certifications: {
    title: 'Certifications & Credentials',
    description: 'Formal recognition across platforms and disciplines',
    certifications: [
      {
        title: 'Spryker',
        value: 'Certified Foundation Developer',
        description: 'Backend developer certification — 2023',
        href: '#',
      },
      {
        title: 'Adobe',
        value: 'Adobe Commerce Developer',
        description: 'Commerce backend developer certification — 2023',
        href: '#',
      },
      {
        title: 'SAP Commerce Cloud',
        value: 'Technical Essentials of SAP Commerce Cloud',
        description: 'Digital badge — 2022',
        href: '#',
      },
      {
        title: 'AWS',
        value: 'AWS Cloud Practitioner',
        description: 'AWS Cloud Quest digital badge — 2022',
        href: '#',
      },
      {
        title: 'Self-Certified',
        value: 'AI Development Practitioner',
        description: 'Practical AI engineering with Claude Code, Amazon Q, and Gemini CLI — 2024',
        href: '#',
      },
    ],
  },
  cta: {
    title: "Let's Work Together",
    description:
      "If you are building something ambitious — a high-scale backend, an AI-powered product, or a team that needs to level up — I would love to hear about it.",
    buttons: [
      { label: 'Contact Me', href: '/contact', variant: 'primary' as const },
      { label: 'View Articles', href: '/articles', variant: 'secondary' as const },
    ],
  },
} as const;