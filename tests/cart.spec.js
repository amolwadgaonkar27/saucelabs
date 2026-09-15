import { test, expect } from '@playwright/test';
import loginData from '../testData/loginData.json'

test.beforeEach('Login', async ({ page }) => {
    await page.goto('');
    await page.getByPlaceholder('Username').fill(loginData.validLogin.username);
    await page.getByPlaceholder('Password').fill(loginData.validLogin.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.getByRole('button', { name: 'Cart, 1 items' }).click();
});

test('TC010 - Verify user can add items to cart and go to checkout page', async ({ page }) => {
    await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
});

test('TC011 - Verify user can remove items from cart and go back to dashboard page', async ({ page }) => {
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await page.getByRole('button', { name: 'Continue Shopping' }).click();
    await expect(page.getByText('Products')).toBeVisible();
});
