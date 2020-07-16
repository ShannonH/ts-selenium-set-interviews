import { By, element, ElementFinder } from 'protractor';

export class LoginPage {
  rootElement: ElementFinder

  constructor() {
    this.rootElement = element(By.css('form[name="login"]'));
  }

  get usernameField(): ElementFinder { return element(By.name('user_id')) }
  get passwordField(): ElementFinder { return element(By.id('password')) }
  get ultraNavigation(): ElementFinder { return element(By.css('bb-base-layout')) }

  logIntoUltra(username: string, password: string) {
    this.setUsername(username);
    this.setPassword(password)
    this.rootElement.submit();
    return this;
  };

  assertLoggedInSuccess() {
    return this.ultraNavigation.isPresent();
  }

  private setUsername(username: string) {
    this.usernameField.sendKeys(username);
    return this;
  }

  private setPassword(password: string) {
    this.passwordField.sendKeys(password);
    return this;
  }

}
