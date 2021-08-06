import { PlayersNba } from './../models/players-nba';
import { Nba } from './../models/nba';
import { EastTeams } from './../models/east-teams';
import { Injectable } from '@angular/core';
import { API } from '../models/api';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TemplateParseResult } from '@angular/compiler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = '';
  eTeams: EastTeams[];
  constructor(private http: HttpClient){}

  fetchEastTeams(){
    this.url = 'https://free-nba.p.rapidapi.com/teams/?rapidapi-key=f866011085msh391e885e62f67afp1c21d2jsn8f0882d74c73';
    return this.http.get<Nba>(this.url);

  }

  fetchPlayers(){
    this.url = 'https://free-nba.p.rapidapi.com/players/?rapidapi-key=f866011085msh391e885e62f67afp1c21d2jsn8f0882d74c73&per_page=100';
    return this.http.get<PlayersNba>(this.url);

  }
}
