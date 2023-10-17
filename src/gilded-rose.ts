import { Item } from "./item-type/AItem";

export class GildedRose {
	public updateQuality(items: Item[]): void {
		items.forEach((item) => {
			item.update();
		});
	}
}
