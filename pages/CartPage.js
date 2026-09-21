const { expect } = require("@playwright/test");

exports.CartPage = class CartPage {

    constructor(page) {
        this.page = page;
        this.yourCartHeader = page.getByText('Your Cart');
        this.removeButton = page.getByRole('button', { name: 'Remove' });
        this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });
        this.removedProduct = page.getByText('Sauce Labs Backpack');
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    }

    async isYourCartHeaderVisible() {
        return await this.yourCartHeader.isVisible();
    }

    async clickRemoveButton() {
        await this.removeButton.click();
    }

    async clickContinueShoppingButton() {
        await this.continueShoppingButton.click();
    }

    async verifyProductIsRemoved() {
        return expect(this.removedProduct).not.toBeVisible();
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }


}