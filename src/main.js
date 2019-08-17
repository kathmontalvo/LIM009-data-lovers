// var Chart = require('chart.js');

let dataLol = [];
const getJson = (datajson) => {
  fetch(datajson)
    .then(response => response.json())
    .then(total => {
      console.log(Object.entries(total.data))
      return dataLol = Object.entries(total.data);
    });
};
getJson('https://kathmontalvo.github.io/Leaguefic/src/data/lol/lol.json');

const championsListElement = document.getElementById('champions');
const infoChampion = document.getElementById('info-champions');

const printCardsOfChampions = (arrChampions) => {
  console.log(arrChampions)
  championsListElement.innerHTML = '';
  arrChampions.forEach((obj) => {
    let string = `
        <section id=${obj.id} name = "champs">
          <div ><img class="champion-img" src=${obj.image} alt=${obj.name}/></div>
          <div class="name-card">
          <div class="champion-name">${obj.name}</div>
          <div class="champion-mp"> MP: ${obj.mana}</div>
          </div>
        </section>
        `;
    const div = document.createElement('div');
    championsListElement.appendChild(div);
    div.innerHTML = string;
    div.className = 'card';
    printMainInfo(div);
  });
};
const statInfoChart = (obj) => {
  const string = '<canvas id="chart-top" class="chart"></canvas>';
  document.getElementById('champ-info').innerHTML = string;
  const ctx = document.getElementById('chart-top').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: Object.keys(obj[1].info),
      datasets: [{
        label: 'my dataset',
        data: Object.values(obj[1].info),
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
      }]
    },
    options: {
      scale: {
        ticks: {
          max: 10,
          min: 0,
          stepSize: 2
        }
      }
    }
  });
  return chart;
};
const printMainInfo = (div) => {
  const printName = div.querySelector('[name=\'champs\']');
  printName.addEventListener('click', () => {
    infoChampion.innerHTML = '';
    const atribId = printName.getAttribute('id');
    dataLol.filter((obj) => {
      if (atribId === obj[1].id) {
        const string = `
      <figure class="champ-img"><img class="champion-info-img"src=${obj[1].splash} alt=${obj[1].name}></figure>
      <section class="info-gnrl">
      <div class="champion-info-name">${obj[1].name}</div>
      <div class="champion-info-title">"${obj[1].title}"</div>
      <div class="champion-info-rol">Rol: ${obj[1].tags}</div>
      <div id="champ-info" class="champ-info"></div>
      </section>
      <section class="info-stats">
      <div class="champ-descrip">Description:${obj[1].blurb}</div>
      <h2 class="stat-title"> Statistics </h2>
      <table class="table-stat">
      <tr>
        <th>HP</th>
        <td>${obj[1].stats.hp} (+${obj[1].stats.hpperlevel} por nivel) </td>
      </tr>
      <tr>
        <th>MP</th>
        <td>${obj[1].stats.mp} (+${obj[1].stats.mpperlevel} por nivel)</td>
      </tr>
      <tr>
        <th>Armor</th>
        <td>${obj[1].stats.armor} (+${obj[1].stats.armorperlevel} por nivel)</td>
      </tr>
      <tr>
        <th>AD</th>
        <td>${obj[1].stats.attackdamage} (+${obj[1].stats.attackdamageperlevel} por nivel)</td>
      </tr>
      <tr>
        <th>HP reg</th>
        <td>${obj[1].stats.hpregen} (+${obj[1].stats.hpregenperlevel} por nivel)</td>
      </tr>
      <tr>
        <th>MP reg</th>
        <td>${obj[1].stats.mpregen} (+${obj[1].stats.mpregenperlevel} por nivel) </td>
      </tr>
      </table>
  `;
        const divInfo = document.createElement('div');
        divInfo.innerHTML = string;
        divInfo.className = 'data-champ';
        infoChampion.appendChild(divInfo);
        statInfoChart(obj);
      }
    });
    championsListElement.classList.add('hide');
    infoChampionPage.classList.remove('hide');
    navFilterAndSearch.classList.add('hide');
    asideStats.classList.add('hide');
  });
};

const statOfChamps = (arr) => {
  document.getElementById('hp-min').innerHTML = lol.statOfChampions(arr, 'hp', 'min');
  document.getElementById('hp-max').innerHTML = lol.statOfChampions(arr, 'hp', 'max');
  document.getElementById('adchamp-min').innerHTML = lol.statOfChampions(arr, 'ad', 'min');
  document.getElementById('adchamp-max').innerHTML = lol.statOfChampions(arr, 'ad', 'max');
};



const statChart = (stat) => {
  const string = '<canvas id="chart-top-stat" class="chart">';
  document.getElementById('stat-chart-champs').innerHTML = string;
  const arrOrder = dataLol.sort((first, second) => {
    return second[1]['stats'][stat] - first[1]['stats'][stat];
  });
  const arrTop = arrOrder.map(obj => {
    return obj[1]['stats'][stat];
  }).slice(0, 5);
  const champNames = arrOrder.map(obj => {
    return obj[1]['name'];
  }).slice(0, 5);
  const ctx = document.getElementById('chart-top-stat').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: champNames,
      datasets: [{
        label: 'TOP 5 BY ' + stat.toUpperCase(),
        data: arrTop,
        backgroundColor: 'rgba(128, 81, 81, 0.397)',
      }]
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true,
          }
        }]
      }
    }
  });
  return chart;
};

document.getElementById('btn-hp').addEventListener('click', () => {
  statChart('hp');
});
document.getElementById('btn-mp').addEventListener('click', () => {
  statChart('mp');
});
document.getElementById('btn-adamage').addEventListener('click', () => {
  statChart('attackdamage');
});

const selectRoles = document.getElementById('rol');
const sortChampions = document.getElementById('sort');
const minNumber = document.getElementById('min-number');
const maxNumber = document.getElementById('max-number');

const funcFilterAndSort = () => {
  const arrNameAndImageOfChampions = lol.getNameAndImageOfChampion(dataLol);
  let newChampionsArr = arrNameAndImageOfChampions;
  newChampionsArr = lol.filterChampionsRoles(selectRoles.value, arrNameAndImageOfChampions);
  newChampionsArr = lol.sortChampionsCards(sortChampions.value, newChampionsArr);
  newChampionsArr = lol.filterChampionsMana(newChampionsArr, minNumber.value, maxNumber.value);
  statOfChamps(newChampionsArr);
  printCardsOfChampions(newChampionsArr);
};


selectRoles.addEventListener('change', funcFilterAndSort);
sortChampions.addEventListener('change', funcFilterAndSort);
maxNumber.addEventListener('change', funcFilterAndSort);
minNumber.addEventListener('change', funcFilterAndSort);
maxNumber.addEventListener('keyup', funcFilterAndSort);
minNumber.addEventListener('keyup', funcFilterAndSort);

const btnSearch = document.getElementById('btn-search');
const search = document.getElementById('search');
const navFilterAndSearch = document.getElementById('nav-filter-search');
const asideStats = document.getElementById('aside');

btnSearch.addEventListener('click', () => {
  const arrNameAndImageOfChampions = lol.getNameAndImageOfChampion(dataLol);
  const searchChampions = arrNameAndImageOfChampions.filter((obj) => {
    return obj.id === search.value;
  });
  printCardsOfChampions(searchChampions);
});

const welcomePage = document.getElementById('welcome-pg');
const tutPage = document.getElementById('tut-pg');
const championsPage = document.getElementById('champions-pg');
const statsPage = document.getElementById('stats-pg');
const infoChampionPage = document.getElementById('info-champions-pg');

const btnHome = document.getElementById('btn-home');
btnHome.addEventListener('click', () => {
  welcomePage.classList.remove('hide');
  tutPage.classList.remove('hide');
  championsPage.classList.add('hide');
  infoChampionPage.classList.add('hide');
  statsPage.classList.add('hide');
});

const btnStats = document.getElementById('btn-stats');
btnStats.addEventListener('click', () => {
  welcomePage.classList.add('hide');
  tutPage.classList.add('hide');
  championsPage.classList.add('hide');
  infoChampionPage.classList.add('hide');
  statsPage.classList.remove('hide');
  statChart('hp');
});
const funcHideAndShow = () => {
  const data = lol.getNameAndImageOfChampion(dataLol)
  welcomePage.classList.add('hide');
  tutPage.classList.add('hide');
  statsPage.classList.add('hide');
  championsPage.classList.remove('hide');
  championsListElement.classList.remove('hide');
  infoChampionPage.classList.add('hide');
  navFilterAndSearch.classList.remove('hide');
  asideStats.classList.add('hide');
  document.getElementById('filter-form').reset();
  printCardsOfChampions(data);
  funcFilterAndSort();
};

document.getElementById('btn-champs').addEventListener('click', funcHideAndShow);
document.getElementById('btn-init').addEventListener('click', funcHideAndShow);
document.getElementById('btn-tut').addEventListener('click', funcHideAndShow);
document.getElementById('btn-filter-sort').addEventListener('click', () => {
  asideStats.classList.toggle('hide');
});


