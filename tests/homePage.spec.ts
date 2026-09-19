import { test } from '@playwright/test';
import { HomePageSteps } from '../Steps/HomePageSteps';


test("enter Student Data ", async ({ page }) => {
  const homePageSteps = new HomePageSteps(page);
  await homePageSteps.openPage();
  await homePageSteps.enterStudentData("Asmaa", "1234", "Asmaa00@gmail.com", "Female");
  await homePageSteps.checkDataSubmitted();
 



}

);