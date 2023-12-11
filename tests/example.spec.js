// @ts-check
const { test, expect } = require('@playwright/test');

test('Login with success', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');

  await page.getByRole('link', { name: 'Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
});
