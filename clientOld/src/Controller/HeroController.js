const hero = new Hero();

const statIds = {
    "stat.fig": 'hero-stats-fig',
    "stat.str": 'hero-stats-str',
    "stat.dex": 'hero-stats-dex',
    "stat.int": 'hero-stats-int',
    "stat.cha": 'hero-stats-cha',
    "stat.sns": 'hero-stats-sns',
}

function create() {
    const createTemplate = `
        <label for="hero-name">Name</label><input id="hero-name" type="text">
        <label for="hero-hp">Hitpoints</label><input id="hero-hp" type="text">
        <div id="skills">
            ${Skill.LIST.map(skill => `
                <input id="hero-skill-${skill.name}" onchange='toggleSkill(${JSON.stringify(skill)})' type="checkbox">
                <label for="hero-skill-${skill.name}">${skill.name} - ${skill.shortDesc}</label>
            `)}
        </div>
        <input type="button" onclick="createHero()" value="erstellen">
    `;

    document.body.innerHTML = createTemplate;
    /*for (let i = 0; i < statinputs.length; i++) {
        document.body.append(statinputs[i]);
    }*/

    createStatInput(Stat.FIGHTING);
    createStatInput(Stat.STRENGTH, {min: "7"});
    createStatInput(Stat.DEXTERITY);
    createStatInput(Stat.INTELLIGENCE);
    createStatInput(Stat.CHARISMA);
    createStatInput(Stat.SENSE);
}

function createStatInput(stat, options = {}, withLabel = true) {
    let input = document.createElement('input');
    input.id = statIds[stat];
    input.type = 'number';
    input.value = hero.getStat(stat).getValue();

    for (let prop in options) {
        input[prop] = options[prop];
    }

    input.addEventListener('input', function() {
        changeStat(stat);
    });

    if (withLabel) {
        let label = document.createElement('label');
        label.htmlFor = input.id;
        label.innerHTML = trans(stat);
        label.insertAdjacentElement('afterend', input);
        document.body.append(label);
    }

    document.body.append(input);
}

function toggleSkill(skill) {
    if (!hero.skills.has(skill)) {
        hero.skills.addSkill(skill);
    } else {
        hero.skills.removeSkill(skill);
    }
}

function changeStat(stat) {
    hero.getStat(stat).base = parseInt(document.getElementById(statIds[stat]).value);
    calculateHealth();
}

function calculateHealth() {
    health = hero.getStat(Stat.STRENGTH).getValue() * 2;
    document.getElementById('hero-hp').value = parseInt(health);
}

function createHero() {
    hero.name = document.getElementById("hero-name").value;
    hero.maxhp = document.getElementById("hero-hp").value;
    hero.curhp = document.getElementById("hero-hp").value;
    hero.getStats().setStat(Stat.FIGHTING, parseInt(document.getElementById("hero-stats-fig").value));
    hero.getStats().setStat(Stat.STRENGTH, parseInt(document.getElementById("hero-stats-str").value));
    hero.getStats().setStat(Stat.DEXTERITY, parseInt(document.getElementById("hero-stats-dex").value));
    hero.getStats().setStat(Stat.INTELLIGENCE, parseInt(document.getElementById("hero-stats-int").value));
    hero.getStats().setStat(Stat.CHARISMA, parseInt(document.getElementById("hero-stats-cha").value));
    hero.getStats().setStat(Stat.SENSE, parseInt(document.getElementById("hero-stats-sns").value));

    view();
}

function view() {
    const viewTemplate = `
        <div>
            <button id="back" onclick="create()">Back</button>
            <h2>${hero.name}</h2>
            <p>Hitpoints: ${hero.curhp}/${hero.maxhp}</p>
            Stats:
            <table>
                <tr><td>${trans(Stat.FIGHTING)}</td><td>${hero.stats.getStat(Stat.FIGHTING).getValue()}</td></tr>
                <tr><td>${trans(Stat.STRENGTH)}</td><td>${hero.stats.getStat(Stat.STRENGTH).getValue()}</td></tr>
                <tr><td>${trans(Stat.DEXTERITY)}</td><td>${hero.stats.getStat(Stat.DEXTERITY).getValue()}</td></tr>
                <tr><td>${trans(Stat.INTELLIGENCE)}</td><td>${hero.stats.getStat(Stat.INTELLIGENCE).getValue()}</td></tr>
                <tr><td>${trans(Stat.CHARISMA)}</td><td>${hero.stats.getStat(Stat.CHARISMA).getValue()}</td></tr>
                <tr><td>${trans(Stat.SENSE)}</td><td>${hero.stats.getStat(Stat.SENSE).getValue()}</td></tr>
            </table>
            Talents:
            <table>
            </table>
            Skills:<ul>
                ${hero.getSkills().map(skill =>
                    `<li>${skill.name} - ${skill.shortDesc}</li>`
                ).join('')}</ul>
        </div>
    `;

    document.body.innerHTML = viewTemplate;
}

document.addEventListener('DOMContentLoaded', function() {
    create();
});
