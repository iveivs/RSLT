function getKiller(suspectInfo, deadPeople) {
    let killerName = "";
    Object.entries(suspectInfo).forEach(([suspectPerson, peopleWereSeen]) => {
        const isKiller = deadPeople.every((deadName) => {
            console.log('deadName',deadName);
            return peopleWereSeen.includes(deadName)
        });
        console.log('isKiller');
        if (isKiller) {
            killerName = suspectPerson;
        }
    });

    return killerName;
}

console.log(
    getKiller(
        {
            James: ["Jacob", "Bill", "Lucas"],
            Johnny: ["David", "Kyle", "Lucas"],
            Peter: ["Lucy", "Kyle"]
        },
        ["Lucas", "Bill"]
    )
); // Убийца James

console.log(
    getKiller(
        {
            Brad: [],
            Megan: ["Ben", "Kevin"],
            Finn: []
        },
        ["Ben"]
    )
); // Убийца Megan
