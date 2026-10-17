# Sandun Dassanayake – personal website

A plain static website (HTML + CSS + a little JavaScript) hosted on GitHub Pages.

## Publish on GitHub Pages
The site uses relative links, so it works at any address.

**Free option – a GitHub organization with your name**
1. On GitHub: **+ → New organization → Free**, and name it e.g. `sandun-dassanayake`.
2. In that organization, create a public repository named exactly `sandun-dassanayake.github.io`.
3. Upload everything in this folder to the repository root (including the hidden `.nojekyll` file).
4. **Settings → Pages → Source: Deploy from a branch**, branch **main**, folder **/ (root)** → Save.
5. The site appears at `https://sandun-dassanayake.github.io/` within a few minutes.

**Paid option – your own domain** (e.g. `sandundassanayake.com`)
Buy the domain from any registrar, then in the repository go to **Settings → Pages → Custom domain**
and follow GitHub's DNS instructions. This works with any repository, including one under your personal account.

Every later change you commit to `main` goes live automatically.

## Page addresses
| Page | Path |
|---|---|
| Home | `/` |
| Resources | `/resources/` |
| University of Moratuwa | `/teaching-profile/university-of-moratuwa/` |
| CILT Course Page | `/teaching-profile/cilt-course-page/` |
| Scientific Writing | `/postgraduate-research/scientific-writing/` |
| Climate and Sustainability Theme | `/undergraduate-research/climate-and-sustainability-theme/` |

## Common edits
- **Profile photo:** add a square photo as `assets/img/profile.jpg`. Until then, the initials "SD" are shown.
- **Text on a page:** open that folder's `index.html` and edit between the tags.
- **Colours and fonts:** `assets/style.css` (the variables at the top).
- **Menu:** the menu is written into each page's `index.html`. If you add or rename a page, update the `<nav>` block in every page.

## Limits to know
GitHub blocks single files over 100 MB and recommends keeping a repository under 1 GB. The site is well under 1 MB plus anything you add.
