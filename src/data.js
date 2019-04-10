window.lol = {
  getNameAndImageOfChampion: (arrChampions) => {
    return arrChampions.map((obj) => {
      return { image: obj[1].splash, name: obj[1].name, rol: obj[1].tags, id: obj[1].id, attack: obj[1].stats.attackdamage, mana: obj[1].stats.mp, hp: obj[1].stats.hp };
    });
  },
  filterChampionsRoles: (rol, arrChampions) => {
    const arrFilteredRol = arrChampions.filter((championRol) => {
      return championRol.rol[0] === rol || championRol.rol[1] === rol;
    });
    return arrFilteredRol;
  },
  filterChampionsMana: (arr, minNumber, maxNumber) => {
    const arrFilteredMana = arr.filter((elem) => {
      if (minNumber <= elem.mana && elem.mana <= maxNumber) {
        return elem.mana;
      }
    });
    return arrFilteredMana;
  },
  statOfChampions: (arr, caract, value) => {
    const newArray = arr.map((statistic) => {
      if (caract === 'ad') {
        return statistic.attack;
      } else {
        return statistic.hp;
      }
    });
    const number = newArray.reduce((result, stat) => { // (valor previo, valor actual)
      if (value === 'max' && result < stat) {
        result = stat;
      } else if (value === 'min' && result > stat) {
        result = stat;
      }
      return result;
    });
    return number;
  },
  sortChampionsCards: (sortChamps, arr) => {
    let nuevoarray = arr.map(objCampeon => objCampeon).sort((firstName, secondName) => {
      if (firstName.name > secondName.name) {
        return 1;
      } else if (firstName.name < secondName.name) {
        return -1;
      } else {
        return 0;
      }
    });
    if (sortChamps === 'az') {
      return nuevoarray;
    } else {
      nuevoarray.reverse();
    }
    return nuevoarray;
  }
};