export class Quality {
	private readonly MAX_VALUE = 50;
	private readonly MIN_VALUE = 0;

	constructor(public value: number) {}

	public increase(): Quality {
		if (this.value === this.MAX_VALUE) {
			return this;
		}

		return new Quality(this.value + 1);
	}

	public decrease(): Quality {
		if (this.value === this.MIN_VALUE) {
			return this;
		}

		return new Quality(this.value - 1);
	}

	public reset(): Quality {
		return new Quality(this.MIN_VALUE);
	}
}
