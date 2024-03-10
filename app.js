let swars = ['s', ' ', 'R', 'M', 'P', 'n', 'N', 'S','ni_d','N_d'];

let size=swars.length
let list = [];
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        for (let k = 0; k < size; k++) {
            for (let l = 0; l < 8; l++) {
                let combo = [swars[i], swars[j], swars[k], swars[l]];
                list.push(combo);
            }
        }
    }
}

var M = new Audio('m.wav');
var n = new Audio('ni.wav');
var Ns = new Audio('N.wav');
var P = new Audio('p.wav');
var R = new Audio('re.wav');
var Sa = new Audio('s.wav');
var ST = new Audio('Sa.wav');
var ni_d = new Audio('ni_d.wav');
var N_d = new Audio('N_d.wav');

function getSound(s) {
    switch (s) {
        case 's':
            return Sa;
        case 'R':
            return R;
        case 'M':
            return M;
        case 'P':
            return P;
        case 'n':
            return n;
        case 'N':
            return Ns;
        case 'S':
            return ST;
        case 'ni_d':
            return ni_d;
        case 'N_d':
            return N_d;
        default:
            return null; // Default sound
    }
}

function shuffleArray(array) {
    // Function to shuffle the array using Fisher-Yates algorithm
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let isPaused = false;

function pause() {
    isPaused = true;
}

function resume() {
    isPaused = false;
    play(); // Resume playback
}

async function play() {
    shuffleArray(list);
    for (let index = 0; index < list.length; index++) {
        if (isPaused) {
            // Exit the loop if paused
            break;
        }
        for (let index1 = 0; index1 < list[index].length; index1++) {
            if (isPaused) {
                // Exit the loop if paused
                break;
            }
            const sound = getSound(list[index][index1]);
            if (sound) {
                sound.play();
                string=list[index][index1];
                document.getElementById("swars").innerText += string;
                document.getElementById("swars").innerText +=" ";
                await new Promise(resolve => setTimeout(resolve, 700)); // Wait for 0.5 sec
            } else if (list[index][index1] === ' ') {
                // If character is empty, wait for 0.5 sec without playing anything
                document.getElementById("swars").innerText += ' ';
                await new Promise(resolve => setTimeout(resolve, 700)); // Wait for 0.5 sec
            }
        }
        if (!isPaused) {
            document.getElementById("swars").innerHTML += "<br>"; // New line for each combination
            await new Promise(resolve => setTimeout(resolve, 700)); // Wait for 1 sec between combinations
        }
    }
}





