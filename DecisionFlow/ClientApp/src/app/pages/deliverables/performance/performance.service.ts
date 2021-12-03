import { Injectable } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export class Employee {
    ID!: number;
    FirstName!: string;
    LastName!: string;
    Position!: string;
    BirthDate!: string;
    HireDate!: string;
    Title!: string;
    Address!: string;
    City!: string;
    State!: string;
    Zipcode!: number;
    Email!: string;
    Skype!: string;
    HomePhone!: string;
    DepartmentID!: number;
    MobilePhone!: string;
}

let employees: Employee[] = [{
    "ID": 1,
    "FirstName": "John",
    "LastName": "Heart",
    "Position": "CEO",
    "BirthDate": "1964/03/16",
    "HireDate": "1995/01/15",
    "Title": "Mr.",
    "Address": "351 S Hill St.",
    "City": "Los Angeles",
    "State": "California",
    "Zipcode": 90013,
    "Email": "jheart@dx-email.com",
    "Skype": "jheartDXskype",
    "HomePhone": "(213) 555-9208",
    "DepartmentID": 6,
    "MobilePhone": "(213) 555-9392"
},{
    "ID": 2,
    "FirstName": "Olivia",
    "LastName": "Peyton",
    "Position": "Sales Assistant",
    "BirthDate": "1981/06/03",
    "HireDate": "2012/05/14",
    "Title": "Mrs.",
    "Address": "807 W Paseo Del Mar",
    "City": "Los Angeles",
    "State": "California",
    "Zipcode": 90036,
    "Email": "oliviap@dx-email.com",
    "Skype": "oliviapDXskype",
    "HomePhone": "(310) 555-2728",
    "DepartmentID": 5,
    "MobilePhone": "(818) 555-2387"
}, {
    "ID": 3,
    "FirstName": "Robert",
    "LastName": "Reagan",
    "Position": "CMO",
    "BirthDate": "1974/09/07",
    "HireDate": "2002/11/08",
    "Title": "Mr.",
    "Address": "4 Westmoreland Pl.",
    "City": "Bentonville",
    "State": "Arkansas",
    "Zipcode": 91103,
    "Email": "robertr@dx-email.com",
    "Skype": "robertrDXskype",
    "HomePhone": "(818) 555-2438",
    "DepartmentID": 6,
    "MobilePhone": "(818) 555-2387"
}, {
    "ID": 4,
    "FirstName": "Greta",
    "LastName": "Sims",
    "Position": "HR Manager",
    "BirthDate": "1977/11/22",
    "HireDate": "1998/04/23",
    "Title": "Ms.",
    "Address": "1700 S Grandview Dr.",
    "State": "Georgia",
    "City": "Atlanta",
    "Zipcode": 91803,
    "Email": "gretas@dx-email.com",
    "Skype": "gretasDXskype",
    "HomePhone": "(818) 555-0976",
    "DepartmentID": 5,
    "MobilePhone": "(818) 555-6546"
}, {
    "ID": 5,
    "FirstName": "Brett",
    "LastName": "Wade",
    "Position": "IT Manager",
    "BirthDate": "1968/12/01",
    "HireDate": "2009/03/06",
    "Title": "Mr.",
    "Address": "1120 Old Mill Rd.",
    "State": "Idaho",
    "City": "Boise",
    "Zipcode": 91108,
    "Email": "brettw@dx-email.com",
    "Skype": "brettwDXskype",
    "HomePhone": "(626) 555-5985",
    "DepartmentID": 7,
    "MobilePhone": "(626) 555-0358"
}];

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  private TopPanelValue = new BehaviorSubject<any>(
    {
      "flowBalanceGoodWeeksRollup": 0,
      "flowBalanceTotalWeeksRollup": 0,
      "totalPieceCountNCRRollup": 0,
      "qualityRollup": 0,
      "entireBuildRunTime": 0,
      "entireBuildTotalTime": 0,
      "velocityRollup": 0,
      "length": 0
    }
  );

  currentTopPanelValue = this.TopPanelValue.asObservable();

  changeTopPanelValue(value: any){
    this.TopPanelValue.next(value)
}

  getEmployees(): Employee[] {
    return employees;
  }

  getGridData(http: any, url: any, body: any) {
    let header = new HttpHeaders().set(
      "x-api-key",
      "mJwY9uinltILC9XIOpTo" 
    );
    console.log('performance grid function')


    return new CustomStore({
      loadMode: 'raw',
      key: 'materialID',
      load:() => {
        return http.post(url, body, {headers:header})
        .toPromise()
        .then((res: any) => {
                 
          let pre = res.result;
          let lineObj: any =   {
            "flowBalanceGoodWeeksRollup": 0,
            "flowBalanceTotalWeeksRollup": 0,
            "totalPieceCountNCRRollup": 0,
            "qualityRollup": 0,
            "entireBuildRunTime": 0,
            "entireBuildTotalTime": 0,
            "velocityRollup": 0,
            "length": 0
          };
       
          pre.map((d: any) => {
            lineObj.flowBalanceGoodWeeksRollup += d.flowBalanceGoodWeeksRollup;
            lineObj.flowBalanceTotalWeeksRollup += d.flowBalanceTotalWeeksRollup;
            lineObj.totalPieceCountNCRRollup += d.totalPieceCountNCRRollup;
            lineObj.qualityRollup += d.qualityRollup;
            lineObj.entireBuildRunTime += d.entireBuildRunTime;
            lineObj.entireBuildTotalTime += d.entireBuildTotalTime;
            lineObj.velocityRollup += d.velocityRollup;
          })

          lineObj.length = pre.length;

          this.changeTopPanelValue(lineObj);


          console.log(lineObj, 'line obj')
          
          console.log(pre, 'the results******')
          return pre
        })
        .catch((error: any) => {
            console.error(error, 'error');
          });
      },
    });
  }
}
