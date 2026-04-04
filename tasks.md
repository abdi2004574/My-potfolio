# Tasks: Abdur Rehman Portfolio Website

## Project Phases

---

## Phase 1: Project Setup (Week 1)

### Tasks

| ID | Task | Priority | Status | Dependencies |
|----|------|----------|--------|--------------|
| 1.1 | Initialize Next.js 15 project with TypeScript | High | - | - |
| 1.2 | Configure Tailwind CSS with custom design tokens | High | 1.1 | - |
| 1.3 | Set up ESLint and Prettier for code quality | Medium | 1.1 | - |
| 1.4 | Create global CSS with CSS variables and dark mode | Medium | 1.1 | - |
| 1.5 | Configure next.config.ts for optimization | Medium | 1.1 | - |
| 1.6 | Set up project folder structure | Medium | 1.1 | - |

**Timeline:** 2-3 days

---

## Phase 2: UI Component Library (Week 1-2)

### Tasks

| ID | Task | Priority | Status | Dependencies |
|----|------|----------|--------|--------------|
| 2.1 | Create Button component with variants | High | 1.1 | - |
| 2.2 | Create Card component with glassmorphism | High | 1.2 | - |
| 2.3 | Create Input component with validation states | High | 1.1 | - |
| 2.4 | Create ProgressBar component | Medium | 1.1 | - |
| 2.5 | Create Modal component | Medium | 2.2 | - |
| 2.6 | Create ScrollReveal component wrapper | High | 1.1 | - |
| 2.7 | Set up utility functions (cn, truncate) | Medium | 1.1 | - |

**Timeline:** 2-3 days

---

## Phase 3: Navigation & Layout (Week 2)

### Tasks

| ID | Task | Priority | Status | Dependencies |
|----|------|----------|--------|--------------|
| 3.1 | Create Navigation component with sticky header | High | 2.1 | - |
| 3.2 | Implement mobile hamburger menu | High | 3.1 | - |
| 3.3 | Create Footer component with social links | Medium | 1.1 | - |
| 3.4 | Implement newsletter signup form in footer | Medium | 2.3 | - |
| 3.5 | Set up root layout with SEO metadata | High | 1.1 | - |
| 3.6 | Add smooth scroll functionality (Lenis) | High | 1.1 | - |

**Timeline:** 2 days

---

## Phase 4: Hero Section (Week 2)

### Tasks

| ID | Task | Priority | Status | Dependencies |
|----|------|----------|--------|--------------|
| 4.1 | Create Hero component structure | High | 3.1 | - |
| 4.2 | Implement sticky scroll reveal animation | High | 2.6 | - |
| 4.3 | Add parallax background elements | Medium | 4.1 | - |
| 4.4 | Create gradient mesh background | Medium | 4.1 | - |
| 4.5 | Add CTA button with smooth scroll | High | 2.1 | - |
| 4.6 | Test scroll performance (60fps target) | High | 4.2 | - |

**Timeline:** 2-3 days

---

## Phase 5: Stats Marquee (Week 2-3)

### Tasks

| ID | Task | Priority | Status | Dependencies |
|----|------|----------|--------|--------------|
| 5.1 | Create StatsMarquee component | High | 4.1 | - |
| 5.2 | Implement infinite loop animation | High | 5.1 | - |
| 5.3 | Add Lucide icons for each stat | Medium | 1.1 | - |
| 5.4 | Implement pause on hover | Medium | 5.2 | - |
| 5.5 | Ensure accessibility (prefers-reduced-motion) | High | 5.2 | - |

**Timeline:** 1-2 days

---

## Phase 6: Services Grid (Week 3)

### Tasks

| ID | Task | Priority | Status | Dependencies |
|----|------|----------|--------|--------------|
| 6.1 | Create ServicesGrid component | High | 2.2 | - |
| 6.2 | Implement glassmorphism cards | High | 6.1 | - |
| 6.3 | Add hover effects (lift, glow) | Medium | 6.1 | - |
| 6.4 | Create services data with icons | Medium | 1.1 | - |
| 6.5 | Add "Learn More" links/modals | Medium | 2.5 | - |
| 6.6 | Responsive grid layout (1/2/4 cols) | High | 6.1 | - |

**Timeline:** 2 days

---

## Phase 7: Project Showcase (Week 3-4)

### Tasks

| ID | Task | Priority | Status | Dependencies |
|----|------|----------|--------|--------------|
| 7.1 | Create ProjectShowcase component | High | 6.1 | - |
| 7.2 | Implement sticky stack layout | High | 7.1 | - |
| 7.3 | Add project data (Pillpack, Manzil, Lakhani) | Medium | 1.1 | - |
| 7.4 | Create image optimization with Next.js Image | High | 7.1 | - |
| 7.5 | Add project transitions and animations | Medium | 7.1 | - |
| 7.6 | Add live/demo links | Medium | 7.1 | - |

**Timeline:** 3-4 days

---

## Phase 8: Lead Magnet Form (Week 4)

### Tasks

| ID | Task | Priority | Status | Dependencies |
|----|------|----------|--------|--------------|
| 8.1 | Create LeadMagnet (Project Planner) component | High | 2.3 | - |
| 8.2 | Implement multi-step wizard (5 steps) | High | 8.1 | - |
| 8.3 | Add step 1: Project Type selection | High | 8.1 | - |
| 8.4 | Add step 2: Budget Range selection | High | 8.3 | - |
| 8.5 | Add step 3: Timeline selection | High | 8.4 | - |
| 8.6 | Add step 4: Contact Details form | High | 8.5 | - |
| 8.7 | Add step 5: Success state with download | High | 8.6 | - |
| 8.8 | Implement form validation (Zod + React Hook Form) | High | 8.1 | - |
| 8.9 | Integrate Formspree for submission | High | 8.8 | - |
| 8.10 | Add progress bar component | High | 8.1 | - |

**Timeline:** 4-5 days

---

## Phase 9: API Routes (Week 4)

### Tasks

| ID | Task | Priority | Status | Dependencies |
|----|------|----------|--------|--------------|
| 9.1 | Create /api/newsletter endpoint | Medium | 3.4 | - |
| 9.2 | Validate email input (Zod) | Medium | 9.1 | - |
| 9.3 | Add error handling and responses | Medium | 9.1 | - |

**Timeline:** 1 day

---

## Phase 10: SEO & Analytics (Week 5)

### Tasks

| ID | Task | Priority | Status | Dependencies |
|----|------|----------|--------|--------------|
| 10.1 | Add meta tags to layout | High | 3.5 | - |
| 10.2 | Create JSON-LD structured data | High | 10.1 | - |
| 10.3 | Configure Open Graph tags | High | 10.1 | - |
| 10.4 | Generate sitemap.xml | Medium | 10.1 | - |
| 10.5 | Add robots.txt | Medium | 10.4 | - |
| 10.6 | Integrate Google Analytics | Medium | 1.1 | - |

**Timeline:** 1-2 days

---

## Phase 11: Accessibility & Performance (Week 5)

### Tasks

| ID | Task | Priority | Status | Dependencies |
|----|------|----------|--------|--------------|
| 11.1 | WCAG 2.1 AA compliance check | High | All sections | - |
| 11.2 | Add ARIA labels where needed | High | 11.1 | - |
| 11.3 | Implement prefers-reduced-motion | High | 5.5 | - |
| 11.4 | Lighthouse performance audit | High | All sections | - |
| 11.5 | Fix any accessibility issues | High | 11.1 | - |
| 11.6 | Optimize images (WebP, lazy loading) | High | 7.4 | - |

**Timeline:** 2 days

---

## Phase 12: Testing & Cross-Browser (Week 5-6)

### Tasks

| ID | Task | Priority | Status | Dependencies |
|----|------|----------|--------|--------------|
| 12.1 | Test on Chrome | High | 11.4 | - |
| 12.2 | Test on Firefox | High | 12.1 | - |
| 12.3 | Test on Safari | High | 12.2 | - |
| 12.4 | Test on mobile devices | High | 12.1 | - |
| 12.5 | Test on tablet devices | High | 12.4 | - |
| 12.6 | Fix cross-browser issues | High | 12.3 | - |

**Timeline:** 2 days

---

## Phase 13: Content & Final Polish (Week 6)

### Tasks

| ID | Task | Priority | Status | Dependencies |
|----|------|----------|--------|--------------|
| 13.1 | Populate real content for Abdur Rehman | High | 1.1 | - |
| 13.2 | Add professional copy for all sections | High | 13.1 | - |
| 13.3 | Create downloadable resource (eBook) | Medium | 8.10 | - |
| 13.4 | Review all text for typos | Medium | 13.2 | - |
| 13.5 | Final visual polish and animations | Medium | All sections | - |

**Timeline:** 2 days

---

## Phase 14: Production Deployment (Week 6-7)

### Tasks

| ID | Task | Priority | Status | Dependencies |
|----|------|----------|--------|--------------|
| 14.1 | Run production build | High | All phases | - |
| 14.2 | Fix any build errors | High | 14.1 | - |
| 14.3 | Deploy to Vercel/Netlify | High | 14.2 | - |
| 14.4 | Configure environment variables | High | 14.3 | - |
| 14.5 | Run final accessibility audit | High | 14.3 | - |
| 14.6 | Verify all forms working | High | 14.3 | - |

**Timeline:** 1-2 days

---

## Summary

| Phase | Duration | Focus |
|-------|----------|-------|
| Phase 1 | 2-3 days | Project Setup |
| Phase 2 | 2-3 days | UI Components |
| Phase 3 | 2 days | Navigation & Layout |
| Phase 4 | 2-3 days | Hero Section |
| Phase 5 | 1-2 days | Stats Marquee |
| Phase 6 | 2 days | Services Grid |
| Phase 7 | 3-4 days | Project Showcase |
| Phase 8 | 4-5 days | Lead Magnet Form |
| Phase 9 | 1 day | API Routes |
| Phase 10 | 1-2 days | SEO & Analytics |
| Phase 11 | 2 days | Accessibility & Performance |
| Phase 12 | 2 days | Testing |
| Phase 13 | 2 days | Content & Polish |
| Phase 14 | 1-2 days | Deployment |

**Total Estimated Timeline:** 6-7 weeks

---

## Notes

- Tasks can be parallelized where dependencies allow
- PM to provide content and copy for all text sections
- LE to ensure 60fps scroll performance throughout
- Weekly sync meetings to track progress
- Adjust timeline based on resource availability