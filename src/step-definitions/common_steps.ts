import { Given } from '@wdio/cucumber-framework';
import LoginPage from '../pages/login.page.ts';

Given("app was opened", async () => {
    await LoginPage.homeButtonDisplayed();
});