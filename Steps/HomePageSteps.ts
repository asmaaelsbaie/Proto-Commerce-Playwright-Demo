import { Page } from "@playwright/test";
import { HomePage } from "../Pages/HomePage";

export class HomePageSteps {
  
    private homePage: HomePage;

    constructor(page: Page) {
    
        this.homePage = new HomePage(page, "Student");

    }
    async openPage():Promise <void> {
        await this.homePage.openPage();
    }
    async enterStudentData(username: string, password: string, email: string, gender: string):Promise <void> {
        await this.homePage.enterName(username);
        await this.homePage.enterEmail(email);
        await this.homePage.enterPassword(password);
        await this.homePage.clickOnCheckBox();
        await this.homePage.selectGender(gender);
        await this.homePage.selectStatus();
        await this.homePage.clickOnSubmit();


    }
    async openShopPage(): Promise<void> {
        await this.homePage.clickOnShopLink();
    }
    async checkDataSubmitted():Promise <void>{
        await this.homePage.checkSuccessMessage();

    
    }
}