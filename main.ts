// FIREFLY FROG — a make.fun video-on-X entry (Node 22, standard library only, no network).
//
// The entry is the X post itself: an AI agent built a tiny neon arcade catch game
// ("FIREFLY FROG") from ONE prompt, filmed the build, and posted the video natively on X
// from a public account with make.fun / @makefunai and the play code in the post's text.
// The house reads the post's views and interactions from X; nothing this program writes
// about the post is scored. All this program has to do is hand POST.json to the gate.
//
// Two guardrails before the copy, so a bad POST.json fails loudly here instead of
// handing in an entry the gate refuses as invalid:
//   1. the file must be at most 16384 bytes (the gate's post_file cap);
//   2. its url must be an X post address, https://x.com/<handle>/status/<digits>.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POST_MAX_BYTES = 16384;
const POST_URL_RE = /^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/;

const postPath = join(BOT_DIR, 'POST.json');

// Guardrail 1: the gate refuses a POST.json over 16384 bytes, so refuse it here first.
const postBytes = statSync(postPath).size;
if (postBytes > POST_MAX_BYTES) {
  console.error(`POST.json is ${postBytes} bytes, over the ${POST_MAX_BYTES} byte cap`);
  process.exit(1);
}

// Guardrail 2: the url must be a real X post address, digits-only id, no query or fragment.
const post = JSON.parse(readFileSync(postPath, 'utf8')) as { url?: unknown };
if (typeof post.url !== 'string' || !POST_URL_RE.test(post.url)) {
  console.error(`POST.json url is not a valid X post address: ${String(post.url)}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Confirmation line so the run log shows exactly which post was handed in, and how big it is.
console.log(`FIREFLY FROG entry handed in: ${post.url} (${postBytes} bytes)`);
