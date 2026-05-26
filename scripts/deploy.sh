#!/usr/bin/env bash
#
# One-click deploy to Tencent Cloud production server.
#
# Usage (from Mac):
#   ./scripts/deploy.sh
#
# What it does:
#   1. SSH into the server using the key in ~/.ssh/TencentCloudKeyPersonal.pem
#   2. git pull origin main (your latest pushed code)
#   3. npm install (in case package.json changed)
#   4. npm run build (production Next.js build)
#   5. pm2 restart portfolio (zero-downtime swap)
#   6. Health-check localhost:3000 + public site
#
# Env overrides (optional):
#   SSH_KEY      path to private key                (default ~/.ssh/TencentCloudKeyPersonal.pem)
#   SERVER_HOST  server IP / hostname               (default 120.53.86.4)
#   SERVER_USER  ssh username                       (default ubuntu)
#   REMOTE_DIR   project path on server             (default /var/www/portfolio)

set -euo pipefail

SSH_KEY="${SSH_KEY:-$HOME/.ssh/TencentCloudKeyPersonal.pem}"
SERVER_HOST="${SERVER_HOST:-120.53.86.4}"
SERVER_USER="${SERVER_USER:-ubuntu}"
REMOTE_DIR="${REMOTE_DIR:-/var/www/portfolio}"

if [ ! -f "$SSH_KEY" ]; then
  echo "❌ SSH key not found at: $SSH_KEY" >&2
  exit 1
fi

echo "🚀 Deploying to ${SERVER_USER}@${SERVER_HOST}:${REMOTE_DIR}"
echo "────────────────────────────────────────────────"

ssh -o StrictHostKeyChecking=no -i "$SSH_KEY" "${SERVER_USER}@${SERVER_HOST}" \
  REMOTE_DIR="$REMOTE_DIR" bash -s <<'REMOTE_SCRIPT'
set -euo pipefail
cd "$REMOTE_DIR"

echo ""
echo "==> 📥 git pull (with retries — China <> GitHub is flaky)"
git_pull_ok=0
for attempt in 1 2 3 4 5; do
  if git pull --ff-only origin main; then
    echo "    ✅ git pull succeeded on attempt $attempt"
    git_pull_ok=1
    break
  fi
  echo "    ⚠️ attempt $attempt failed, retrying in 5s..."
  sleep 5
done
if [ "$git_pull_ok" != "1" ]; then
  echo "    ❌ git pull failed 5x — GFW / TLS issue persists"
  exit 1
fi

echo ""
echo "==> 📦 npm install"
npm install --no-audit --no-fund --silent

echo ""
echo "==> 🔨 npm run build"
npm run build

echo ""
echo "==> ♻️  pm2 restart portfolio"
pm2 restart portfolio --update-env

echo ""
echo "==> 🩺 health check"
sleep 2
if curl -fsSL http://localhost:3000 -o /dev/null; then
  echo "    ✅ localhost:3000 → 200"
else
  echo "    ❌ localhost:3000 NOT responding" >&2
  exit 1
fi

if curl -fsSL -o /dev/null https://liuyikai.com; then
  echo "    ✅ https://liuyikai.com → 200"
else
  echo "    ⚠️  https://liuyikai.com NOT responding (check nginx / DNS)"
fi

echo ""
echo "==> 📊 PM2 status"
pm2 list --no-color
REMOTE_SCRIPT

echo "────────────────────────────────────────────────"
echo "✅ Deploy complete · https://liuyikai.com"
