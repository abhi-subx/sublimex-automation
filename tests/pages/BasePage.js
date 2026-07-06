export class BasePage {

    constructor(page) {
        this.page = page;
    }

    async waitForLoader() {
        // We'll implement this later
    }

    async waitForToast() {
        // We'll implement this later
    }

    async takeScreenshot(name) {
        await this.page.screenshot({
            path: `screenshots/${name}.png`
        });
    }

}