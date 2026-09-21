exports.CheckoutPage = class CheckoutPage {

    constructor(page) {
        this.page = page;
        this.checkoutHeader = page.getByText('Checkout: Your Information');
        this.nameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.zipCodeInput = page.getByPlaceholder('Zip/Postal Code');
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.errorMessage = page.getByRole('alert');
    }

    async isCheckoutheaderVisible() {
        return await this.checkoutHeader.isVisible();
    }

    async fillInfo(firstName, lastName, zipCode) {
        await this.nameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.zipCodeInput.fill(zipCode);
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }

    async isErrorMessageVisisble() {
        return await this.errorMessage.isVisible();
    }
}