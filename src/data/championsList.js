export const championList = [
  "aatrox",
  "aphelios",
  "ashe",
  "brand",
  "darius",
  "diana",
  "draven",
  "garen",
  "gragas",
  "hecarim",
  "heimerdinger",
  "ivern",
  "jax",
  "kalista",
  "karma",
  "katarina",
  "kayle",
  "kennen",
  "khazix",
  "kindred",
  "kled",
  "leblanc",
  "leesin",
  "leona",
  "lissandra",
  "lulu",
  "lux",
  "mordekaiser",
  "morgana",
  "nautilus",
  "nidalee",
  "nocturne",
  "nunu",
  "pantheon",
  "poppy",
  "rell",
  "riven",
  "ryze",
  "sejuani",
  "sett",
  "soraka",
  "syndra",
  "taric",
  "teemo",
  "thresh",
  "trundle",
  "udyr",
  "varus",
  "vayne",
  "velkoz",
  "viego",
  "viktor",
  "vladimir",
  "volibear",
  "warwick",
  "yasuo",
  "ziggs",
  "zyra",
];

export const championsListByCost = {
  1: [
    "aatrox",
    "gragas",
    "kalista",
    "khazix",
    "kled",
    "leona",
    "lissandra",
    "poppy",
    "udyr",
    "vayne",
    "vladimir",
    "warwick",
    "ziggs",
  ],
  2: [
    "brand",
    "hecarim",
    "kennen",
    "leblanc",
    "nautilus",
    "sejuani",
    "sett",
    "soraka",
    "syndra",
    "thresh",
    "trundle",
    "varus",
    "viktor",
  ],
  3: [
    "ashe",
    "katarina",
    "leesin",
    "lulu",
    "lux",
    "morgana",
    "nidalee",
    "nocturne",
    "nunu",
    "pantheon",
    "riven",
    "yasuo",
    "zyra",
  ],
  4: [
    "aphelios",
    "diana",
    "draven",
    "ivern",
    "jax",
    "karma",
    "mordekaiser",
    "rell",
    "ryze",
    "taric",
    "velkoz",
  ],
  5: [
    "darius",
    "garen",
    "heimerdinger",
    "kayle",
    "kindred",
    "teemo",
    "viego",
    "volibear",
  ],
};

export const championsDescription = {
  aatrox: {
    range: 1,
    skill:
      "Aatrox strikes his target, dealing % of his Attack Damage, and heals himself.",
  },
  aphelios: {
    range: 4,
    skill:
      "Aphelios launches attacks simultaneously, one at his target and the rest at the enemies nearest to them, dealing % of his Attack Damage plus bonus physical damage to each.",
  },
  ashe: {
    range: 5,
    skill:
      "Ashe fires an arrow at the farthest enemy, dealing magic damage to the first enemy hit and stunning them. If the arrow travels at least 5 hexes, the stun duration is doubled. Enemies within 1 hex receive 50% of these effects.",
  },
  brand: {
    range: 3,
    skill:
      "Brand launches a ball of fire at the nearest non-seared enemy, searing them for magic damage over 12 seconds. Seared enemies have reduced Magic Resist.",
  },
  darius: {
    range: 1,
    skill:
      "Darius transforms into a God-Wolf, becoming unstoppable as he lunges towards a nearby enemy. A few God-Wolves join him in his hunt, each targeting their own prey. When God-Wolves bite enemies, they deal % of Darius' Attack Damage as physical damage, and reduce the enemy's Armor by 50% for 8 seconds. When Darius bites his prey, his next 2 attacks restore % of his maximun Health.",
  },
  diana: {
    range: 1,
    skill:
      "Diana calls forth moonlight, drawing in all nearby enemies, dealing magic damage and stunning them.",
  },
  draven: {
    range: 3,
    skill:
      "Draven starts spinning an axe, empowering his next attack to deal % of his Attack Damage plus bonus physical damage. It will return to his original location after striking the target. If Draven catches it, he will empower the axe again. Draven can spin up to 2 axes at a time.",
  },
  garen: {
    range: 1,
    skill:
      "Garen calls down a sword that strikes a large area around his target, dealing % of each target's max Health in magic damage and reducing their Magic Resist by 50% for 8 seconds. Garen gains a shield equal to % of his maximum Health for 5 seconds.",
  },
  gragas: {
    range: 1,
    skill:
      "Gragas drinks from his cask, granting him % of damage reduction for 4 seconds, and causing his next attack to deal bonus magic damage.",
  },
  hecarim: {
    range: 1,
    skill:
      "Hecarim creates an aura around himself for 3 seconds. Each enemy within the aura takes magic damage and heals Hecarim over the duration.",
  },
  heimerdinger: {
    range: 4,
    skill:
      "Heimerdinger empowers his Baby Dragon's next attack. The Baby Dragon's overcharged attack launches 3 fireballs across the battlefield, dealing magic damage and burning enemies for 18% of their maximum Health as true damage over 6 seconds, reducing healing by 50% for the duration. If Heimerdinger does not have a Baby Dragon, this Ability will create one instead.",
  },
  ivern: {
    range: 2,
    skill:
      "Ivern summons his Sentinel friend Daisy to fight with him. Daisy receives 100% of Ivern's Ability Power and immediately casts Shockwave upon arrival.",
  },
  jax: {
    range: 1,
    skill:
      "Jax slams his target for % of his Attack Damage and gains stacking Attack Speed for the remainder of combat. Jax leaps to the nearest enemy if no target is in his Attack Range.",
  },
  kalista: {
    range: 4,
    skill:
      "Kalista hurls a spear towards the farthest enemy, dealing % of her Attack Damage plus bonus physical damage to the first enemy it hits. If it kills an enemy, the spear continues and will deal any excess damage to the next enemy it hits.",
  },
  karma: {
    range: 4,
    skill:
      "Karma fires a burst of energy towards a random enemy's location that detonates upon impact, dealing magic damage to adjacent enemies, and reducing Karma's maximum Mana (down to a minimum of 10). Karma empowers every third cast, causing it to launch 3 bursts of energy toward different targets instead of 1.",
  },
  katarina: {
    range: 1,
    skill:
      "Katarina throws a dagger at the farthest enemy, dealing magic damage. When the dagger lands near the target Katarina teleports to it and immediately launches 3 additional daggers at the nearest enemies that each deal magic damage.",
  },
  kayle: {
    range: 4,
    skill:
      "Passive: Kayle ascends every a few seconds. Each bonus stacks with the one before, until she is fully ascended. ",
  },
  kennen: {
    range: 2,
    skill:
      "Kennen engulfs himself in flame, dashing behind his target, then to the farthest enemy. Enemies he passes through are zapped dealing magic damage and stunning them.",
  },
  khazix: {
    range: 1,
    skill:
      "Kha'Zix slashes the nearest enemy, dealing magic damage. If the enemy has no adjacent allies, this damage is increased.",
  },
  kindred: {
    range: 3,
    skill:
      "Lamb creates a zone around herself for a few seconds that prevents allies within from falling below a specific amount of Health or dying. While Lamb's Respite is active, Wolf is invulnerable.",
  },
  kled: {
    range: 1,
    skill:
      "Passive: Kled enters combat on Skaarl, granting him a shield for 80% of his maximum health. When the shield is broken he dismounts, becoming untargetable briefly, and granting Attack Speed and causing every 4th attack to deal 200% of his Attack Damage.",
  },
  leblanc: {
    range: 3,
    skill:
      "LeBlanc launches ethereal chains at the 2 enemies nearest her, dealing magic damage and, after a short delay, stunning them.",
  },
  leesin: {
    range: 1,
    skill:
      "Lee Sin slams the ground, dealing magic damage to nearby enemies and slowing their Attack Speed by 50% for 4 seconds.",
  },
  leona: {
    range: 1,
    skill:
      "Leona creates a barrier around herself, reducing all incoming damage for 4 seconds.",
  },
  lissandra: {
    range: 3,
    skill:
      "Lissandra hurls a dagger toward the enemy with the highest Attack Damage, dealing magic damage to the first target it hits. After hitting its initial target or at its final destination, the dagger explodes dealing magic damage to nearby targets. All enemies hit by this spell have their Attack Damage reduced for 8 seconds.",
  },
  lulu: {
    range: 3,
    skill:
      "Lulu enchants several units nearest to her. Enchanted allies gain % bonus Attack Speed for 4 seconds. Enchanted enemies are stunned and transformed into a docile feline for a few seconds, taking 20% increased damage. If there are less targets nearby, Lulu will enchant herself.",
  },
  lux: {
    range: 3,
    skill:
      "Lux launches her wand toward her farthest ally, then calls the wand back to her hand. The wand shields each ally in its path for 3 seconds. Lux also empowers her next attack to deal an additional magic damage.",
  },
  mordekaiser: {
    range: 1,
    skill:
      "Mordekaiser shields himself for 50% of his maximum health for 5 seconds, empowering his mace to deal bonus magic damage and gain 1 hex of range for the same duration.",
  },
  morgana: {
    range: 2,
    skill:
      "Morgana fires chains to nearby enemies, dealing magic damage. After 3 seconds, all chained enemies are dealt an additional magic damage and stunned.",
  },
  nautilus: {
    range: 1,
    skill:
      "Nautilus causes the ground beneath his target to erupt, knocking them up, stunning them, and dealing magic damage. Enemies adjacent to the target receive 50% of this effect.",
  },
  nidalee: {
    range: 3,
    skill:
      "Nidalee transforms into a cougar, leaping behind the lowest Health enemy. While in cougar form, Nidalee gains Dodge Chance and her Attack Range is reduced to 1 hex. Whenever she Dodges or critically strikes, her next attack deals bonus magic damage.",
  },
  nocturne: {
    range: 1,
    skill:
      "Passive: Every third attack, Nocturne slashes all adjacent enemies for 125% of his Attack Damage, and heals himself for % of the damage dealt. If only one target is hit, Nocturne increase his Attack Speed for 3 seconds.",
  },
  nunu: {
    range: 1,
    skill:
      "Willump bites his target, dealing magic damage. If Willump's target has less Health than he does before the bite, it deals an additional 50% damage and becomes true damage.",
  },
  pantheon: {
    range: 1,
    skill:
      "Pantheon braces his shield, reducing all incoming damage for 4 seconds, and dealing % of his Attack Damage in the area in front of him over the duration.",
  },
  poppy: {
    range: 1,
    skill:
      "Poppy throws her buckler at the farthest enemy, dealing magic damage. The buckler then bounces back, granting Poppy a shield that blocks damage.",
  },
  rell: {
    range: 1,
    skill:
      "Rell leaps into the air and creates a tether between herself and her farthest ally. When she lands, the tether breaks, stunning all nearby enemies in its path for a few seconds. This effect also grants Health shield for 4 seconds to nearby allies in the same area.",
  },
  riven: {
    range: 1,
    skill:
      "Riven empowers her blade, stunning nearby enemies for 1.5 seconds and dealing them magic damage. For the next 8 seconds, she gains bonus Attack Damage.",
  },
  ryze: {
    range: 3,
    skill:
      "Riven empowers her blade, stunning nearby enemies for 1.5 seconds and dealing them magic damage. For the next 8 seconds, she gains bonus Attack Damage.",
  },
  sejuani: {
    range: 1,
    skill:
      "Sejuani signals Bristle to charge, dealing magic damage and stunning her target. She then gains Frost Armor, granting her Armor and Magic Resist for 4 seconds.",
  },
  sett: {
    range: 1,
    skill:
      "Sett pulls back for a punch, shredding Armor for 10 seconds (stacks) and dealing % of his Attack Damage as physical damage to all enemies in the area.",
  },
  soraka: {
    range: 3,
    skill:
      "Soraka calms the area around the enemy with the highest current percent Mana, dealing magic damage to all enemies hit and increasing the cost of their next ability.",
  },
  syndra: {
    range: 4,
    skill:
      "Syndra grabs the nearest enemy and flings them towards the farthest enemy, dealing magic damage to all nearby enemies upon impact and stunning the thrown target.",
  },
  taric: {
    range: 1,
    skill:
      "All allies in a large area around Taric are healed and gain Armor for 5 seconds.",
  },
  teemo: {
    range: 4,
    skill:
      "Teemo scatters Infernal Souls around a random enemy. When an enemy nears an Infernal Soul (or after 3 seconds), it explodes dealing magic damage to nearby enemies and reducing their Attack Speed by 50%.",
  },
  thresh: {
    range: 2,
    skill:
      "Thresh hooks his farthest enemy with his chain scythe, dealing magic damage and pulling them toward himself.",
  },
  trundle: {
    range: 1,
    skill:
      "Trundle drains the strength from his current target, stealing their Health, Armor, Magic Resist, and Attack Damage for 8 seconds.",
  },
  udyr: {
    range: 1,
    skill:
      "Udyr swaps between Turtle and Tiger stance with each cast, gaining the following benefits: Turtle: Gain a Health shield for 4 seconds. Tiger: Strike 3 times quickly with his next attack for % of his Attack Damage.",
  },
  varus: {
    range: 4,
    skill:
      "Varus fires a hail of arrows around his target, dealing % of his Attack Damage as physical damage. Varus and allies within the area are blessed, causing them to deal bonus magic damage with their attacks for 6 seconds.",
  },
  vayne: {
    range: 4,
    skill: "Passive: Vayne's third attack on a target deals bonus true damage.",
  },
  velkoz: {
    range: 4,
    skill:
      "Vel'Koz channels a ray of energy for 3 seconds toward the enemy nearest the center of the battlefield, dealing total magic damage over the duration. The beam widens as Vel'Koz channels, and he will pivot if there are no enemies in the area.",
  },
  viego: {
    range: 1,
    skill:
      "Viego corrupts the soul of his target for 5 seconds, stunning them and dealing magic damage, increasing 100% each second. Viego will be interrupted if he is stunned, and Viego's allies prefer not to target his victim during soul corruption. If his victim dies, they are resurrected at full Health to fight for him, but they lose their Health per second.",
  },
  viktor: {
    range: 4,
    skill:
      "Viktor blasts his target, dealing magic damage to the nearest enemy. He also grants a shield to the 3 allies nearest his target for 5 seconds.",
  },
  vladimir: {
    range: 2,
    skill: "Vladimir deals magic damage to the target and heals himself.",
  },
  volibear: {
    range: 1,
    skill:
      "Volibear leaps toward his target, then slams the ground in a large area around him. This effect knocks up and stuns enemies, removing any shields and dealing magic damage.",
  },
  warwick: {
    range: 1,
    skill:
      "Warwick leaps to the enemy with the lowest percent Health, stunning them, dealing magic damage and healing himself for 80% of the damage over 2 seconds. If this Ability kills the target, Warwick will instantly cast it again.",
  },
  yasuo: {
    range: 1,
    skill:
      "Yasuo strikes his target, dealing magic damage. He then empowers his blade, gaining stacking bonus true damage on-hit for the rest of combat.",
  },
  ziggs: {
    range: 4,
    skill: "Ziggs throws an arcane bomb at his target, dealing magic damage.",
  },
  zyra: {
    range: 1,
    skill:
      "Zyra sends a surge of vines toward her farthest enemy, dealing magic damage and stunning all enemies they hit.",
  },
};
