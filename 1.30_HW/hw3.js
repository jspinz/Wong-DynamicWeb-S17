console.log("You're at a stop sign. You can only go left or right to your destination. Which way will you go?")
var player = {
    points: 0,
    goLeft: function () {
        this.points += 20;
    },
    goRight: function () {
        this.points -= 20;
    },
    waiting: function () {
        this.points += 0.1;
    },
    getStatus: function () {
        //        if (this.points > 0 && this.points < 10) {
        //           // return "WELL HURRY UP?";
        //        } else 
        if (this.points > 10) {
            return "good choice, we live!";
        } else if (this.points<0){
            return "dead.";
        }
    },
    isDead: function () {
        if (this.points <0) {
            return true;
        } else {
            return false;
        }
    }

}

function gameLoop() {
    player.waiting();
    var status = player.getStatus();
//    console.log(status);
    if (player.isDead()) {
        console.log("Unfortunately an 18 wheeler truck was impatient and just rammed you over. You're dead, sorry.");
    } else {
        setTimeout(gameLoop, 500);
    }

}
setTimeout(gameLoop, 500);