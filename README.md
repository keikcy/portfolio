# Jewel Hart Arconeda — Portfolio

A dark-theme, responsive portfolio site for a Programmer / IT Developer, built with plain HTML, CSS, and JavaScript. No build step, no framework — works directly on GitHub Pages.

## Folder structure

```
portfolio/
├── index.html          Page structure (all sections)
├── css/
│   └── style.css       All styling, design tokens at the top
├── js/
│   ├── data.js          All editable content (edit this file most often)
│   └── main.js          Rendering + interaction logic (rarely needs edits)
├── assets/
│   ├── images/          Project screenshots
│   ├── certificates/    Certificate images
│   └── resume/          resume.pdf goes here
└── README.md
```

## Editing content

Almost everything you'll want to change lives in **`js/data.js`**:

- `PROFILE` — name, role, intro, social links, email, resume path
- `STATS` — the four "About" numbers
- `SKILL_GROUPS` — skills grouped by category, with a 0–100 level
- `PROJECTS` — add/remove a project by adding/removing an object in the array
- `CERTIFICATES` — same pattern; each opens in the certificate modal
- `EXPERIENCE` — timeline entries, most recent first
- `EDUCATION`, `SERVICES`, `GITHUB_INFO`, `RESUME_SUMMARY`

You do **not** need to touch `index.html` or `main.js` for routine updates — just edit the arrays in `data.js` and the corresponding section re-renders automatically.

### Adding a project
```js
PROJECTS.push({
  name: "New Project",
  category: "Web Application",
  description: "One or two sentences about it.",
  tech: ["PHP", "MySQL"],
  image: "assets/images/project-new.jpg",
  github: "https://github.com/your-username/new-project",
  demo: "", // leave blank to hide the Live Demo button
});
```

### Adding a certificate
```js
CERTIFICATES.push({
  title: "Certificate Title",
  issuer: "Issuing Organization",
  date: "2026",
  description: "What it covered.",
  image: "assets/certificates/cert-new.jpg",
  category: "Web Development",
});
```

## Images and resume

Drop files into the matching `assets/` subfolder using the filenames referenced in `data.js` (or update the paths to match your own filenames). If an image is missing, the card shows a neutral placeholder icon instead of breaking.

Put your résumé at `assets/resume/resume.pdf` — both "Download Resume" buttons point there already.

## Contact form

GitHub Pages only serves static files, so the contact form currently opens the visitor's email client with the message pre-filled (see `initContactForm` in `js/main.js`). If you'd rather have submissions land somewhere without the visitor leaving the page, swap that function for a form service such as Formspree or EmailJS — both work with a static site.

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository (it can be the repo root, or a `/docs` folder).
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", choose the branch and folder to publish.
4. Your site will be live at `https://your-username.github.io/repo-name/`.

## Customizing the look

Colors, fonts, spacing, and radii are all defined as CSS custom properties at the top of `css/style.css` under `:root`. Changing a value there updates it everywhere it's used.
