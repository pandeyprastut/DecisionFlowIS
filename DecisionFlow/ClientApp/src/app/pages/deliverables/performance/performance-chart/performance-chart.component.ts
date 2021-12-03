import { Component, OnInit, Inject } from '@angular/core';
import { PerformanceService, Employee } from '../performance.service';
import { HttpClient } from '@angular/common/http';
import { FilterService } from 'src/app/shared/services/filter.service';


@Component({
  selector: 'app-performance-chart',
  templateUrl: './performance-chart.component.html',
  styleUrls: ['./performance-chart.component.scss']
})
export class PerformanceChartComponent implements OnInit {
  employees: Employee[];
  filterValue: any;
  materialDataSource: any;
  math = Math;
  baseUrl: any;

  constructor(
    private _performanceService: PerformanceService,
    private httpClient: HttpClient,
    private _filterService: FilterService,
    @Inject('BASE_URL') baseUrl: string
    ) { 
      this.baseUrl = baseUrl;
      this.employees = _performanceService.getEmployees();
    }
  calculateCellValue(data: any) {
    return [data.Title, data.FirstName, data.LastName].join(" ");
}

  ngOnInit(): void {
    this._filterService.currentFilterValue.subscribe((filter: any) => {
      this.filterValue = filter;
      console.log(filter, 'the filter value')
      this.materialDataSource = this.getGridData(filter)
      
    })
  }

  getGridData(body: any){
    return this._performanceService.getGridData(this.httpClient, this.baseUrl + "api/DeliverableView/GetPerformanceViewDataByFilter", body)
  }

}
