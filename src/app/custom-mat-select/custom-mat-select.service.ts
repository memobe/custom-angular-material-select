import { SelectionModel } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomMatSelectService<T> {
  private valuesSelectionModel: SelectionModel<T> = new SelectionModel<T>(true);

  constructor() {}
}
