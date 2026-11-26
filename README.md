# Harry Pascual — portfolio

Static portfolio for Harry Pascual, a Philippines-based specialist in AI photo editing and image quality control. The page is one long document: about, product compositing with before/after sliders, accuracy, brand style (suburban street and autumn lot), grille inserts, white-background marketplace boards, fit checks, quality control, Image Vault, and a contact section.

Work samples are listing images. A badge is covered on some frames, and those frames say the logo was removed.

## Preview locally

From this folder:

```bash
python3 -m http.server 43123
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

No install step and no build step. The images are already compressed, with a 1280-wide JPEG, a 720-wide JPEG, and a WebP for each sample.

## Contact details

Edit `js/site-config.js`. Three placeholders are there:

- `[Email]`
- `[Phone]`
- `[LinkedIn]`

Leave the brackets in place and the site prints the placeholder as text. Replace a value and it becomes a link: email uses `mailto:`, phone uses `tel:`, and LinkedIn should be a full `https://` URL.

## Downloads

The buttons point at the scrubbed resume and print portfolio:

- `downloads/Harry-Pascual-Resume.pdf`
- `downloads/Harry-Pascual-Portfolio.pdf`

## Deploy on Vercel

The site is plain static files, so Vercel does not need a framework setting.

1. Push this project to a Git repository.
2. In Vercel, import that repository.
3. Framework preset: **Other**.
4. Build command: leave empty.
5. Output directory: leave empty (the site root, where `index.html` lives).
6. Deploy. No environment variables are required.

After the first deploy, set the production URL in the Open Graph tags in `index.html` if you want social previews to use an absolute image address. The image file is `images/og.jpg`.

## Privacy

Do not put an employer or brand name in the page, the file names, the alt text, or this README. The footer line stays as written on the site.
