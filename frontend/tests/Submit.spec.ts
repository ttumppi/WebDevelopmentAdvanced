import {test, expect} from "@playwright/test";

const appAddress = "http://localhost:5173";

test("Adding email to user field", async ({page}) => {
    const firstName = "Test";
    const lastName = "Tester";
    const email = "test@someDomain.com";

    await page.goto(appAddress);


    await page.getByLabel("First name").fill(firstName);
    await page.getByLabel("Last name").fill(lastName);
    await page.getByLabel("Email").fill(email);

    await page.click("button:has-text(\"Create\")");

    await page.waitForSelector(".users-table");

    const addedRow = page.locator(".users-table").last();

    await expect(addedRow).toContainText(`${firstName}`);
    
    await expect(addedRow).toContainText(`${email}`);
})