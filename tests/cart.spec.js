import { test, expect } from '@playwright/test';
import loginData from '../testData/loginData.json'
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { CartPage } from '../pages/CartPage';

test.beforeEach('Open Saucedemo site', async ({ page }) => {
    await page.goto('');
});

test.beforeEach('Login', async ({ page }) => {

    const Login = new LoginPage(page);

    await Login.login(loginData.validLogin.username,
        loginData.validLogin.password);
});

test('TC010 - Verify user can add items to cart and go to cart page', async ({ page }) => {

    const Dashboard = new DashboardPage(page);

    await Dashboard.clickAddToCartButton();
    await Dashboard.clickCartButton();

    const Cart = new CartPage(page);

    await expect(Cart.yourCartHeader).toBeVisible();
});

test('TC011 - Verify user can remove items from cart and go back to dashboard page', async ({ page }) => {

    const Dashboard = new DashboardPage(page);

    await Dashboard.clickAddToCartButton();
    await Dashboard.clickCartButton();

    const Cart = new CartPage(page);

    await Cart.clickRemoveButton();
    await Cart.verifyProductIsRemoved();
    await Cart.clickContinueShoppingButton();

    await expect(Dashboard.productsTitle).toBeVisible();
});