import { makeAutoObservable } from "mobx";
import { ItemDTO } from "@/types/apiResponse";

export class ItemsState {
  itemsMatrix: ItemDTO[][] = [];

  constructor() {
    makeAutoObservable(this);
  }

  pushItems(items: ItemDTO[]) {
    this.itemsMatrix.push(items);
  }
}
