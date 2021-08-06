import { StorageService } from './../../home/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss'],
})
export class SavedComponent implements OnInit {
  playerName: string;
  count: number;
  constructor(private storage: StorageService) { }

  ngOnInit() {}

  onClick(){
    this.count++;
    const val = this.count.toString();
    this.storage.addNewPlayer(val, this.playerName);

  }
}
