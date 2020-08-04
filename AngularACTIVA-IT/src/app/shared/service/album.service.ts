import { Injectable } from '@angular/core';
import { Album } from '../model/Album.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  
  readonly rootURL = 'http://localhost:51358/api';
  list: Album[];

  constructor(private http: HttpClient) { }

  postAlbum(formDataCrud: Album) {
    return this.http.post(this.rootURL + '/album', formDataCrud);
  }
  putAlbum(formDataCrud: Album) {
    return this.http.put(this.rootURL + '/album/'+ formDataCrud.Id, formDataCrud);
  }
  deleteAlbum(id) {
    return this.http.delete(this.rootURL + '/album/'+ id);
  }

  refreshList(){
    //return this.http.get(this.rootURL + '/album');

    this.http.get(this.rootURL + '/album')
    .toPromise()
    .then(res => this.list = res as Album[]);
    console.log('list',this.list);
  }
}
