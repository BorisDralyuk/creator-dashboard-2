import { Component, OnInit } from '@angular/core';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'moonshot-projects-layout',
  templateUrl: './projects-layout.component.html',
  styleUrls: ['./projects-layout.component.scss']
})
export class ProjectsLayoutComponent implements OnInit {

  city: City;

  results: string[];
  data: string[];
  cities: City[] = [];
  filteredCitiesSingle: City[];

 
  constructor() { }

  ngOnInit() {
    this.cities = [
      { name: 'angular', code: '123' },
      { name: 'view', code: '234' },
      { name: 'react', code: '345' },
    ]
    this.results = ['sdf','sdfsdf','sdff'];
    this.data = [...this.results];
  }

  search(event) {
    console.log(event)
    this.results = this.data.filter(item => item.includes(event.query) === true);
    console.log(this.results);
    let query = event.query;
    this.filteredCitiesSingle = this.filterCity(query, this.cities);
    console.log(this.filteredCitiesSingle);
  }

  filterCity(query, cities: City[]): City[] {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: City[] = [];
    for (let i = 0; i < cities.length; i++) {
      let city = cities[i];
      // console.log(city.name);
      // console.log(query.toLowerCase());
      if (city.name.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(city);
      }
    }
    console.log(filtered);
    return filtered;
  }

  onSelect(value) {
    console.log(value);
  }
}
