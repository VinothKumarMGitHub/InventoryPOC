import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingprojectsComponent } from './ongoingprojects.component';

describe('OngoingprojectsComponent', () => {
  let component: OngoingprojectsComponent;
  let fixture: ComponentFixture<OngoingprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OngoingprojectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OngoingprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
