import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionadoComponent } from './relacionado.component';

describe('RelacionadoComponent', () => {
  let component: RelacionadoComponent;
  let fixture: ComponentFixture<RelacionadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelacionadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelacionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
