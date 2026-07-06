import { test } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {DashboardPage} from '../pages/DashboardPage';

import {users} from '../fixtures/testData';

test("Valid Login", async({page}) =>{

    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);

    await login.goto();
    await login.login(
        users.admin.email,
        users.admin.password
    );
    
    await dashboard.verifyDashboard();
    
})
