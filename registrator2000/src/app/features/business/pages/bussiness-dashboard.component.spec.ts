import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessDashboardComponent } from '../../../pages/bussiness-dashboard/bussiness-dashboard.component';

describe('BussinessDashboardComponent', () => {
  let component: BussinessDashboardComponent;
  let fixture: ComponentFixture<BussinessDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BussinessDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BussinessDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
