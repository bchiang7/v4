// @ts-check
import { test, expect } from '@playwright/test';

test('has Ben Arlanda header', async ({ page }) => {
  await page.goto('/');

  // Expect the page to have a heading with "Ben Arlanda"
  await expect(page.getByRole('heading', { name: 'Ben Arlanda' })).toBeVisible();
});

test('has correct page title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Ben Arlanda/);
});

test('has clickable "Check out my code!" link', async ({ page }) => {
  await page.goto('/');

  // Find the "Check out my code!" link
  const codeLink = page.getByRole('link', { name: 'Check out my code!' });

  // Verify the link is visible and clickable
  await expect(codeLink).toBeVisible();
  await expect(codeLink).toBeEnabled();

  // Verify the link has the correct href
  await expect(codeLink).toHaveAttribute('href', 'https://github.com/Ben-Arlanda');

  // Verify the link opens in a new tab
  await expect(codeLink).toHaveAttribute('target', '_blank');
});

test('project image overlay disappears on hover', async ({ page }) => {
  await page.goto('/');

  // Find the first project image link in the featured section
  const projectImageLink = page.locator('#projects .project-image a').first();

  // Verify the project image link is visible
  await expect(projectImageLink).toBeVisible();

  // Hover over the project image
  await projectImageLink.hover();

  // Wait a bit for the transition to complete
  await page.waitForTimeout(300);

  // Check that the overlay becomes transparent on hover
  const overlayStyles = await projectImageLink.evaluate(el => {
    const before = window.getComputedStyle(el, '::before');
    return {
      backgroundColor: before.backgroundColor,
    };
  });

  // Verify the overlay background becomes transparent on hover
  expect(overlayStyles.backgroundColor).toBe('rgba(0, 0, 0, 0)');
});
