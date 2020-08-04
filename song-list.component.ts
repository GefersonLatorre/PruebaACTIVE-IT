import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/shared/service/song.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styles: [
  ]
})
export class SongListComponent implements OnInit {

  // @Output() public viewPanelsC: EventEmitter<number> = new EventEmitter();

  constructor(public serviceCrudE: SongService) { }

  ngOnInit(): void {
    console.log('jashdkjsahdjk',this.serviceCrudE.refreshList());
    this.serviceCrudE.refreshList();
  }

}
