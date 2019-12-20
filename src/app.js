export default function Character(name, type) {
  const parameters = {
    Bowman: {
      attack: 25,
      defence: 25,
    },
    Swordsman: {
      attack: 40,
      defence: 10,
    },
    Magician: {
      attack: 10,
      defence: 40,
    },
    Undead: {
      attack: 25,
      defence: 25,
    },
    Zombie: {
      attack: 40,
      defence: 10,
    },
    Daemon: {
      attack: 10,
      defence: 40,
    },
  };

  if (typeof name !== 'string' || name.length > 10 || name.length < 2 || Object.keys(parameters).indexOf(type) === -1) {
    throw new Error('Переданы некорректные значения');
  }

  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
  this.attack = parameters[type].attack;
  this.defence = parameters[type].defence;
}
