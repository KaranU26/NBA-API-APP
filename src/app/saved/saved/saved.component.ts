import { SavPlayers } from './../../models/sav-players';
import { StorageService } from './../../home/storage.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss'],
})
export class SavedComponent implements OnInit {
  playerName: string;
  save: SavPlayers[];
  dateToExpire: string;
  constructor(private storage: StorageService, private alerting: AlertController) { }

  ngOnInit() {
    this.save = this.storage.getAllPlayer();
  }

  onClick(){
    this.storage.addNewPlayer(this.dateToExpire, this.playerName);
    this.save = this.storage.getAllPlayer();
  }

  deletePlayer(playerDelete: SavPlayers){
    this.alerting.create({
      header: 'Delete?',
      message : 'You sure you want to remove this player? ',
      buttons: [{
        text :'delete',
        handler : ()=>{
          this.storage.deleteOnePlayer(playerDelete);
          this.save = this.storage.getAllPlayer();
        }
      },'Cancel']

    }).then(alert => {
      alert.present();
    });
  }

  deleteAll(){
    this.alerting.create({
      header: 'Delete?',
      message : 'You sure you want to remove ALL players? ',
      buttons: [{
        text :'delete',
        handler : ()=>{
          this.storage.deleteAllPlayers();
          this.save = this.storage.getAllPlayer();
        }
      },'Cancel']

    }).then(alert => {
      alert.present();
    });
  }
}
