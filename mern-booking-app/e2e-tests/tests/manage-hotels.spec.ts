import { test, expect } from "@playwright/test";

const UI_URL = "http://localhost:5173/";

// firstly, login in to test add-hotel
test.beforeEach(async ({ page }) => {
  await page.goto(UI_URL);

  //sign in first
  await page.getByRole("link", { name: "Sign In" }).click();
  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();

  await page.locator("[name=emial]").fill("langke1532@gmail.com");
  await page.locator("[name=password]").fill("123456");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Sign in Successful!")).toBeVisible();
});
