import { Component, OnInit } from '@angular/core';


export interface Car {
  aaa;
  bbb;
  ccc;
}

@Component({
  selector: 'moonshot-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  dataSource: Car[] = [];
  cols = [
   
    { field: 'bbb', header: 'BBB' },
    { field: 'ccc', header: 'CCC' }
  ];
  groupField = 'ccc';
  constructor() { }

  selectedRows(data) {
    console.log(data);
  }

  ngOnInit() {
    this.dataSource = [
      { aaa: '12345', bbb: 2005, ccc: 'bmw'},
      { aaa: '12346', bbb: 2001, ccc: 'bmw' },
      { aaa: '12347', bbb: 1999, ccc: 'mercedes' },
      { aaa: '12348', bbb: 2001, ccc: 'bmw' },
      { aaa: '12340', bbb: 1960, ccc: 'bmw' },
      { aaa: '12340', bbb: 2000, ccc: 'bmw' },
      { aaa: '12341', bbb: 2001, ccc: 'bmw' },
      { aaa: '12345', bbb: 2002, ccc: 'mercedes' },
      { aaa: '12346', bbb: 2001, ccc: 'bmw' },
      { aaa: '12347', bbb: 2000, ccc: 'mercedes' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      // { vin: '12345', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      // { vin: '12345', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      // { vin: '12345', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      // { vin: '12345', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      // { vin: '12345', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      // { vin: '12345', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      // { vin: '12345', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      // { vin: '12345', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      // { vin: '12345', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      // { vin: '12345', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      // { vin: '12345', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      // { vin: '12345', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      // { vin: '12345', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      // { vin: '12345', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      // { vin: '12345', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      // { vin: '12345', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      // { vin: '12345', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      // { vin: '12345', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      // { vin: '12345', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      // { vin: '12345', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      // { vin: '12345', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      // { vin: '12345', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      // { vin: '12345', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },
      //  { vin: '12345', year: 2000, brand: 'bmw', color: 'red'},
      // { vin: '12346', year: 2001, brand: 'mercedes', color: 'green' },
      // { vin: '12347', year: 2000, brand: 'bmw', color: 'red' },
      // { vin: '12348', year: 2001, brand: 'mercedes', color: 'blue' },
      // { vin: '12349', year: 1960, brand: 'audi', color: 'red' },
      // { vin: '12340', year: 2000, brand: 'bmw', color: 'yellow' },
      // { vin: '12341', year: 2001, brand: 'mercedes', color: 'red' },


    ]
  }

}
