import { Injectable } from '@angular/core';
import { Song } from '../model/Song.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  
  readonly rootURL = 'http://localhost:51358/api';
  list: Song[];

  constructor(private http: HttpClient) { }

  postSong(formDataCrud: Song) {
    return this.http.post(this.rootURL + '/song', formDataCrud);
  }
  putSong(formDataCrud: Song) {
    return this.http.put(this.rootURL + '/song/'+ formDataCrud.Id, formDataCrud);
  }
  deleteSong(id) {
    return this.http.delete(this.rootURL + '/song/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/song')
    .toPromise()
    .then(res => this.list = res as Song[]);
  }
}
