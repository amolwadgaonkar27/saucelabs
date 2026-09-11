import { test, expect } from '@playwright/test';

test.beforeEach('Login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
});

test('TC06 - Verify user can sort items from Z to A', async ({ page }) => {
    await page.getByRole('combobox', {name: 'Sort products'}).selectOption('za');
    await expect(page.getByText("Test.allTheThings() T-Shirt (Red)")).toBeVisible();;
});

test('TC07 - Verify user can sort items from low to high', async ({ page }) => {
    await page.getByRole('combobox', { name: 'Sort products' }).selectOption('lohi');
    await expect(page.getByText('$7.99')).toBeVisible();
});

test('TC08 - Verify user can sort items from high to low', async ({ page }) => {
    await page.getByRole('combobox', { name: 'Sort products '}).selectOption('hilo');
    await expect(page.getByText('$49.99')).toBeVisible();
});

test('TC09 - Verify user can sort items from A to Z', async ({ page }) => {
    await page.getByRole('combobox', { name: 'Sort products' }).selectOption('az');
    await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
});