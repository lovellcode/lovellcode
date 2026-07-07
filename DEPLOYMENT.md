# Lavey London — Landing Page

A single-file, fast-loading landing page (`index.html`) for Lavey London.
It funnels visitors to the existing Shopify store at
[laveylondon.co.uk](https://laveylondon.co.uk) for checkout.

## Deploy with GitHub Pages

1. Merge this branch (or select it directly in the next step).
2. On GitHub go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch",
   pick the branch and `/ (root)` folder, and save.
4. The site will be live at `https://lovellcode.github.io/lovellcode/` within a minute or two.

To use a custom domain (e.g. a subdomain like `home.laveylondon.co.uk`), add it
under **Settings → Pages → Custom domain** and create the matching CNAME record
with your domain provider.

## Swapping in real product photos

Each collection card currently shows a minimal gold line-drawing (inline SVG)
as a placeholder. To use real product photos:

1. Add square photos to an `images/` folder in this repo.
2. In `index.html`, replace each `<svg>…</svg>` inside a `div.art` with:

   ```html
   <img src="images/rings.jpg" alt="Solid gold ring" loading="lazy">
   ```

Square photos on a plain, light background work best.

## Editing content

Everything (HTML + CSS) lives in `index.html`. Headline, copy, and links are
plain text near the top of the file — no build step required.
