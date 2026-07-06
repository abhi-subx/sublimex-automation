import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { users } from '../fixtures/testData';

test.describe('Dashboard Tests', () => {
    let login;
    let dashboard;

    test.beforeEach(async({page}) =>{
        login = new LoginPage(page);
        dashboard = new DashboardPage(page);

        await login.goto();
        await login.login(users.admin.email, users.admin.password);

        await expect(page).toHaveURL('/dashboard');
    })

    test('Logout', async() => {    
        await dashboard.logout();
    })

});
