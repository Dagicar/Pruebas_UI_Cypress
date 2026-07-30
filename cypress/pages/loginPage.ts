export class LoginPage {
  // 1. Selectores de la página de Login
  private usernameInput = '[data-test="username"]';
  private passwordInput = '[data-test="password"]';
  private loginButton = '[data-test="login-button"]';
  private errorMessage = '[data-test="error"]';

  // 2. Métodos (Acciones)
  public visit(): void {
    cy.visit('https://www.saucedemo.com');
  }

  public enterUsername(username: string): void {
    cy.get(this.usernameInput).type(username);
  }

  public enterPassword(password: string): void {
    cy.get(this.passwordInput).type(password);
  }

  public clickLogin(): void {
    cy.get(this.loginButton).click();
  }

  // Método combinado para login rápido
  public login(username: string, password: string): void {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }

  // Aserción para errores
  public checkErrorMessage(expectedMessage: string): void {
    cy.get(this.errorMessage).should('have.text', expectedMessage);
  }
}