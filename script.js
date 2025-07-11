const seats = [
  { id: 1, x: 0.5285, y: 0.4255 },
  { id: 6, x: 0.0529, y: 0.0511 },
  { id: 7, x: 0.1586, y: 0.0511 },
  { id: 8, x: 0.2643, y: 0.0511 },
  { id: 9, x: 0.37, y: 0.0511 },
  { id: 16, x: 0.0529, y: 0.1021 },
  { id: 17, x: 0.1586, y: 0.1021 },
  { id: 18, x: 0.2643, y: 0.1021 },
  { id: 19, x: 0.37, y: 0.1021 },
  { id: 20, x: 0.4757, y: 0.1021 },
  { id: 21, x: 0.5814, y: 0.1021 },
  { id: 26, x: 0.0529, y: 0.1532 },
  { id: 27, x: 0.1586, y: 0.1532 },
  { id: 28, x: 0.2643, y: 0.1532 },
  { id: 29, x: 0.37, y: 0.1532 },
  { id: 30, x: 0.4757, y: 0.1532 },
  { id: 31, x: 0.5814, y: 0.1532 },
  { id: 32, x: 0.6871, y: 0.1532 },
  { id: 37, x: 0.0529, y: 0.2043 },
  { id: 38, x: 0.1586, y: 0.2043 },
  { id: 39, x: 0.2643, y: 0.2043 },
  { id: 52, x: 0.37, y: 0.2043 },
  { id: 62, x: 0.4757, y: 0.2043 },
  { id: 68, x: 0.5814, y: 0.2043 },
  { id: 71, x: 0.6871, y: 0.2043 },
  { id: 74, x: 0.0529, y: 0.2553 },
  { id: 75, x: 0.1586, y: 0.2553 },
  { id: 76, x: 0.2643, y: 0.2553 },
  { id: 77, x: 0.37, y: 0.2553 },
  { id: 78, x: 0.4757, y: 0.2553 },
  { id: 79, x: 0.5814, y: 0.2553 },
  { id: 84, x: 0.6871, y: 0.2553 },
  { id: 85, x: 0.0529, y: 0.3064 },
  { id: 88, x: 0.1586, y: 0.3064 },
  { id: 99, x: 0.2, y: 0.6267 },
  { id: 100, x: 0.3013, y: 0.88 },
  { id: 101, x: 0.333, y: 0.88 },
  { id: 103, x: 0.2696, y: 0.9157 },
  { id: 104, x: 0.3013, y: 0.9157 },
  { id: 105, x: 0.37, y: 0.3064 },
  { id: 108, x: 0.4757, y: 0.3064 },
  { id: 109, x: 0.5814, y: 0.3064 },
  { id: 110, x: 0.6871, y: 0.3064 },
  { id: 115, x: 0.0529, y: 0.3574 },
  { id: 118, x: 0.1586, y: 0.3574 },
  { id: 130, x: 0.2643, y: 0.3574 },
  { id: 131, x: 0.37, y: 0.3574 },
  { id: 133, x: 0.4757, y: 0.3574 },
  { id: 136, x: 0.5814, y: 0.3574 },
  { id: 137, x: 0.6871, y: 0.3574 },
  { id: 138, x: 0.0529, y: 0.4085 },
  { id: 140, x: 0.1586, y: 0.4085 },
  { id: 144, x: 0.2643, y: 0.4085 },
  { id: 145, x: 0.37, y: 0.4085 },
  { id: 146, x: 0.4757, y: 0.4085 },
  { id: 149, x: 0.5814, y: 0.4085 }
];
  // Add more seats here using x/y from the layout image

// Fill with your real assignments
const people = {
 6: { name: "Daniel Morrison", title: "", status: "used" },
  7: { name: "Katie Hug", title: "", status: "used" },
  8: { name: "Jason Goetluck", title: "", status: "used" },
  9: { name: "Frankie Wren", title: "", status: "used" },
  16: { name: "Ilian Iliev", title: "", status: "used" },
  17: { name: "Anthony Helm", title: "", status: "used" },
  18: { name: "Harrison Rodriguez", title: "", status: "used" },
  19: { name: "Seth Frisby-Jack", title: "", status: "used" },
  20: { name: "Eric Carr", title: "", status: "used" },
  21: { name: "Nate Campbell", title: "", status: "used" },
  26: { name: "Cleon Deal", title: "", status: "used" },
  27: { name: "Derya Ekren", title: "", status: "used" },
  28: { name: "Seth Cutright", title: "", status: "used" },
  29: { name: "Nicholas Whittaker", title: "", status: "used" },
  30: { name: "Patrick Poulos", title: "", status: "used" },
  31: { name: "Daniel Stuckey", title: "", status: "used" },
  32: { name: "Logan Perhacs", title: "", status: "used" },
  37: { name: "Austin Evans", title: "", status: "used" },
  38: { name: "Eric Lowe", title: "", status: "used" },
  39: { name: "Jake Cadotte", title: "", status: "used" },
  52: { name: "Richard Wilson", title: "", status: "used" },
  62: { name: "Jesse Halpern", title: "", status: "used" },
  68: { name: "Brian Keifer", title: "", status: "used" },
  71: { name: "Benjamin Durham", title: "", status: "used" },
  74: { name: "Alex Boucher", title: "", status: "used" },
  75: { name: "Mia Scharrenberg", title: "", status: "used" },
  76: { name: "Andrew Flores", title: "", status: "used" },
  77: { name: "Cody Rogowski", title: "", status: "used" },
  78: { name: "Nick Tosto", title: "", status: "used" },
  79: { name: "Cody Southiere", title: "", status: "used" },
  84: { name: "William Russell", title: "", status: "used" },
  85: { name: "Joshua Reyes", title: "", status: "used" },
  88: { name: "Steven Sargeant", title: "", status: "used" },
  99: { name: "Alison O'Brien", title: "", status: "used" },
  100: { name: "Samantha Bensch", title: "", status: "used" },
  101: { name: "Anna Hopkins", title: "", status: "used" },
  103: { name: "", title: "", status: "available" },
  104: { name: "Teagan Metnick", title: "IT Support Intern", status: "used" },
  105: { name: "Katie Nichter", title: "", status: "used" },
  108: { name: "Willie Dunham", title: "", status: "used" },
  109: { name: "Nate Wood", title: "", status: "used" },
  110: { name: "Colin Julian", title: "", status: "used" },
  115: { name: "Adam Kraemer", title: "", status: "used" },
  118: { name: "Lexi Enderby", title: "", status: "used" },
  130: { name: "Zachary Eckerson", title: "", status: "used" },
  131: { name: "Ryan Skelly", title: "", status: "used" },
  133: { name: "Riley Golden", title: "", status: "used" },
  136: { name: "Isaiah Tirado", title: "", status: "used" },
  137: { name: "Kyler Rossi", title: "", status: "used" },
  138: { name: "Joshua Conn", title: "", status: "used" },
  140: { name: "Jillian Klopp", title: "", status: "used" },
  144: { name: "Shawn Boone", title: "", status: "used" },
  145: { name: "Marios Delis", title: "", status: "used" },
  146: { name: "Adam Cox", title: "", status: "used" },
  149: { name: "AJ Trapasso", title: "", status: "used" }
};

let isAdmin = false;
let currentSeatId = null;

function createSeats() {
  const container = document.getElementById("floorplan");
  const layoutImg = document.getElementById("layout");
  
  seats.forEach(seat => {
    const div = document.createElement("div");
    div.classList.add("seat");

    const seatData = people[seat.id];
    const status = seatData?.status || "available";
    div.classList.add(status);

    div.innerText = seat.id;
    div.style.left = (seat.x * layoutImg.offsetWidth) + "px";
    div.style.top = (seat.y * layoutImg.offsetHeight) + "px";
    div.onclick = () => openPopup(seat.id);

    container.appendChild(div);
  });
}

function openPopup(seatId) {
  currentSeatId = seatId;
  const popup = document.getElementById("popup");
  const data = people[seatId];

  document.getElementById("seatLabel").innerText = `Seat ${seatId}`;
  document.getElementById("seatName").innerText = data?.name || "Available";
  document.getElementById("seatTitle").innerText = data?.title || "";

  if (isAdmin) {
    document.getElementById("adminControls").classList.remove("hidden");
    document.getElementById("nameInput").value = data?.name || "";
    document.getElementById("titleInput").value = data?.title || "";
    document.getElementById("statusInput").value = data?.status || "available";
  } else {
    document.getElementById("adminControls").classList.add("hidden");
  }

  popup.classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

function saveSeat() {
  const name = document.getElementById("nameInput").value;
  const title = document.getElementById("titleInput").value;
  const status = document.getElementById("statusInput").value;

  people[currentSeatId] = { name, title, status };

  const seatsDivs = document.querySelectorAll(".seat");
  seatsDivs.forEach(div => {
    if (parseInt(div.innerText) === currentSeatId) {
      div.classList.remove("available", "used", "reserved");
      div.classList.add(status);
    }
  });

  closePopup();
}

document.getElementById("toggleView").onclick = () => {
  isAdmin = !isAdmin;
  document.getElementById("toggleView").innerText = isAdmin ? "Switch to Public View" : "Switch to Admin View";
};

const layoutImg = document.getElementById("layout");
layoutImg.onload = function () {
  const floorplan = document.getElementById("floorplan");
  floorplan.style.height = layoutImg.offsetHeight + "px";
  createSeats();
};
layoutImg.addEventListener("click", function (e) {
  const rect = layoutImg.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Convert to percent
  const xPercent = (x / layoutImg.offsetWidth).toFixed(4);
  const yPercent = (y / layoutImg.offsetHeight).toFixed(4);

  const coordBox = document.getElementById("click-coords");
  coordBox.textContent = `x: ${xPercent}, y: ${yPercent}`;
  coordBox.style.left = `${e.clientX + 10}px`;
  coordBox.style.top = `${e.clientY + 10}px`;
  coordBox.style.display = "block";
});
