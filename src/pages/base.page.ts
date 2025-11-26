export default class BasePage {
    async waitForVisible(element: WebdriverIO.Element, timeout = 10000) {
        await element.waitForDisplayed({
            timeout,
            timeoutMsg: `❌ Element ${element.selector} not visible after ${timeout}ms`
        });
    }

    async waitForEnabled(element: WebdriverIO.Element, timeout = 10000) {
        await element.waitForEnabled({
            timeout,
            timeoutMsg: `❌ Element ${element.selector} not enabled after ${timeout}ms`
        });
    }

    async waitForExist(element: WebdriverIO.Element, timeout = 10000) {
        await element.waitForExist({
            timeout,
            timeoutMsg: `❌ Element ${element.selector} did not exist after ${timeout}ms`
        });
    }

    async clickElement(element: WebdriverIO.Element, timeout = 10000) {
        await this.waitForVisible(element, timeout);
        await this.waitForEnabled(element, timeout);

        await element.click();
    }

    async setValue(element: WebdriverIO.Element, text: string, timeout = 10000) {
        await this.waitForVisible(element, timeout);
        await this.waitForEnabled(element, timeout);

        await element.setValue(text);
    }

    async getText(element: WebdriverIO.Element, timeout = 10000): Promise<string> {
        await this.waitForVisible(element, timeout);
        return element.getText();
    }

    async waitForText(element: WebdriverIO.Element, expected: string, timeout = 10000) {
        await browser.waitUntil(
            async () => (await element.getText()) === expected,
            {
                timeout,
                timeoutMsg: `❌ Expected text "${expected}" not found in ${element.selector}`
            }
        );
    }

    async pause(ms: number) {
        await browser.pause(ms);
    }
}