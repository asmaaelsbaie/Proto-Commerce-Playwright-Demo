import test from "@playwright/test";
import { ShopPageSteps } from "../Steps/ShopPageSteps";
import { HomePageSteps } from "../Steps/HomePageSteps";

test("Add your selected items to cart", async ({ page }) => {
    const shopPageSteps = new ShopPageSteps(page);
    const homePageSteps = new HomePageSteps(page);
    await homePageSteps.openPage();
    await homePageSteps.enterStudentData("Asmaa", "1234", "Asmaa00@gmail.com", "Female");
    await homePageSteps.openShopPage();
    await shopPageSteps.AddItems("iphone X", "Blackberry")
    await shopPageSteps.checkItemsAddtoCart();
   
})