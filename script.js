const seats = [
  { id: 6, x: 0, y: 0 },
  { id: 7, x: 0, y: 0 },
  { id: 8, x: 0, y: 0 },
  { id: 9, x: 0, y: 0 },
  { id: 16, x: 0, y: 0 },
  { id: 17, x: 0, y: 0 },
  { id: 18, x: 0, y: 0 },
  { id: 19, x: 0, y: 0 },
  { id: 20, x: 0, y: 0 },
  { id: 21, x: 0, y: 0 },
  { id: 26, x: 0, y: 0 },
  { id: 27, x: 0, y: 0 },
  { id: 28, x: 0, y: 0 },
  { id: 29, x: 0, y: 0 },
  { id: 30, x: 0, y: 0 },
  { id: 31, x: 0, y: 0 },
  { id: 32, x: 0, y: 0 },
  { id: 37, x: 0, y: 0 },
  { id: 38, x: 0, y: 0 },
  { id: 39, x: 0, y: 0 },
  { id: 52, x: 0, y: 0 },
  { id: 62, x: 0, y: 0 },
  { id: 68, x: 0, y: 0 },
  { id: 71, x: 0, y: 0 },
  { id: 74, x: 0, y: 0 },
  { id: 75, x: 0, y: 0 },
  { id: 76, x: 0, y: 0 },
  { id: 77, x: 0, y: 0 },
  { id: 78, x: 0, y: 0 },
  { id: 79, x: 0, y: 0 },
  { id: 84, x: 0, y: 0 },
  { id: 85, x: 0, y: 0 },
  { id: 88, x: 0, y: 0 },
  { id: 99, x: 180, y: 970 },
  { id: 100, x: 0, y: 0 },
  { id: 101, x: 0, y: 0 },
  { id: 104, x: 0, y: 0 },
  { id: 105, x: 0, y: 0 },
  { id: 108, x: 0, y: 0 },
  { id: 109, x: 0, y: 0 },
  { id: 110, x: 0, y: 0 },
  { id: 115, x: 0, y: 0 },
  { id: 118, x: 0, y: 0 },
  { id: 130, x: 0, y: 0 },
  { id: 131, x: 0, y: 0 },
  { id: 133, x: 0, y: 0 },
  { id: 136, x: 0, y: 0 },
  { id: 137, x: 0, y: 0 },
  { id: 138, x: 0, y: 0 },
  { id: 140, x: 0, y: 0 },
  { id: 144, x: 0, y: 0 },
  { id: 145, x: 0, y: 0 },
  { id: 146, x: 0, y: 0 },
  { id: 149, x: 0, y: 0 }
];
  // Add more seats here using x/y from the layout image
];

// Fill with your real assignments
const people = {
  99: { name: "Alison O'Brien", title: "Logistics Rep", status: "used" },
  100: { name: "Anna Hopkins", title: "Account Manager", status: "used" },
  104: { name: "Teagan Metnick", title: "Dispatcher", status: "used" },
  105: { name: "Katie Nichter", title: "Coordinator", status: "used" },
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

createSeats();
