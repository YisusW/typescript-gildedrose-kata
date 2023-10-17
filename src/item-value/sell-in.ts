export class SellIn {
	constructor(public value: number) {}

	public decrease(): SellIn {
		return new SellIn(this.value - 1);
	}

	public isLessThan(days: number): boolean {
		return this.value < days;
	}
}
