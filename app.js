function retryLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = `${position.coords.latitude}, ${position.coords.longitude}`;
        document.getElementById("coords").textContent = coords;
        document.getElementById("location-denied").style.display = "none";
        document.getElementById("location-display").style.display = "block";
        document.getElementById("app").querySelector("p").textContent = "Application initialized!";
      },
      (error) => {
        console.error("Geolocation error:", error.message);
        document.getElementById("location-denied").style.display = "block";
        document.getElementById("location-display").style.display = "none";
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
    document.getElementById("location-denied").style.display = "block";
    document.getElementById("location-display").style.display = "none";
  }
}

function useDefaultLocation() {
  const defaultCoords = "40.7128, -74.0060"; // Default: New York City
  document.getElementById("coords").textContent = defaultCoords;
  document.getElementById("location-denied").style.display = "none";
  document.getElementById("location-display").style.display = "block";
  document.getElementById("app").querySelector("p").textContent = "Application initialized with default location!";
}

function setName() {
  const name = document.getElementById("name-input").value.trim();
  if (name) {
    console.log("Name set:", name);
    document.getElementById("name-input").value = ""; // Clear input
    // Add backend logic to save name (e.g., send to server)
  } else {
    console.log("No name entered");
  }
}

function enableBeacon() {
  const coords = document.getElementById("coords").textContent;
  if (coords) {
    console.log("Beacon enabled at location:", coords);
    // Add backend logic to enable beacon (e.g., broadcast location)
  } else {
    console.log("Cannot enable beacon: No location available");
  }
}

function refreshUsers() {
  const coords = document.getElementById("coords").textContent;
  const nearbyUsersList = document.getElementById("nearby-users");
  nearbyUsersList.innerHTML = ""; // Clear list
  if (coords) {
    console.log("Refreshing nearby users for location:", coords);
    // Simulate fetching nearby users
    const dummyUsers = ["User1", "User2", "User3"];
    dummyUsers.forEach(user => {
      const li = document.createElement("li");
      li.textContent = user;
      nearbyUsersList.appendChild(li);
    });
    // Add backend logic to fetch real users based on location
  } else {
    console.log("Cannot refresh users: No location available");
  }
}

function search() {
  const query = document.getElementById("search-input").value.trim();
  const searchResultsList = document.getElementById("search-results");
  searchResultsList.innerHTML = ""; // Clear list
  if (query) {
    console.log("Searching for:", query);
    // Simulate search results
    const dummyResults = [`Result for "${query}"`, `Another match for "${query}"`];
    dummyResults.forEach(result => {
      const li = document.createElement("li");
      li.textContent = result;
      searchResultsList.appendChild(li);
    });
    // Add backend logic to perform real search
  } else {
    console.log("No search query entered");
  }
}

function sendMessage() {
  const message = document.getElementById("message-input").value.trim();
  if (message) {
    console.log("Message sent:", message);
    document.getElementById("message-input").value = ""; // Clear textarea
    // Add backend logic to send message
  } else {
    console.log("No message entered");
  }
}

// Initialize location on page load
document.addEventListener("DOMContentLoaded", () => {
  retryLocation();
});