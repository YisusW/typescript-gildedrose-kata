import { Name, Quality, SellIn } from "../item-value";
import { Item } from "./AItem";

export class AgedBrie extends Item {
	private readonly DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD = 0;

	constructor(
		public name: Name,
		public sellIn: SellIn,
		public quality: Quality,
	) {
		super(name, sellIn, quality);
	}

	public update(): void {
		this.decreaseSellIn();

		this.increaseQuality();

		if (this.hasToBeSoldInLessThan(this.DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD)) {
			this.increaseQuality();
		}
	}
}
