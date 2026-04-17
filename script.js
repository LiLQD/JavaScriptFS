function creatGreeting(greeting = ""){
  const myGreet = greeting.toUpperCase();

  return function(name){
    return `${myGreet} ${name}`;
  }
}
const greet = creatGreeting("hi");
console.log(greet("LiLQD"));