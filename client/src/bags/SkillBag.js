import BaseBag from './BaseBag';

export default class SkillBag extends BaseBag {
    addSkill(skill) {
        this.add(skill);
        return this;
    }

    removeSkill(skillName) {
        this.remove(skillName);
        return this;
    }
}
