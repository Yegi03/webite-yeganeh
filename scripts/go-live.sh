#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

REPO_NAME="${REPO_NAME:-mywebsite}"
DOMAIN="theyeganeh.com"

echo "==> Checking GitHub CLI..."
if ! command -v gh >/dev/null 2>&1; then
  echo "Install GitHub CLI: brew install gh"
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "Log in to GitHub (browser will open):"
  gh auth login -h github.com -p https -w
fi

echo "==> Creating GitHub repo (if needed) and pushing..."
if ! git remote get-url origin >/dev/null 2>&1; then
  gh repo create "$REPO_NAME" --public --source=. --remote=origin --push
else
  git push -u origin main
fi

echo "==> Deploying to Vercel..."
if ! npx vercel whoami >/dev/null 2>&1; then
  echo "Log in to Vercel (browser will open):"
  npx vercel login
fi

npx vercel link --yes 2>/dev/null || npx vercel link
npx vercel --prod --yes

echo ""
echo "==> Almost done! Connect your domain in Vercel:"
echo "  1. Open https://vercel.com/dashboard"
echo "  2. Select this project → Settings → Domains"
echo "  3. Add: $DOMAIN and www.$DOMAIN"
echo "  4. Copy the DNS records Vercel shows"
echo "  5. In Squarespace: Domains → $DOMAIN → DNS → replace parking records"
echo ""
echo "Your site will be live at https://$DOMAIN once DNS propagates."
