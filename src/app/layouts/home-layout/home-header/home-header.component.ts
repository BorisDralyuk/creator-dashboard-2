import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface City {
  name: string;
  code: string;
}


@Component({
  selector: 'moonshot-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  cities: City[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.cities = [
      { name: 'angular', code: '123' },
      { name: 'view', code: '234' },
      { name: 'react', code: '345' },
    ]
  }

  onSelect(value) {
    this.router.navigate(['home/project/all'])
    console.log(value);
  }

}
