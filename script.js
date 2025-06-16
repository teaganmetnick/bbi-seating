const seats = [
  { id: 99, x: 115, y: 680 }, { id: 100, x: 125, y: 630 },
  { id: 101, x: 85, y: 670 }, { id: 102, x: 125, y: 670 },
  { id: 103, x: 85, y: 710 }, { id: 104, x: 125, y: 710 },
  { id: 105, x: 85, y: 750 }, { id: 106, x: 125, y: 750 },
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
