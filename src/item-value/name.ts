export class Name {
	private readonly AGED_BRIE = "Aged Brie";
	private readonly BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert";
	private readonly SULFURAS = "Sulfuras, Hand of Ragnaros";

	constructor(public value: string) {}

	public isAgedBrie(): boolean {
		return this.value === this.AGED_BRIE;
	}

	public isBackstagePasses(): boolean {
		return this.value === this.BACKSTAGE_PASSES;
	}

	public isSulfuras(): boolean {
		return this.value === this.SULFURAS;
	}
}
