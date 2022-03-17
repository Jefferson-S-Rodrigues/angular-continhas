import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import {DOCUMENT} from '@angular/common';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.scss']
})
export class TemaComponent implements OnInit {

  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);

  ngOnInit(): void {
      this.toggleControl.valueChanges.subscribe((darkMode) => {
        const darkClassName = 'dark-theme';
        if (darkMode) {
          this.overlayContainer.getContainerElement().classList.add(darkClassName);
        } else {
          this.overlayContainer.getContainerElement().classList.remove(darkClassName);
        }
      });
  }

  constructor(public overlayContainer: OverlayContainer) {}
}
