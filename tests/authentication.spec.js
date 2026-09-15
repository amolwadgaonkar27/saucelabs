import { test, expect } from '@playwright/test';
import loginData from '../testData/loginData.json'

test.beforeEach('Open saucedemo site', async({ page }) => {
    await page.goto('');
});

test('TC01 - Verify user can login with valid creds', async ({ page }) => {
    await page.getByPlaceholder('Username').fill(loginData.validLogin.username);
    await page.getByPlaceholder('Password').fill(loginData.validLogin.password);
    await page.getByRole('button', { name: 'Login' }).click();
});

test('TC02 - Verify user cannot login with invalid creds - wrong password', async ({ page }) => {
    await page.getByPlaceholder('Username').fill(loginData.invalidLogin1.username);
    await page.getByPlaceholder('Password').fill(loginData.invalidLogin1.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('alert')).toBeVisible();
});

test('TC03 - Verify user cannot login with invalid creds - wrong username', async ({ page }) => {
    await page.getByPlaceholder('Username').fill(loginData.invalidLogin2.username);
    await page.getByPlaceholder('Password').fill(loginData.invalidLogin2.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('alert')).toBeVisible();
});

test('TC04 - Verify user can logout from the application', async ({ page }) => {
    await page.getByPlaceholder('Username').fill(loginData.validLogin.username);
    await page.getByPlaceholder('Password').fill(loginData.validLogin.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('button', { name: 'Logout' }).click();
});

