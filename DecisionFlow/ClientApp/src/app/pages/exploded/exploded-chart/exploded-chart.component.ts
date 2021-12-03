import { Component, OnInit, ViewChild } from '@angular/core';
import * as dummyData from './ExplodedExample3.json';
import { ExplodedService, Customer, Population } from '../exploded.service';
import { FilterService } from 'src/app/shared/services/filter.service';
import * as moment from 'moment';
import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";

@Component({
  selector: 'app-exploded-chart',
  templateUrl: './exploded-chart.component.html',
  styleUrls: ['./exploded-chart.component.scss']
})
export class ExplodedChartComponent implements OnInit {
  @ViewChild(DxTreeListComponent, { static: false }) treeList!: DxTreeListComponent;
  tasks!: Task[];
  popupVisible = true;
  customers!: Customer[];
  populationData!: Population[];
  longtabs: any[] = [
    { text: "Stock/Open Order" },
    { text: "Planned Delivery" },
    { text: "Future Tab 3" },
    { text: "Future Tab 4"}
  ];
  selectedIndex!: number;
  tabContent: string = "Stock/Open Order";
  // employees!: Employee[];
  // priorities!: Priority[];
  statuses!: string[];
  jsonData!: any[];
  fullOptions: any;
  levelOptions: any;
  constrainingOptions: any;
  gridOptions: any;
  gantOptions: any;
  fullStyle = "default"
  levelStyle = "normal"
  constrainStyle = "normal"
  isHierarchy = true;
  isGant = false;
  isFullyExpanded = true;
  filterValue: any;
  selectedDates: any = moment().startOf('month') ;
  

  constructor(service: ExplodedService, private _filterService: FilterService) {
    this.populationData = service.getPopulationData();
    this.selectedIndex = 0;
    this.customers = service.getCustomers();
    this.jsonData = JSON.parse(JSON.stringify(dummyData))["default"];
    // this.jsonData.map((t) => console.log(t.ComponentID))
    this.fullOptions = {
      text: "Fully Expanded",
      stylingMode: "contained",
      type: "normal",
      onClick: (e: any) => {
        this.isFullyExpanded = true;
        // e.component.option("type", "default")
      },
    };

    this.levelOptions = {
      text: "Level 0 & 1",
      stylingMode: "contained",
      type: "normal",
      onClick: (e: any) => {
        this.isFullyExpanded = false;
        // e.component.option("type", "default")
        console.log(this.levelStyle, 'constrain style')
        this.collapseLevels()
      },
    };
  
  
  this.constrainingOptions = {
    text: "Contstraining Parts",
    stylingMode: "contained",
    type:"normal",
    onClick: (e: any) => {
      this.isFullyExpanded = false;
    
    },
  }

  this.gridOptions = {
    icon: "hierarchy",
    stylingMode: "contained",
    type: "normal",
    onClick: () => {
      this.isHierarchy = true;
      this.isGant = false;
    },
  }

  this.gantOptions = {
    icon: "event",
    stylingMode: "contained",
    type: "normal",
    onClick: () => {
      this.isHierarchy = false;
      this.isGant = true;
    },
  }


};

selectTab(e: any) {
  this.tabContent = e.itemData.text; 
  console.log(this.tabContent, 'clicked', e)
}

unSelect = (e: any) => {
  e.component.option("type", "normal")
}


  ngOnInit(): void {
    this._filterService.currentFilterValue.subscribe((filter: any) => {
      this.filterValue = filter;
      console.log(filter)

      // setTimeout(() => {
      //   let columns = this.treeList.instance.getVisibleColumns()
      //   columns.map((d: any) => {
      //     if( d.name == "Level"){
      //       console.log(d, 'the column')
      //     }
      //   })
      // }, 1500)

      console.log(this.jsonData, 'the data')

 
      
    })
  }

  collapseLevels(){
    this.jsonData.map((d: any, index) => {

      if(d.Level == 1){
        console.log(index)
   
      
          this.treeList.instance.collapseRow(index + 1)
      
       
      }
    })
  }

  getCompletionText(cellInfo: any) {
    return cellInfo.valueText + "%";
  }

}