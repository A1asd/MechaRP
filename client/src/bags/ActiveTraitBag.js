import BaseBag from './BaseBag';

export default class ActiveTraitBag extends BaseBag {
    addTrait(trait) {
        this.add(trait);
        return this;
    }

    removeTrait(trait) {
        this.remove(trait.name);
        return this;
    }
}
