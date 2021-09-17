console.log('js file linked')

// create player object
const USS = {
    hull:20,
    firepower: 5,
    accuracy: 7,
    isAlive: true,
    attack(target) {
        let randomNum = Math.random();
        // console.log('USS Accuracy threshold is', randomNum);
        if(randomNum < this.accuracy) {
            console.log("You are launching attack.....")
            console.log("You hit the alien! Well done!")
            target.hull = target.hull - this.firepower;
            console.log(`The ${target.name} left ${target.hull} hull points.`)
            if(target.hull<=0) {
               
                console.log(`The ${target.name} is destroyed!`)
                return target.isAlive = false;
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

// create alienship class
class alienship {
    constructor(name) {
        this.name = "alien ship" + name;
        this.hull = Math.round((Math.random() * (6-3)) + 3);
        this.firepower = Math.round((Math.random() * (4-2)) + 2);
        this.accuracy = (Math.random() * (0.8-0.6)) + 0.6;
        this.isAlive = true;
    }
    attack(target) {
        let randomNum = Math.random();
        console.log(`Alien ${this.name} is launching attack.....`)
        console.log('Alien Accuracy threshold is', randomNum);
        if(randomNum < this.accuracy) {
            console.log("You were hitted by alien, watch out!")
            target.hull = target.hull - this.firepower;
            console.log(`You left ${target.hull} hull points.`)
            if(target.hull<=0) {
                console.log(`You have been defeated....`)
                return target.isAlive = false;
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
// create new alien class by loop
let alien = []
for(let i = 1; i<7; i++) {
    alien[i] = new alienship(i);
}

// stimulate the battle
const fight = (player, computer) => {

    for(let i = 1; i<computer.length; i++) {

        while(player.isAlive && computer[i].isAlive) {
            console.log(`You are attacking ${computer[i].name}`)
            player.attack(computer[i]);
            if(computer[i].isAlive) {
            computer[i].attack(player)
            }
            else {
                if(i != computer.length-1)
                console.log("Prepare for next fight Captain!")
            }
        }
    
    }
    if(!computer[computer.length-1].isAlive) {
        console.log("Congratulations Captain! You saved the world!")
    }
}

// to check if new alien class is being created
for (const element of alien){
    console.log(element)
}

// gamestart
fight(USS, alien)