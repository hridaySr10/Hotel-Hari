//..........header scroll............//

$(document).ready(function () {
  function handleScroll() {
    let initialScroll = 0;
    $(window).scroll(function () {
      if ($(window).width() >= 992) {
        let finalScroll = $(this).scrollTop();
        if (finalScroll > initialScroll) {
          $(".nav-top").css("top", "-33px");
          $(".nav-btm").css("top", "0px");
        } else if (finalScroll === 0) {
          $(".nav-top").css("top", "0px");
          $(".nav-btm").css("top", "33px");
        } else {
          $(".nav-top").css("top", "0px");
          $(".nav-btm").css("top", "33px");
        }

        initialScroll = finalScroll;
      }
    });
  }

  // adjust nav-btm position for mob
  function adjustNavForScreenSize() {
    if ($(window).width() < 992) {
      $(".nav-btm").css("top", "0px");
      $(".nav-top").css("top", "0px");
    } else {
      $(".nav-btm").css("top", "33px");
      $(".nav-top").css("top", "0px");
    }
  }

  adjustNavForScreenSize();
  handleScroll();

  $(window).resize(function () {
    adjustNavForScreenSize();
  });

  // Hide navbar after click on mobile
  $(".navbar-nav>li>a").on("click", function () {
    if ($(window).width() < 992) {
      $(".navbar-collapse").collapse("hide");
    }
  });
});

//................loader...............//

const loader = document.querySelector(".loader");

setTimeout(() => {
  loader.style.opacity = 0;
  loader.style.visibility = "hidden";
}, 1500);

//.......................map slide toggle...........//

const mapBoxToggle = document.querySelector(".map-slide-box");
const detailIcon = document.querySelector(".details-btn i");

const detailsBtn = document.querySelector(".details-btn");
detailsBtn.addEventListener("click", function () {
  mapBoxToggle.classList.toggle("map-slide-toggle");
  detailIcon.classList.toggle("detail-icon-active");
});

//..................leaflet map integration...................//

// Initialize the map centered on New York
// const map = L.map("map").setView([40.7128, -74.006], 12);

// // Add OpenStreetMap tiles
// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

// // Store coordinates for our locations (predefined for accuracy)
// const locationCoordinates = {
//   // Store locations that link with <select></select> in html
//   "123 Main St, New York": { lat: 40.7112, lng: -74.0053 },
//   "456 Broadway, New York": { lat: 40.7195, lng: -74.0015 },
//   "789 5th Avenue, New York": { lat: 40.7669, lng: -73.9693 },

//   // Common starting points
//   "Times Square, New York": { lat: 40.758, lng: -73.9855 },
//   "Central Park, New York": { lat: 40.7829, lng: -73.9654 },
// };

// // Variable to store the routing control
// let routingControl = null;

// // Function to geocode an address if we don't have coordinates
// function geocodeAddress(address, callback) {
//   // If we have predefined coordinates, use those
//   if (locationCoordinates[address]) {
//     callback(locationCoordinates[address]);
//     return;
//   }

//   // Otherwise use Nominatim geocoding
//   fetch(
//     `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
//       address
//     )}`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       if (data && data.length > 0) {
//         const lat = parseFloat(data[0].lat);
//         const lon = parseFloat(data[0].lon);
//         callback({ lat, lng: lon });
//       } else {
//         alert("Address not found. Please try a different address.");
//       }
//     })
//     .catch((error) => {
//       console.error("Error geocoding address:", error);
//       alert("Error finding address. Please try again.");
//     });
// }

// // Function to get current location
// function getCurrentLocation(callback) {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         callback({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         });
//       },
//       (error) => {
//         alert(
//           "Unable to get your location. Please select a location from the dropdown."
//         );
//         console.error("Geolocation error:", error);
//       }
//     );
//   } else {
//     alert(
//       "Geolocation is not supported by your browser. Please select a location from the dropdown."
//     );
//   }
// }

// // Function to create the route
// function createRoute(fromCoords, toCoords) {
//   // Remove existing route if any
//   if (routingControl) {
//     map.removeControl(routingControl);
//   }

//   // Create a new route
//   routingControl = L.Routing.control({
//     waypoints: [
//       L.latLng(fromCoords.lat, fromCoords.lng),
//       L.latLng(toCoords.lat, toCoords.lng),
//     ],
//     routeWhileDragging: false,
//     showAlternatives: true,
//     addWaypoints: false,
//     draggableWaypoints: false,
//     fitSelectedRoutes: true,
//     lineOptions: {
//       styles: [{ color: "red", opacity: 0.7, weight: 5 }],
//     },
//   }).addTo(map);

//   // Center the map on the route
//   const bounds = L.latLngBounds([
//     [fromCoords.lat, fromCoords.lng],
//     [toCoords.lat, toCoords.lng],
//   ]);
//   map.fitBounds(bounds);
// }

// // Event listener for the navigate button
// document.getElementById("navigate").addEventListener("click", function () {
//   const fromSelect = document.getElementById("from");
//   const toSelect = document.getElementById("to");
//   const fromValue = fromSelect.value;
//   const toValue = toSelect.value;

//   if (!fromValue || !toValue) {
//     alert("Please select both starting location and destination.");
//     return;
//   }

//   // Handle current location specially
//   if (fromValue === "Current Location") {
//     getCurrentLocation((fromCoords) => {
//       geocodeAddress(toValue, (toCoords) => {
//         createRoute(fromCoords, toCoords);
//       });
//     });
//   } else {
//     // Both addresses are regular addresses
//     geocodeAddress(fromValue, (fromCoords) => {
//       geocodeAddress(toValue, (toCoords) => {
//         createRoute(fromCoords, toCoords);
//       });
//     });
//   }
// });

// // Add markers for all our store locations
// Object.entries(locationCoordinates).forEach(([address, coords]) => {
//   // Only mark store locations (not starting points)
//   if (
//     address.includes("Main St") ||
//     address.includes("Broadway") ||
//     address.includes("5th Avenue")
//   ) {
//     L.marker([coords.lat, coords.lng])
//       .addTo(map)
//       .bindPopup(address)
//       .openPopup();
//   }
// });

// Initialize the map with better mobile defaults
const map = L.map("map", {
  tap: false, // Important for some mobile devices
  dragging: true,
  touchZoom: true,
  scrollWheelZoom: true,
  doubleClickZoom: true,
  boxZoom: false,
  keyboard: false,
}).setView([40.7128, -74.006], 12);

// Add OpenStreetMap tiles with mobile-friendly settings
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19,
  minZoom: 10,
  noWrap: true,
}).addTo(map);

// Store coordinates for our locations
const locationCoordinates = {
  "123 Main St, New York": { lat: 40.7112, lng: -74.0053 },
  "456 Broadway, New York": { lat: 40.7195, lng: -74.0015 },
  "789 5th Avenue, New York": { lat: 40.7669, lng: -73.9693 },
  "Times Square, New York": { lat: 40.758, lng: -73.9855 },
  "Central Park, New York": { lat: 40.7829, lng: -73.9654 },
};

let routingControl = null;

// Mobile-friendly geocoding function
function geocodeAddress(address, callback) {
  if (locationCoordinates[address]) {
    callback(locationCoordinates[address]);
    return;
  }

  fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      address
    )}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data && data.length > 0) {
        callback({
          lat: parseFloat(data[0].lat),
          lng: parseFloat(data[0].lon),
        });
      } else {
        showMobileAlert("Address not found. Please try a different address.");
      }
    })
    .catch((error) => {
      console.error("Geocoding error:", error);
      showMobileAlert("Error finding address. Please try again.");
    });
}

// Mobile-friendly alert function
function showMobileAlert(message) {
  const alertDiv = document.createElement("div");
  alertDiv.style.position = "fixed";
  alertDiv.style.bottom = "20px";
  alertDiv.style.left = "10px";
  alertDiv.style.right = "10px";
  alertDiv.style.backgroundColor = "#ff4444";
  alertDiv.style.color = "white";
  alertDiv.style.padding = "12px";
  alertDiv.style.borderRadius = "8px";
  alertDiv.style.zIndex = "10000";
  alertDiv.style.textAlign = "center";
  alertDiv.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
  alertDiv.textContent = message;

  document.body.appendChild(alertDiv);

  setTimeout(() => {
    alertDiv.style.opacity = "0";
    setTimeout(() => document.body.removeChild(alertDiv), 300);
  }, 3000);
}

// Enhanced current location function for mobile
function getCurrentLocation(callback) {
  if (navigator.geolocation) {
    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        // Add a small marker for user's location
        L.marker([coords.lat, coords.lng], {
          icon: L.divIcon({
            className: "user-location-marker",
            html: '<div style="background-color: #4285F4; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>',
            iconSize: [26, 26],
          }),
        })
          .addTo(map)
          .bindPopup("Your Location")
          .openPopup();

        callback(coords);
      },
      (error) => {
        let errorMsg =
          "Unable to get your location. Please select a location from the dropdown.";
        if (error.code === error.PERMISSION_DENIED) {
          errorMsg =
            "Location permission denied. Please enable location services in your device settings.";
        }
        showMobileAlert(errorMsg);
      },
      options
    );
  } else {
    showMobileAlert("Geolocation is not supported by your browser.");
  }
}

// Mobile-optimized route creation
function createRoute(fromCoords, toCoords) {
  if (routingControl) {
    map.removeControl(routingControl);
  }

  routingControl = L.Routing.control({
    waypoints: [
      L.latLng(fromCoords.lat, fromCoords.lng),
      L.latLng(toCoords.lat, toCoords.lng),
    ],
    routeWhileDragging: false,
    showAlternatives: false,
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    lineOptions: {
      styles: [{ color: "#4285F4", opacity: 0.7, weight: 6 }],
    },
    createMarker: function (i, wp, n) {
      return L.marker(wp.latLng, {
        icon: L.divIcon({
          className: i === 0 ? "start-marker" : "end-marker",
          html:
            i === 0
              ? '<div style="background-color: #34a853; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>'
              : '<div style="background-color: #ea4335; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>',
          iconSize: [30, 30],
        }),
      }).bindPopup(i === 0 ? "Start Point" : "Destination");
    },
  }).addTo(map);

  // Better mobile fit bounds
  const bounds = L.latLngBounds([
    [fromCoords.lat, fromCoords.lng],
    [toCoords.lat, toCoords.lng],
  ]).pad(0.2); // Add 20% padding
  map.fitBounds(bounds, { animate: true, duration: 1 });
}

// Touch-friendly event handling
document.getElementById("navigate").addEventListener("click", function () {
  const fromValue = document.getElementById("from").value;
  const toValue = document.getElementById("to").value;

  if (!fromValue || !toValue) {
    showMobileAlert("Please select both starting location and destination.");
    return;
  }

  if (fromValue === "Current Location") {
    getCurrentLocation((fromCoords) => {
      geocodeAddress(toValue, (toCoords) => {
        createRoute(fromCoords, toCoords);
      });
    });
  } else {
    geocodeAddress(fromValue, (fromCoords) => {
      geocodeAddress(toValue, (toCoords) => {
        createRoute(fromCoords, toCoords);
      });
    });
  }
});

// Add store markers with touch-friendly popups
Object.entries(locationCoordinates).forEach(([address, coords]) => {
  if (
    address.includes("Main St") ||
    address.includes("Broadway") ||
    address.includes("5th Avenue")
  ) {
    L.marker([coords.lat, coords.lng], {
      icon: L.divIcon({
        className: "store-marker",
        html: '<div style="background-color: #fbbc05; width: 22px; height: 22px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>',
        iconSize: [28, 28],
      }),
    })
      .addTo(map)
      .bindPopup(address, {
        closeOnClick: false,
        autoClose: false,
        className: "store-popup",
      });
  }
});

// Fix for touch devices
document.addEventListener(
  "touchstart",
  function (e) {
    if (e.target.tagName === "SELECT") {
      e.stopPropagation();
    }
  },
  { passive: true }
);

// Initialize map properly on mobile
setTimeout(() => {
  map.invalidateSize();
}, 200);
