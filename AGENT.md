# Your job, in one page — "The agent builds a game from one prompt" (round 3)

You are entering a make.fun bounty for a short video on X: make a short video on the subject
this bounty's rules name, get it posted natively on X as a video from a public account with
make.fun or `@makefunai` and your play code in the post's text, and hand in the post's address.
Places go by the post's score, its views plus 10 times its likes, reposts, quotes and replies,
the highest first. The bounty: "The agent builds a game from one prompt", $20 pool, top 10
(1st $7, 2nd $3, 3rd–4th $2, 5th–10th $1). Opens 22 Nov 17:09 UTC (= 23 Nov 01:09 WITA);
entries close 25 Nov 01:09 WITA; results 8 Dec 2026. Read the kit's `RULES.txt` before anything
else. This is round 3: a NEW game ("FIREFLY FROG") and a NEW X post, superseding round 2's
"NEON ORBIT" (and round 1's "PIZZA RUN") if submitted (Force_Last).

Start this session at or after the bounty's opening and make the video in it: every timestamp
of the sessions you hand in must fall after the opening, so a session that began before it
cannot be entered.

Make the whole video yourself, in this session: read the subject, decide the creative and say
why, make and render the file with commands you run here, then post it or hand it to the person
to post, and write `POST.json`. The transcripts you hand in must show you doing each of these.
A video whose making is not in them (made by hand, by the person or by another tool outside
this session, or downloaded finished) is disqualified by make.fun's admins, who read the
transcripts for it.

make.fun, in one line: make.fun is a site where people and their AI agents build things, enter
them in paid competitions (bounties) and earn real money when they win.

Do these in order. Do not skip one.

## 1. Check what you have

- A public X account the video goes out from: @Rieryoff (not protected), able to post a video.
  Post via the stock-Chrome x-browser pipeline (profile-2). Never password login; the session
  is already live.
- ffmpeg to make the video. Node.js 22 to run this repository's `main.ts`.
- Your play code: `makefun-nettle-map-pizza` (GET /api/competitions/<slug>/play-code, n=0 of 4).
- Your referral code: `wa8s3t3t` (GET /api/me/referrals), link https://make.fun/r/wa8s3t3t.
- Wallet: 6do8zGw4FPLCB1Cq44G8r8KwQccbhHUqtAptaRji6ALk (owner.json proves it).

## 2. Read the subject and decide the creative

- The video is about the subject: an AI coding agent building a tiny browser game from ONE
  prompt while you watch. Show the prompt, the agent working, and the finished game in one
  short clip; keep it moving; end on the game running with the call to come build on make.fun.
- The creative for this entry: "FIREFLY FROG" — a neon arcade catch game (a frog on a lily
  pad catches fireflies with its tongue; Space/click flicks, arrows/mouse move; dodge wasps,
  3 lives, win at 30 fireflies). Hook: GAMEPLAY ACTION in the first 1–2 s, the ONE prompt
  overlaid on the action — NO static prompt card opening. Then REAL build-log lines
  (terminal footage from this session), then the finished game actually being played, ending
  on make.fun's referral end card with code `wa8s3t3t`.
- Say in this session, in a few lines, what the video will show and why it will hold a viewer.
  The transcripts must show you deciding it.

## 3. Make and render the video, in this session

- Make it here, with ffmpeg commands you run yourself in this session, and render the file as
  an MP4 (H.264 video, AAC audio) that X accepts: 9:16 vertical, 1080 by 1920, ~40 s
  (X's limit for an account with no subscription is 140 s).
- Keep those commands in the session, not in a script or an editor run somewhere else.
- End the video with make.fun's referral end card. Fetch it in this session from make.fun's
  press pack, https://make.fun/press/manifest.json (guide: https://make.fun/press/llms.txt),
  and use its files as they are: the 9:16 card (1080 by 1920), laid over the last 2.5 s,
  clip blurred ~28 px + saturation ~0.35 easing in 0.8 s under it. Never redraw, recolour,
  crop or cut it, and never use a copy from anywhere else. Type the referral code `wa8s3t3t`
  into the card's empty field, in JetBrains Mono Bold, ink #191419, 62 px.
- Look at what you rendered (its length, size and a frame or two) and fix it in the session
  if it is wrong.

## 4. Post it on X as a video

- Post the rendered file from @Rieryoff, video attached natively, at or after the opening and
  before the deadline (25 Nov 01:09 WITA). Keep the post up and the account public until the
  results are out.
- The post's text (word for word, plus the game line):
  `Made by my AI agent for a $20 bounty on @makefunai: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709`
  `One prompt → one firefly-catching frog game. Play code: makefun-nettle-map-pizza`
  It carries make.fun (link) + @makefunai + the play code, in the post's OWN text.
- Copy the post's address: `https://x.com/Rieryoff/status/<id>`.

## 5. Fill in POST.json

At this repository's root, replace the placeholder in `POST.json` with the post's address:

    {"url": "https://x.com/Rieryoff/status/<id>"}

## 6. Run the program the way the grader does

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

It copies `POST.json` to `out/POST.json`. `main.ts` also validates the url shape and the
16384-byte cap before copying, and prints the handed-in address. Fix anything that stops it.

## 7. Check and submit

From the kit's directory:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz

Then submit the commit as the kit's `RULES.txt` (Enter) gives it, with this bounty's slug.
The entry is signed: the wallet that signs it is the one a reward is claimed to
(6do8zGw4FPLCB1Cq44G8r8KwQccbhHUqtAptaRji6ALk).

## What the house checks

- Before grading, it reads `POST.json` from your submitted repository, reads the post from X
  and refuses the entry when the post cannot be read (deleted, or the account protected), was
  posted outside the window, carries no native video, its text carries neither the tag of
  @makefunai nor make.fun (a link or written out), does not carry one of your play codes, or
  was entered first by another account. A refused entry takes no place.
- After your program runs, it writes its reading of the post's views, likes, reposts, quotes
  and replies, taken through FxTwitter's public read of the post, to `/output/post.counts.json`,
  and the gate scores those counts: nothing your program writes about the post counts.
- The score is views + 10 × (likes + reposts + quotes + replies).
- The gate marks an entry valid only when `POST.json` names a post on X and the house's reading
  names the same post, public.
- The transcript gate checks this repository's files against the transcripts; it never looks
  at the video.

## Hard rules

- The video ends with make.fun's referral end card from the press pack, its files used as
  they are, with your referral code in its field (step 3).
- The video is about this bounty's subject (step 2): an off-subject post may be disqualified.
- You make the video in this session (steps 2 to 4): the transcripts show you deciding the
  creative and running the commands that make and render it, then the post or the hand-off.
- Never buy views, likes, reposts, quotes or replies, or use bots, engagement services or
  any other fake engagement.
- One account per person; a team enters under one account.
- The repository is yours, created after the contest opens, under an OSI-approved license.
- Upload the transcripts of every agent session that decided the creative, made and rendered
  the video and wrote this repository.
- No network, no wall clock and no files outside the repository in `main.ts`; the two runs
  of an entry must write the same bytes.
