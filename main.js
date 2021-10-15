const sonya = {
  name: "Sonya",
  hp: 70,
  img: src = 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: ['Ravager', 'Combat knife'],
  attack: function () {
    const result = this.name + ' Fight...';
    return result;
  }
}

const liukang = {
  name: "Liukahg",
  hp: 100,
  img: src = 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon: ['Shadow Belt', 'Drahmin`s mask'],
  attack: function () {
    const result = this.name + ' Fight...';
    return result;
  }
}

const $arenas = document.querySelector('.arenas');

function createPlayer(player, obj) {
  const $player1 = document.createElement('div');
  const $progressbar = document.createElement('div');
  const $character = document.createElement('div');
  const $img = document.createElement('img');
  const $life = document.createElement('div');
  const $name = document.createElement('div');

  $player1.classList.add(player);
  $progressbar.classList.add('progressbar')
  $character.classList.add('character');
  $life.classList.add('life');
  $name.classList.add('name');
  $img.src = obj.img;

  $life.style.width = obj.hp + '%';
  $name.innerHTML = obj.name;
  
  $arenas.appendChild($player1);
  $player1.appendChild($progressbar);
  $player1.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);
}

createPlayer('player1', sonya);
createPlayer('player2', liukang);