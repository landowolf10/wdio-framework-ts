import { sharedConfig } from './wdio.shared.conf';

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    services: [['browserstack', { browserstackLocal: true, opts: {} }]],
    tsConfigPath: './tsconfig.json',
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',
    path: '/wd/hub',
    port: 443,
    capabilities: [
        // ANDROID
        {
            platformName: 'android',
            'appium:automationName': 'UiAutomator2',
            'appium:app': process.env.BROWSERSTACK_APP_ANDROID,
            'bstack:options': {
                buildName: 'Login Android',
                projectName: 'Android Samsung S22 Ultra',
                deviceName: 'Samsung Galaxy S22 Ultra',
                platformVersion: '12.0',
                sessionName: 'Android S22 Test',
                gpsLocation: '-82.50, 41.41'
            },
        },
        {
            platformName: 'android',
            'appium:automationName': 'UiAutomator2',
            'appium:app': process.env.BROWSERSTACK_APP_ANDROID,
            'bstack:options': {
                buildName: 'Login Android',
                projectName: 'Android Samsung S24',
                deviceName: 'Samsung Galaxy S24 Ultra',
                platformVersion: '14.0',
                sessionName: 'Android S24 Test',
                gpsLocation: '-82.50, 41.41'
            }
        },
        // iOS
        /*{
            platformName: 'ios',
            'appium:automationName': 'XCUITest',
            'appium:app': process.env.BROWSERSTACK_APP_IOS,
            'bstack:options': {
                deviceName: 'iPhone 15',
                osVersion: '17.0',
                projectName: 'Mobile Automation',
                buildName: 'Android + iOS Parallel',
                sessionName: 'iOS iPhone 15 Test'
            }
        },
        // iOS 2
        {
            platformName: 'ios',
            'appium:automationName': 'XCUITest',
            'appium:app': process.env.BROWSERSTACK_APP_IOS,
            'bstack:options': {
                deviceName: 'iPhone 14 Pro',
                osVersion: '16.0',
                projectName: 'Mobile Automation',
                buildName: 'Android + iOS Parallel',
                sessionName: 'iOS 14 Pro Test'
            }
        }*/
    ]
}