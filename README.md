# Portfolio Starter Kit

[![Gatorgrade](../../actions/workflows/grade.yml/badge.svg?branch=main)](../../actions/workflows/grade.yml)
[![Playwright Tests](../../actions/workflows/playwright.yml/badge.svg?branch=main)](../../actions/workflows/playwright.yml)

## Creating Pages in Astro

This project benchmark requires you to demonstrate learning in `astro`. Namely:

* create a base template:
  * use the template to control the information structure of your pages,
  * paying special attention to the contents and _kinds_ of information each page creates
* create `Navigation`, `Header`, and `Footer` components:
  * using `nav`, `header`, and `footer` elements
  * the `Navigation` control needs to feature at least a _Home_ and _About_ link
* integrate these components into your pages for a unified, cross-site experience
* adds content to these pages using `section`, `main`, and `p`, `img` (with alt text) tags appropriately
  * see our course textbook _The Coding Workbook_ for more on these tags

### Testing

To run tests for this assignment:
|Test |Command |
|:---------|:-------------------|
|gatorgrade|`uv run gatorgrade` |
|Playwright|`npx playwright test` |

## Evaluating your progress

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
