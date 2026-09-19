import { Page } from "@playwright/test";
import { ShopPage } from "../Pages/ShopPage";
export class ShopPageSteps {
    private readonly shopPage;

    constructor(page: Page) {

        this.shopPage = new ShopPage(page);

    }
    async AddItems(item1: string, item2: string): Promise<void> {
        await this.shopPage.addYourItems(item1);
        await this.shopPage.addYourItems(item2);
    }
    async checkItemsAddtoCart():Promise <void>{
        await this.shopPage.checkCartHave2Items();
    }
}