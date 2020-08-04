import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/shared/model/Album.model';
import { AlbumService } from 'src/app/shared/service/album.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styles: [
  ]
})
export class AlbumFormComponent implements OnInit {
  datosC: Album = new Album();
  
  constructor(private serviceCrudC: AlbumService, private toastr: ToastrService) { }

  ngOnInit(): void {  
    this.resetForm();
  }

  uploadDatosC(data: Album){
    this.datosC = data;
  }

  resetForm() {    
    this.datosC = new Album();
  }

  onSubmit() {
    if (this.datosC.Id == 0 || this.datosC.Id == undefined)
      this.insertRecord();
    else
      this.updateRecord();
  }

  insertRecord() {
    this.serviceCrudC.postAlbum(this.datosC).subscribe(
      res => {
        this.toastr.success('Submitted successfully', 'Company Detail Register');
        this.resetForm();
        this.serviceCrudC.refreshList();
      },
      err => {
        this.toastr.error('Error', err);
      }
    )
  }

  updateRecord() {
    this.serviceCrudC.putAlbum(this.datosC).subscribe(
      res => {
        this.resetForm();
        this.toastr.info('Submitted successfully', 'Company Detail Register');
        this.serviceCrudC.refreshList();
      },
      err => {
        this.toastr.error('Error', err);
      }
    )
  }
}
