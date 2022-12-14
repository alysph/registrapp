import { Component, OnDestroy, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.scss'],
})
export class DocenteComponent implements OnInit, OnDestroy {

  qrCodeString = 'Asistencia registrada con éxito'
  scannedResult: any;

  constructor() { }

  ngOnInit() {}

  async checkPermission(){
    try {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        return true;
      }
      return false;
    } catch(e){
      console.log(e);
    }
  }

  async startScan(){
    try {
      const permission = await this.checkPermission();
      if(!permission) {
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body').classList.add('scanner-active');
      const result = await BarcodeScanner.startScan();
      console.log(result);
      if(result?.hasContent) {
        this.scannedResult = result.content;
        BarcodeScanner.showBackground();
        document.querySelector('body').classList.remove('scanner-active');
        console.log(this.scannedResult);
      }
    } catch(e) {
      console.log(e);
      this.stopScan();
    }
  }

  stopScan(){
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-active');
  }

  ngOnDestroy(): void {
    this.stopScan();
  }

}
