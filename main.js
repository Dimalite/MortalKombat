const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
  player: 1,
  name: "Sonya",
  hp: 100,
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

function changeHP(player) {
  const $playerLife = document.querySelector('.player' + player.player + ' .life');
  let randomNumb = Math.floor(Math.random() * 10) + 20;
  player.hp -= randomNumb;
  // player.hp -= 20;
  console.log('Damage dealt: ' + randomNumb);
  $playerLife.style.width = player.hp + '%';
  console.log('Rest: ' + player.hp);

  if (player.hp <= 0) {
    player.hp = 0;
    $playerLife.style.width = 0 + '%';

    $playerLife.style.width = player.hp + '%';
    $randomButton.disabled = true

    if (player.hp >= 0) {
      $arenas.appendChild(playerWin(hasWinner()));
      $randomButton.disabled = true
    }
  }
}

function hasWinner() {
  if (player1.hp == 0) return player2.name;
  if (player2.hp == 0) return player1.name;
}

function playerWin(name) {
  const $loseTitle = createElement('div', 'loseTitle');
  $loseTitle.innerText = name + ' wins';

  return $loseTitle;
}

$randomButton.addEventListener('click', function () {
  console.log('Click');
  changeHP(player1);
  changeHP(player2);
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));