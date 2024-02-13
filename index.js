let network = document.getElementById("network")
let amount = document.getElementById("amount")
let qty = document.getElementById("qty")
let dis = document.getElementById("dis")
let time_ = document.getElementsByClassName("time")
let display = document.getElementsByClassName("display")
let add_ = document.getElementsByClassName("add_number")
let ar = JSON.parse(localStorage.getItem('Pins')) || [];
let pin
let str = ''
let displayValue = ''
let getPin = JSON.parse(localStorage.getItem('Pins'))
let row

let count = 0

function times() {
  let tm = new Date()
  tm = tm.toLocaleTimeString()
  time_[0].innerHTML = `<p>${tm}</p>`
  time_[0].style = "font-size: 10px; color: white;"
}

times()
show()

// delete_()
function dis_() {
  displayValue = display[0].value
  add_[0].style = "display: block;"
}

function gen() {
  if (getPin == null || getPin == []) {
    generate()
    localStore()
    getPin = JSON.parse(localStorage.getItem('Pins'))
    for (let x = 0; x < getPin.length; x++) {
      let row = dis.insertRow(-1)
      let c1 = row.insertCell(0);
      let c2 = row.insertCell(1);
      let c3 = row.insertCell(2);
      let c4 = row.insertCell(3);
      let c5 = row.insertCell(4);
      // c4.style = "display: flex; max-width: 145px; border-collapse: collapse;"

      getPin.forEach(function (element, index) {
        c1.innerHTML = x + 1
        c2.innerHTML = getPin[x].Network
        c3.innerHTML = getPin[x].Amount
        if (getPin[x].Status == false) {
          c5.innerHTML = "Not Used"
        } else {
          c5.innerHTML = "Used"
        }
        // console.log(index);
      })
      c4.innerHTML = `<p>${getPin[x].Pin}</p> <button id="copy" onclick="copy_(${x})">
    <img src="copy.png" style="width:20px"></button>`
    }
  } else {
    delete_()
    generate()
    localStore()
    getPin = JSON.parse(localStorage.getItem('Pins'))
    show()
  }
}

function generate() {
  for (let i = 0; i < qty.value; i++) {

    for (let index = 0; index < 15; index++) {
      pin = Math.floor(Math.random() * 10)
      str += pin
    }
    ar.push({ Network: network.value, Amount: amount.value, Pin: str, Status: false })
    str = ''
    count += 1
  }
}


function delete_() {
  for (let d = 0; d < getPin.length; d++) {
    dis.deleteRow(-1)
  }
}

function dial(numb) {
  display[0].value += numb
  displayValue += numb
  add_[0].style = "display: block;"
}

function call_() {

  if (display[0].value.startsWith("*311*") && display[0].value.endsWith("#")) {

    for (let inde = 0; inde < getPin.length; inde++) {
      if (getPin[inde].Pin == display[0].value.substring(20, 5)) {
        alert(`You recharged ${getPin[inde].Amount} ${getPin[inde].Network} airtime`)
      }
    }
    // getPin[inde].Status = false
    // console.log(display[0].value.substring(20, 5));
  } else {
    console.log("no");
  }
}

function copy_(ind) {
  navigator.clipboard.writeText(getPin[ind].Pin)
}

function localStore() {
  localStorage.setItem("Pins", JSON.stringify(ar))
}

function show() {

  if (getPin == null || getPin == []) {

  } else {
    for (let x = 0; x < getPin.length; x++) {
      row = dis.insertRow(-1)
      let c1 = row.insertCell(0);
      let c2 = row.insertCell(1);
      let c3 = row.insertCell(2);
      let c4 = row.insertCell(3);
      let c5 = row.insertCell(4);
      // c4.style = "display: flex; max-width: 145px; border-collapse: collapse; outline: none;"

      getPin.forEach(function (element, index) {
        c1.innerHTML = x + 1
        c2.innerHTML = getPin[x].Network
        c3.innerHTML = getPin[x].Amount
        if (getPin[x].Status == false) {
          c5.innerHTML = "Not Used"
        } else {
          c5.innerHTML = "Used"
        }

      })
      c4.innerHTML = `<p>${getPin[x].Pin}</p> <button id="copy" onclick="copy_(${x})">
    <img src="copy.png" style="width:20px"> </button>`
    }
  }
}

