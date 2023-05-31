import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInput, MatInputModule } from '@angular/material/input';
import { CustomMatSelectOption } from '../custom-mat-select.model';

@Component({
  selector: 'checkbox-select-item',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule, FormsModule],
  templateUrl: './checkbox-select-item.component.html',
})
export class CheckboxSelectItemComponent<T> {
  @Input() option!: CustomMatSelectOption<T>;
  @Input() isSelected = false;
  @Input() isIndeterminate = false;

  @Output() isSelectedChange = new EventEmitter<T>();

  selectionChange(): void {
    this.isSelectedChange.emit(this.option.value);
  }
}
