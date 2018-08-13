/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Page400Component } from './page400.component';

describe('Page400Component', () => {
  let component: Page400Component;
  let fixture: ComponentFixture<Page400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page400Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
