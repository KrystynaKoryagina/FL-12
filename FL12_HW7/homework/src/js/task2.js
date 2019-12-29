// fix warning - No magic number
let firstPrize = 100;
let secondPrize = 50;
let thirdPrize = 25;

let prizes = [firstPrize, secondPrize, thirdPrize];
const totalAttempts = 3;
const one = 1;
const two = 2;
const four = 4;
let max = 8;
let isPlay = true;
let totalPrize = 0;

const start = confirm('Do you want to play a game?');

if(!start) {
	alert('You did not become a billionaire, but can.');
} else {
	let randomNum = Math.floor(Math.random() * max + one);
	let attempt = 0;

		while(isPlay) {
			let repeatGame;
			let possiblePrize = prizes[attempt];

			let pocketNum = parseInt(prompt(`
				Choose a roulette pocket number 0 to ${max}
				Attempts left: ${totalAttempts - attempt}
				Total prize: ${totalPrize}$
				Possible prize on current attempt: ${possiblePrize}$
			`));
	
			if(randomNum === pocketNum) {
				totalPrize += prizes[attempt];
				repeatGame = confirm(`
					Congratulation, you won! Your prize is: ${totalPrize}$. 
					Do you want to continue?
				`);
				if(!repeatGame) {
					isPlay = false;
					alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
				} else {
					max += four;
					attempt = 0;
					for(let i = 0; i < prizes.length; i++) {
						prizes[i] *= two; 
					}
					randomNum = Math.floor(Math.random() * max + one);
				}
			} else {
				attempt++;
				if(attempt === totalAttempts) {
					alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
					repeatGame = confirm('Do you want to play again?');
					if(!repeatGame) {
						isPlay = false;
						alert('You did not become a billionaire, but can.');
					} else {
						attempt = 0;
					}
				}
			}
		}
}