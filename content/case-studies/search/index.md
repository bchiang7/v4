---
slug: '/case-studies/search'
title: 'Provider Search'
description: 'Next generation provider search platform used to assign Primary Care Physicians, and search/filter providers by location, gender, plan, program and much more.'
company: 'Florida Blue'
role: 'Lead UX Designer'
timeline: 'December 2018'
cover: '../../featured/Search/search2x.jpg'
metrics:
  - value: '4'
    label: 'business entities served from a single multi-tenant search platform'
    gradient: 'linear-gradient(160deg, rgba(87, 203, 255, 0.1) 0%, rgba(87, 203, 255, 0.05) 100%)'
    borderColor: 'rgba(87, 203, 255, 0.3)'
    textColor: '#57cbff'
  - value: '3'
    label: 'major feature upgrades shipped based directly on user feedback'
    gradient: 'linear-gradient(160deg, rgba(100, 255, 218, 0.1) 0%, rgba(100, 255, 218, 0.05) 100%)'
    borderColor: 'rgba(100, 255, 218, 0.3)'
    textColor: '#64ffda'
  - value: '2 yrs'
    label: 'of iteration to bring advanced search concepts to life, from fuzzy search to map integration'
    gradient: 'linear-gradient(160deg, rgba(245, 125, 255, 0.1) 0%, rgba(245, 125, 255, 0.05) 100%)'
    borderColor: 'rgba(245, 125, 255, 0.3)'
    textColor: '#f57dff'
nextProject:
  title: 'Customer Portal'
  url: '/case-studies/portal'
---

## Discovery

My team regularly reviews advocates taking live calls with members. On several calls, members were trying to find a new PCP and weren't able to find them on the external Florida Blue website. We watched the internal advocate try to help — and ultimately resort to **Google** to find the information. On a more personal note: I had recently become a full-time employee and went through the same frustrating process myself.

The existing OPD Directory required a user to select a plan and **5 additional drop-downs** before a single result could appear. For this redesign to succeed, we needed to influence external teams to revamp the backend architecture entirely.

I partnered with the Customer Experience team to develop prototypes that became the **catalyst for change** across the enterprise. Since internal advocate needs mirrored external user needs, we started with side-by-side evaluations and extensive **competitive analysis**.

## Research

What we needed was a **"fuzzy search"** — instant feedback from the backend as you type, from a single input field. Within the Contact domain, we rewrote the search database using **Redis Search**, which cached results to deliver both performance and optimal user experience.

Over two years, we brought advanced concepts to life — searching by condition, provider specialty, facility name, or NPI number, all from one field. Additional problems solved:

- **Out-of-network search** — search without a plan selected, for members whose physician had moved networks
- **Accepting new patients** — aligned data between source systems that previously had no reliable indicator
- **Google Maps integration** — gave advocates and members spatial context that text lists alone couldn't provide

## Testing & Prototyping

On top of the core search experience, we integrated additional features to stay in sync with the enterprise Find Care journey. A **fuzzy autocomplete** surfaces conditions, specialties, and individual provider names in real time as you type — dramatically reducing the time needed to start a meaningful search.

We also built an **Amazon-esque faceted filtering system** allowing users to progressively narrow results — by specialty, network status, language, and more — until they find exactly the right provider. Users can even email the filtered results directly to the member.

The entire CustomerConnect platform is a **multi-tenant application** serving Florida Blue, Florida Blue Medicare, Truli for Health, and FHCP from a single codebase. Delivering three major feature upgrades based directly on user feedback — and building a search experience from the ground up that serves four separate entities — is a testament to what a lean, agile team can accomplish when users are at the center of every decision.
