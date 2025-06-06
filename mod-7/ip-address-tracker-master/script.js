var map;
var currentMarker; 

function updateMapLocation(lat, lng, popupText) {

    if (!map) {
        map = L.map('map').setView([lat, lng], 13); // Set initial view
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    } else {
        // If the map already exists, just change its view to the new location.
        map.setView([lat, lng], 13);
    }

    // If there's an old marker on the map, remove it.
    if (currentMarker) {
        map.removeLayer(currentMarker);
    }

   
    currentMarker = L.marker([lat, lng]).addTo(map)
        .bindPopup(popupText)
        .openPopup();
}


function getIpData(ipAddress) {
    // Construct the API URL. If ipAddress is empty, the API will use the user's current IP.
    var apiUrl = "https://geo.ipify.org/api/v2/country,city?apiKey=at_EhcO3LW6hxJbFvBU1TNo31Usx5URC&ipAddress=" + ipAddress;

    // Use the fetch API to send a request to the IP geolocation service.
    fetch(apiUrl)
        .then(function(response) {
            // Check if the response was successful (status code 200).
            if (!response.ok) {
                // If not successful, throw an error.
                throw new Error("HTTP error! Status: " + response.status);
            }
            // Parse the response body as JSON.
            return response.json();
        })
        .then(function(data) {
            // This block runs if the data was successfully fetched and parsed.
            console.log("Fetched data:", data); // Good for debugging.

            document.getElementById("ipDisplay").textContent = data.ip || 'N/A';
            document.getElementById("location").textContent = (data.location.region || 'N/A');
            document.getElementById("timeZone").textContent = "UTC " + (data.location.timezone || 'N/A');
            document.getElementById("isp").textContent = data.isp || 'N/A';

            // --- Update the Map ---
            var latitude = data.location.lat;
            var longitude = data.location.lng;
            var popupText = data.ip + "<br>" + data.location.city + ", " + data.location.country;

            updateMapLocation(latitude, longitude, popupText);
        })
        .catch(function(error) {
            // This block runs if there was an error during the fetch operation.
            console.error("Error fetching IP data:", error);
            alert("Failed to fetch IP information. Please check the IP address or your network connection. Error: " + error.message);

            // Clear display elements if there's an error
            document.getElementById("ipDisplay").textContent = 'N/A';
            document.getElementById("location").textContent = 'N/A';
            document.getElementById("timeZone").textContent = 'N/A';
            document.getElementById("isp").textContent = 'N/A';
        });
}

// --- Event Listeners and Initial Setup ---
// This code runs when the entire HTML document has been loaded.
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the HTML input field and the search button.
    var ipInputField = document.getElementById("info");
    var searchButton = document.getElementById("searchBtn");

    // Check if the search button exists before adding an event listener.
    if (searchButton) {
        // Add a click event listener to the search button.
        searchButton.addEventListener("click", function() {
            // When the button is clicked, get the value from the input field.
            var enteredIp = ipInputField.value.trim(); // .trim() removes extra spaces.
            getIpData(enteredIp); // Call the function to get and display IP data.
        });
    } else {
        console.error("Search button with ID 'searchBtn' not found!");
    }


    getIpData("");
});