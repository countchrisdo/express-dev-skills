const skills = [
    {id: 000001, skill: "Javascript"},
    {id: 000002, skill: "CSS"},
    {id: 000003, skill: "HTML"},
    {id: 000004, skill: "Express (sorta)"},

];
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}
function getAll() {
    return skills;
};

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}