import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import materialsIssued from "../../../assets/materialsissued.json"

@Component({
  selector: 'app-inventory-issued',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './inventoryIssued.component.html',
  styleUrl: './inventoryIssued.component.scss'
})
export class InventoryIssuedComponent implements OnInit {

  themeClass =
    "ag-theme-quartz";

  gridOptions: any;

  constructor() {
    this.gridOptions = <any>{
      enableSorting: true,
      // enable filtering 
      enableFilter: true,
      floatingFilter: true,
      editable: false,
      filter: true,
      flex: 1,
      floatingFilterComponentParams: { suppressFilterButton: true },
      resizable: true,
      sortable: true,
      suppressMenu: true,
      autoSizeStrategy: {
        type: 'fitCellContents'
      },
    };
    this.gridOptions.columnDefs = [
      {
        headerName: "Issue Note No",
        field: "Issue Note No",
        width: 100
      },
      {
        headerName: "Issued Date",
        field: "Issued Date",
        //  cellRendererFramework: RedComponentComponent,
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
        field: "RATE",
        width: 50
      },
      {
        headerName: "Total Amount",
        field: "APPROX AMOUNT",
        width: 50
      },
      {
        headerName: "SUBCONTRACTOR - NAME",
        field: "SUBCONTRACTOR - NAME",
        width: 50
      },
      {
        headerName: "Issued Type",
        field: "Issued Type",
        width: 50
      },
      {
        headerName: "Remarks",
        field: "Remarks",
        width: 50
      }
    ];

    this.gridOptions.rowData = materialsIssued
  }

  ngOnInit(): void {

  }

}
