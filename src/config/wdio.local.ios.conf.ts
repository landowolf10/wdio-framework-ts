import { sharedConfig } from './wdio.shared.conf';
import path from 'path';


export const config: WebdriverIO.Config = {
    ...sharedConfig,
    port: 4723,
    services: [['appium', { args: { address: '127.0.0.1' } }]],
    capabilities: [
        {
            platformName: 'iOS',
            'appium:automationName': 'XCUITest',
            'appium:deviceName': 'iPhone 14',
            'appium:platformVersion': '16.0',
            'appium:app': path.join(process.cwd(), 'apps', 'MyApp.app'),
            'appium:newCommandTimeout': 300
        }
    ]
};