# gate-run.md — post-x-the-agent-builds-a-game-from-20261122-1709 (BUILDER, ROUND 3)

## Context (coordinator-verified, 23 Nov 20:47 WITA)

- r1 "PIZZA RUN" (01a205bd, post 2124584619169161599): score 163 (93 views, 5 likes, 1 repost, 1 reply). SUPERSEDED by r2 — no longer on the live board. Engagement benchmark to beat.
- r2 "NEON ORBIT" (01a2074a, post 2124760029152817236): live #322/809, score 12-13 (13 views, 0 interactions in ~6 h). WORSE than r1. r3 REPLACES r2 outright (Force_Last).
- Live top-10 bar = 287 and RISING. #1 "Neon Dodge" 6,488; #2 "PUERTO ALBA HEAT" 3,326; #3 "NEON DODGE" 2,151; #4 "NEON LEAP" 1,527; #5 "Rooftop Cat" 1,147. Realistic target = #10 = 287.
- WHY r1 BEAT r2: PIZZA RUN is a runner — instantly readable in 2 seconds. NEON ORBIT is orbital — abstract, slow to parse; zero interactions in ~6 h. Timing contributed (r1 19:23 UTC, r2 07:00 UTC dead slot) but cannot explain the 5x view-rate gap. Both videos opened with a STATIC prompt card (~3 s dead air) — that opening is now BANNED for r3.
- Competition: post-x-the-agent-builds-a-game-from-20261122-1709, $20 pool top-10, entries close 25 Nov 01:09 WITA. Play code: makefun-nettle-map-pizza (re-verified live this session, n=0 of 4). Referral code: wa8s3t3t (re-verified live via GET /api/agents/me this session). Wallet ONLY 6do8zGw4FPLCB1Cq44G8r8KwQccbhHUqtAptaRji6ALk (confirmed on the agent record this session).
- Quota re-verified by builder (Node fetch, GET /quota, ~20:52 WITA): can_submit TRUE, day cap 6, taken 2, left 4; hard limit left 38/40; entries_made 2, entries_kept 2.

## Recorder

- `node cli/makefun.mjs record` REFUSED to start for this competition — HTTP 400: "post-x-the-agent-builds-a-game-from-20261122-1709 does not take recorded transcripts: its entries upload their transcripts (a bundle or loose files) as the requirements say". Log: ~/.makefun/record-post-x-r3.log. NO recorder PID exists (process exited); recorder is NOT running. Same refusal as r1 and r2. Transcripts for this entry come from the Muse session files via `bundle --muse-usage` at seal time (coordinator). Usage file ~/workspace/makefun-work/post-x-the-agent-builds-a-game-from-20261122-1709-usage-r3.jsonl created empty by the record attempt.

## Creative decision (decided in-session, before building)

- WHY this will hold a viewer: the hook IS gameplay in the first 1-2 s — a frog snapping fireflies out of the air, score ticking up, the ONE prompt text overlaid on the action. No static card, no dead air. A frog + glowing fireflies is readable at a glance on a phone: green frog, gold dots, tongue flick = catch. Then real terminal footage proves an agent really built it; then a long gameplay payoff with a cut every 2-4 s; end card last 2.5 s.
- Video arc (MANDATORY order): (a) Hook 0-2 s — GAMEPLAY ACTION mid-flight, ONE prompt overlaid. (b) Agent working ~5 s — REAL lines from this build's terminal/log output in a terminal-styled page captured by headless Chrome. (c) Finished game running ~30 s — real gameplay footage, actually played (scripted input), score visible. (d) End card last 2.5 s — press-pack 9:16 webm as-is + code wa8s3t3t, llms.txt ffmpeg recipe verbatim.
- Game concept: "FIREFLY FROG" — a catch game: a frog on a lily pad at the bottom of a glowing night pond catches fireflies with its tongue (Space / click to flick, arrows / mouse to move), dodges wasps that cost a life, 3 lives, win at 30 fireflies, speed rises as you score. One mechanic, one character, instantly readable. DISTINCT from PIZZA RUN (runner/delivery), NEON ORBIT (orbital), and every top-10 game (no dodge-chase clone, no snake, no breakout, no basket, no card game). One neon green-and-gold palette on a dark pond; HUD icon-first (✦ ♥).

## THE ONE PROMPT (verbatim — shown on screen in the video, game built from it)

Build a tiny neon arcade catch game in one HTML file: a frog sits on a lily pad at the bottom of a glowing night pond — move left and right with arrow keys or mouse, press Space or click to flick its tongue up and catch fireflies for points, dodge wasps that cost a life, 3 lives, fireflies glow and drift down, speed rises as you score, win at 30 fireflies caught, with a title screen, a win screen, a lose screen, one neon green-and-gold palette on a dark pond, and a simple HUD showing fireflies caught, lives and score.

## Build log

- [x] Game written from the ONE prompt (game/index.html, single self-contained file)
- [x] Play-tested end to end in headless Chrome (keys + autoplay, 0 console errors)
- [x] Press card downloaded, sha256 verified vs manifest
- [x] JetBrains Mono Bold (copied from r2 work dir, same file, 274096 B, valid TTF)
- [x] Video rendered: video.mp4, 1080×1920, H.264 + AAC, ~40 s
- [x] X driver copied to r3 build dir; health + login gates; post LIVE
- [x] Repo created via PAT (RieryBuild), POST.json live, About + badges verified
- [x] Local kit check run

## FINISH BUILDER (round 3, agent 1aa47ae2, picked up after VM restart killed builder e6ced4f0 ~21:22 WITA)

- Game VERIFIED, not touched: `node work/playtest.cjs keys` → TITLE STATE: title, KEYS PASS (Enter starts, ArrowRight moves frog 540→624, Space flicks tongue ×1), ERRORS: none. Game file untouched (dead builder's authorship stands).
- Repo v3 existence checked via PAT: GET /repos/RieryBuild/makefun-post-x-the-agent-builds-a-game-from-20261122-1709-v3 → HTTP 404 Not Found — repo does NOT exist yet; will create via PAT (no duplicate risk).
- Press card sha256 re-verified: 286b76c671fa3bf3b1580a7c71675d7b7e502f4fb374b56d30f1104044808cd1 (768,936 B) — matches r2's manifest-verified value.
- Video: seg-hook.mp4 VALID (2.0 s, h264 1080×1920). seg-term.mp4 was CORRUPT (moov atom not found, 54 MB partial write) — RE-RENDERED from term1/2/3.png (5.03 s, 30 fps). seg-game.mp4 built from work/frames-step/ (399 stepped frames @12 fps = 33.25 s; played at 12 fps vs captured 15 fps = 0.8× slow-mo, honest frames). clip.mp4 = hook + term + game, concat filter re-encode: 40.27 s, h264 1080×1920 + aac, 4,145,300 B. End card: llms.txt recipe verbatim (HOLD=0, T=37.766, code wa8s3t3t, JetBrains Mono Bold 62 px, ink #191419) — rendering at time of writing.
- Deviation noted: gameplay is one continuous take (no artificial zoom cuts every 2-4 s) — the stepped capture has constant motion (frog chasing, tongue flicks, score ticking); adding synthetic cuts risked a re-render loop under the ~2 h VM restart clock. Hook/terminal/gameplay order and durations match the brief.
- X lane: profile-2 FREE (no Chrome holding it, no SingletonLock) at check time. Profile-x1 Chrome (another job) running — NOT touched.

## Kit check verdict

Local kit check (level-36 kit, `--worktree`, transcripts = this finish-builder session only — see the seal-time note below):
- 10 passed, 4 failed, 6 skipped, 5 checked at submission.
- PASS: competition_open (in window, closes 2026-11-24T17:09:00Z = 25 Nov 01:09 WITA), snapshot (1184 files, 71,366,903 B — within caps: each file ≤100 MiB, repo ≤512 MiB), license_osi (MIT SPDX), entrypoint (main.ts selects node22), transcripts_present (1 session parsed), transcripts_recorded, thinking_wellformed (122 messages, 64 tool results), thinking_in_window (all timestamps after opening), thinking_turns (44 turns), thinking_own_work (13 authored lines, 0 from other entries/downloads).
- FAIL (all four are seal-time artifacts of checking with ONLY this session — the coordinator bundles the dead builder's session e6ced4f0 + this one at seal, which is what fixes them; the finish builder did NOT game them with edits):
  - thinking_reproduces: 13/2381 authored lines (0.5%, need 30%) — the game, main.ts, drivers and capture scripts were written by the dead builder in ITS session, which was not passed to this check. Its session file carries those writes.
  - thinking_priced: 0 usage rows in the session file — Muse usage lives in the DB; the coordinator re-SELECTs usage rows after this run (a subagent cannot attach its own rows; they are written only once the run completes).
  - thinking_revised: no file takes final content from 2+ messages in THIS session alone — POST.json was written once here (placeholder→real URL is the second write once e6ced4f0's placeholder write is bundled with it).
  - transcripts_run_record: no makefun-run.json — bundle writes it at seal time.
- At-submission checks (site-side): repo_public / repo_owner (.makefun/owner.json present, wallet 6do8…) / repo_created_after_open (created 2026-11-23T13:52:21Z, after open) / commit_in_repo / duplicate_snapshot — all to be confirmed at submit.
- Kit note: level-36 kit vs site level 38 — the curl-pipe re-download suggestion was IGNORED per the standing rule (use the level-36 kit).

## Repo

- https://github.com/RieryBuild/makefun-post-x-the-agent-builds-a-game-from-20261122-1709-v3
- HEAD: first push bfd10110364955ee67a8c039373159afc8863b10 (9 files); final HEAD 31d152f469aec0f8c726d4502f3a5994c4db7d1a (gate-run.md verdict update).
- Created 2026-11-23T13:52:21Z via PAT POST /user/repos (RieryBuild is a USER account, not an org — POST /orgs/RieryBuild/repos 404s; that was the first attempt, corrected). Public.
- About verified via PAT GET: description "FIREFLY FROG — one prompt, one firefly-catching frog game, posted as a video on X for make.fun", homepage https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709, topics makefun, ai-agents, bounties, growth (all four).
- README 3 badges: all 200 image/svg+xml (competition badge, rank badge, reward badge).
- main.ts determinism (node22 v22.21.0): two runs to /tmp/r3-out1 + /tmp/r3-out2, both exit 0, outputs byte-identical, /output/POST.json = {"url":"https://x.com/Rieryoff/status/2124861006782566795"} (59 bytes). (Only benign node warnings: module-type reparsing + EnvHttpProxyAgent experimental.)

## Post

- https://x.com/Rieryoff/status/2124861006782566795 (rest_id 2124861006782566795)
- Created 2026-11-23T13:41:56Z = 21:41:56 WITA (in window: after 23 Nov 01:09 WITA, before 25 Nov 01:09 WITA).
- Health gate before posting: healthy=true, login LOGGED_IN Riery @Rieryoff, homeArticles 7, profileArticles 0 (profile page showed 0 articles — known X profile-page flakiness the same day; home timeline healthy, so NOT degraded), duplicate=null.
- Driver (xpost-video.cjs, profile-2, attempt 1): composer text verified back, video uploaded (INIT/APPEND/FINALIZE 200s, media_id 2124860923978420224), Post button enabled poll 4, JS .click(), CREATETWEET_ID 2124861006782566795. In-page verify text=true, video=false (X shell slow — inconclusive, not a failure). The driver child hung in browser.close() afterwards (same as r2); the timeout wrapper reaped it — no other job's Chrome touched.
- FxTwitter verification (the house read method): code 200, text verbatim (make.fun bounty link + @makefunai + play code makefun-nettle-map-pizza), author Rieryoff, media: 1 video, 1080×1920, duration 40.266 s, h264 mp4. First read (~21:52 WITA): 3 views, 1 like, 0 reposts, 0 replies → score 13.
- Post text (post-text.txt, unchanged from draft): "Made by my AI agent for a $20 bounty on @makefunai: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709\nOne prompt → one firefly-catching frog game. Play code: makefun-nettle-map-pizza".

## Video (finish-builder render)

- video.mp4: 40.27 s, h264 1080×1920 + aac, 4,826,313 B, faststart. ffprobe confirmed.
- Arc: hook 0–2 s (seg-hook.mp4, gameplay mid-flight + ONE prompt overlay), terminal 2–7 s (seg-term.mp4 re-rendered from term1/2/3.png, real build-log lines), gameplay 7–40.3 s (seg-game.mp4, 399 stepped frames @12 fps = 33.25 s, 0.8× slow-mo of the 15 fps capture), end card over last 2.5 s (llms.txt recipe verbatim, HOLD=0, T=37.766, code wa8s3t3t).
- Frames watched: hook t=1 s (frog tongue out, 22/30, SCORE 2200, prompt overlay legible), terminal t=4 s (real log lines legible incl. KEYS PASS / AUTOPLAY PASS win 30/30), gameplay t=20 s (6/30, ♥♥♥, SCORE 600, frog + fireflies + wasps), last frame (magenta card, make.fun mark + wordmark, "Use my referral code", field with wa8s3t3t in JetBrains Mono, copy button).
- Deviation: gameplay is one continuous take, no synthetic zoom cuts every 2–4 s (see FINISH BUILDER section above).
