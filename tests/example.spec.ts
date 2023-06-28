import { test, expect } from '@playwright/test';

test('Demo', async ({ page }) => {
  page.on('console', (consoleMessage) => {
    if (consoleMessage.type() === 'error') {
      throw "Error!"
    }
  })

  await page.goto('http://localhost:5173/');

  await page.reload()

  await page.getByTestId('start-page-commune-selection-input').locator('input').type('hi!');

  expect(true).toBe(true)
});

