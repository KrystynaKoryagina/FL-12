function Fighter(obj) {
	let { name, damage, hp, strength, agility } = obj;
	let win = 0;
	let loss = 0;

	this.getName = () => name;
	this.getDamage = () => damage;
	this.getStrength = () => strength;
	this.getAgility = () => agility;
	this.getHealth = () => hp;
	this.attack = defender => {
		const koef = 100;
		const attackSuccess = (koef - (defender.getStrength() + defender.getAgility())) / koef;
		const randomNum = Math.random();

		if(attackSuccess > randomNum) {
			defender.dealDamage(damage);
			console.log(`${name} makes ${damage} to ${defender.getName()}`);
		} else {
			console.log(`${name} attack missed`); 
		}
	}
	this.logCombatHistory = () => {
		console.log(`Name: ${name}, Wins: ${win}, Loss: ${loss}`);
	}
	this.heal = healthAmount => {
		const health = healthAmount + hp;
		hp = health > hp ? hp : health;
	}
	this.dealDamage = healthPoint => {
		const health = hp - healthPoint;
		hp = health < 0 ? 0 : health;
	}
	this.addWin = () => win++;
	this.addLoss = () => loss++;
}

function battle(fighter1, fighter2) {
	const nameFighter1 = fighter1.getName();
	const nameFighter2 = fighter2.getName();
	
	if (fighter1.getHealth() === 0) {
		console.log(`${nameFighter1} is dead and can't fight`);
	} else if (fighter2.getHealth() === 0) {
		console.log(`${nameFighter2} is dead and can't fight`);
	} else {
		let fight = true;

		while (fight) {
			const healthPlayer1 = fighter1.getHealth();
			const healthPlayer2 = fighter2.getHealth();
	
			if (healthPlayer1 > 0 && healthPlayer2 > 0) {
				fighter1.attack(fighter2);
				fighter2.attack(fighter1);
			} else {
				const winner = healthPlayer1 === 0 ? nameFighter2 : nameFighter1;
				
				if(winner === nameFighter1) {
					fighter1.addWin();
					fighter2.addLoss();
				} else {
					fighter2.addWin();
					fighter1.addLoss();
				}
	
				console.log(`${winner} has won!`);
				
				fight = false;
			}
		}
	}
}

const myFighter = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 20, agility: 15}); 
const myFighter2 = new Fighter({name: 'Commodus', damage: 30, hp: 90, strength: 30, agility: 20}); 

battle(myFighter, myFighter2);















