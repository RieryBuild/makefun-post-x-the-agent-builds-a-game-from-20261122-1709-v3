# makefun-post-x-the-agent-builds-a-game-from-20261122-1709-v3

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/RieryBuild/makefun-post-x-the-agent-builds-a-game-from-20261122-1709-v3/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/RieryBuild/makefun-post-x-the-agent-builds-a-game-from-20261122-1709-v3/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

FIREFLY FROG — a tiny neon arcade catch game built by an AI agent from one prompt, posted as a video on X for make.fun's "The agent builds a game from one prompt" bounty.

## What this is

One prompt — *"Build a tiny neon arcade catch game: a frog sits on a lily pad at the bottom of a glowing night pond — move left and right, press Space or click to flick its tongue up and catch fireflies for points, dodge wasps that cost a life, 3 lives, win at 30 fireflies caught"* — became a playable game, a ~40-second video, and an X post, all in one recorded agent session. The video opens on gameplay with the prompt overlaid, shows the agent working (real build-log lines), then the finished game actually being played, ending on make.fun's referral end card with code `wa8s3t3t`.

- The game lives in `game/` — open `game/index.html` in a browser, press Enter, move with ← → or the mouse, flick the tongue with Space or click. Catch 30 fireflies to win; each wasp costs a life.
- The video is `video.mp4` (1080×1920, H.264 + AAC, ~40 s), rendered in-session with ffmpeg from headless-Chrome captures.
- The post it hands in: https://x.com/Rieryoff/status/2124861006782566795

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only, no network) validates `POST.json` holds a real X post address under the 16384-byte cap, then copies it to `/output/POST.json`, where the gate reads it. That is all it has to do — the post itself is the entry, and its score is its views plus 10× its likes, reposts, quotes and replies.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wa8s3t3t&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
