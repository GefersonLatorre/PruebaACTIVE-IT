import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/shared/model/song.model';
import { SongService } from 'src/app/shared/service/song.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styles: [
  ]
})
export class SongFormComponent implements OnInit {
  datosE: Song = new Song();
  
  constructor(private serviceCrudE: SongService, private toastr: ToastrService) { }

  ngOnInit(): void {  
    this.resetForm();
  }

  uploaddatosE(data: Song){
    this.datosE = data;
  }

  resetForm() {    
    this.datosE = new Song();
  }

  onSubmit() {
    if (this.datosE.Id == 0 || this.datosE.Id == undefined)
      this.insertRecord();
    else
      this.updateRecord();
  }

  insertRecord() {
    this.serviceCrudE.postSong(this.datosE).subscribe(
      res => {
        this.toastr.success('Submitted successfully', 'Company Detail Register');
        this.resetForm();
        this.serviceCrudE.refreshList();
      },
      err => {
        this.toastr.error('Error', err);
      }
    )
  }

  updateRecord() {
    this.serviceCrudE.putSong(this.datosE).subscribe(
      res => {
        this.resetForm();
        this.toastr.info('Submitted successfully', 'Company Detail Register');
        this.serviceCrudE.refreshList();
      },
      err => {
        this.toastr.error('Error', err);
      }
    )
  }

}
