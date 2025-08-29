## Portfolio structure

This project has been organized with a simple, production-friendly structure to keep HTML, CSS, JS, and static assets separate.

### Folder layout

```
Portfolio/
├─ portfoliodemo.html   # Main HTML (you can rename to index.html if you prefer)
└─ assets/
   ├─ css/
   │  └─ main.css       # All styles moved here from the inline <style>
   ├─ js/
   │  └─ main.js        # Minimal interactions (mobile menu toggle)
   ├─ images/           # Put images here (e.g., profile.jpg)
   ├─ icons/            # SVGs or icons (optional)
   └─ fonts/            # Custom webfonts (optional)
```

### Notes

- HTML already links to `assets/css/main.css` and `assets/js/main.js`.
- Replace `assets/images/profile.jpg` with your real photo (same path) or update the `src` in the HTML.
- If you prefer a more modular CSS approach later, you can split `main.css` into sections (e.g., `sections/hero.css`, `components/buttons.css`) and concatenate during a build step.

### Next steps (optional)

- Rename `portfoliodemo.html` to `index.html` for easier hosting.
- Add a favicon at `assets/icons/favicon.ico` and reference it in the `<head>`.
- Consider a lightweight bundler or task runner later if you decide to split CSS/JS into multiple files.


