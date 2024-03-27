import { Component, OnInit } from '@angular/core';
import { commander } from '../../../shared/model/commander';
import { ActivatedRoute, Router } from '@angular/router';
import { CommanderService } from '../../../services/commander.service';

@Component({
  selector: 'app-commander-page',
  templateUrl: './commander-page.component.html',
  styleUrl: './commander-page.component.css'
})
export class CommanderPageComponent implements OnInit{
  commander!: commander;
  constructor(activatedRoute:ActivatedRoute, commanderService:CommanderService) {
    activatedRoute.params.subscribe((params) => {
      if(params.id){
        commanderService.getCommanderById(params.id).subscribe(serverCommander => {
          this.commander = serverCommander;
        });
      }
    });

    
   }
   ngOnInit(): void {};
}
