import { test, expect } from '@playwright/test';
import loginData from '../testData/loginData.json'
import formData from '../testData/formData.json'

test.beforeEach('Login/Add to Cart', async ({ page }) => {
    await page.goto('');
    await page.getByPlaceholder('Username').fill(loginData.validLogin.username);
    await page.getByPlaceholder('Password').fill(loginData.validLogin.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.getByRole('button', { name: 'Cart, 1 items' }).click();
});

test.beforeEach('click on checkout button', async ({ page }) => {
    await page.getByRole('button', { name: 'Checkout' }).click();
    await expect(page.getByText('Checkout: Your Information')).toBeVisible();

});

test.beforeEach('Fill Form', async ({ page }) => {
    await page.getByPlaceholder('First Name').fill(formData.firstName);
    await page.getByPlaceholder('Last Name').fill(formData.lastName);
    await page.getByPlaceholder('Zip/Postal Code').fill(formData.zipCode);
});

test('TC014 - Verify user can go to checkout overview page', async ({ page }) => {
    await page.locator('[data-test="continue"]').click();
    await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
});

test('TC015 - Verify user can place order by clicking on Finish', async ({ page }) => {
    await page.locator('[data-test="continue"]').click();
    await expect(page.getByText('Checkout: Overview')).toBeVisible();
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await page.getByRole('button', { name: 'Finish' }).click();
    await expect(page.getByText('Checkout: Complete!')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Thank you for your order!' })).toBeVisible();
});