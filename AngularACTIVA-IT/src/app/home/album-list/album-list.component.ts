import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AlbumService } from 'src/app/shared/service/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styles: [
  ]
})
export class AlbumListComponent implements OnInit {

  // @Output() public viewPanelsC: EventEmitter<number> = new EventEmitter();

  constructor(public serviceCrudC: AlbumService) { }

  ngOnInit(): void {
    console.log('jashdkjsahdjk',this.serviceCrudC.refreshList());
    this.serviceCrudC.refreshList();
  }

}
