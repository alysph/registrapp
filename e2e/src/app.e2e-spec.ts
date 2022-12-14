import { AppPage } from './app.po';

describe('Ejemplos de prueba', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Prueba Button', () => {
    page.navigateTo();
    expect(page.getButtonIniciarse()).toContain('Iniciar Sesión');
  });

  it('texto login', () =>{ 
    page.navigateTo();
    expect(page.getloginalumno()).toContain('user');

  });

  it('Prueba Inicio',  () => {
     page.navigateTo();
     expect(page.getInicio()).toContain('aplicación dedicada para facilitarla toma de asistencia, tanto al profesor como a lo alumnos');
  });

});