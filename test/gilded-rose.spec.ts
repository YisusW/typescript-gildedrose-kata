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

        it("Aged Brie Increases Quality With Age", () => {
            const agedBrie = new ItemClass("Aged Brie", 5, 1);
    
            const gildedRose = new GildedRose([agedBrie]);
            gildedRose.updateQuality();
    
            expect(agedBrie.quality).toBe(2);
        });

        it("Quality Never Increases Past Fifty", () => {
            const agedBrie = new ItemClass("Aged Brie", 5, 50);
    
            const gildedRose = new GildedRose([agedBrie]);
            gildedRose.updateQuality();

            expect(agedBrie.quality).toBe(50);
        });

    });
});
