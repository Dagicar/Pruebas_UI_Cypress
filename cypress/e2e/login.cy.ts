import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';

describe('Pruebas de Inicio de Sesión usando Page Object Model', () => {

  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('Debe iniciar sesión exitosamente con credenciales válidas', () => {
    loginPage.login('standard_user', 'secret_sauce');
    // Forzamos el error para probar las evidencias
    inventoryPage.checkTitle('Products'); 
  });

  it('Debe mostrar error al ingresar credenciales incorrectas', () => {
    loginPage.login('usuario_invalido', 'clave_falsa');
    loginPage.checkErrorMessage('Epic sadface: Username and password do not match any user in this service');
  });

  it('Debe agregar un producto al carrito', () => {
    loginPage.login('standard_user', 'secret_sauce');
    inventoryPage.addBackpackToCart();
    inventoryPage.checkCartBadge('1');
  });

});