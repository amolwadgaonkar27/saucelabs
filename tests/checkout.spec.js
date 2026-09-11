import { test, expect } from '@playwright/test';

test.beforeEach('Login/Add to Cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
});

test.beforeEach('TC012 - Verify user can click on checkout button', async ({ page }) => {
    await page.locator('[data-test="checkout"]').click();
    await expect(page.locator('[data-test="secondary-header"]')).toBeVisible();
});

test('TC013 - Verify user can fill the information form', async ({ page }) => {
    await page.locator('[data-test="firstName"]').fill('Amol');
    await page.locator('[data-test="lastName"]').fill('Wadgaonkar');
    await page.locator('[data-test="postalCode"]').fill('111111');
});

test.beforeEach('Fill Form', async ({ page }) => {
    await page.locator('[data-test="firstName"]').fill('Amol');
    await page.locator('[data-test="lastName"]').fill('Wadgaonkar');
    await page.locator('[data-test="postalCode"]').fill('111111');
})

test('TC014 - Verify user can go to checkout overview page ', async ({ page }) => {
    await page.locator('[data-test="continue"]').click();
    await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
});

test('TC015 - Verify user can place order by clicking on Finish', async ({ page }) => {
    await page.locator('[data-test="continue"]').click();
    await expect(page.locator('[data-test="secondary-header"]')).toBeVisible();
    await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="secondary-header"]')).toBeVisible();
    await expect(page.locator('[data-test="complete-header"]')).toBeVisible();
});