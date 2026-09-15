import { test, expect } from '@playwright/test';
import loginData from '../testData/loginData.json'

test('TC05 - Verify Dashboard page is visibile after login', async ({ page }) => {
  await page.goto('');
 await page.getByPlaceholder('Username').fill(loginData.validLogin.username);
    await page.getByPlaceholder('Password').fill(loginData.validLogin.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Swag Labs')).toBeVisible();
});
