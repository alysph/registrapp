import { browser, by, element } from 'protractor';

export class AppPage {


  navigateTo() {
    return browser.get('/');
  }

  getButtonIniciarse() {
    return element(by.name('app-root ion-button')).getTagName();
  }

  getloginalumno(){
    return element(by.css('app-root h6')).getText();
  }

 getInicio() {
    return element(by.css('app-root h6')).getText();
  }



}

