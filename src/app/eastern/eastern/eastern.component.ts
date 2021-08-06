import { Nba } from './../../models/nba';
import { EastTeams } from './../../models/east-teams';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/home.service';
import { API } from 'src/app/models/api';

@Component({
  selector: 'app-eastern',
  templateUrl: './eastern.component.html',
  styleUrls: ['./eastern.component.scss'],
})
export class EasternComponent implements OnInit {

  apis: API = {} as API;
  teams: EastTeams[] = [] as EastTeams[];
  nba: Nba = {} as Nba;
  constructor(private homeServ: HomeService) { }

  ngOnInit() {
    this.homeServ.fetchEastTeams().subscribe(
      jsonn=>{
        console.log(jsonn);
        this.nba.data = jsonn.data;
        console.log(this.nba.data[0].full_name);
      }
    );
  }

}
