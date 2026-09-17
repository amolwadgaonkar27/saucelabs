exports.DashboardPage = class DashboardPage {

    constructor(page) {
        this.page = page;
        this.hamburgerMenu = page.getByRole('button', { name: 'Open Menu' });
        this.logoutButton = page.getByRole('button', { name: 'Logout' });
        this.dashboardHeader = page.getByText('Swag Labs');
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
}