const $arenas = document.querySelector('.arenas');

const player1 = {
  player: 1,
  name: "Sonya",
  hp: 70,
  img: src = 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: ['Ravager', 'Combat knife'],
  attack: function () {
    const result = this.name + ' Fight...';
    return result;
  }
}

const player2 = {
  player: 2,
  name: "Liukahg",
  hp: 100,
  img: src = 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon: ['Shadow Belt', 'Drahmin`s mask'],
  attack: function () {
    const result = this.name + ' Fight...';
    return result;
  }
}

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

function createPlayer(playerObj) {
  const $player = createElement('div', 'player' + playerObj.player);
  const $progressbar = createElement('div', 'progressbar');
  const $character = createElement('div', 'character');
  const $life = createElement('div', 'life');
  const $name = createElement('div', 'name');
  const $img = createElement('img');

  $life.style.width = playerObj.hp + '%';
  $name.innerHTML = playerObj.name;
  $img.src = playerObj.img;
  
  $progressbar.appendChild($name);
  $progressbar.appendChild($life);

  $character.appendChild($img);

  $player.appendChild($progressbar);
  $player.appendChild($character);

  return $player;
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));