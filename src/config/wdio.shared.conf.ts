import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export const sharedConfig: WebdriverIO.Config = {
    runner: 'local',
    specs: [path.join(process.cwd(), 'src/features/**/*.feature')],
    exclude: [],
    maxInstances: Number(process.env.CONCURRENCY || 4),
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec', ['allure', { outputDir: 'allure-results', disableWebdriverStepsReporting: true }]],
    cucumberOpts: {
        require: [path.join(process.cwd(), 'src/step-definitions/**/*.ts')],
        backtrace: false,
        requireModule: ['ts-node/register'],
        timeout: 60000,
        failFast: false,
        snippets: true,
        source: true,
        strict: false
    },
    beforeSession: function () {
        require('ts-node').register({ project: path.join(process.cwd(), 'tsconfig.json') });
    }
};