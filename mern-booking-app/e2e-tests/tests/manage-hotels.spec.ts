import { test, expect } from "@playwright/test";
import path from "path";

//cd frontend: npm run dev, backend: npm run e2e
const UI_URL = "http://localhost:5173/";

// firstly, login in to test add-hotel
test.beforeEach(async ({ page }) => {
  await page.goto(UI_URL);

  // get the sign in button
  await page.getByRole("link", { name: "Sign In" }).click();

  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();

  await page.locator("[name=email]").fill("langke1532@gmail.com");
  await page.locator("[name=password]").fill("123456");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Sign in Successful!")).toBeVisible();
});

test("should allow user to add a hotel", async ({ page }) => {
  //go to the add-hotel page
  await page.goto(`${UI_URL}add-hotel`);

  await page.locator('[name="name"]').fill("Test Hotel");
  await page.locator('[name="city"]').fill("Test City");
  await page.locator('[name="country"]').fill("Test Country");
  await page
    .locator('[name="description"]')
    .fill("This is a description for the Test Hotel");
  await page.locator('[name="pricePerNight"]').fill("100");
  await page.selectOption('[name="starRating"]', "4");

  await page.getByText("Budget").click();

  await page.getByLabel("Free WiFi").check();
  await page.getByLabel("Parking").check();
  await page.getByLabel("Airport Shuttle").check();

  await page.locator('[name="adultCount"]').fill("2");
  await page.locator('[name="childCount"]').fill("2");

  await page.setInputFiles('[name="imageFiles"]', [
    path.join(__dirname, "files", "1.jpg"),
    path.join(__dirname, "files", "2.jpg"),
  ]);

  await page.getByRole("button", { name: "Save" }).click();

  await expect(page.getByText("Hotel Saved!")).toBeVisible();
});

test("should display hotels", async ({ page }) => {
  await page.goto(`${UI_URL}my-hotels`);

  await expect(page.getByText("ocean")).toBeVisible();
  await expect(page.getByText("brand new hotel")).toBeVisible();
  await expect(page.getByText("sydney, australia")).toBeVisible();
  await expect(page.getByText("Beach Resort")).toBeVisible();
  await expect(page.getByText("$186 per night")).toBeVisible();
  await expect(page.getByText("2 adults, 3 children")).toBeVisible();
  await expect(page.getByText("4 Star Rating")).toBeVisible();

  await expect(
    page.getByRole("link", { name: "View Details" }).first()
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Add Hotel" })).toBeVisible();
});

test("should edit hotel", async ({ page }) => {
  await page.goto(`${UI_URL}my-hotels`);

  await page.getByRole("link", { name: "View Details" }).click();

  await page.waitForSelector('[name="name"]', { state: "attached" });
  await expect(page.locator('[name="name"]')).toHaveValue("large hotel");
  await page.locator('[name="name"]').fill("large hotel UPDATED");
  await page.getByRole("button", { name: "Save" }).click();
  await expect(page.getByText("Hotel Saved!")).toBeVisible();

  // reset the hotel name to previous one
  await page.reload();
  await expect(page.locator('[name="name"]')).toHaveValue(
    "large hotel UPDATED"
  );
  await page.locator('[name="name"]').fill("large hotel");
  await page.getByRole("button", { name: "Save" }).click();
});
