import { FactoryItem } from "../src/factory-Item";
import { GildedRose } from "../src/gilded-rose";

xdescribe("entry point of gilded rose", (): void => {
	it("should emulate the GildedRoseCliEntryPoint output", (): void => {
		// console.info("OMGHAI!");

		const items = [
			FactoryItem.basedOn("+5 Dexterity Vest", 10, 20), //
			FactoryItem.basedOn("Aged Brie", 2, 0), //
			FactoryItem.basedOn("Elixir of the Mongoose", 5, 7), //
			FactoryItem.basedOn("Sulfuras, Hand of Ragnaros", 0, 80), //
			FactoryItem.basedOn("Sulfuras, Hand of Ragnaros", -1, 80),
			FactoryItem.basedOn("Backstage passes to a TAFKAL80ETC concert", 15, 20),
			FactoryItem.basedOn("Backstage passes to a TAFKAL80ETC concert", 10, 49),
			FactoryItem.basedOn("Backstage passes to a TAFKAL80ETC concert", 5, 49),
			// this conjured item does not work properly yet
			FactoryItem.basedOn("Conjured Mana Cake", 3, 6),
		];

		const app = new GildedRose();

		const days = 2;

		for (let i = 0; i < days; i++) {
			// console.info(`-------- day ${i} --------`);
			// console.info("name, sellIn, quality");

			app.updateQuality(items);
		}
	});
});
