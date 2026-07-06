import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
 
    constructor(page) {
        super(page);

        this.emailInput = page.getByTestId('email-input');
        this.passwordInput = page.getByTestId('password-input');
        this.loginButton = page.getByTestId('login-button');
    }

    async goto() {
        await this.page.goto('/');
    }

    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
