function Hero(name, level){
  this.name = name;
  this.level = level;

}
Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}
const hero1 = new Hero("LiLQD", 36);
console.log(hero1.greet());

function Warrior(name, level, weapon){
  Hero.call(this, name, level);
  this.weapon = weapon;
}

function Healer(name, level, spell){
  Hero.call(this, name, level);
  this.spell = spell;
}
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);
Warrior.prototype.attack = function(){
  return (`${this.name} attacks with ${this.weapon}`);
}

Healer.prototype.heal = function(){
  return (`${this.name} heals with ${this.spell}`);
}

const warrior1 = new Warrior("Alex", 100, "Scyther");
const healer1 = new Healer("Lana", 70, "Holy Spray");

console.log(warrior1.greet());
console.log(warrior1.attack());
console.log(healer1.heal());









