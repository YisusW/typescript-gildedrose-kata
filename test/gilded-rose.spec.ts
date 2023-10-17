import { FactoryItem } from "../src/factory-Item";
import { GildedRose } from "../src/gilded-rose";
import { Quality, SellIn } from "../src/item-value";

describe("gilded rose", () => {
	describe("whatever case", () => {
		it("That SellIn Value Is Decreased", () => {
			const whateverItem = FactoryItem.basedOn("whatever", 10, 0);

			new GildedRose().updateQuality([whateverItem]);

			const expectedSellIn = new SellIn(9);
			expect(whateverItem.sellIn).toEqual(expectedSellIn);
		});

		it("That Quality Value Is Decreased", () => {
			const whateverItem = FactoryItem.basedOn("whatever", 1, 10);

			new GildedRose().updateQuality([whateverItem]);

			const expectedQuality = new Quality(9);
			expect(whateverItem.quality).toEqual(expectedQuality);
		});

		it("That Quality Decreases Twice As Much When Sell By Is Passed", () => {
			const whateverItem = FactoryItem.basedOn("whatever", 0, 10);

			new GildedRose().updateQuality([whateverItem]);

			const expectedQuality = new Quality(8);
			expect(whateverItem.quality).toEqual(expectedQuality);
		});

		it("That Quality Is Never Negative", () => {
			const whateverItem = FactoryItem.basedOn("whatever", 0, 0);

			new GildedRose().updateQuality([whateverItem]);

			const expectedQuality = new Quality(0);
			expect(whateverItem.quality).toEqual(expectedQuality);
		});
	});

	describe("Aged Brie", () => {
		const NAME_AGED_BRIE = "Aged Brie";

		it("Increases Quality With Age", () => {
			const agedBrie = FactoryItem.basedOn(NAME_AGED_BRIE, 5, 1);

			new GildedRose().updateQuality([agedBrie]);

			const expectedQuality = new Quality(2);
			expect(agedBrie.quality).toEqual(expectedQuality);
		});

		it("Quality Never Increases Past Fifty", () => {
			const agedBrie = FactoryItem.basedOn(NAME_AGED_BRIE, 5, 50);

			new GildedRose().updateQuality([agedBrie]);

			const expectedQuality = new Quality(50);
			expect(agedBrie.quality).toEqual(expectedQuality);
		});
	});

	describe("Backstage", () => {
		const NAME_BACKSTAGE = "Backstage passes to a TAFKAL80ETC concert";

		it("Pass Increases Quality By One If Sell By Greater Then Ten", () => {
			const backstagePasses = FactoryItem.basedOn(NAME_BACKSTAGE, 11, 20);

			new GildedRose().updateQuality([backstagePasses]);

			const expectedQuality = new Quality(21);
			expect(backstagePasses.quality).toEqual(expectedQuality);
		});

		it("Pass Increases Quality By Two If Sell By Smaller Than Ten", () => {
			const backstagePasses = FactoryItem.basedOn(NAME_BACKSTAGE, 6, 20);

			new GildedRose().updateQuality([backstagePasses]);

			const expectedQuality = new Quality(22);
			expect(backstagePasses.quality).toEqual(expectedQuality);
		});

		it("Pass Increases Quality By Three If Sell By Smaller Than Five", () => {
			const backstagePasses = FactoryItem.basedOn(NAME_BACKSTAGE, 5, 20);

			new GildedRose().updateQuality([backstagePasses]);

			const expectedQuality = new Quality(23);
			expect(backstagePasses.quality).toEqual(expectedQuality);
		});

		it("Pass Loses Value After Sell By Passes", () => {
			const backstagePasses = FactoryItem.basedOn(NAME_BACKSTAGE, 0, 20);

			new GildedRose().updateQuality([backstagePasses]);

			const expectedQuality = new Quality(0);
			expect(backstagePasses.quality).toEqual(expectedQuality);
		});
	});

	describe("Sulfuras", () => {
		it("Never Changes", () => {
			const sulfuras = FactoryItem.basedOn("Sulfuras, Hand of Ragnaros", 0, 25);

			new GildedRose().updateQuality([sulfuras]);

			const expectedQuality = new Quality(25);
			expect(sulfuras.quality).toEqual(expectedQuality);

			const expectedSellIn = new SellIn(0);
			expect(sulfuras.sellIn).toEqual(expectedSellIn);
		});
	});
});
