var wrapper=document.body.querySelector(".wrapper");

var user=5;
var dragon=10;
var number=0;
var number2=0;

while(user==5&&dragon==10){
  while(number==0){
   var hits= Number(prompt("How many hits do you want to deal?"))
    for (var i =0; i<hits;i++){
      number=number+hits
    if (number>=5){
      number=5
    }
    }
}
  while(number2==0){
    var damage= Number(prompt("how much damage do you want to deal?"))
     for (var j =0; j<damage;j++){
        number2=number2+Math.random() * damage + 1;
        if (number2>=5){
          var damage=1
        }
      }
    }
  while(user>0&&dragon>0){
    var dragonDamage= (damage*hits).toFixed(0);

    dragon= (dragon-dragonDamage).toFixed(0);

    var userDamage= (Math.random() * 2 + 1).toFixed(0);

    user= (user-userDamage).toFixed(0);
  }
}

if (user==0){
  wrapper.innerHTML="User Damage: " + userDamage + " Dragon Damage: " + dragonDamage + " The User loses."
}else if (dragon==0){
  wrapper.innerHTML="User Damage: " + userDamage + " Dragon Damage: " + dragonDamage + " The User wins!"
}else if (userDamage>dragonDamage){
  wrapper.innerHTML="User Damage: " + userDamage + " Dragon Damage: " + dragonDamage + " The User wins!"
}else if (userDamage<dragonDamage){
  wrapper.innerHTML="User Damage: " + userDamage + " Dragon Damage: " + dragonDamage + " The User loses."
}