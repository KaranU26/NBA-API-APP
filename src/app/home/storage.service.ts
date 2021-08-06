import { SavPlayers } from './../models/sav-players';
import { PlayersNba } from './../models/players-nba';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private Sstorage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
   }

   async init() {
    const storage = await this.storage.create();
    this.Sstorage = storage;
  }

  public addNewPlayer(key: string, value: any){
    const newPlayer = new SavPlayers(key, value);
    this.Sstorage?.set(key, newPlayer);
  }

  public getAllPlayer(){
    const favPlayers: SavPlayers[] = [];
    if (this.Sstorage != null) {
      this.Sstorage.forEach((value, key, index)=>{
        favPlayers.push(value as SavPlayers);
      });
    }
    return favPlayers;
  }

  public async deleteOnePlayer(player: SavPlayers){
    await this.Sstorage.remove(player.dateExpiry);
  }

  public async deleteAllPlayers(){
    await this.Sstorage.clear();
  }
}
