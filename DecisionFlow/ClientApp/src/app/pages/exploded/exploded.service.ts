import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Population {
  arg!: number;

  val!: number;
}

const populationData: Population[] = [{
  arg: 1960,
  val: 3032019978,
}, {
  arg: 1970,
  val: 3683676306,
}, {
  arg: 1980,
  val: 4434021975,
}, {
  arg: 1990,
  val: 5281340078,
}, {
  arg: 2000,
  val: 6115108363,
}, {
  arg: 2010,
  val: 6922947261,
}, {
  arg: 2020,
  val: 7795000000,
}];


export class OilPrice {
  date!: Date;

  aVal1!: number;

  aVal2!: number;

  tVal1!: number;

  tVal2!: number;
}

export class Customer {
  ID!: number;

  CompanyName!: string;

  Address!: string;

  City!: string;

  State!: string;

  Zipcode!: number;

  Phone!: string;

  Fax!: string;

  Website!: string;
}

const customers: Customer[] = [{
  ID: 1,
  CompanyName: 'Super Mart of the West',
  Address: '702 SW 8th Street',
  City: 'Bentonville',
  State: 'Arkansas',
  Zipcode: 72716,
  Phone: '(800) 555-2797',
  Fax: '(800) 555-2171',
  Website: 'http://www.nowebsitesupermart.com',
}, {
  ID: 2,
  CompanyName: 'Electronics Depot',
  Address: '2455 Paces Ferry Road NW',
  City: 'Atlanta',
  State: 'Georgia',
  Zipcode: 30339,
  Phone: '(800) 595-3232',
  Fax: '(800) 595-3231',
  Website: 'http://www.nowebsitedepot.com',
}, {
  ID: 3,
  CompanyName: 'K&S Music',
  Address: '1000 Nicllet Mall',
  City: 'Minneapolis',
  State: 'Minnesota',
  Zipcode: 55403,
  Phone: '(612) 304-6073',
  Fax: '(612) 304-6074',
  Website: 'http://www.nowebsitemusic.com',
}, {
  ID: 4,
  CompanyName: "Tom's Club",
  Address: '999 Lake Drive',
  City: 'Issaquah',
  State: 'Washington',
  Zipcode: 98027,
  Phone: '(800) 955-2292',
  Fax: '(800) 955-2293',
  Website: 'http://www.nowebsitetomsclub.com',
}, {
  ID: 5,
  CompanyName: 'E-Mart',
  Address: '3333 Beverly Rd',
  City: 'Hoffman Estates',
  State: 'Illinois',
  Zipcode: 60179,
  Phone: '(847) 286-2500',
  Fax: '(847) 286-2501',
  Website: 'http://www.nowebsiteemart.com',
}, {
  ID: 6,
  CompanyName: 'Walters',
  Address: '200 Wilmot Rd',
  City: 'Deerfield',
  State: 'Illinois',
  Zipcode: 60015,
  Phone: '(847) 940-2500',
  Fax: '(847) 940-2501',
  Website: 'http://www.nowebsitewalters.com',
}, {
  ID: 7,
  CompanyName: 'StereoShack',
  Address: '400 Commerce S',
  City: 'Fort Worth',
  State: 'Texas',
  Zipcode: 76102,
  Phone: '(817) 820-0741',
  Fax: '(817) 820-0742',
  Website: 'http://www.nowebsiteshack.com',
}, {
  ID: 8,
  CompanyName: 'Circuit Town',
  Address: '2200 Kensington Court',
  City: 'Oak Brook',
  State: 'Illinois',
  Zipcode: 60523,
  Phone: '(800) 955-2929',
  Fax: '(800) 955-9392',
  Website: 'http://www.nowebsitecircuittown.com',
}, {
  ID: 9,
  CompanyName: 'Premier Buy',
  Address: '7601 Penn Avenue South',
  City: 'Richfield',
  State: 'Minnesota',
  Zipcode: 55423,
  Phone: '(612) 291-1000',
  Fax: '(612) 291-2001',
  Website: 'http://www.nowebsitepremierbuy.com',
}, {
  ID: 10,
  CompanyName: 'ElectrixMax',
  Address: '263 Shuman Blvd',
  City: 'Naperville',
  State: 'Illinois',
  Zipcode: 60563,
  Phone: '(630) 438-7800',
  Fax: '(630) 438-7801',
  Website: 'http://www.nowebsiteelectrixmax.com',
}, {
  ID: 11,
  CompanyName: 'Video Emporium',
  Address: '1201 Elm Street',
  City: 'Dallas',
  State: 'Texas',
  Zipcode: 75270,
  Phone: '(214) 854-3000',
  Fax: '(214) 854-3001',
  Website: 'http://www.nowebsitevideoemporium.com',
}, {
  ID: 12,
  CompanyName: 'Screen Shop',
  Address: '1000 Lowes Blvd',
  City: 'Mooresville',
  State: 'North Carolina',
  Zipcode: 28117,
  Phone: '(800) 445-6937',
  Fax: '(800) 445-6938',
  Website: 'http://www.nowebsitescreenshop.com',
}];

const oilPrices: OilPrice[] = [{
  date: new Date(2005, 0, 1),
  aVal1: 36,
  aVal2: 43.29,
  tVal1: 42.12,
  tVal2: 49.91,
}, {
  date: new Date(2005, 1, 1),
  aVal1: 40.68,
  aVal2: 47.07,
  tVal1: 28.33,
  tVal2: 51.75,
}, {
  date: new Date(2005, 2, 1),
  aVal1: 45.01,
  aVal2: 52.77,
  tVal1: 48.96,
  tVal2: 56.72,
}, {
  date: new Date(2005, 3, 1),
  aVal1: 45.99,
  aVal2: 54.14,
  tVal1: 49.72,
  tVal2: 57.27,
}, {
  date: new Date(2005, 4, 1),
  aVal1: 43.73,
  aVal2: 49.03,
  tVal1: 46.8,
  tVal2: 52.07,
}, {
  date: new Date(2005, 5, 1),
  aVal1: 49.94,
  aVal2: 57.94,
  tVal1: 52.54,
  tVal2: 60.54,
}, {
  date: new Date(2005, 6, 1),
  aVal1: 52.88,
  aVal2: 58.98,
  tVal1: 54.93,
  tVal2: 61.28,
}, {
  date: new Date(2005, 7, 1),
  aVal1: 58.81,
  aVal2: 67.06,
  tVal1: 60.86,
  tVal2: 68.94,
}, {
  date: new Date(2005, 8, 1),
  aVal1: 61,
  aVal2: 66.72,
  tVal1: 63,
  tVal2: 69.47,
}, {
  date: new Date(2005, 9, 1),
  aVal1: 57.86,
  aVal2: 63.47,
  tVal1: 59.76,
  tVal2: 65.47,
}, {
  date: new Date(2005, 10, 1),
  aVal1: 54.24,
  aVal2: 59.98,
  tVal1: 56.14,
  tVal2: 61.78,
}, {
  date: new Date(2005, 11, 1),
  aVal1: 55.22,
  aVal2: 59.22,
  tVal1: 57.34,
  tVal2: 61.37,
}];

export class ExplodedService {
  getOilPrices(): OilPrice[] {
    return oilPrices;
  }

  getCustomers() {
    return customers;
  }

  getPopulationData(): Population[] {
    return populationData;
  }

  getTopPanelData(http: any, url: any, body: any){
      
    return http.post(url, body)
   .toPromise()
   .then((res: any) => {
     let pre = res.result;
     return pre
   })
   .catch((error: any) => {
     console.error(error, 'error');
   });
}

}
