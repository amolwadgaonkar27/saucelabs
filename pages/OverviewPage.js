exports.OverviewPage = class OverviewPage {

    constructor(page) {
        this.page = page;
        this.overviewheader = page.getByText('Checkout: Overview');
        this.finishButton = page.getByRole('button', { name: 'Finish' })
    }

    async isOverviewHeaderVisible() {
        return await this.overviewheader.isVisible();
    }

    async clickFinishButton() {
        await this.finishButton.click();
    }
}