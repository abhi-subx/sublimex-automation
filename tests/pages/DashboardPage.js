import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
    
    constructor(page) {
        
        super(page);

        this.welcomeMessage = page.getByTestId('welcome-text');
        this.logoutButton = page.getByTestId('logout-button');
    }

    async verifyDashboard() {
        await expect(this.welcomeMessage).toContainText('Admin');
    }

    async logout() {
        await this.logoutButton.click();
    }

}