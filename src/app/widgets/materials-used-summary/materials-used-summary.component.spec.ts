import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsUsedSummaryComponent } from './materials-used-summary.component';

describe('MaterialsUsedSummaryComponent', () => {
  let component: MaterialsUsedSummaryComponent;
  let fixture: ComponentFixture<MaterialsUsedSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialsUsedSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialsUsedSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
