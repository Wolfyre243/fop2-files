const rarityMap = new Map([
    [50, 'Common'],
    [25, 'Uncommon'],
    [15, 'Rare'],
    [9, 'Epic'],
    [1, 'Legendary']
]);

let generateRarity = '';

function summonPet(chanceMap) {
    // Sum of all the chances
    let totalPercentage = 0;
    const chanceTable = {};

    chanceMap.forEach((rarity, weight) => {
        // Add to the total percentage
        totalPercentage += weight;
        chanceTable[totalPercentage] = rarity;
        /**
         * chancetable = {
         *  50: Common
         *  75: Uncommon
         *  90: Rare
         *  99: Epic
         *  100: Legendary
         * }
         */
    });

    const randomised = Math.floor(Math.random() * totalPercentage) + 1
    
    for (const chance in chanceTable) {
        if (randomised <= chance) {
            generateRarity = chanceTable[chance];
        }
    }
}

for (let i = 0; i < 100; i++) {
    console.log(`${i+1}. ${summonPet(rarityMap)}`);
}