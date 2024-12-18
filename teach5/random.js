const rarityMap = new Map([
    [50, 'Common'],
    [25, 'Uncommon'],
    [15, 'Rare'],
    [9.5, 'Epic'],
    [0.5, 'Legendary']
]);

function summonPet(chanceMap) {
    let totalPercentage = 0;
    const chanceTable = {};

    chanceMap.forEach((rarity, weight) => {
        totalPercentage += weight;
        chanceTable[totalPercentage] = rarity;
    });

    const randomised = Math.floor(Math.random() * totalPercentage) + 1
    console.log('Random number:', randomised)
    console.log(chanceTable);

    // chanceArr.sort((a, b) => a - b);
    for (const chance in chanceTable) {
        if (randomised <= chance) {
            console.log(chance)
            console.log(chanceTable[chance]);
            return;
        }
    }
}

summonPet(rarityMap);