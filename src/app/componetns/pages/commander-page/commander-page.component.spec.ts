import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommanderPageComponent } from './commander-page.component';

describe('CommanderPageComponent', () => {
  let component: CommanderPageComponent;
  let fixture: ComponentFixture<CommanderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommanderPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommanderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
