import { sharedConfig } from './wdio.shared.conf';
import path from 'path';

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    port: 4723,
    services: [['appium', { args: { address: '127.0.0.1', relaxedSecurity: false } }]],
    capabilities: [
        {
            platformName: 'Android',
            'appium:automationName': 'UiAutomator2',
            'appium:deviceName': 'Android Emulator',
            'appium:app': path.join(process.cwd(), 'apps', 'test-app.apk'),
            'appium:newCommandTimeout': 300
        }
    ]
};