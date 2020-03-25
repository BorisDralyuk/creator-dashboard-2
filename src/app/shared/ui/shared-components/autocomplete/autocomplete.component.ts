import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'moonshot-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  item: any;
  filteredDataSource: any [];
  @Input() id = ''
  @Input() placeholder = ''
  @Input() dataSource: any[] = [];
  @Input() field: string;
  @Input() inputStyle = {'width': '200px'}
  @Output() select = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  search(event) {
    let query = event.query;
    this.filteredDataSource = this.filter(query, this.dataSource);
  }

  filter(query, data: any []): any [] {
    let filtered: any [] = [];
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      if (!!item[this.field] && (typeof item[this.field] === 'string')) {
        if (item[this.field].toLowerCase().includes(query.toLowerCase())) {
          filtered.push(item);
        }
      }
    }
    return filtered;
  }

  onSelect(value) {
    this.select.emit(value);
  }

}
