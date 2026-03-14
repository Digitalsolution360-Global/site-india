# Admin Bulk Upload Guide (States, Cities, Metro Cities)

Simple guide to upload data at once

## What this feature does

You can upload many records at once in:
- States
- Cities
- Metro Cities

The upload supports:
- CSV
- XLSX / XLS

## Where to find it

1. Login to Admin.
2. Open one of these tables:
   - States
   - Cities
   - Metro Cities
3. Click the **Bulk Upload** button (top-right).

## Safe workflow (recommended)

Always follow this order:
1. Click **Download Template**.
2. Fill your data in that template only.
3. Save as CSV or XLSX.
4. In Bulk Upload modal:
   - Choose **Mode = Upsert**.
   - Choose **Run Type = Dry Run (validation only)**.
5. Click **Validate File**.
6. If there are no errors, change Run Type to **Final Upload**.
7. Click **Run Bulk Upload**.

## Upload modes

- **Upsert** (recommended):
  - Inserts new rows.
  - Updates existing rows if same unique key is found.
- **Insert only**:
  - Inserts new rows only.
  - Fails duplicate rows.

## Unique keys used by system

- States: `slug`
- Cities: `city_slug + category_name`
- Metro Cities: `metrocity_slug + category_name`

## Required columns per table

Use exact header names from template.

### States
Required:
- `name`
- `slug`

Optional:
- `image`
- `descritpion`
- `meta_title`
- `meta_description`
- `meta_keywords`
- `navbar_status` (1/0)
- `status` (1/0)

### Cities
Required:
- `state_slug` (must exist in States table)
- `city`
- `category_name`
- `city_name`
- `city_slug`

Optional:
- `city_description`
- `image`
- `yt_iframe_link`
- `meta_title`
- `meta_description`
- `meta_keyword`
- `status` (1/0)

### Metro Cities
Required:
- `city_slug` (must exist in Cities table)
- `metrocity`
- `category_name`
- `metrocity_name`
- `metrocity_slug`

Optional:
- `metrocity_description`
- `image`
- `yt_iframe_link`
- `meta_title`
- `meta_description`
- `meta_keyword`
- `status` (1/0)

## Common errors and fixes

### Error: invalid state_slug
- The `state_slug` in Cities file is not present in States table.
- Fix by creating/uploading state first.

### Error: invalid city_slug
- The `city_slug` in Metro Cities file is not present in Cities table.
- Fix by creating/uploading city first.

### Error: already exists
- Happens in Insert mode when duplicate key exists.
- Use Upsert mode if you want update behavior.

### Many failed rows
- Run Dry Run first and fix rows shown in result panel.
- Re-upload only corrected file.

## Data quality tips

- Do not rename template headers.
- Keep slugs lowercase and hyphen-separated.
- Keep one row per entity.
- Avoid blank required fields.
- Keep category names consistent.

## Suggested upload order

If you are uploading all three tables together:
1. States
2. Cities
3. Metro Cities

## File limits

- Maximum size: 8 MB
- Maximum rows per upload: 2000

## Support checklist before final upload

Before clicking Final Upload, confirm:
- Dry Run has 0 failed rows (or expected failures only).
- You selected the correct table.
- You selected the correct file.
- Mode is correct (Upsert vs Insert).
