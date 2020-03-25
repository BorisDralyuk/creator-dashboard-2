import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'moonshot-pages-table',
  templateUrl: './pages-table.component.html',
  styleUrls: ['./pages-table.component.scss']
})

export class PagesTableComponent implements OnInit {

  rowGroupMetadata: any;
  dataSourceCopy: any[];
  selected: any[];
  @Input() dataSource: any[];
  @Input() cols: {field: string, header: string}[];
  @Input() groupField: string;
  @Output() selectedRows = new EventEmitter();
  @ViewChild('dt', {static: false}) dt;

  constructor() { }

  ngOnInit() {
    this.sortByGroupField(this.dataSource);
    if (this.groupField) {
      this.updateRowGroupMetaData(this.dataSourceCopy);
    }
  }

  onSort() {
    this.sortByGroupField(this.dataSourceCopy);
  }

  sortByGroupField(data) {
    this.dataSourceCopy = data.sort((x, y) => {
      if (x[this.groupField] > y[this.groupField]) return 1;
      if (x[this.groupField] < y[this.groupField]) return -1;
      return 0;
    });
  }

  filter(value, col) {
    this.dataSourceCopy = this.dataSource.filter(item => item[col].toString().includes(value))
    this.updateRowGroupMetaData(this.dataSourceCopy);
  }

  filterGlobal(value) {
    this.dataSourceCopy = this.dataSource.filter((item) => {
      let contains = [];
      contains = this.cols.map(col => {
                      if (item[col.field].toString().includes(value)) {
                        return item[col.field].toString().includes(value)
                      }
                    });

      if (contains.includes(true)) {
        return item;
      }
    });
    this.updateRowGroupMetaData(this.dataSourceCopy);    
  }

  onRowSelect() {
    this.selectedRows.emit(this.selected);
  }
  updateRowGroupMetaData(dataSourceCopy) {
    this.rowGroupMetadata = {};
    if (dataSourceCopy) {
      for (let i = 0; i < dataSourceCopy.length; i++) {
        let rowData = dataSourceCopy[i];
        let rowField = rowData[this.groupField];
        if (i == 0) {
          this.rowGroupMetadata[rowField] = { index: 0, size: 1 };
        }
        else {
          let previousRowData = dataSourceCopy[i - 1];
          let previousRowGroup = previousRowData[this.groupField];
          if (rowField === previousRowGroup)
            this.rowGroupMetadata[rowField].size++;
          else
            this.rowGroupMetadata[rowField] = { index: i, size: 1 };
        }
      }
    }
  }

}
