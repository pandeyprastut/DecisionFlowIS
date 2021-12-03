import { Component, OnInit } from '@angular/core';
import { PerformanceService } from '../performance.service';

@Component({
  selector: 'app-top-performance-panel',
  templateUrl: './top-performance-panel.component.html',
  styleUrls: ['./top-performance-panel.component.scss']
})
export class TopPerformancePanelComponent implements OnInit {
  isUnit = true;
  topPanelValues: any;
  flowBalance = 0;
  quality = 0;
  runTime = 0;
  velocity = 0;

  constructor(private _performanceService: PerformanceService) { }

  ngOnInit() {
    this._performanceService.currentTopPanelValue.subscribe((value: any) => {
      this.topPanelValues = value;

      if(value.length != 0){
        this.flowBalance = Math.ceil((value.flowBalanceGoodWeeksRollup/value.flowBalanceTotalWeeksRollup)*100);
        this.quality = Math.ceil(((value.qualityRollup - value.totalPieceCountNCRRollup)/value.qualityRollup) * 100);
        this.runTime = Math.ceil((value.entireBuildRunTime/value.entireBuildTotalTime)*100);
        this.velocity = Math.ceil((value.velocityRollup)/value.length);
      }
    })

  
  }

  toggleUnit(){
    this.isUnit = true;
  }
  toggleDollar(){
    this.isUnit = false;
  }

}
