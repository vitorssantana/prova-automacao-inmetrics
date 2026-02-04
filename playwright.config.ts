import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: 'src/steps/*.ts',
  importTestFrom: 'src/fixtures.ts',
});

export default defineConfig({
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  testDir,
  reporter: 'html',
  timeout: 60000,
  use: {
    baseURL: 'https://www.advantageonlineshopping.com',
    trace: 'on',
    screenshot: 'on',
    headless: process.env.CI ? true : false,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});