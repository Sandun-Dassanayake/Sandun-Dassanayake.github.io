# Sandun Dassanayake – personal website

A plain static website (HTML + CSS + a little JavaScript) hosted on GitHub Pages.

## Pages
| Tab | Path | Folder |
|---|---|---|
| Home | `/` | `index.html` |
| Postgraduate Research | `/postgraduate-research/` | `postgraduate-research/` |
| Teaching Profile → Undergraduate | `/teaching-profile/undergraduate/` | `teaching-profile/undergraduate/` |
| Teaching Profile → Postgraduate | `/teaching-profile/postgraduate/` | `teaching-profile/postgraduate/` |
| Research Interests | `/research-interests/` | `research-interests/` |
| Resources | `/resources/` | `resources/` (+ `remote-sensing-gis-directory/`) |

## Adding a student (Postgraduate Research)
1. Open `postgraduate-research/index.html`.
2. Find a block between `STUDENT PROFILE: copy from here` and `copy to here`, copy it, and paste it where you want it in the list.
3. Give the new block a unique `id` (e.g. `id="nimal-perera"`) and fill in the name, degree, years, bio, project, thesis and publications.
4. Status badge: `<span class="status current">Current</span>` or `<span class="status completed">Completed</span>`.
5. Photo: save a square photo as `assets/img/students/<id>.jpg` (same id as step 3) and set the `img src` to match. Without a photo, the initials are shown.
6. Add the student to the row of name buttons near the top: `<a href="#nimal-perera">Nimal Perera (current)</a>`.
7. Delete the example "Student Name" blocks you are not using.

## Research areas (Research Interests)
Each area is a block between `RESEARCH AREA: copy from here` and `copy to here`.
- Figure: save the image as `assets/img/research/urban-heat.jpg`, `geohazards.jpg` or `remediation.jpg`. Until then a dashed placeholder is shown.
- Edit the caption in `<figcaption>`, the paragraphs, the method chips (`<ul class="chips">`) and the related publications.

## Common edits
- **Profile photo:** `assets/img/profile.jpg` (use a square photo, at least 400 × 400 px).
- **Colours and fonts:** variables at the top of `assets/style.css`.
- **Menu:** written into every page's `<nav>` block. If you add or rename a tab, update it in all 7 pages.

## Publishing
Upload everything in this folder (including the hidden `.nojekyll` file) to the repository root.
Settings → Pages → Deploy from a branch → main → / (root). Changes go live a minute or two after each commit.
