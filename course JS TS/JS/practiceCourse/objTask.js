const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

function showExperience(plan) {
    const { exp } = plan.skills;
    return exp;
}

function showProgrammingLangs(plan) {
    const { programmingLangs } = plan.skills;

    if (!programmingLangs) {
        return "";
    }

    let res = "";
    for (let [k, v] of Object.entries(programmingLangs)) {
        res += (`Язык ${k} изучен на ${v} `);
    }
    console.log(res);
}

function showAgeAndLangs(plan) {
    const { name, age } = plan;
    const { languages } = plan.skills;

    return `Мне ${age} и я владею языками: ${languages.join(" ").toUpperCase()}`
}

console.log(showAgeAndLangs(personalPlanPeter))
showProgrammingLangs(personalPlanPeter);
console.log(showExperience(personalPlanPeter));