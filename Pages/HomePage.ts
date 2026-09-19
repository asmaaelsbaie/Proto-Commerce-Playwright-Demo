import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  private readonly nameInputField: Locator;
  private readonly emailInputField: Locator;
  private readonly passwordInputField: Locator;
  private readonly checkBoxInputField: Locator;
  private readonly genderSelectorField: Locator;
  private readonly employeeStatusRadioButton: Locator;
  private readonly submitButton: Locator;
  private readonly sucessMassage:Locator;
  private readonly shoplinkLocator;


  constructor(page: Page, statusSelector: string) {
    super(page);
    this.nameInputField = page.locator('form input[name="name"]');
    this.emailInputField = page.locator('[name="email"]');
    this.passwordInputField = page.getByPlaceholder('Password');
    this.checkBoxInputField = page.getByRole('checkbox', { name: 'Check me out if you Love IceCreams!' });
    this.genderSelectorField = page.getByRole('combobox', { name: 'Gender' });
    this.employeeStatusRadioButton = page.getByRole('radio', { name: statusSelector });
    this.submitButton = page.getByRole('button', { name: 'submit' });
    this.shoplinkLocator = page.getByRole("link", { name: "Shop" });
    this.sucessMassage=page.getByText('Success!');



  }

  async enterName(username: string): Promise<void> {

    await this.nameInputField.fill(username);
  }
  async enterEmail(email: string): Promise<void> {
    await this.emailInputField.fill(email);
  }
  async enterPassword(password: string): Promise<void> {
    await this.passwordInputField.fill(password);
  }
  async clickOnCheckBox(): Promise<void> {
    await this.checkBoxInputField.click();
  }
  async SelectGender(gender: string): Promise<void> {
    await this.genderSelectorField.selectOption(gender);
  }
  async selectStatus(): Promise<void> {
    await this.employeeStatusRadioButton.click();
  }
  async clickOnSubmit(): Promise<void> {
    await this.submitButton.click();
  }
  async clickOnShopLink(): Promise<void> {
    await this.shoplinkLocator.click();
  }
  async checkSuccessMassege():Promise<void>{
    await expect(this.sucessMassage).toBeVisible();
  }
}