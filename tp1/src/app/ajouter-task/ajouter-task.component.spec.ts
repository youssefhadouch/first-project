import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTaskComponent } from './ajouter-task.component';

describe('AjouterTaskComponent', () => {
  let component: AjouterTaskComponent;
  let fixture: ComponentFixture<AjouterTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterTaskComponent]
    });
    fixture = TestBed.createComponent(AjouterTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
