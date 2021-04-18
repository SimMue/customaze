import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaEntityComponent } from './meta-entity.component';

describe('MetaEntityComponent', () => {
  let component: MetaEntityComponent;
  let fixture: ComponentFixture<MetaEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetaEntityComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
