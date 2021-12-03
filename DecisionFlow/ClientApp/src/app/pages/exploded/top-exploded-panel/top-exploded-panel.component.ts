import { Component, OnInit } from '@angular/core';
import { ExplodedService, Customer } from '../exploded.service';

@Component({
  selector: 'app-top-exploded-panel',
  templateUrl: './top-exploded-panel.component.html',
  styleUrls: ['./top-exploded-panel.component.scss']
})
export class TopExplodedPanelComponent implements OnInit {

  popupVisible = true;
  selectedDates: any;
simpleProducts: string[] = [
  "Soft Cloth A",
  "SuperHD Video Player",
  "SuperPlasma 50",
  "SuperLED 50",
  "SuperLED 42",
  "SuperLCD 55",
  "SuperLCD 42",
  "SuperPlasma 65",
  "SuperLCD 70",
  "Projector Plus",
  "Projector PlusHT",
  "ExcelRemote IR",
  "ExcelRemote BT",
  "ExcelRemote IP"
];
customers!: Customer[];
longtabs: any[] = [
  { text: "Deliveries" },
  { text: "Inventory" },
  { text: "Performance" },
  { text: "Custom"}
];

  constructor(service: ExplodedService) { 
    this.customers = service.getCustomers();
  }

  ngOnInit() {
  }

}
