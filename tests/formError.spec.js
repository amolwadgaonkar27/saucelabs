import { test, expect } from '@playwright/test';
import loginData from '../testData/loginData.json'

test.beforeEach('Login/Add to Cart', async ({ page }) => {
    await page.goto('');
    await page.getByPlaceholder('Username').fill(loginData.validLogin.username);
    await page.getByPlaceholder('Password').fill(loginData.validLogin.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.getByRole('button', { name: 'Cart, 1 items' }).click();
});

test('TC013 - Verify error message without filling the form', async ({ page }) => {
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('button', { name: 'Dismiss Error' })).toBeVisible();
});