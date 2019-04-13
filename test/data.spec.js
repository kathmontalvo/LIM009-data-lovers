global.window = global;
require('../src/data');

describe('lol', () => {
  const arrChampions = [
    ['Aatrox',
      {
        version: '6.24.1',
        id: 'Aatrox',
        key: '266',
        name: 'Aatrox',
        title: 'the Darkin Blade',
        img:
          'https://www.masternpm testypoints.com/assets/img/lol/champion_icons/Aatrox.png',
        splash:
          'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
        blurb:
          'Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox\'s ...',
        info: {
          attack: 8,
          defense: 4,
          magic: 3,
          difficulty: 4
        },
        image: {
          full: 'Aatrox.png',
          sprite: 'champion0.png',
          group: 'champion'
        },
        tags: ['Fighter', 'Tank'],
        partype: 'BloodWell',
        stats: {
          hp: 537.8,
          hpperlevel: 85,
          mp: 105.6,
          mpperlevel: 45,
          movespeed: 345,
          armor: 24.384,
          armorperlevel: 3.8,
          spellblock: 32.1,
          spellblockperlevel: 1.25,
          attackrange: 150,
          hpregen: 6.59,
          hpregenperlevel: 0.5,
          mpregen: 0,
          mpregenperlevel: 0,
          crit: 0,
          critperlevel: 0,
          attackdamage: 60.376,
          attackdamageperlevel: 3.2,
          attackspeedoffset: -0.04,
          attackspeedperlevel: 3
        }
      }
    ],
    ['Ahri',
      {
        version: '6.24.1',
        id: 'Ahri',
        key: '103',
        name: 'Ahri',
        title: 'the Nine-Tailed Fox',
        img:
          'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png',
        splash:
          'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
        blurb:
          'Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...',
        info: {
          attack: 3,
          defense: 4,
          magic: 8,
          difficulty: 5
        },
        image: {
          full: 'Ahri.png',
          sprite: 'champion0.png',
          group: 'champion'
        },
        tags: ['Mage', 'Assassin'],
        partype: 'MP',
        stats: {
          hp: 514.4,
          hpperlevel: 80,
          mp: 334,
          mpperlevel: 50,
          movespeed: 330,
          armor: 20.88,
          armorperlevel: 3.5,
          spellblock: 30,
          spellblockperlevel: 0,
          attackrange: 550,
          hpregen: 6.505,
          hpregenperlevel: 0.6,
          mpregen: 6,
          mpregenperlevel: 0.8,
          crit: 0,
          critperlevel: 0,
          attackdamage: 53.04,
          attackdamageperlevel: 3,
          attackspeedoffset: -0.065,
          attackspeedperlevel: 2
        }
      }
    ],
    ['Akali',
      {
        version: '6.24.1',
        id: 'Akali',
        key: '84',
        name: 'Akali',
        title: 'the Fist of Shadow',
        img:
          'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png',
        splash:
          'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
        blurb:
          'There exists an ancient order originating in the Ionian Isles dedicated to the preservation of balance. Order, chaos, light, darkness -- all things must exist in perfect harmony for such is the way of the universe. This order is known as the Kinkou ...',
        info: {
          attack: 5,
          defense: 3,
          magic: 8,
          difficulty: 7
        },
        image: {
          full: 'Akali.png',
          sprite: 'champion0.png',
          group: 'champion'
        },
        tags: ['Assassin'],
        partype: 'Energy',
        stats: {
          hp: 587.8,
          hpperlevel: 85,
          mp: 200,
          mpperlevel: 0,
          movespeed: 350,
          armor: 26.38,
          armorperlevel: 3.5,
          spellblock: 32.1,
          spellblockperlevel: 1.25,
          attackrange: 125,
          hpregen: 8.34,
          hpregenperlevel: 0.65,
          mpregen: 50,
          mpregenperlevel: 0,
          crit: 0,
          critperlevel: 0,
          attackdamage: 58.376,
          attackdamageperlevel: 3.2,
          attackspeedoffset: -0.1,
          attackspeedperlevel: 3.1
        }
      }
    ],
    ['Alistar',
      {
        version: '6.24.1',
        id: 'Alistar',
        key: '12',
        name: 'Alistar',
        title: 'the Minotaur',
        img:
          'https://www.masterypoints.com/assets/img/lol/champion_icons/Alistar.png',
        splash:
          'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
        blurb:
          'As the mightiest warrior to ever emerge from the Minotaur tribes of the Great Barrier, Alistar defended his tribe from Valoran\'s many dangers; that is, until the coming of the Noxian army. Alistar was lured from his village by the machinations of ...',
        info: {
          attack: 6,
          defense: 9,
          magic: 5,
          difficulty: 7
        },
        image: {
          full: 'Alistar.png',
          sprite: 'champion0.png',
          group: 'champion'
        },
        tags: ['Tank', 'Support'],
        partype: 'MP',
        stats: {
          hp: 613.36,
          hpperlevel: 106,
          mp: 278.84,
          mpperlevel: 38,
          movespeed: 330,
          armor: 24.38,
          armorperlevel: 3.5,
          spellblock: 32.1,
          spellblockperlevel: 1.25,
          attackrange: 125,
          hpregen: 8.675,
          hpregenperlevel: 0.85,
          mpregen: 8.5,
          mpregenperlevel: 0.8,
          crit: 0,
          critperlevel: 0,
          attackdamage: 61.1116,
          attackdamageperlevel: 3.62,
          attackspeedoffset: 0,
          attackspeedperlevel: 2.125
        }
      }
    ]
  ];
  const arrChampionsReverse = [
    ['Alistar',
      {
        version: '6.24.1',
        id: 'Alistar',
        key: '12',
        name: 'Alistar',
        title: 'the Minotaur',
        img:
          'https://www.masterypoints.com/assets/img/lol/champion_icons/Alistar.png',
        splash:
          'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
        blurb:
          'As the mightiest warrior to ever emerge from the Minotaur tribes of the Great Barrier, Alistar defended his tribe from Valoran\'s many dangers; that is, until the coming of the Noxian army. Alistar was lured from his village by the machinations of ...',
        info: {
          attack: 6,
          defense: 9,
          magic: 5,
          difficulty: 7
        },
        image: {
          full: 'Alistar.png',
          sprite: 'champion0.png',
          group: 'champion'
        },
        tags: ['Tank', 'Support'],
        partype: 'MP',
        stats: {
          hp: 613.36,
          hpperlevel: 106,
          mp: 278.84,
          mpperlevel: 38,
          movespeed: 330,
          armor: 24.38,
          armorperlevel: 3.5,
          spellblock: 32.1,
          spellblockperlevel: 1.25,
          attackrange: 125,
          hpregen: 8.675,
          hpregenperlevel: 0.85,
          mpregen: 8.5,
          mpregenperlevel: 0.8,
          crit: 0,
          critperlevel: 0,
          attackdamage: 61.1116,
          attackdamageperlevel: 3.62,
          attackspeedoffset: 0,
          attackspeedperlevel: 2.125
        }
      }
    ],
    ['Akali',
      {
        version: '6.24.1',
        id: 'Akali',
        key: '84',
        name: 'Akali',
        title: 'the Fist of Shadow',
        img:
          'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png',
        splash:
          'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
        blurb:
          'There exists an ancient order originating in the Ionian Isles dedicated to the preservation of balance. Order, chaos, light, darkness -- all things must exist in perfect harmony for such is the way of the universe. This order is known as the Kinkou ...',
        info: {
          attack: 5,
          defense: 3,
          magic: 8,
          difficulty: 7
        },
        image: {
          full: 'Akali.png',
          sprite: 'champion0.png',
          group: 'champion'
        },
        tags: ['Assassin'],
        partype: 'Energy',
        stats: {
          hp: 587.8,
          hpperlevel: 85,
          mp: 200,
          mpperlevel: 0,
          movespeed: 350,
          armor: 26.38,
          armorperlevel: 3.5,
          spellblock: 32.1,
          spellblockperlevel: 1.25,
          attackrange: 125,
          hpregen: 8.34,
          hpregenperlevel: 0.65,
          mpregen: 50,
          mpregenperlevel: 0,
          crit: 0,
          critperlevel: 0,
          attackdamage: 58.376,
          attackdamageperlevel: 3.2,
          attackspeedoffset: -0.1,
          attackspeedperlevel: 3.1
        }
      }
    ],
    ['Ahri',
      {
        version: '6.24.1',
        id: 'Ahri',
        key: '103',
        name: 'Ahri',
        title: 'the Nine-Tailed Fox',
        img:
          'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png',
        splash:
          'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
        blurb:
          'Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...',
        info: {
          attack: 3,
          defense: 4,
          magic: 8,
          difficulty: 5
        },
        image: {
          full: 'Ahri.png',
          sprite: 'champion0.png',
          group: 'champion'
        },
        tags: ['Mage', 'Assassin'],
        partype: 'MP',
        stats: {
          hp: 514.4,
          hpperlevel: 80,
          mp: 334,
          mpperlevel: 50,
          movespeed: 330,
          armor: 20.88,
          armorperlevel: 3.5,
          spellblock: 30,
          spellblockperlevel: 0,
          attackrange: 550,
          hpregen: 6.505,
          hpregenperlevel: 0.6,
          mpregen: 6,
          mpregenperlevel: 0.8,
          crit: 0,
          critperlevel: 0,
          attackdamage: 53.04,
          attackdamageperlevel: 3,
          attackspeedoffset: -0.065,
          attackspeedperlevel: 2
        }
      }
    ],
    ['Aatrox',
      {
        version: '6.24.1',
        id: 'Aatrox',
        key: '266',
        name: 'Aatrox',
        title: 'the Darkin Blade',
        img:
          'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png',
        splash:
          'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
        blurb:
          'Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox\'s ...',
        info: {
          attack: 8,
          defense: 4,
          magic: 3,
          difficulty: 4
        },
        image: {
          full: 'Aatrox.png',
          sprite: 'champion0.png',
          group: 'champion'
        },
        tags: ['Fighter', 'Tank'],
        partype: 'BloodWell',
        stats: {
          hp: 537.8,
          hpperlevel: 85,
          mp: 105.6,
          mpperlevel: 45,
          movespeed: 345,
          armor: 24.384,
          armorperlevel: 3.8,
          spellblock: 32.1,
          spellblockperlevel: 1.25,
          attackrange: 150,
          hpregen: 6.59,
          hpregenperlevel: 0.5,
          mpregen: 0,
          mpregenperlevel: 0,
          crit: 0,
          critperlevel: 0,
          attackdamage: 60.376,
          attackdamageperlevel: 3.2,
          attackspeedoffset: -0.04,
          attackspeedperlevel: 3
        }
      }
    ]
  ];
  const arrChampionsEqual = [
    ['Alistar-uno',
      {
        version: '6.24.1',
        id: 'Alistar',
        key: '15',
        name: 'Alistar',
        title: 'the Minotaur Red',
        img:
          'https://www.masterypoints.com/assets/img/lol/champion_icons/Alistar.png',
        splash:
          'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
        blurb:
          'As the mightiest warrior to ever emerge from the Minotaur tribes of the Great Barrier, Alistar defended his tribe from Valoran\'s many dangers; that is, until the coming of the Noxian army. Alistar was lured from his village by the machinations of ...',
        info: {
          attack: 16,
          defense: 94,
          magic: 53,
          difficulty: 17
        },
        image: {
          full: 'Alistar.png',
          sprite: 'champion0.png',
          group: 'champion'
        },
        tags: ['Tank', 'Support'],
        partype: 'MP',
        stats: {
          hp: 613.36,
          hpperlevel: 106,
          mp: 278.84,
          mpperlevel: 38,
          movespeed: 330,
          armor: 24.38,
          armorperlevel: 3.5,
          spellblock: 32.1,
          spellblockperlevel: 1.25,
          attackrange: 125,
          hpregen: 8.675,
          hpregenperlevel: 0.85,
          mpregen: 8.5,
          mpregenperlevel: 0.8,
          crit: 0,
          critperlevel: 0,
          attackdamage: 61.1116,
          attackdamageperlevel: 3.62,
          attackspeedoffset: 0,
          attackspeedperlevel: 2.125
        }
      }
    ],
    ['Alistar-dos',
      {
        version: '6.24.1',
        id: 'Alistar',
        key: '12',
        name: 'Alistar',
        title: 'the Minotaur Blue',
        img:
          'https://www.masterypoints.com/assets/img/lol/champion_icons/Alistar.png',
        splash:
          'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
        blurb:
          'As the mightiest warrior to ever emerge from the Minotaur tribes of the Great Barrier, Alistar defended his tribe from Valoran\'s many dangers; that is, until the coming of the Noxian army. Alistar was lured from his village by the machinations of ...',
        info: {
          attack: 26,
          defense: 19,
          magic: 51,
          difficulty: 19
        },
        image: {
          full: 'Alistar.png',
          sprite: 'champion0.png',
          group: 'champion'
        },
        tags: ['Tank', 'Support'],
        partype: 'MP',
        stats: {
          hp: 613.36,
          hpperlevel: 106,
          mp: 278.84,
          mpperlevel: 38,
          movespeed: 330,
          armor: 24.38,
          armorperlevel: 3.5,
          spellblock: 32.1,
          spellblockperlevel: 1.25,
          attackrange: 125,
          hpregen: 8.675,
          hpregenperlevel: 0.85,
          mpregen: 8.5,
          mpregenperlevel: 0.8,
          crit: 0,
          critperlevel: 0,
          attackdamage: 61.1116,
          attackdamageperlevel: 3.62,
          attackspeedoffset: 0,
          attackspeedperlevel: 2.125
        }
      }
    ],

  ];
  test('debería ser un objeto', () => {
    expect.objectContaining(lol);
  });
  describe('lol.getNameAndImageOfChampion', () => {
    test('debería ser una función', () => {
      expect(typeof lol.getNameAndImageOfChampion).toBe('function');
    });
    test('debería dar un array con objetos', () => {
      expect(lol.getNameAndImageOfChampion(arrChampions)).toEqual(
        [{
          attack: 60.376,
          hp: 537.8,
          id: 'Aatrox',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
          mana: 105.6,
          name: 'Aatrox',
          rol: ['Fighter', 'Tank']
        },
        {
          attack: 53.04,
          hp: 514.4,
          id: 'Ahri',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
          mana: 334,
          name: 'Ahri',
          rol: ['Mage', 'Assassin']
        },
        {
          attack: 58.376,
          hp: 587.8,
          id: 'Akali',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
          mana: 200,
          name: 'Akali',
          rol: ['Assassin']
        },
        {
          attack: 61.1116,
          hp: 613.36,
          id: 'Alistar',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
          mana: 278.84,
          name: 'Alistar',
          rol: ['Tank', 'Support']
        }
        ]
      );
    });
  });
  describe('lol.filterChampionsRoles', () => {
    test('debería ser una función', () => {
      expect(typeof lol.filterChampionsRoles).toBe('function');
    });
    test('debería devolver el array filtrado por rol', () => {
      expect(lol.filterChampionsRoles('Tank', lol.getNameAndImageOfChampion(arrChampions))).toEqual(
        [{
          attack: 60.376,
          hp: 537.8,
          id: 'Aatrox',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
          mana: 105.6,
          name: 'Aatrox',
          rol: ['Fighter', 'Tank']
        },
        {
          attack: 61.1116,
          hp: 613.36,
          id: 'Alistar',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
          mana: 278.84,
          name: 'Alistar',
          rol: ['Tank', 'Support']
        }
        ]
      );
    });
    test('debería devolver el array filtrado por rol en valor default', () => {
      expect(lol.filterChampionsRoles('default', lol.getNameAndImageOfChampion(arrChampions))).toEqual(lol.getNameAndImageOfChampion(arrChampions));
    });
  });
  describe('lol.filterChampionsMana', () => {
    test('debería ser una función', () => {
      expect(typeof lol.filterChampionsMana).toBe('function');
    });
    test('debería retornar el array filtrado segun rango de Mana', () => {
      expect(lol.filterChampionsMana(lol.getNameAndImageOfChampion(arrChampions), 100, 300)).toEqual(
        [{
          attack: 60.376,
          hp: 537.8,
          id: 'Aatrox',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
          mana: 105.6,
          name: 'Aatrox',
          rol: ['Fighter', 'Tank']
        },
        {
          attack: 58.376,
          hp: 587.8,
          id: 'Akali',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
          mana: 200,
          name: 'Akali',
          rol: ['Assassin']
        },
        {
          attack: 61.1116,
          hp: 613.36,
          id: 'Alistar',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
          mana: 278.84,
          name: 'Alistar',
          rol: ['Tank', 'Support']
        }
        ]
      );
    });
  });
  describe('lol.statOfChampions', () => {
    test('debería ser una función', () => {
      expect(typeof lol.statOfChampions).toBe('function');
    });
    test('debería retornar el valor máximo del hp del campeon', () => {
      expect(lol.statOfChampions(lol.getNameAndImageOfChampion(arrChampions), 'hp', 'max')).toEqual(613.36);
    });
    test('debería retornar el valor mínimo del hp del campeon', () => {
      expect(lol.statOfChampions(lol.getNameAndImageOfChampion(arrChampions), 'hp', 'min')).toEqual(514.4);
    });
    test('debería retornar el valor máximo del ad del campeon', () => {
      expect(lol.statOfChampions(lol.getNameAndImageOfChampion(arrChampions), 'ad', 'max')).toEqual(61.1116);
    });
    test('debería retornar el valor mínimo del hp del campeon', () => {
      expect(lol.statOfChampions(lol.getNameAndImageOfChampion(arrChampions), 'ad', 'min')).toEqual(53.04);
    });
  });
  describe('lol.sortChampionsCards', () => {
    test('debería ser una función', () => {
      expect(typeof lol.sortChampionsCards).toBe('function');
    });
    test('debería retornar el array de campeones ordenado de a-z', () => {
      expect(lol.sortChampionsCards('az', lol.getNameAndImageOfChampion(arrChampions))).toEqual(
        [{
          attack: 60.376,
          hp: 537.8,
          id: 'Aatrox',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
          mana: 105.6,
          name: 'Aatrox',
          rol: ['Fighter', 'Tank']
        },
        {
          attack: 53.04,
          hp: 514.4,
          id: 'Ahri',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
          mana: 334,
          name: 'Ahri',
          rol: ['Mage', 'Assassin']
        },
        {
          attack: 58.376,
          hp: 587.8,
          id: 'Akali',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
          mana: 200,
          name: 'Akali',
          rol: ['Assassin']
        },
        {
          attack: 61.1116,
          hp: 613.36,
          id: 'Alistar',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
          mana: 278.84,
          name: 'Alistar',
          rol: ['Tank', 'Support']
        }
        ]
      );
    });
    test('debería retornar el array de campeones ordenado de a-z', () => {
      expect(lol.sortChampionsCards('az', lol.getNameAndImageOfChampion(arrChampionsReverse))).toEqual(
        [{
          attack: 60.376,
          hp: 537.8,
          id: 'Aatrox',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
          mana: 105.6,
          name: 'Aatrox',
          rol: ['Fighter', 'Tank']
        },
        {
          attack: 53.04,
          hp: 514.4,
          id: 'Ahri',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
          mana: 334,
          name: 'Ahri',
          rol: ['Mage', 'Assassin']
        },
        {
          attack: 58.376,
          hp: 587.8,
          id: 'Akali',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
          mana: 200,
          name: 'Akali',
          rol: ['Assassin']
        },
        {
          attack: 61.1116,
          hp: 613.36,
          id: 'Alistar',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
          mana: 278.84,
          name: 'Alistar',
          rol: ['Tank', 'Support']
        }
        ]
      );
    });
    test('debería retornar el array de campeones ordenado de a-z', () => {
      expect(lol.sortChampionsCards('az', lol.getNameAndImageOfChampion(arrChampionsEqual))).toEqual(
        [{
          attack: 61.1116,
          hp: 613.36,
          id: 'Alistar',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
          mana: 278.84,
          name: 'Alistar',
          rol: ['Tank', 'Support']
        },
        {
          attack: 61.1116,
          hp: 613.36,
          id: 'Alistar',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
          mana: 278.84,
          name: 'Alistar',
          rol: ['Tank', 'Support']
        }]
      );
    });
    test('debería retornar el array de campeones ordenado de z-a', () => {
      expect(lol.sortChampionsCards('za', lol.getNameAndImageOfChampion(arrChampions))).toEqual(
        [{
          attack: 61.1116,
          hp: 613.36,
          id: 'Alistar',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
          mana: 278.84,
          name: 'Alistar',
          rol: ['Tank', 'Support']
        },
        {
          attack: 58.376,
          hp: 587.8,
          id: 'Akali',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
          mana: 200,
          name: 'Akali',
          rol: ['Assassin']
        },
        {
          attack: 53.04,
          hp: 514.4,
          id: 'Ahri',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
          mana: 334,
          name: 'Ahri',
          rol: ['Mage', 'Assassin']
        },
        {
          attack: 60.376,
          hp: 537.8,
          id: 'Aatrox',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
          mana: 105.6,
          name: 'Aatrox',
          rol: ['Fighter', 'Tank']
        }
        ]
      );
    });
    test('debería retornar el array de campeones ordenado de z-a', () => {
      expect(lol.sortChampionsCards('za', lol.getNameAndImageOfChampion(arrChampionsReverse))).toEqual(
        [{
          attack: 61.1116,
          hp: 613.36,
          id: 'Alistar',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
          mana: 278.84,
          name: 'Alistar',
          rol: ['Tank', 'Support']
        },
        {
          attack: 58.376,
          hp: 587.8,
          id: 'Akali',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
          mana: 200,
          name: 'Akali',
          rol: ['Assassin']
        },
        {
          attack: 53.04,
          hp: 514.4,
          id: 'Ahri',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
          mana: 334,
          name: 'Ahri',
          rol: ['Mage', 'Assassin']
        },
        {
          attack: 60.376,
          hp: 537.8,
          id: 'Aatrox',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
          mana: 105.6,
          name: 'Aatrox',
          rol: ['Fighter', 'Tank']
        }
        ]
      );
    });
    test('debería retornar el array de campeones ordenado de z-a', () => {
      expect(lol.sortChampionsCards('za', lol.getNameAndImageOfChampion(arrChampionsEqual))).toEqual(
        [{
          attack: 61.1116,
          hp: 613.36,
          id: 'Alistar',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
          mana: 278.84,
          name: 'Alistar',
          rol: ['Tank', 'Support']
        },
        {
          attack: 61.1116,
          hp: 613.36,
          id: 'Alistar',
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
          mana: 278.84,
          name: 'Alistar',
          rol: ['Tank', 'Support']
        }]
      );
    });
  });
});