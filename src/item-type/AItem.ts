import { Name, Quality, SellIn } from "../item-value";

export abstract class Item {
	constructor(
		public name: Name,
		public sellIn: SellIn,
		public quality: Quality,
	) {}

	public abstract update(): void;

	public decreaseSellIn(): void {
		this.sellIn = this.sellIn.decrease();
	}

	public hasToBeSoldInLessThan(days: number): boolean {
		return this.sellIn.isLessThan(days);
	}

	public increaseQuality(): void {
		this.quality = this.quality.increase();
	}

	public decreaseQuality(): void {
		this.quality = this.quality.decrease();
	}

	public resetQuality(): void {
		this.quality = this.quality.reset();
	}
}
