# Purses for Angels — by Angel

A static GitHub Pages storefront. No backend. No dependencies.

---

## Project Structure

```
purse-shop/
  index.html        ← main page
  styles.css        ← all styling
  app.js            ← all interaction logic
  products.json     ← your 12 product listings
  images/           ← drop purse photos here
    purse1.jpg
    purse2.jpg
    ... (purse1.jpg through purse12.jpg)
  README.md
```

---

## Before You Deploy — Swap These In

### 1. Formspree (offer form submissions → your email)
- Go to https://formspree.io and create a free account
- Create a new form, copy your Form ID
- In `app.js`, replace:
  ```
  https://formspree.io/f/YOUR_FORM_ID
  ```
  with your real endpoint, e.g.:
  ```
  https://formspree.io/f/xpzvwkra
  ```
- Also replace `YOUREMAIL@example.com` with your real email (used as mailto fallback)

### 2. Messenger link
- In `index.html`, replace:
  ```
  https://m.me/YOURPAGE
  ```
  with Angel's real m.me link, e.g.:
  ```
  https://m.me/AngelsPurses
  ```

### 3. Phone number (iMessage/SMS button)
- In `index.html`, replace:
  ```
  sms:+10000000000
  ```
  with Angel's real number, e.g.:
  ```
  sms:+15551234567
  ```

### 4. Add photos
- Name your photos `purse1.jpg` through `purse12.jpg`
- Drop them in the `/images` folder
- The site loads them automatically — no code changes needed

### 5. Update product names/descriptions
- Open `products.json`
- Edit `"name"` and `"description"` for each of the 12 items
- The `"image"` field matches the filename in `/images`

---

## Deploy from Termux (one-time setup)

```bash
cd ~ && mkdir purse-shop && cd purse-shop && git init && gh repo create purse-shop --public --source=. --remote=origin && cp /path/to/your/files/* . && git add . && git commit -m "launch: Purses for Angels" && git push -u origin main
```

Then enable GitHub Pages:
- Go to your repo → Settings → Pages
- Source: `main`, folder: `/ (root)`
- Your site will be live at: `https://dustinlee39.github.io/purse-shop`

---

## Adding New Purses Later

1. Add photo to `/images/` folder
2. Add a new entry to `products.json`
3. `git add . && git commit -m "add new purse" && git push`

Done.
