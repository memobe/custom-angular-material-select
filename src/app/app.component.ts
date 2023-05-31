import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CustomMatSelectComponent } from './custom-mat-select/custom-mat-select.component';
import { CustomMatSelectOption } from './custom-mat-select/custom-mat-select.model';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    CustomMatSelectComponent,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  options: CustomMatSelectOption<string>[] = [
    {
      label: 'loc1',
      value: 'ddfdsfdsf-dsf-dsfdsf-dsfsdfq',
    },
    {
      label: 'loc1',
      value: 'ddfdsfdsf-dsf-dsfdsf-dsfsdfw',
      children: [
        {
          label: 'loc1',
          value: 'ddfdsfdsf-dsf-dsfdsf-dsfsdfe',
          children: [
            {
              label: 'loc1',
              value: 'ddfdsfdsf-dsf-dsfdsf-dsfsdfe3',
            },
            {
              label: 'loc1',
              value: 'ddfdsfdsf-dsf-dsfdsf-dsfsdfr4',
            },
            {
              label: 'loc1',
              value: 'ddfdsfdsf-dsf-dsfdsf-dsfsdft5',
            },
          ],
        },
        {
          label: 'loc1',
          value: 'ddfdsfdsf-dsf-dsfdsf-dsfsdfr',
        },
        {
          label: 'loc1',
          value: 'ddfdsfdsf-dsf-dsfdsf-dsfsdft',
        },
      ],
    },
    {
      label: 'loc1',
      value: 'ddfdsfdsf-dsf-dsfdsf-dsfsdfy',
      children: [
        {
          label: 'loc1',
          value: 'ddfdsfdsf-dsf-dsfdsf-dsfsdfu',
        },
        {
          label: 'loc1',
          value: 'ddfdsfdsf-dsf-dsfdsf-dsfsdfi',
        },
        {
          label: 'loc1',
          value: 'ddfdsfdsf-dsf-dsfdsf-dsfsdfd',
        },
      ],
    },
  ];
}
