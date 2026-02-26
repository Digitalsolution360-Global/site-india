# FAQ & Service Cards System Guide

This document explains how the FAQ (Frequently Asked Questions) and Service Cards systems work on the DigitalSolution 360 website. Both systems follow the same database-driven pattern with smart fallback/override logic.

---

## The Three Types of FAQs

Each FAQ belongs to a **category** (like "Digital Marketing" or "Google Business") and has a **page slug** that determines where it shows up.

### 1. Category Defaults (page_slug = *empty*)

These are the **shared/default FAQs** for a category. They appear on **all city pages** of that category unless a specific city has its own custom FAQs.

**Example:** If you add a FAQ with:
- Category: `Digital Marketing`
- Page Slug: *(leave empty)*

...it will show on **every** Digital Marketing city page (Delhi, Mumbai, Bangalore, etc.).

### 2. Market Page FAQs (page_slug = `market`)

These FAQs appear **only on the market landing pages** (the pages under `/market-we-serve/`).

**Example:** If you add a FAQ with:
- Category: `Google Business`
- Page Slug: `market`

...it will show only on the Google Business market landing page (`/market-we-serve/gmb`).

### 3. City-Specific Overrides (page_slug = *city slug*)

These are **custom FAQs for a specific city**. When a city has its own FAQs, they **replace** the category defaults for that city only. Other cities continue using the defaults.

**Example:** If you add FAQs with:
- Category: `Digital Marketing`
- Page Slug: `digital-marketing-in-mumbai`

...the Mumbai page will show **only these custom FAQs** instead of the default Digital Marketing FAQs. All other cities (Delhi, Bangalore, etc.) still see the defaults.

---

## How the Override System Works (Smart Fallback)

When a city page loads, here's what happens behind the scenes:

```
1. The page asks: "Do I have custom FAQs for this specific city?"
   → If YES → Show the city-specific FAQs
   → If NO  → Show the category default FAQs
```

This means:
- You only need to create city-specific FAQs when you **actually want a city to be different**.
- By default, all cities in a category share the same FAQs.
- You can customize **any number of cities** — even just one.

---

## Managing FAQs from the Admin Panel

### Accessing the FAQ Manager

1. Go to the Admin Panel.
2. Click **"FAQs"** in the left sidebar (under the Content section).

### Viewing FAQs

You'll see a table listing all FAQs with these columns:
- **ID** — Auto-generated unique number
- **Category Name** — Which service category this FAQ belongs to
- **Page Slug** — Where this FAQ appears (empty = default, `market` = market page, or a city slug)
- **Question** — The FAQ question
- **Sort Order** — Controls the display order (lower numbers appear first)
- **Status** — 0 = Active (visible), 1 = Inactive (hidden)

### Adding a New FAQ

1. Click the **"Add New"** button.
2. Fill in the fields:
   - **Category Name**: Use the exact category name (see list below).
   - **Page Slug**: Leave empty for category default, enter `market` for market page, or enter a city slug for city-specific.
   - **Question**: The FAQ question text.
   - **Answer**: The FAQ answer text.
   - **Sort Order**: A number to control ordering (e.g., 1, 2, 3...).
   - **Status**: Set to `0` for active, `1` for inactive.
3. Click **Save**.

---

## Category Names Reference

Use these exact category names when adding or editing FAQs:

| Category Name | City Pages | Market Page |
|---|---|---|
| `Google Business` | GMB city pages | `/market-we-serve/gmb` |
| `Digital Marketing` | Digital Marketing city pages | `/market-we-serve/marketing` |
| `Web Development` | Web Development city pages | `/market-we-serve/web` |
| `Social Media` | Social Media city pages | `/market-we-serve/social-media` |
| `Content Writing` | Content Writing city pages | `/market-we-serve/content-writing` |
| `Wordpress Development` | WordPress city pages | `/market-we-serve/wordpress` |

---

## Using {cityName} in FAQs

For **city page FAQs** (both defaults and city-specific), you can use `{cityName}` as a placeholder in questions and answers. It will automatically be replaced with the actual city name when displayed.

**Example:**
- You write: `Which is the best digital marketing company in {cityName}?`
- On the Delhi page, it shows: `Which is the best digital marketing company in Delhi?`
- On the Mumbai page, it shows: `Which is the best digital marketing company in Mumbai?`

> **Note:** The `{cityName}` placeholder only works on city pages, not on market landing pages.

---

## Common Tasks — Quick Reference

### "I want to change a FAQ that appears on all Digital Marketing city pages"
→ Find the FAQ with Category = `Digital Marketing` and Page Slug = *(empty)*. Edit it. The change applies to all cities.

### "I want one city to have completely different FAQs"
→ Add new FAQs with the **same category** but set the Page Slug to that city's URL slug (e.g., `seo-in-jaipur`). The city will now use these instead of the defaults.

### "I want to temporarily hide a FAQ"
→ Edit the FAQ and change Status from `0` to `1`. It becomes invisible on the website but stays in the database for later use.

### "I want to change the order of FAQs"
→ Edit the Sort Order numbers. FAQs with lower numbers appear first. For example, set them to 1, 2, 3, 4, 5, 6 in the order you want.

### "I want to add FAQs for the market overview pages"
→ Add FAQs with the correct Category Name and set Page Slug to `market`.

### "I want to remove the city-specific override and go back to defaults"
→ Delete all FAQs that have that city's slug as the Page Slug. The city will automatically fall back to the category defaults.

---

## Summary

| What you want | Category Name | Page Slug |
|---|---|---|
| Default FAQs for all cities in a category | e.g., `Digital Marketing` | *(leave empty)* |
| FAQs for a market landing page | e.g., `Digital Marketing` | `market` |
| Custom FAQs for one specific city | e.g., `Digital Marketing` | e.g., `digital-marketing-in-delhi` |

The system is flexible — you can manage everything from the Admin Panel without touching any code.

---
---

# Service Cards System

Service Cards work the same way as FAQs — stored in the database with the same override pattern.

---

## How Service Cards Work

Each service card belongs to a **category** (like "Digital Marketing" or "Google Business") and has a **page slug** that determines where it shows up. Service cards appear on **city pages** showing the list of services offered in that city.

### 1. Category Defaults (page_slug = *empty*)

These are the **shared/default service cards** for a category. They appear on **all city pages** of that category unless a specific city has its own custom cards.

### 2. City-Specific Overrides (page_slug = *city slug*)

These are **custom service cards for a specific city**. When a city has its own cards, they **replace** the category defaults for that city only.

> **Note:** Service cards currently only display on city pages. Unlike FAQs, there is no `market` page_slug type.

---

## Managing Service Cards from the Admin Panel

### Accessing the Service Cards Manager

1. Go to the Admin Panel.
2. Click **"Service Cards"** in the left sidebar (under the Content section).

### Viewing Service Cards

You'll see a table listing all service cards with these columns:
- **ID** — Auto-generated unique number
- **Category Name** — Which service category this card belongs to
- **Page Slug** — Where this card appears (empty = default, or a city slug for city-specific)
- **Title** — The service card title
- **Sort Order** — Controls the display order (lower numbers appear first)
- **Status** — 0 = Active (visible), 1 = Inactive (hidden)

### Adding a New Service Card

1. Click the **"Add New"** button.
2. Fill in the fields:
   - **Category Name**: Use the exact category name (same as the FAQ categories listed above).
   - **Page Slug**: Leave empty for category default, or enter a city slug for city-specific.
   - **Title**: The service card title.
   - **Description**: The service card description text.
   - **Sort Order**: A number to control ordering (e.g., 1, 2, 3...).
   - **Status**: Set to `0` for active, `1` for inactive.
3. Click **Save**.

---

## Service Cards — Quick Reference

### "I want to change a service card for all Web Development city pages"
→ Find the card with Category = `Web Development` and Page Slug = *(empty)*. Edit it.

### "I want one city to show different service cards"
→ Add new cards with the **same category** but set the Page Slug to that city's URL slug. The city will use these instead of the defaults.

### "I want to add a new service to a category"
→ Add a new card with the Category Name and leave Page Slug empty. It will appear on all city pages for that category.

### "I want to hide a service card temporarily"
→ Edit the card and change Status from `0` to `1`.

---

## Service Cards Summary

| What you want | Category Name | Page Slug |
|---|---|---|
| Default cards for all cities in a category | e.g., `Digital Marketing` | *(leave empty)* |
| Custom cards for one specific city | e.g., `Digital Marketing` | e.g., `digital-marketing-in-delhi` |

---

## Technical Reference

### Database Tables

| Table | Purpose |
|---|---|
| `faqs` | FAQ questions and answers |
| `service_cards` | Service card titles and descriptions |

### API Endpoints

| Endpoint | Purpose |
|---|---|
| `GET /api/faqs?category=X&page_slug=Y` | Fetch FAQs with smart fallback |
| `GET /api/service-cards?category=X&page_slug=Y` | Fetch service cards with smart fallback |

Both endpoints use the same fallback logic: try the specific page_slug first, fall back to NULL (category defaults) if no results found.
