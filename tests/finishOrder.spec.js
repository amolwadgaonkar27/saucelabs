import { test, expect } from '@playwright/test';
import loginData from '../testData/loginData.json'
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import formData from '../testData/formData.json'
import { OverviewPage } from '../pages/OverviewPage';
import { OrderCompletePage } from '../pages/OrderCompletePage';

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

test.beforeEach('Fill Info', async ({ page }) => {

  const Checkout = new CheckoutPage(page);
  await Checkout.fillInfo(formData.firstName, formData.lastName, formData.zipCode);
  await Checkout.clickContinueButton();

});

test('TC014 - Verify user can go to checkout overview page', async ({ page }) => {

  const Overview = new OverviewPage(page);
  await expect(Overview.overviewheader).toBeVisible();
});

test('TC015 - Verify user can place order by clicking on Finish button', async ({ page }) => {

  const Overview = new OverviewPage(page);
  await Overview.clickFinishButton();

  const OrderComplete = new OrderCompletePage(page);
  await expect(OrderComplete.orderCompleteHeader).toBeVisible();
});