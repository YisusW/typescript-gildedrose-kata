import { GildedRose } from "../src/gilded-rose";
import { ItemClass } from "../src/item-class";

describe("gilded rose", () => {

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

});