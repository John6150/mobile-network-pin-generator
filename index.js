let network = document.getElementById("network")
let amount = document.getElementById("amount")
let qty = document.getElementById("qty")
let dis = document.getElementById("dis")
let time_ = document.getElementsByClassName("time")
let display = document.getElementsByClassName("display")
let ar = []
let pin
let str = ''

let count = 0


function times() {
  let tm = new Date()
  tm = tm.toLocaleTimeString()
  time_[0].innerHTML = `<p>${tm}</p>`
  time_[0].style = "font-size: 10px; color: white;"
}

times()


function gen() {
  add()
}

function dial(numb) {
  display[0].value += numb
  // console.log(numb);
}

function dis_() {
  display[0].value
  console.log(display[0].value);
}

function call_() {
  if (display[0].value.startsWith("*311*") && display[0].value.endsWith("#")) {
    console.log("yes");
  }else{
    console.log("no");
  }
}

function add() {

  for (let i = 0; i < qty.value; i++) {
    let row = dis.insertRow(-1)
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    let c5 = row.insertCell(4);
    c4.style = "display: flex; max-width: 145px;"


    for (let index = 0; index < 15; index++) {
      pin = Math.floor(Math.random() * 10)
      str += pin
    }
    ar.push({ Network: network.value, Amount: amount.value, Pin: str })

    ar.forEach(function (element, index) {
      c1.innerHTML = index + 1
      c2.innerHTML = ar[index].Network
      c3.innerHTML = ar[index].Amount
      c5.innerHTML = `Unsed`

      c4.innerHTML = `<p>${ar[index].Pin}</p> <button id="copy" onclick="copy_(${index})">
    <img src="copy.png" style="width:20px">
        </button>`
    })


    str = ''
    count += 1
    // console.log(str)
  }
  localStore()
}

function copy_(ind) {
  navigator.clipboard.writeText(ar[ind].Pin)
}

function localStore(){
  localStorage.setItem("Pins", JSON.stringify(ar))
}

