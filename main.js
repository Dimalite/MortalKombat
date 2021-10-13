const sonya = {
  name: "Sonya",
  hp: 100,
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


function createPlayer(player, obj) {
  const $player1 = document.createElement('div');
  $player1.classList.add(player);
  const $arenas = document.querySelector('.arenas');

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar')

  const $character = document.createElement('div');
  $character.classList.add('character');

  const $img = document.createElement('img');
  $img.src = obj.img;

  $character.appendChild($img);

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.innerHTML = obj.hp;

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerHTML = obj.name;

  $arenas.appendChild($player1);
  $player1.appendChild($progressbar);
  $player1.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

}

createPlayer('player1', sonya)
createPlayer('player2', liukang)













