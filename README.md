# Portfolio Starter Kit

| Date              |           |
|:------------------|:----------|
| 11 February 2026   | Assigned  |
| 25 February 2026   | Due       |

## Asessment: Styling Pages in Astro

![](https://img.shields.io/badge/Assignment%20Type-Assessment-yellow)

This benchmark requires you to demonstrate learning in `astro`, `HTML`, and `CSS`.

### Products

#### On this branch

* finishing a collaborative activity with CSS, building a demo page
* implementing the `Excerpt.astro` component in the `index.astro` file and applying styles to it

#### On the `main` branch

* beginning to implement rough, but _accessible_ versions of your page wireframes with `HTML` and `CSS`
    * these can be `mdx` or `astro` files
    * these must implement styles in the `public/style/style.css` file
    * these must use a `BaseLayout`
* creating at least `3` `components` to use throughout your site
    * you're likely to create _more_ than that

This assessment is due later; some of the content you're responsible for will be covered
next week. To achieve this, you'll need to merge your `creating-pages-in-astro` branch with your
`main` branch to start the process of building out your portfolio.

### Challenge: Testing

![](https://img.shields.io/badge/Assignment%20Type-Challenge-blue)

Because your sites will use a wide variety of approaches, elements, and styles,
we need to meet to discuss a couple of things, namely:

* a `15` minute interview with the instructor (scheduled during instructor office hours before the `Assessment`'s due date), covering
  * discussion of our collaborate page building exercise completed as part of this activity
  * review of a single web page built for your portfolio and its accompanying wireframe
* an implemented draft portfolio test using a series of student-instructor developed `playwright` tests

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
│   └── style/
│       └── style.css
├── src/
│   └── components/
│   └── layouts/
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
