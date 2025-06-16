const seats = [
  { id: 1, x: 500, y: 500 },
  { id: 6, x: 50, y: 60 },
  { id: 7, x: 150, y: 60 },
  { id: 8, x: 250, y: 60 },
  { id: 9, x: 350, y: 60 },
  { id: 16, x: 50, y: 120 },
  { id: 17, x: 150, y: 120 },
  { id: 18, x: 250, y: 120 },
  { id: 19, x: 350, y: 120 },
  { id: 20, x: 450, y: 120 },
  { id: 21, x: 550, y: 120 },
  { id: 26, x: 50, y: 180 },
  { id: 27, x: 150, y: 180 },
  { id: 28, x: 250, y: 180 },
  { id: 29, x: 350, y: 180 },
  { id: 30, x: 450, y: 180 },
  { id: 31, x: 550, y: 180 },
  { id: 32, x: 650, y: 180 },
  { id: 37, x: 50, y: 240 },
  { id: 38, x: 150, y: 240 },
  { id: 39, x: 250, y: 240 },
  { id: 52, x: 350, y: 240 },
  { id: 62, x: 450, y: 240 },
  { id: 68, x: 550, y: 240 },
  { id: 71, x: 650, y: 240 },
  { id: 74, x: 50, y: 300 },
  { id: 75, x: 150, y: 300 },
  { id: 76, x: 250, y: 300 },
  { id: 77, x: 350, y: 300 },
  { id: 78, x: 450, y: 300 },
  { id: 79, x: 550, y: 300 },
  { id: 84, x: 650, y: 300 },
  { id: 85, x: 50, y: 360 },
  { id: 88, x: 150, y: 360 },
  { id: 99, x: 255, y: 1034 },
  { id: 100, x: 282, y: 1034 },
  { id: 101, x: 250, y: 360 },
  { id: 103, x: 260, y: 1076 },
  { id: 104, x: 205, y: 980 },
  { id: 105, x: 350, y: 360 },
  { id: 108, x: 450, y: 360 },
  { id: 109, x: 550, y: 360 },
  { id: 110, x: 650, y: 360 },
  { id: 115, x: 50, y: 420 },
  { id: 118, x: 150, y: 420 },
  { id: 130, x: 250, y: 420 },
  { id: 131, x: 350, y: 420 },
  { id: 133, x: 450, y: 420 },
  { id: 136, x: 550, y: 420 },
  { id: 137, x: 650, y: 420 },
  { id: 138, x: 50, y: 480 },
  { id: 140, x: 150, y: 480 },
  { id: 144, x: 250, y: 480 },
  { id: 145, x: 350, y: 480 },
  { id: 146, x: 450, y: 480 },
  { id: 149, x: 550, y: 480 }
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
  seats.forEach(seat => {
    const div = document.createElement("div");
    div.classList.add("seat");

    const seatData = people[seat.id];
    const status = seatData?.status || "available";
    div.classList.add(status);

    div.innerText = seat.id;
    div.style.left = seat.x + "px";
    div.style.top = seat.y + "px";
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

  const scaleX = layoutImg.naturalWidth / rect.width;
  const scaleY = layoutImg.naturalHeight / rect.height;

  const x = Math.round((e.pageX - rect.left - window.scrollX) * scaleX);
  const y = Math.round((e.pageY - rect.top - window.scrollY) * scaleY);

  const coordBox = document.getElementById("click-coords");
  coordBox.textContent = `x: ${x}, y: ${y}`;
  coordBox.style.left = `${e.pageX + 10}px`;
  coordBox.style.top = `${e.pageY + 10}px`;
  coordBox.style.display = "block";
});
