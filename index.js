let count1 = 0
let count2 = 0
countEl1 = document.getElementById("count-el1")
countEl2 = document.getElementById("count-el2")

saveEl = document.getElementById("save-el")

// functionsss
function increment1p1() {
    count1 += 1
    console.log(count1)
    countEl1.textContent = count1
}

function increment2p1() {
    count1 += 2
    console.log(count1)
    countEl1.textContent = count1
}

function increment3p1() {
    count1 += 3
    console.log(count1)
    countEl1.textContent = count1
}

function increment1p2() {
    count2 += 1
    console.log(count2)
    countEl2.textContent = count2
}

function increment2p2() {
    count2 += 2
    console.log(count2)
    countEl2.textContent = count2
}

function increment3p2() {
    count2 += 3
    console.log(count2)
    countEl2.textContent = count2
}

function save() {
    let countStr = count1 + " - " + count2 + " | ";
    saveEl.innerHTML += countStr; // Use innerHTML to append the new content
    count1 = 0;
    count2 = 0;
    countEl1.textContent = count1;
    countEl2.textContent = count2;
}
