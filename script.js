// script.js
const chart = document.getElementById("chart");

function renderSeats() {
  chart.innerHTML = "";
  seats.forEach(seat => {
    const seatDiv = document.createElement("div");
    seatDiv.className = "seat " + seat.status;
    seatDiv.style.left = seat.x + "px";
    seatDiv.style.top = seat.y + "px";
    seatDiv.innerText = seat.id;
    seatDiv.onclick = () => {
      const mode = document.getElementById("admin-toggle").checked;
      if (mode) {
        seat.status = cycleStatus(seat.status);
        renderSeats();
      } else {
        alert(`${seat.id}\n${seat.name}\n${seat.title}`);
      }
    };
    chart.appendChild(seatDiv);
  });
}

function cycleStatus(status) {
  return status === "available" ? "used" :
         status === "used" ? "reserved" : "available";
}

renderSeats();
