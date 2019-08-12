import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaAcumuladoComponent } from './media-acumulado.component';

describe('MediaAcumuladoComponent', () => {
  let component: MediaAcumuladoComponent;
  let fixture: ComponentFixture<MediaAcumuladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaAcumuladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaAcumuladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
