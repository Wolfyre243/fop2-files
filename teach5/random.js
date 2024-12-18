const rarityMap = new Map([
    [50, 'Common'],
    [25, 'Uncommon'],
    [15, 'Rare'],
    [9, 'Epic'],
    [1, 'Legendary']
]);

function summonPet(chanceMap) {
    let totalPercentage = 0;
    const chanceTable = {};

    chanceMap.forEach((rarity, weight) => {
        totalPercentage += weight;
        chanceTable[totalPercentage] = rarity;
    });

    const randomised = Math.floor(Math.random() * totalPercentage) + 1
    
    for (const chance in chanceTable) {
        if (randomised <= chance) {
            return chanceTable[chance];
        }
    }
}

for (let i = 0; i < 100; i++) {
    console.log(`${i+1}. ${summonPet(rarityMap)}`);
}