console.log('Szeretnék megtanulni programozni');

let kedvprog = 'lua'
console.log(kedvprog);

let szam1 = 6
let szam2 = 9
console.log(szam1 * szam2)

let szam3 = 24
if (szam3 % 2 == 0) {
    console.log('Páros vagyok')
}else {
        console.log('páratlan vagyok')
}

let szam4 = 25
if (szam4 % 2 == 0) {
    console.log('páros vagyok')
} else {
    console.log('páratlan vagyok')
}
let i = 1
while (i <= 10) {
    console.log('hazudni bűn')
    i++
}

for (j = 10; j < 500; j += 2 ) {
    console.log(j)
}

function helloka(name) {
    return 'hello, ' + name
}
console.log(helloka('máté'))

function szamok(num, num2) {
    return num +num2
}
console.log(szamok(3, 5));

