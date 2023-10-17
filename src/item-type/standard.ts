import { Name, Quality, SellIn } from "../item-value";
import { Item } from "./AItem";

export class Standard extends Item {
	private readonly DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD = 0;

	constructor(
		public name: Name,
		public sellIn: SellIn,
		public quality: Quality,
	) {
		super(name, sellIn, quality);
	}

	public update(): void {
		this.decreaseSellIn();
		this.decreaseQuality();

		if (this.hasToBeSoldInLessThan(this.DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD)) {
			this.decreaseQuality();
		}
	}
}
