let countEl = document.getElementById("count-el");
let visitsEl = document.getElementById("visits-el");
let count = 0;
let visits = 0

function invasion() {
  count++;
  countEl.textContent = count;
}

function total() {
    visits = visits + count
    visitsEl.textContent = visits
    count = 0
    countEl.textContent = 0 
}
