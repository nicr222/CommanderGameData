import { Injectable } from '@angular/core';
import { commander } from '../shared/model/commander';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { COMMANDERS_BY_ID_URL, COMMANDERS_BY_SEARCH_URL, COMMANDERS_URL } from '../shared/model/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class CommanderService {

  constructor(private http:HttpClient) { }

  getCommanders(): Observable<commander[]>{
    return this.http.get<commander[]>(COMMANDERS_URL);
  }

  getAllCommandersBySearch(searchTerm:string){
    return this.http.get<commander[]>(COMMANDERS_BY_SEARCH_URL + searchTerm);
  }

  getCommanderById(id:string):Observable<commander>{
    return this.http.get<commander>(COMMANDERS_BY_ID_URL + id);
  }


}
