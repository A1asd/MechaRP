export default class BaseBag {
    bag = [];

    getBag() {
        return this.bag;
    }

    add(object) {
        this.bag.push(object);
        // this.bag[object.name] = object;
    }

    remove(objectId) {
        this.bag = this.bag.filter(obj => obj.name !== objectId);
    }

    get(objectId) {
        let newArray = this.bag.filter( obj => obj.name === objectId);
        return newArray[0];
    }

    has(objectId) {
        return !!this.bag.filter(obj => obj.name === objectId.name)[0];
    }
}
