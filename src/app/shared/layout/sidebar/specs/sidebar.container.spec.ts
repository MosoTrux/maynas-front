/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarContainer } from '../sidebar.container';

describe('SidebarContainer', () => {
  let component: SidebarContainer;
  let fixture: ComponentFixture<SidebarContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarContainer],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
