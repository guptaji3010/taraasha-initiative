# The Taraasha Foundation Website

This is the official website for The Taraasha Foundation, built with Next.js.

## 🚀 How to Run Locally

You can run this website on your computer using `cmd` or PowerShell.

### 1. Development Mode (Best for editing)
Use this to make changes and see them instantly.

```bash
npm run dev
```
> Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 2. Preview Production Build (Best for testing deployment)
Since this site is configured for **Static Export** (`output: 'export'`), `npm start` will not work. Instead, do this:

1.  **Build** the site:
    ```bash
    npm run build
    ```
2.  **Serve** the `out` folder:
    ```bash
    npx serve out
    ```
    *(If asked to install `serve`, type `y` and Enter)*.

> Open the URL shown in the terminal (usually `http://localhost:3000`).

## 📁 Deployment
The project is configured for static hosting (e.g., Netlify Drop).
The build artifacts are located in the `out/` directory.
