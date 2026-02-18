import { chromium } from 'playwright';
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

if(!process.env.BASE_URL) {
  // When not running on Github Actions, use localhost
  process.env.BASE_URL = "http://localhost:4321"
}

test('matches full layout', async ({ page }) => {
  await page.goto(process.env.BASE_URL);
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveScreenshot(
    'styled_page.png',
    {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
      animations: 'disabled'
    }
  );
});

test('matches header', async ({ page}) =>{
  await page.goto(process.env.BASE_URL);
  await expect(page.locator('header')).toHaveScreenshot(
    'header.png', 
    {maxDiffPixelRatio: 0.05}
  );
});


test('matches image columns', async ({ page}) =>{
  await page.goto(process.env.BASE_URL);
  await expect(page.locator('.full__three_column').first()).toHaveScreenshot(
    'three_by_three_img.png', 
    {maxDiffPixelRatio: 0.05}
  );
});

test('matches purple band', async ({ page}) =>{
  await page.goto(process.env.BASE_URL);
  await expect(page.locator('.full__purple_band')).toHaveScreenshot(
    'purple_band.png', 
    {maxDiffPixelRatio: 0.05}
  );
});

test('matches news columns', async ({ page}) =>{
  await page.goto(process.env.BASE_URL);
  await expect(page.locator('.full__four_column')).toHaveScreenshot(
    'four_by_four_news.png', 
    {maxDiffPixelRatio: 0.05}
  );
});

test('has title', async ({ page }) => {
  await page.goto(process.env.BASE_URL);
  await expect(page).toHaveTitle(/Lorem Ipsum/);
});

test('has h1 centered', async ({ page }) => {
  await page.goto(process.env.BASE_URL);
  await expect(page.getByRole('heading', { name: 'Lorem Ipsum', level: 1 })).toHaveClass('centered');
});

test('has h2 centered', async ({ page }) => {
  await page.goto(process.env.BASE_URL);
  await expect(page.getByRole('heading', { name: 'News Ipsum', level: 2 })).toHaveClass('centered');
});

test('passes WCAG A and AA standards', async ({page}) => {
  await page.goto(process.env.BASE_URL);
  const accessibilityScanResults = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});