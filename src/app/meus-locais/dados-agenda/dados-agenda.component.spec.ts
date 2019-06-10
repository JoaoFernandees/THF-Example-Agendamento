import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosAgendaComponent } from './dados-agenda.component';

describe('DadosAgendaComponent', () => {
  let component: DadosAgendaComponent;
  let fixture: ComponentFixture<DadosAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
