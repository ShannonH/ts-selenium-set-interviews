import { browser } from 'protractor';
import { LoginPage } from '../page_objects/login_page';

const ultraAdminUsername = browser.params.adminUsername;
const ultraAdminPassword = browser.params.adminPassword;

describe('The login page', () => {
  it('allows users to login', () => {
    browser.get(browser.baseUrl);
    const loginPage = new LoginPage();
    loginPage
      .logIntoUltra(ultraAdminUsername,ultraAdminPassword)
      .assertLoggedInSuccess()
  });
})
