import { Component } from '@angular/core';
import { commander } from '../../../shared/model/commander';
import { CommanderService } from '../../../services/commander.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  commanders:commander[] = [];
  constructor(private commanderService:CommanderService, activatedRoute: ActivatedRoute) {
    let commanderObservable:Observable<commander[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm){
        commanderObservable = this.commanderService.getAllCommandersBySearch(params.searchTerm);
      } else {
        commanderObservable = this.commanderService.getCommanders();
      }
    
      commanderObservable.subscribe((serverCommanders) => {
        this.commanders = serverCommanders;
      })
    })
   };

  ngOnInit(): void {};
}
