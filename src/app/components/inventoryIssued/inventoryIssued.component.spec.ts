import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryIssuedComponent } from './inventoryIssued.component';

describe('InventoryIssuedComponent', () => {
  let component: InventoryIssuedComponent;
  let fixture: ComponentFixture<InventoryIssuedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryIssuedComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InventoryIssuedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
