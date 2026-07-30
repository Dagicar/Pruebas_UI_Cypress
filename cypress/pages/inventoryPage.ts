export class InventoryPage {
  // Selectores
  private pageTitle = '.title';
  private backpackAddToCartButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
  private cartBadge = '.shopping_cart_badge';

  // Acciones y Validaciones
  public checkTitle(expectedTitle: string): void {
    cy.get(this.pageTitle).should('have.text', expectedTitle);
  }

  public addBackpackToCart(): void {
    cy.get(this.backpackAddToCartButton).click();
  }

  public checkCartBadge(expectedCount: string): void {
    cy.get(this.cartBadge).should('have.text', expectedCount);
  }
}