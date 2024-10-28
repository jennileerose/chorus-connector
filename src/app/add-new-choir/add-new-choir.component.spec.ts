import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewChoirComponent } from './add-new-choir.component';

describe('AddNewChoirComponent', () => {
  let component: AddNewChoirComponent;
  let fixture: ComponentFixture<AddNewChoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewChoirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewChoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
