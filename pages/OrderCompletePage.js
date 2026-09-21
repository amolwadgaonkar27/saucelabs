exports.OrderCompletePage = class OrderCompletePage {

    constructor(page) {
        this.page = page;
        this.orderCompleteHeader = page.getByText('Checkout: Complete!');
    }

    async isOrderCompleteHeaderVisible() {
        return await this.orderCompleteHeader.isVisible();
    }
}