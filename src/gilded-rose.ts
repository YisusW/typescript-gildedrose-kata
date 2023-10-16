import { Item } from "./item.interface";

export class GildedRose {
	private readonly AGED_BRIE = "Aged Brie";
	private readonly BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert";
	private readonly SULFURAS = "Sulfuras, Hand of Ragnaros";

	private readonly AGED_BRIE_DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD = 0;

	private readonly BACKSTAGE_PASSES_DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 10;
	private readonly BACKSTAGE_PASSES_TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 5;
	private readonly BACKSTAGE_PASSES_QUALITY_RESET_SELL_IN_THRESHOLD = 0;

	private readonly DEFAULT_ITEM_DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD = 0;

	private readonly MAX_QUALITY = 50;
	private readonly MIN_QUALITY = 0;

	constructor(public items: Item[]) {}

	public updateQuality(): void {
		const items = [...this.items];

		items.forEach((item) => {
			switch (item.name) {
				case this.AGED_BRIE:
					this.decreaseSellIn(item);
					this.updateAgedBrieQuality(item);
					break;
				case this.BACKSTAGE_PASSES:
					this.decreaseSellIn(item);
					this.updateBackstagePassesQuality(item);
					break;
				case this.SULFURAS:
					break;
				default:
					this.decreaseSellIn(item);
					this.updateDefaultItemQuality(item);
					break;
			}
		});
	}

	private decreaseSellIn(item: Item) {
		item.sellIn -= 1;
	}

	private updateAgedBrieQuality(item: Item) {
		this.increaseQuality(item);

		if (item.sellIn < this.AGED_BRIE_DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD) {
			this.increaseQuality(item);
		}
	}

	private updateBackstagePassesQuality(item: Item) {
		this.increaseQuality(item);

		if (item.sellIn < this.BACKSTAGE_PASSES_DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD) {
			this.increaseQuality(item);
		}

		if (item.sellIn < this.BACKSTAGE_PASSES_TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD) {
			this.increaseQuality(item);
		}

		if (item.sellIn < this.BACKSTAGE_PASSES_QUALITY_RESET_SELL_IN_THRESHOLD) {
			this.resetQuality(item);
		}
	}

	private updateDefaultItemQuality(item: Item): void {
		this.decreaseQuality(item);

		if (item.sellIn < this.DEFAULT_ITEM_DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD) {
			this.decreaseQuality(item);
		}
	}

	private resetQuality(item: Item) {
		item.quality = 0;
	}

	private increaseQuality(item: Item) {
		if (item.quality < this.MAX_QUALITY) {
			item.quality += 1;
		}
	}

	private decreaseQuality(item: Item) {
		if (item.quality > this.MIN_QUALITY) {
			item.quality -= 1;
		}
	}
}
