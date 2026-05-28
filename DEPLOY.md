# Deploy to theyeganeh.com

## 1. Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 2. Push to GitHub

Create a new repository on GitHub, then:

```bash
git remote add origin git@github.com:YOUR_USERNAME/mywebsite.git
git push -u origin main
```

## 3. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. **Add New Project** → import your `mywebsite` repo.
3. Click **Deploy** (defaults work for Next.js).

You'll get a URL like `mywebsite.vercel.app`.

## 4. Connect theyeganeh.com

1. In Vercel: **Project → Settings → Domains**.
2. Add `theyeganeh.com` and `www.theyeganeh.com`.
3. Vercel shows DNS records. In **Squarespace** (or your registrar):
   - Open **Domains → theyeganeh.com → DNS**
   - Remove Squarespace parking/A records pointing to Squarespace
   - Add the records Vercel provides (usually an `A` record for `@` and `CNAME` for `www`)
4. Wait for DNS (often 15–60 minutes). HTTPS is automatic.

## 5. Cancel Squarespace parking

Once [theyeganeh.com](https://theyeganeh.com) shows your new site, disconnect or cancel Squarespace hosting for that domain so you're not paying for the old "Coming Soon" page.

## Customize

| What | Where |
|------|--------|
| Name, links, URL | `src/lib/site.ts` |
| About page text | `src/app/about/page.tsx` |
| Blog posts | `content/blog/*.md` |
| Research | `content/research/*.md` |
