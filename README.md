# Home Energy Basics

Clear, honest guides to home batteries and heat pump incentives.

## Structure

```
/                       → Homepage (links to both sections)
/battery/               → Home battery guide
/battery/what-changed/  → What changed in 2026
/heat-pumps/            → Heat pump incentive status tool
/heat-pumps/states/ca/  → California detail page
/about/                 → Methodology and disclaimer
```

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push to GitHub
2. Import in Vercel
3. Add custom domain: homeenergybasics.com
4. Set up 301 redirects on old sites (see below)

## Setting Up Redirects (Old Sites → New)

### For old battery site (home-battery-guide.vercel.app)

Add to `vercel.json`:

```json
{
  "redirects": [
    {
      "source": "/",
      "destination": "https://homeenergybasics.com/battery/",
      "permanent": true
    },
    {
      "source": "/(.*)",
      "destination": "https://homeenergybasics.com/battery/$1",
      "permanent": true
    }
  ]
}
```

### For old heat pump site

Add to `vercel.json`:

```json
{
  "redirects": [
    {
      "source": "/",
      "destination": "https://homeenergybasics.com/heat-pumps/",
      "permanent": true
    },
    {
      "source": "/states/ca",
      "destination": "https://homeenergybasics.com/heat-pumps/states/ca",
      "permanent": true
    },
    {
      "source": "/(.*)",
      "destination": "https://homeenergybasics.com/heat-pumps/$1",
      "permanent": true
    }
  ]
}
```

## Updating Incentive Data

Edit `src/data/incentives.ts` and update:
- `lastVerified` date
- `status` if changed
- `summary` if needed

The staleness logic automatically flags data older than 30 days.

## Adding New States

1. Add state code to `StateCode` type in `incentives.ts`
2. Add data object to `incentives` record
3. Create state page at `src/app/heat-pumps/states/[code]/page.tsx`
4. Update sitemap
