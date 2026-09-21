import { test, expect } from '@playwright/test';
import loginData from '../testData/loginData.json'
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import formData from '../testData/formData.json'

test.beforeEach('Open Saucedemo site', async ({ page }) => {
    await page.goto('');
});

test.beforeEach('Login', async ({ page }) => {

    const Login = new LoginPage(page);

    await Login.login(loginData.validLogin.username,
        loginData.validLogin.password);
});

test.beforeEach('Cart', async ({ page }) => {

    const Dashboard = new DashboardPage(page);
    await Dashboard.clickAddToCartButton();
    await Dashboard.clickCartButton();

    const Cart = new CartPage(page);
    await Cart.clickCheckoutButton();

});

test('TC012 - Verify user can fill the information form', async ({ page }) => {

    const Checkout = new CheckoutPage(page);
    await expect(Checkout.checkoutHeader).toBeVisible();
    await Checkout.fillInfo(formData.firstName, formData.lastName, formData.zipCode);
});

test('TC013 - Verify user gets error without filling the information after clicking on continue', async ({ page }) => {

    const Checkout = new CheckoutPage(page);
    await Checkout.clickContinueButton();
    await expect(Checkout.errorMessage).toBeVisible();
});