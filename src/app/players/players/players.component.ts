import { PlayersNba } from './../../models/players-nba';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/home.service';
import { Players } from 'src/app/models/players';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {

  player: Players = {} as Players;
  players: PlayersNba = {} as PlayersNba;
  constructor(private homeServ: HomeService) { }

  ngOnInit() {
    this.homeServ.fetchPlayers().subscribe(
      jsonn=>{
        console.log(jsonn);
        this.players.data = jsonn.data;
        console.log(this.players.data[0].first_name);
      }
    );
  }

  onClick(){

  }

}
