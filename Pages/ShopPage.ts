import { expect, Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";
export class ShopPage extends BasePage {


    private readonly appCardLocator:Locator;
    private readonly cartItemsLocator:Locator;
    constructor(page: Page) {
        super(page);

        this.appCardLocator = page.locator("app-card");
        this.cartItemsLocator=page.getByText(/Checkout/i);

    }
    async addYourItems(itemName: string) {
        await this.appCardLocator.filter({ hasText: itemName }).getByRole("button", { name: "Add" }).click();
    }
    async checkCartHave2Items():Promise <void>{
        await expect(this.cartItemsLocator).toContainText("2");
    }

}