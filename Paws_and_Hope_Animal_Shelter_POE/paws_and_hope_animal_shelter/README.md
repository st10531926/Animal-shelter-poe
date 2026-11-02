# Paws & Hope Animal Shelter — Part 2

## Project overview
Paws & Hope is a student website concept for an animal shelter. It presents information about the shelter, adoption, volunteering, donations and contact enquiries. This package is a rebuilt replacement project because the original Part 1 files were lost after a hard-drive failure. It is not a recovered copy of the original work.

## Pages
- `index.html` — Home page and main calls to action.
- `about.html` — Shelter story and values.
- `adopt.html` — Example animal profiles.
- `volunteer.html` — Ways to volunteer.
- `donate.html` — Donation information.
- `contact.html` — Contact information and demonstration form.

## Folder structure
```
paws_and_hope_animal_shelter/
├── index.html
├── about.html
├── adopt.html
├── volunteer.html
├── donate.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

## Part 2: CSS and responsive design
- A single external stylesheet, `css/style.css`, is linked from every HTML page.
- A CSS reset (`box-sizing`, image sizing and base margins) improves consistency.
- CSS custom properties in `:root` keep the colour palette and common values consistent.
- Typography uses a clear type scale, readable line-height and responsive `clamp()` sizing.
- CSS Grid and Flexbox are used for the hero, cards, content sections, navigation and footer.
- Visual styling includes colours, borders, rounded corners, shadows and hover/focus states.
- Media queries at `900px` (tablet) and `680px` (mobile) adapt the layout. Multi-column grids become single-column on small screens.
- Relative units, percentages, `min()`, `clamp()` and flexible grid columns support different viewport widths.
- The homepage hero image uses `srcset` and `sizes`; other images use flexible widths and `object-fit`.
- The mobile navigation is controlled by `js/main.js`. The contact form provides a front-end demonstration only; it does not send or store personal data.

## How to run
1. Extract the ZIP folder.
2. Open the folder in Visual Studio Code.
3. Open `index.html` in a browser, or use the Live Server extension.
4. Use the navigation links to test all six pages.
5. Resize the browser or use Developer Tools device emulation to test responsive layouts.

## Responsive testing and screenshot evidence
The assignment asks for screenshots of desktop, tablet and mobile layouts. Capture your own screenshots after opening the site:
1. Desktop: use a viewport around 1366 × 768.
2. Tablet: use a viewport around 768 × 1024.
3. Mobile: use a viewport around 390 × 844.
4. In Chrome, press `F12`, then select the device toolbar icon (or press `Ctrl+Shift+M`) to choose or enter viewport sizes.
5. Capture the homepage and at least one inner page at each size. Save the images in a folder named `screenshots/` and add them to your final GitHub repository.
6. Test navigation, links, image loading, form validation and horizontal scrolling at each size.

Do not claim screenshots have been captured until you have actually taken them. Test on more than one browser if possible.

## Changelog
### Part 2 — Rebuilt project
- Created an external stylesheet and linked it to all six pages.
- Added consistent base styles, typography, colours and spacing.
- Added Grid and Flexbox layouts for desktop.
- Added hover and keyboard-focus styles for interactive elements.
- Added tablet and mobile breakpoints and a collapsible mobile menu.
- Added responsive image markup and lazy loading for below-the-fold images.
- Added a responsive contact form demonstration and updated project documentation.

## References
- MDN Web Docs, CSS media queries: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries
- MDN Web Docs, CSS Grid Layout: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
- MDN Web Docs, CSS Flexible Box Layout: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout
- MDN Web Docs, Responsive images: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
- MDN Web Docs, CSS pseudo-classes: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
- Image photographs are loaded from Unsplash image URLs. Check the current Unsplash licence and image source details before using them in a published project.

## GitHub submission checklist
Run these commands in the project folder after creating or opening your GitHub repository:
```
git init
git add .
git commit -m "Complete Part 2 CSS styling and responsive design"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```
Replace `YOUR_GITHUB_REPOSITORY_URL` with the URL of your own GitHub repository. Do not submit a made-up repository link.
