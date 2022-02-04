class ItemFactory {
    static itemFactory;

    static getInstance() {
        if (ItemFactory.itemFactory) {
            return ItemFactory.itemFactory;
        }

        ItemFactory.itemFactory = new ItemFactory();
    }
}
