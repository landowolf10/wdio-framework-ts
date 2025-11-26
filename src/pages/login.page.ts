import LoginLocators from "../locators/login_locators.ts";
import BasePage from "./base.page.ts";

let loginLocators: LoginLocators = new LoginLocators;

class LoginPage extends BasePage {
    public async homeButtonDisplayed () {
        await loginLocators.homeOption.isExisting();
    }

    public async writeCredentials (username: string, password: string) {
        await this.clickElement(loginLocators.loginOption);
        await this.setValue(loginLocators.inputUsername, username);
        await this.setValue(loginLocators.inputPassword, password);
    }

    public async pressLoginButton () {
        await this.clickElement(loginLocators.submitButton);
    }

    public async getLoginModalText() {
        await loginLocators.modalWindowLogin.waitForDisplayed({ timeout: 5000 })
        return await this.getText(loginLocators.modalWindowLogin);
    }
}

export default new LoginPage();