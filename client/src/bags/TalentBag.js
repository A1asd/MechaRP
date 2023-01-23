import BaseBag from './BaseBag';

export default class TalentBag extends BaseBag {
    addTalents(talents) {
		Object.entries(talents).forEach((talent) => {
			this.addTalent(talent[1])
		})
        for (let i = 0; i < talents.length; i++) {
            this.add(talents[i]);
        }
        return this;
    }

    addTalent(talent) {
        this.add(talent);
        return this;
    }
}
