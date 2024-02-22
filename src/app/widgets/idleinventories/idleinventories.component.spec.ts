import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdleinventoriesComponent } from './idleinventories.component';

describe('IdleinventoriesComponent', () => {
  let component: IdleinventoriesComponent;
  let fixture: ComponentFixture<IdleinventoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdleinventoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdleinventoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
