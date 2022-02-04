import BaseBag from './BaseBag';

export default class StatBag extends BaseBag {
    addStats(...stats) {
        for (let i = 0; i < stats.length; i++) {
            this.add(stats[i]);
        }
        return this;
    }

    addStat(stat) {
        this.add(stat);
        return this;
    }

    setStat(stat, value) {
        this.getStat(stat).base = value;
    }

    getStat(stat) {
        return this.get(stat);
    }
}
