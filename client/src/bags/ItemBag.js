import BaseBag from './BaseBag';

export default class ItemBag extends BaseBag {
    addItem(item) {
        this.add(item);
        return this;
    }

    removeItem(itemName) {
        this.remove(itemName);
        return this;
    }
}
