import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciandoComponent } from './iniciando.component';

describe('IniciandoComponent', () => {
  let component: IniciandoComponent;
  let fixture: ComponentFixture<IniciandoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciandoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
