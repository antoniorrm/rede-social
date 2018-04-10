/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostInputComponent } from './post-input.component';

describe('PostInputComponent', () => {
  let component: PostInputComponent;
  let fixture: ComponentFixture<PostInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
