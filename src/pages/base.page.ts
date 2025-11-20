export default class BasePage {
    protected async safeClick(el: WebdriverIO.Element) {
        await el.waitForExist({ timeout: 5000 });
        await el.waitForDisplayed({ timeout: 5000 });
        await el.click();
    }

    protected async safeSetValue(el: WebdriverIO.Element, value: string) {
        await el.waitForExist({ timeout: 5000 });
        await el.waitForDisplayed({ timeout: 5000 });
        await el.setValue(value);
    }

    protected async getText(el: WebdriverIO.Element) {
        await el.waitForDisplayed({ timeout: 5000 });
        return await el.getText();
    }
}
