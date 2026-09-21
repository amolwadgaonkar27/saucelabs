import { test, expect } from '@playwright/test';
import loginData from '../testData/loginData.json'
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test.beforeEach('Open Saucedemo site', async ({ page }) => {
    await page.goto('');
});

test.beforeEach('Login', async ({ page }) => {

    const Login = new LoginPage(page);

    await Login.login(loginData.validLogin.username,
        loginData.validLogin.password);
});

test('TC06 - Verify user can sort items from Z to A', async ({ page }) => {

    const Dashboard = new DashboardPage(page);

    await Dashboard.selectSortOption('za');
    await expect(Dashboard.lastProductBeFirst).toBeVisible();
});

test('TC07 - Verify user can sort items from low to high', async ({ page }) => {

    const Dashboard = new DashboardPage(page);

    await Dashboard.selectSortOption('lohi');
    await expect(Dashboard.lowestPricedBeFirst).toBeVisible();
});

test('TC08 - Verify user can sort items from high to low', async ({ page }) => {
    const Dashboard = new DashboardPage(page);

    await Dashboard.selectSortOption('hilo');
    await expect(Dashboard.highestPricedBeFirst).toBeVisible();
});

test('TC09 - Verify user can sort items from A to Z', async ({ page }) => {

    const Dashboard = new DashboardPage(page);

    await Dashboard.selectSortOption('az');
    await expect(Dashboard.firstProduct).toBeVisible();
});