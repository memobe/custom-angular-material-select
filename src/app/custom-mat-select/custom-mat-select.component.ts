import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatMenu,
  MatMenuContent,
  MatMenuModule,
  MatMenuPanel,
} from '@angular/material/menu';
import { CheckboxSelectItemComponent } from './checkbox-item/checkbox-select-item.component';
import { CustomMatSelectOption } from './custom-mat-select.model';

@Component({
  selector: 'custom-mat-select',
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    CheckboxSelectItemComponent,
  ],
  templateUrl: './custom-mat-select.component.html',
})
export class CustomMatSelectComponent<T> implements OnInit, OnChanges {
  @Input() options!: CustomMatSelectOption<T>[];
  @Input() set defualtSelectedValues(values: T[]) {}

  @ViewChild('selectMenu') public selectMenu!: MatMenuPanel;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.defualtSelectedValues) {
      console.log(this.defualtSelectedValues);
      // this.valuesSelectionModel.select(...(this.defualtSelectedValues || []));
    }
  }

  ngOnInit(): void {
    console.log('sfsafs asfas gsag sag ');
  }

  toggleValueSelection(optionValue: T, option: CustomMatSelectOption<T>): void {
    // this.valuesSelectionModel.toggle(optionValue);
    // this.changeAllChildrenValuesSelection(
    //   option,
    //   this.valuesSelectionModel.isSelected(optionValue)
    // );
  }

  changeAllChildrenValuesSelection(
    option: CustomMatSelectOption<T>,
    isSelected: boolean
  ): void {
    console.log(isSelected);
    if (option.children && option.children.length) {
      option.children.forEach((childOption) => {
        if (isSelected) {
          // this.valuesSelectionModel.select(childOption.value);
        } else {
          // this.valuesSelectionModel.deselect(childOption.value);
        }
        this.changeAllChildrenValuesSelection(childOption, isSelected);
      });
    } else {
      return;
    }
  }
}
