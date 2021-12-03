import { Component, OnInit, Inject } from '@angular/core';
import { ExplodedService, Customer } from '../exploded.service';
import { FilterService } from 'src/app/shared/services/filter.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-top-exploded-panel',
  templateUrl: './top-exploded-panel.component.html',
  styleUrls: ['./top-exploded-panel.component.scss']
})
export class TopExplodedPanelComponent implements OnInit {
  filterValue: any;
  popupVisible = true;
  selectedDates: any;
  baseUrl: any;
  deliverablesItems: any;
customers!: Customer[];
longtabs: any[] = [
  { text: "Deliveries" },
  { text: "Inventory" },
  { text: "Performance" },
  { text: "Custom"}
];

  constructor(
    private _explodedService: ExplodedService, 
    private _filterService: FilterService,
    private httpClient: HttpClient,
    @Inject('BASE_URL') baseUrl: string
    ) { 
      this.baseUrl = baseUrl;
      this.customers = _explodedService.getCustomers();
    }

  getDeliverablesData(body: any){
    return this._explodedService.getTopPanelData(this.httpClient, this.baseUrl + "api/ExplodedView/GetAllDeliverables", body)
  }

  ngOnInit() {
    this._filterService.currentFilterValue.subscribe((filter: any) => {
      this.filterValue = filter;
      this.getDeliverablesData(filter).then((d: any) => {
        this.deliverablesItems = d;
        console.log( d )
      });

   
    })
  }
}
