exports.DashboardPage = class DashboardPage {

    constructor(page) {
        this.page = page;
        this.hamburgerMenu = page.getByRole('button', { name: 'Open Menu' });
        this.logoutButton = page.getByRole('button', { name: 'Logout' });
        this.dashboardHeader = page.getByText('Swag Labs');
        this.sortDropdrown = page.getByRole('combobox', { name: 'Sort products' });
        this.lastProductBeFirst = page.getByText('Test.allTheThings() T-Shirt (Red)');
        this.lowestPricedBeFirst = page.getByText('$7.99');
        this.highestPricedBeFirst = page.getByText('$49.99');
        this.firstProduct = page.getByText('Sauce Labs Backpack');
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartButton = page.getByRole('button', { name: 'Cart, 1 items' });
        this.productsTitle = page.getByText('Products');
    }

    async clickHamburgerMenu() {
        await this.hamburgerMenu.click();
    }

    async clickLogoutButton() {
        await this.logoutButton.click();
    }

    async isDashboardHeaderVisible() {
        return await this.dashboardHeader.isVisible();
    }

    async selectSortOption(option) {
        await this.sortDropdrown.selectOption(option);
    }

    async isLastProductVisible() {
        return await this.lastProductBeFirst.isVisible();
    }

    async isLowestPricedProductVisible() {
        return await this.lowestPricedBeFirst.isVisible();
    }

    async isHighestPricedProductVisible() {
        return await this.highestPricedBeFirst.isVisible();
    }

    async isFirstProductVisible() {
        return await this.firstProduct.isVisible();
    }

    async clickAddToCartButton() {
        await this.addToCartButton.click();
    }

    async clickCartButton() {
        await this.cartButton.click();
    }

    async isProductsTitleVisible() {
        return await this.productsTitle.isVisible();
    }
}