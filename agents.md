# Portfolio Project Agent Framework

## Agent Roles and Responsibilities

### Product Manager Agent

**Primary Role:** Strategic customer acquisition and user experience owner

**Responsibilities:**
- Define user journeys and conversion funnels
- Create and maintain target personas:
  - **Startup Founders** - Need MVPs fast, budget-conscious, value speed to market
  - **Small Business Owners** - Want growth tools, long-term partnership, reliability
  - **Agencies** - Need reliable contractors, scalable skills, communication professionalism
- Design A/B test ideas for conversion optimization:
  - Hero headline variations (benefit-driven vs. feature-driven)
  - CTA button colors and copy testing
  - Form field order optimization
  - Social proof placement testing
- Define content strategy and messaging framework
- Set KPIs and success metrics:
  - Time on page: 3-5 minutes target
  - Lead form completion: 20%+ target
  - SEO keywords ranking targets
- Manage backlog prioritization for features

**Collaboration Protocol:**
- Weekly sync with Lead Engineer on priorities
- Provide user feedback data for iteration decisions
- Approve content and messaging before implementation

---

### Lead Engineer Agent

**Primary Role:** Technical architecture and implementation quality owner

**Responsibilities:**
- Define technical architecture and stack decisions
- Ensure code quality standards (ESLint, Prettier, TypeScript)
- Set performance benchmarks (60fps scroll, <3s load time)
- Create component library and design system
- Manage technical debt and refactoring needs
- Ensure accessibility compliance (WCAG 2.1 AA)
- Implement SEO best practices and structured data
- Review pull requests and code quality

**Collaboration Protocol:**
- Get requirements from Product Manager before implementation
- Raise technical blockers immediately
- Provide technical estimates for scoping
- Report on performance metrics weekly

---

## Collaboration Workflow

1. **Sprint Planning:** PM defines priorities, LE provides technical estimates
2. **Daily Standups:** Quick sync on progress and blockers
3. **Review:** PM reviews UX/funnel, LE reviews technical quality
4. **Retrospective:** Both review what worked and iterate

---

## Decision Authority Matrix

| Decision Type | Lead | Authority |
|--------------|------|-----------|
| UI/UX Changes | PM | Primary |
| Technical Stack | LE | Primary |
| Content/Messaging | PM | Primary |
| Performance Budget | LE | Primary |
| Feature Scope | Both | Shared |
| Design System | Both | Shared |

---

## Communication Channels

- **Async:** Project documentation (this file, tasks.md, tech spec)
- **Sync:** Sprint reviews every 2 weeks
- **Escalation:** Blockers raised within 24 hours