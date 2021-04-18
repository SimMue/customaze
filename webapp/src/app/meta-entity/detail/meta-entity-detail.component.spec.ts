import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MetaEntityDetailComponent } from './meta-entity-detail.component';

describe('MetaEntityDetailComponent', () => {
  let component: MetaEntityDetailComponent;
  let fixture: ComponentFixture<MetaEntityDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetaEntityDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaEntityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
