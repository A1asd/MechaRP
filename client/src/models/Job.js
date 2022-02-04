import Modification from "./Modification";
import Stat from "./Stat";
import Trait from "./Trait";

export default class Job {
    id; name; description; traits; modifications;

    static LIST = {
        ranger: Job.Ranger(),
        fighter: Job.Fighter(),
    };

    constructor(id, name, description, traits, modifications) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.traits = traits;
        this.modifications = modifications;
    }

    applyModifications(hero) {
        this.modifications.map((modification) => hero.getStat(modification.stat).modifier += modification.value);
    }

    removeModifications(hero) {
        this.modifications.map((modification) => hero.getStat(modification.stat).modifier -= modification.value);
    }

    static Ranger() {
        let traits = [
            Trait.LIST.bogenskills,
            Trait.LIST.tierkram,
            Trait.LIST.schuss,
        ]
        let modifications = [
            new Modification(Stat.DEXTERITY, 2),
            new Modification(Stat.SENSE, 1),
        ]
        return new Job('ranger', 'Ranger', 'Krasser typ mit bogen', traits, modifications)
    }

    static Fighter() {
        let traits = [
            Trait.LIST.schwertskills,
            Trait.LIST.schildkram,
            Trait.LIST.schildstos,
        ]
        let modifications = [
            new Modification(Stat.FIGHTING, 2),
            new Modification(Stat.STRENGTH, 1),
        ]
        return new Job('fighter', 'Krieger', 'Krasser typ mit schwert', traits, modifications)
    }
}
