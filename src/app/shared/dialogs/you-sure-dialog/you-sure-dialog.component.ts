import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-you-sure-dialog',
  templateUrl: './you-sure-dialog.component.html',
  styleUrls: ['./you-sure-dialog.component.css']
})
export class YouSureDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<YouSureDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
