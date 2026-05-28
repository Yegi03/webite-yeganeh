#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

REPO_NAME="${REPO_NAME:-mywebsite}"
DOMAIN="theyeganeh.com"

if [[ -f "$ROOT/.env.deploy" ]]; then
  set -a
  # shellcheck source=/dev/null
  source "$ROOT/.env.deploy"
  set +a
fi

echo "==> GitHub..."
if ! command -v gh >/dev/null 2>&1; then
  echo "Install GitHub CLI: brew install gh"
  exit 1
fi

if [[ -n "${GH_TOKEN:-}" ]]; then
  echo "$GH_TOKEN" | gh auth login --with-token
elif ! gh auth status >/dev/null 2>&1; then
  echo "Set GH_TOKEN in .env.deploy or run: gh auth login -w"
  exit 1
fi

echo "==> Creating GitHub repo (if needed) and pushing..."
if ! git remote get-url origin >/dev/null 2>&1; then
  gh repo create "$REPO_NAME" --public --source=. --remote=origin --push
else
  git push -u origin main
fi

echo "==> Deploying to Vercel..."
VERCEL_ARGS=(--prod --yes)
if [[ -n "${VERCEL_TOKEN:-}" ]]; then
  VERCEL_ARGS+=(--token "$VERCEL_TOKEN")
elif ! npx vercel whoami >/dev/null 2>&1; then
  echo "Set VERCEL_TOKEN in .env.deploy or run: npx vercel login"
  exit 1
fi

if [[ ! -d "$ROOT/.vercel" ]]; then
  npx vercel link "${VERCEL_ARGS[@]}" 2>/dev/null || npx vercel link "${VERCEL_ARGS[@]}"
fi
npx vercel deploy "${VERCEL_ARGS[@]}"

echo ""
echo "==> Connect your domain in Vercel:"
echo "  1. https://vercel.com/dashboard → project → Settings → Domains"
echo "  2. Add: $DOMAIN and www.$DOMAIN"
echo "  3. Update DNS in Squarespace with the records Vercel shows"
echo ""
echo "Revoke tokens after setup if you only needed them once."
