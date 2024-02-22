import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import materialsReceived from "../../../assets/materialsreceived.json"

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent implements OnInit {

  themeClass =
    "ag-theme-quartz";

  gridOptions: any;

  constructor() {
    this.gridOptions = <any>{
      enableSorting: true,
      // enable filtering 
      enableFilter: true,
      autoSizeStrategy: {
        type: 'fitCellContents'
      },
    };

    this.gridOptions.columnDefs = [
      {
        headerName: "INV NO",
        field: "INV NO",
        filter: 'agMultiColumnFilter',
        width: 100
      },
      {
        headerName: "Invoice Date",
        field: "Invoice Date",
        filter: 'agDateColumnFilter',
        width: 100
      },
      {
        headerName: "Received From",
        field: "Received From",
        //  cellRendererFramework: RedComponentComponent,
        width: 100
      },
      {
        headerName: "Received Date",
        field: "Received Date",
        width: 100
      },
      {
        headerName: "City",
        field: "City",
        filter: 'agMultiColumnFilter',
        width: 50
      },
      {
        headerName: "Project",
        field: "Project",
        filter: 'agMultiColumnFilter',
        width: 50
      },
      {
        headerName: "State",
        field: "State",
        filter: 'agMultiColumnFilter',
        width: 100
      },
      {
        headerName: "Item Description",
        field: "Item Description as per SEZ Approval",
        width: 100
      },
      {
        headerName: "Material Description",
        field: "Material Description",
        width: 100
      },
      {
        headerName: "% of Vat",
        field: "% of Vat",
        width: 50
      },
      {
        headerName: "Unit",
        field: "Unit",
        width: 50
      },
      {
        headerName: "Qty",
        field: "Qty",
        width: 50
      },
      {
        headerName: "Rate",
        field: "Rate",
        width: 50
      },
      {
        headerName: "Total Amount",
        field: "Total Amount",
        width: 50
      },
      {
        headerName: "Grand Total Amount",
        field: "Grand Total Amount",
        width: 50
      },
      {
        headerName: "Remarks",
        field: "Remarks",
        width: 50
      },
      {
        headerName: "Condition",
        field: "Condition",
        width: 50
      }

      
    ];

    this.gridOptions.rowData = materialsReceived
  }

  ngOnInit(): void {

  }

}
