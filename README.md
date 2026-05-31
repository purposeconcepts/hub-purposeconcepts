# hub.purposeconcepts.com

The Purpose Concepts Resource Hub — a fast, SEO-optimized authority site built with Astro.

## Structure

```
src/
  layouts/
    Layout.astro          — Main layout (nav, footer, styles)
  pages/
    index.astro           — Homepage
    404.astro             — 404 page
    evangelism/
      index.astro         — Evangelism pillar page
    discipleship/
      index.astro         — Discipleship pillar page
    ekklesia/
      index.astro         — Ekklesia pillar page
    digital-evangelism/
      index.astro         — Digital Evangelism / O2F pillar page
public/
  robots.txt
```

## Deploy to Vercel

### Step 1 — Push to GitHub
1. Create a new repository on github.com (name it: hub-purposeconcepts)
2. Upload all these files to the repository

### Step 2 — Connect to Vercel
1. Go to vercel.com
2. Click "Add New Project"
3. Import your hub-purposeconcepts repository
4. Framework: Astro (Vercel detects this automatically)
5. Click Deploy

### Step 3 — Add Custom Domain
1. In Vercel project settings → Domains
2. Add: hub.purposeconcepts.com
3. Vercel gives you a CNAME value (looks like: cname.vercel-dns.com)
4. In your DNS panel, add:
   - Type: CNAME
   - Name: hub
   - Value: cname.vercel-dns.com

### Step 4 — Submit to Google Search Console
1. Go to search.google.com/search-console
2. Add property: hub.purposeconcepts.com
3. Submit sitemap: hub.purposeconcepts.com/sitemap-index.xml

## Adding New Content Pages

To add a new article under Evangelism:
1. Create file: src/pages/evangelism/your-topic.astro
2. Copy the structure from evangelism/index.astro
3. Update title, description, and content
4. Push to GitHub → Vercel auto-deploys

## Knowledge Base

The RK-Knowledge-Base.md file contains all frameworks, theology, RKisms, and
voice guidelines. Include it in the system prompt when using Claude to generate
new articles.

## Brand Colors

```
Blue:          #1170C3
Green (CTA):   #0BCA41
Navy:          #1A1A2E
Black:         #0A0A0A
Electric Blue: #00AAFF
Light Blue:    #61BCF2
```
