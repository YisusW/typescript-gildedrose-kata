import { Name, Quality, SellIn } from "../item-value";
import { Item } from "./AItem";

export class Sulfuras extends Item {
	constructor(
		public name: Name,
		public sellIn: SellIn,
		public quality: Quality,
	) {
		super(name, sellIn, quality);
	}

	public update(): void {}
}
