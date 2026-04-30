#!/usr/bin/env bash
# Build the Curious Machine Next.js site as a static export and rsync to VPS.
#
# Prereqs (one-time on VPS):
#   mkdir -p ~/sites/curious-machine
#   # Caddy already mounts ~/sites:/srv:ro (set up by portfolio deploy)
#   # Append website/Caddyfile block to ~/services/caddy/Caddyfile, then reload.
#
# Usage: ./deploy.sh [ssh-target]

set -euo pipefail

SSH_TARGET="${1:-vps}"
REMOTE_DIR="~/sites/curious-machine"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "$SCRIPT_DIR"

if [ ! -d node_modules ]; then
	echo "==> installing dependencies"
	npm install
fi

echo "==> building static export"
npm run build

if [ ! -d out ]; then
	echo "error: 'out/' not produced — check next.config.js for output: 'export'"
	exit 1
fi

echo "==> deploying $SCRIPT_DIR/out  →  $SSH_TARGET:$REMOTE_DIR"
rsync -avz --delete -e ssh "$SCRIPT_DIR/out/" "$SSH_TARGET:$REMOTE_DIR/"

echo "==> reloading Caddy"
ssh "$SSH_TARGET" 'docker exec caddy caddy reload --config /etc/caddy/Caddyfile' || \
	echo "warn: caddy reload failed — check container/logs"

echo "==> done. https://curiousmachine.152-42-201-32.sslip.io"
