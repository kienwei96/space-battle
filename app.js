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
            console.log("You hit the alien! Well done!")
            target.hull = target.hull - this.firepower;
            console.log(`The aline left ${target.hull} hull points.`)
            if(target.hull<0) {
                target.isAlive = false;
                console.log(`The alien ship is destroyed! You have saved the world!`)
            }
            else {
                console.log("Awww you missed the hit....")
            }
        }
    }
}