import { Item } from "./item.interface";

export class ItemClass implements Item {
    constructor(public name: string, public sellIn: number, public quality: number) {}
}