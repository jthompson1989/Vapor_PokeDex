import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BasicDialogComponent } from 'src/app/shared/dialogs/basic-dialog/basic-dialog.component';
import { YouSureDialogComponent } from 'src/app/shared/dialogs/you-sure-dialog/you-sure-dialog.component';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private  dialog : MatDialog, private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }
  
  onDownloadTeamData(event: any){
    this.dialog.open(BasicDialogComponent, {
      width: '250px',
      data: {
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      }
    });
  }

  onAboutClick(event: any){
    this.dialog.open(BasicDialogComponent, {
      width: '250px',
      data: {
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      }
    });
  }

  onRefreshData(event: any){
    const dialogRef = this.dialog.open(YouSureDialogComponent, {
      width: '250px',
      data: {
        message: "Are You Sure You Want To Refresh The Data?", 
        confirmButton: "Refresh"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result){
        this.pokemonService.refreshPokemonData();
        this.dialog.open(BasicDialogComponent, {
          width: '250px',
          data: {
            message: "Data Refreshed", 
          }
        });
      }
    });
  }

  onClearData(event: any){
    const dialogRef = this.dialog.open(YouSureDialogComponent, {
      width: '250px',
      data: {message: "Are You Sure You Want To Clear Data?", confirmButton: "Clear Data"}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result){
        this.pokemonService.clearPokemonData().subscribe((successDeleted) => {
          if(successDeleted){
            this.dialog.open(BasicDialogComponent, {
              width: '250px',
              data: {
                message: "Pokemon Data Deleted", 
              }
            });
          }
        });
      }
    });
  }
}
