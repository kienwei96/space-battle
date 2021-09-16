console.log('js file linked')

const USS = {
    hull:20,
    firepower: 5,
    accuracy: 7,
    isAlive: true,
    attack(target) {
        let randomNum = Math.random();
        console.log('USS Accuracy threshold is', randomNum);
        if(randomNum < this.accuracy) {
            console.log("You are laucnhing attack.....")
            console.log("You hit the alien! Well done!")
            target.hull = target.hull - this.firepower;
            console.log(`The alien left ${target.hull} hull points.`)
            if(target.hull<=0) {
                target.isAlive = false;
                console.log(`The alien ship is destroyed! You have saved the world!`)
            }
            else {
                console.log("Keep going Captain!")
            }
            
        }
        else {
            console.log("Awwww you missed the hit.....")
        }
    }
}

const alien = {
    hull: Math.round((Math.random() * (6-3)) + 3),
    firepower: Math.round((Math.random() * (4-2)) + 2),
    accuracy: Math.floor(Math.random() * (0.8-0.6)) + 0.7,
    isAlive: true,
    attack(target) {
        let randomNum = Math.random();
        console.log("Alien is launching attack.....")
        console.log('Alien Accuracy threshold is', randomNum);
        if(randomNum < this.accuracy) {
            console.log("You were hitted by alien, watch out!")
            target.hull = target.hull - this.firepower;
            console.log(`You left ${target.hull} hull points.`)
            if(target.hull<=0) {
                target.isAlive = false;
                console.log(`You have been defeated....`)
            }
            else {
                console.log("Ouch! Watch out Captain!")
            }
        }
        else {
            console.log("You dodged the attack, well done Captain! Its your turn now!")
        }
    }
}

const fight = (player, computer) => {
    while(player.isAlive && computer.isAlive) {
        player.attack(computer);
        if(computer.isAlive) {
            computer.attack(player)
        }
    }
}

fight(USS, alien)