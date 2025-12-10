Quick deploy notes for `Web Profile Client 1`

1) What this is
- Static front-end built with HTML, Bootstrap and a small local CSS/JS in `frontend/`.

2) Files to include in repo
- `index.html` (root)
- `frontend/` (styles/, scripts/, images/, libraries/)
- `img/` (local images referenced from index.html)
- `CV_*.pdf` if you want downloadable CV
- `.vercelignore` (already added) to exclude backups and dev files

3) Before push (recommended checklist)
- Open `index.html` in browser locally and verify:
  - Links to `frontend/styles/main.css` and `frontend/scripts/main.js` load.
  - Images referenced (e.g., `img/profile photo (3)crop.png`, `img/typo logo long.png`) exist and paths are correct.
  - Contact form opens mail client (mailto) as expected.
  - Modal appointments work and close correctly.
- Remove or move any backup files (e.g., `index.original.bak.html`) or keep them but they are ignored by `.vercelignore`.
- Run a quick HTML validator (optional) or lint your CSS.

4) Git & Vercel
- Initialize git, add files and commit:

  git init
  git add .
  git commit -m "Initial website files for deployment"

- Push to GitHub (create a repo first), then connect the GitHub repo to Vercel:
  - In Vercel dashboard, Import Project → select GitHub repo → Framework Preset: "Other" (Static)
  - Build & Output Settings: none required for static HTML
  - Root Directory: leave blank or set to the folder path if this repo contains multiple projects

5) Optional: automatic email sending
- Current forms use `mailto:` (user mail client). To send from site without user mail client, use services such as EmailJS or Formspree and update JavaScript in `frontend/scripts/main.js`.

If you want, I can:
- Apply the same footer/contact changes from `index.original.bak.html` into the working `index.html` now.
- Remove or move backup files into a `backups/` folder.
- Create a small Git commit for you with these changes.
