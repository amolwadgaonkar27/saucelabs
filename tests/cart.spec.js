import { test, expect } from '@playwright/test';

test.beforeEach('Login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.getByText('Your Cart')).toBeVisible();
});

test('TC010 - Verify user can add items to cart and go to checkout page', async ({ page }) => {
    await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
});

test('TC011 - Verify user can remove items from cart and go back to dashboard page', async ({ page }) => {
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await page.getByRole('button', { name: 'Continue Shopping'}).click();
    await expect(page.getByText('Products')).toBeVisible();
});
