import { Name, Quality, SellIn } from "../item-value";
import { Item } from "./AItem";

export class BackstagePasses extends Item {
	private readonly DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 10;
	private readonly TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 5;
	private readonly QUALITY_RESET_SELL_IN_THRESHOLD = 0;

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

		if (this.hasToBeSoldInLessThan(this.DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD)) {
			this.increaseQuality();
		}

		if (this.hasToBeSoldInLessThan(this.TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD)) {
			this.increaseQuality();
		}

		if (this.hasToBeSoldInLessThan(this.QUALITY_RESET_SELL_IN_THRESHOLD)) {
			this.resetQuality();
		}
	}
}
