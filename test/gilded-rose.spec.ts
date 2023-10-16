import { GildedRose } from "../src/gilded-rose";
import { ItemClass } from "../src/item-class";

describe("gilded rose", () => {
	describe("whatever case", () => {
		it("That SellIn Value Is Decreased", () => {
			const whateverItem = new ItemClass("whatever", 10, 0);

			const gildedRose = new GildedRose([whateverItem]);
			gildedRose.updateQuality();

			expect(whateverItem.sellIn).toBe(9);
		});

		it("That Quality Value Is Decreased", () => {
			const whateverItem = new ItemClass("whatever", 1, 10);

			const gildedRose = new GildedRose([whateverItem]);
			gildedRose.updateQuality();

			expect(whateverItem.quality).toBe(9);
		});

		it("That Quality Decreases Twice As Much When Sell By Is Passed", () => {
			const whateverItem = new ItemClass("whatever", 0, 10);

			const gildedRose = new GildedRose([whateverItem]);
			gildedRose.updateQuality();

			expect(whateverItem.quality).toBe(8);
		});

		it("That Quality Is Never Negative", () => {
			const whateverItem = new ItemClass("whatever", 0, 0);

			const gildedRose = new GildedRose([whateverItem]);
			gildedRose.updateQuality();

			expect(whateverItem.quality).toBe(0);
		});
	});

	describe("Aged Brie", () => {
		const NAME_AGED_BRIE = "Aged Brie";

		it("Increases Quality With Age", () => {
			const agedBrie = new ItemClass(NAME_AGED_BRIE, 5, 1);

			const gildedRose = new GildedRose([agedBrie]);
			gildedRose.updateQuality();

			expect(agedBrie.quality).toBe(2);
		});

		it("Quality Never Increases Past Fifty", () => {
			const agedBrie = new ItemClass(NAME_AGED_BRIE, 5, 50);

			const gildedRose = new GildedRose([agedBrie]);
			gildedRose.updateQuality();

			expect(agedBrie.quality).toBe(50);
		});
	});

	describe("Backstage", () => {
		const NAME_BACKSTAGE = "Backstage passes to a TAFKAL80ETC concert";

		it("Pass Increases Quality By One If Sell By Greater Then Ten", () => {
			const backstagePasses = new ItemClass(NAME_BACKSTAGE, 11, 20);

			const gildedRose = new GildedRose([backstagePasses]);
			gildedRose.updateQuality();

			expect(backstagePasses.quality).toBe(21);
		});

		it("Pass Increases Quality By Two If Sell By Smaller Than Ten", () => {
			const backstagePasses = new ItemClass(NAME_BACKSTAGE, 6, 20);

			const gildedRose = new GildedRose([backstagePasses]);
			gildedRose.updateQuality();

			expect(backstagePasses.quality).toBe(22);
		});

		it("Pass Increases Quality By Three If Sell By Smaller Than Five", () => {
			const backstagePasses = new ItemClass(NAME_BACKSTAGE, 5, 20);

			const gildedRose = new GildedRose([backstagePasses]);
			gildedRose.updateQuality();

			expect(backstagePasses.quality).toBe(23);
		});

		it("Pass Loses Value After Sell By Passes", () => {
			const backstagePasses = new ItemClass(NAME_BACKSTAGE, 0, 20);

			const gildedRose = new GildedRose([backstagePasses]);
			gildedRose.updateQuality();

			expect(backstagePasses.quality).toBe(0);
		});
	});

	describe("Sulfuras", () => {
		it("Never Changes", () => {
			const sulfuras = new ItemClass("Sulfuras, Hand of Ragnaros", 0, 25);

			const gildedRose = new GildedRose([sulfuras]);
			gildedRose.updateQuality();

			expect(sulfuras.quality).toBe(25);
			expect(sulfuras.sellIn).toBe(0);
		});
	});
});
