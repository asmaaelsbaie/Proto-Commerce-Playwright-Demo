import { type Page } from "@playwright/test";

export class BasePage {
    constructor(readonly page: Page) { }

    async openPage(): Promise<void> {
        await this.page.goto("https://rahulshettyacademy.com/angularpractice/");
    }
}