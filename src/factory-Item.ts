import { AgedBrie, BackstagePasses, Standard, Sulfuras } from "./item-type";
import { Item } from "./item-type/AItem";
import { Name, Quality, SellIn } from "./item-value";

export class FactoryItem {
	public static basedOn(rawName: string, rawSellIn: number, rawQuality: number): Item {
		const name = new Name(rawName);
		const sellIn = new SellIn(rawSellIn);
		const quality = new Quality(rawQuality);

		if (name.isAgedBrie()) {
			return new AgedBrie(name, sellIn, quality);
		}
		if (name.isBackstagePasses()) {
			return new BackstagePasses(name, sellIn, quality);
		}
		if (name.isSulfuras()) {
			return new Sulfuras(name, sellIn, quality);
		}

		return new Standard(name, sellIn, quality);
	}
}
