import { test, expect } from '@playwright/test';
import loginData from '../testData/loginData.json'
import { DashboardPage } from '../pages/DashboardPage';
import { LoginPage } from '../pages/LoginPage';

test('TC05 - Verify Dashboard page is visibile after login', async ({ page }) => {
    await page.goto('');
    const Login = new LoginPage(page);

    await Login.login(loginData.validLogin.username,
      loginData.validLogin.password);

    const Dashboard = new DashboardPage(page);
    await expect(Dashboard.dashboardHeader).toBeVisible();
});
