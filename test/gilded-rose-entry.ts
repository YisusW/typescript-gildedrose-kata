import { GildedRose } from "../src/gilded-rose";
import { ItemClass } from "../src/item-class";

describe("entry point of gilded rose", (): void => {
	xit("should emulate the GildedRoseCliEntryPoint output", (): void => {
		console.info("OMGHAI!");

		const items = [
			new ItemClass("+5 Dexterity Vest", 10, 20), //
			new ItemClass("Aged Brie", 2, 0), //
			new ItemClass("Elixir of the Mongoose", 5, 7), //
			new ItemClass("Sulfuras, Hand of Ragnaros", 0, 80), //
			new ItemClass("Sulfuras, Hand of Ragnaros", -1, 80),
			new ItemClass("Backstage passes to a TAFKAL80ETC concert", 15, 20),
			new ItemClass("Backstage passes to a TAFKAL80ETC concert", 10, 49),
			new ItemClass("Backstage passes to a TAFKAL80ETC concert", 5, 49),
			// this conjured item does not work properly yet
			new ItemClass("Conjured Mana Cake", 3, 6),
		];

		const app = new GildedRose(items);

		const days = 2;

		for (let i = 0; i < days; i++) {
			console.info(`-------- day ${i} --------`);
			console.info("name, sellIn, quality");
			items.forEach((item) => {
				console.info(item);
			});
			console.info();
			app.updateQuality();
		}
	});
});
