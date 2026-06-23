# Suvradeb Sengupta — Portfolio

Personal portfolio site for **Suvradeb Sengupta**, Software Engineer based in Dublin, Ireland.

## Features

- Dark theme with live hero background, particles, sparkles, and film grain
- Profile, experience (Q-Park, Cognizant), projects, education, certifications
- Downloadable resume and LinkedIn contact links

## Customize

| What | Where |
|------|-------|
| Contact & links | `src/config/site.ts` |
| Resume PDF | `public/resume.pdf` |
| Profile photo | `public/image.png` |
| Project GitHub URLs | `PROJECT_GITHUB` in `src/config/site.ts` |

## Run locally

```sh
npm i
npm run dev
```

## Build

```sh
npm run build
```

## Deploy

Configured for Netlify via `netlify.toml`.
