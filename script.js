/* ================= MOBILE MENU ================= */

function toggleMenu() {

  const nav = document.getElementById("navMenu");

  nav.classList.toggle("active");

}


/* ================= QUOTE CALCULATOR ================= */

function getQuote(event) {

  event.preventDefault();


  const pickup =
    document.getElementById("pickup").value.trim();

  const delivery =
    document.getElementById("delivery").value.trim();

  const cargoType =
    document.getElementById("cargoType").value;

  const weight =
    Number(document.getElementById("weight").value);


  if (!pickup || !delivery || weight <= 0) {

    document.getElementById("quoteResult").innerHTML =
      "Please enter valid shipment details.";

    return;

  }


  /*
    DEMO PRICING

    This is only a basic estimate.
    Later we can connect a real pricing
    system/database.
  */

  const basePrice = 1500;

  const pricePerKg = 35;

  const estimate =
    basePrice + (weight * pricePerKg);


  const message =
    `Hello CargoGo,

I need a cargo transport quotation.

Pickup: ${pickup}
Delivery: ${delivery}
Cargo: ${cargoType}
Weight: ${weight} kg

Estimated Price: PKR ${estimate.toLocaleString()}`;

  const whatsappLink =
    "https://wa.me/923082612526?text=" +
    encodeURIComponent(message);


  document.getElementById("quoteResult").innerHTML =

    `Estimated Price:
     PKR ${estimate.toLocaleString()}
     <br>
     <small>
     ${pickup} → ${delivery}
     </small>
     <br><br>

     <a href="${whatsappLink}"
        target="_blank"
        style="color:#172033;text-decoration:none;">
        💬 Confirm on WhatsApp →
     </a>`;

}


/* ================= TRACKING ================= */

function trackShipment(event) {

  event.preventDefault();


  const number =
    document.getElementById("trackingNumber")
    .value
    .trim();


  const result =
    document.getElementById("trackingResult");


  if (number.length < 4) {

    result.innerHTML =
      "Please enter a valid tracking number.";

    return;

  }


  /*
    DEMO TRACKING

    Later this will connect to the
    real shipment database.
  */

  result.innerHTML =
    `Tracking ID: ${number}
     <br>
     Status: <strong>🚚 In Transit</strong>
     <br>
     <small>
     This is a demo tracking result.
     </small>`;

}
