// Mobile menu
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("active");
}


// Quote calculator
function getQuote(event) {

  event.preventDefault();

  const pickup = document.getElementById("pickup").value;
  const delivery = document.getElementById("delivery").value;
  const weight = Number(document.getElementById("weight").value);

  /*
    Demo pricing only.
    Later we will connect this to a real
    pricing/database system.
  */

  const basePrice = 1500;
  const pricePerKg = 35;

  const estimate = basePrice + (weight * pricePerKg);

  document.getElementById("quoteResult").innerHTML =
    `Estimated price: PKR ${estimate.toLocaleString()}
     <br>
     <small>${pickup} → ${delivery}</small>`;
}


// Demo shipment tracking
function trackShipment(event) {

  event.preventDefault();

  const number =
    document.getElementById("trackingNumber").value.trim();

  const result =
    document.getElementById("trackingResult");

  if (number.length < 4) {

    result.innerHTML =
      "Please enter a valid tracking number.";

    return;
  }

  result.innerHTML =
    `Shipment ${number}: <strong>In Transit 🚚</strong>`;
}
