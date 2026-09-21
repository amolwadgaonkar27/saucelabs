import { test, expect } from '@playwright/test';
import loginData from '../testData/loginData.json'
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test.beforeEach('Open saucedemo site', async ({ page }) => {
    await page.goto('');
});

test('TC01 - Verify user can login with valid creds', async ({ page }) => {

    const Login = new LoginPage(page);

    await Login.login(loginData.validLogin.username,
        loginData.validLogin.password);
});

test('TC02 - Verify user cannot login with invalid creds - wrong password', async ({ page }) => {

    const Login = new LoginPage(page);

    await Login.login(loginData.invalidLogin1.username,
        loginData.invalidLogin1.password);

    await expect(Login.errorMessage).toBeVisible();
});

test('TC03 - Verify user cannot login with invalid creds - wrong username', async ({ page }) => {

    const Login = new LoginPage(page);

    await Login.login(loginData.invalidLogin2.username,
        loginData.invalidLogin2.password);

    await expect(Login.errorMessage).toBeVisible();
});

test('TC04 - Verify user can logout from the application', async ({ page }) => {

    const Login = new LoginPage(page);

    await Login.login(loginData.validLogin.username,
        loginData.validLogin.password);

    const Dashboard = new DashboardPage(page);

    await Dashboard.clickHamburgerMenu();
    await Dashboard.clickLogoutButton();
});

