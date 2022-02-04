const messages = {
    de: {
        "stat.str": "Stärke",
        "stat.dex": "Geschick",
        "stat.fig": "Kampf",
        "stat.int": "Intelligenz",
        "stat.cha": "Charisma",
        "stat.sns": "Sinne",

        "range.self": "Selbst",
        "range.close": "Nah",
        "range.ranged": "Fernkampf",
    },
};

export default function trans(key) {
    //key.split('.');
    return messages.de[key];
}
