import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCarrousselComponent } from './img-carroussel.component';

describe('ImgCarrousselComponent', () => {
  let component: ImgCarrousselComponent;
  let fixture: ComponentFixture<ImgCarrousselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgCarrousselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgCarrousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
