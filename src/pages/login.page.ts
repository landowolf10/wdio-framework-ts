import LoginLocators from "../locators/login_locators.ts";
import BasePage from "./base.page.ts";

let loginLocators: LoginLocators = new LoginLocators;

class LoginPage extends BasePage {
    public async homeButtonDisplayed () {
        await loginLocators.homeOption.isExisting();
    }

    public async writeCredentials (username: string, password: string) {
        await this.safeClick(loginLocators.loginOption);
        await this.safeSetValue(loginLocators.inputUsername, username);
        await this.safeSetValue(loginLocators.inputPassword, password);
    }

    public async pressLoginButton () {
        await this.safeClick(loginLocators.submitButton);
    }

    public async getLoginModalText() {
        await loginLocators.modalWindowLogin.waitForDisplayed({ timeout: 5000 })
        return await this.getText(loginLocators.modalWindowLogin);
    }
}

export default new LoginPage();