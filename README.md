Sly

Location-Based Social Networking App

Help Guide: 
This app enables you to connect with nearby users, share your location, follow others, and interact through pokes and location sharing. 
It includes features for managing your online status, sound notifications, and group interactions, with a debug section for troubleshooting. 
Below is a detailed breakdown of all features, instructions on how to use them, and example scenarios for real-world use.

1. User Profile and Status Management
Features:
Profile Display: Shows your username (capitalized initial as an avatar) and current online/offline status.
Status Toggle: Switch between "ONLINE" and "OFFLINE" to control visibility to other users.
Name Change: Update your username.
Sound Toggle: Enable or disable sound notifications (indicated by 🔔 for on, 🔕 for off).
How to Use:
View Profile: Your username is displayed at the top with the first letter as an avatar (e.g., "J" for "John").
Toggle Status:
Click the button labeled "Go Offline" (if online) or "Go Online" (if offline) to change your visibility.
When offline, your location and status are hidden from others.
Change Name:
Click the "Change Name" button to update your username.
Enter a new name in the prompt (if implemented) to update how others see you.
Toggle Sound:
Click the "🔔 Sound On" or "🔕 Sound Off" button to enable/disable sound notifications for events like pokes or location updates.
Scenarios:
Scenario 1: You’re at a crowded event and want to stay hidden from nearby users. Toggle your status to "OFFLINE" to stop sharing your location.
Scenario 2: You want to alert friends when you’re poked. Enable sound notifications (🔔) to hear a sound when someone interacts with you.
Scenario 3: You decide to change your username to something fun for a group event (e.g., "PartyKing"). Use the "Change Name" button to update it.

2. Location Sharing and Tracking
Features:
Your Location: Displays your latitude and longitude (to 6 decimal places) once acquired.
Followed User: Shows the name and coordinates of a user you’re following.
Map Display: A map (likely Google Maps or similar) shows your location and others’ positions.
Location Controls:
"Focus on Me": Centers the map on your location or the followed user’s location.
"Share Position": Shares your location with others.
"Stop Sharing": Stops broadcasting your location.
Error Messages: Displays any issues with location services (e.g., "Location not available").
How to Use:
View Your Location:
Wait for the app to acquire your location via GPS or browser geolocation.
Once loaded, see your latitude and longitude under "Your Location."
View Map:
The map loads below the location details, showing your position and nearby users.
If the map says "Loading map..." or "Location not available," ensure location permissions are enabled in your browser/device.
Follow a User:
When following someone, their name and coordinates appear under "Following."
The map may update to show their location.
Control Location Sharing:
Click "Share Position" to broadcast your location to nearby users.
Click "Stop Sharing" to hide your location.
Click "Focus on Me" to center the map on your position (or the followed user’s position if applicable).
Handle Errors:
If an error message appears (e.g., "Location not available"), check your device’s location settings or refresh the page.
Scenarios:
Scenario 1: You’re at a music festival and want to find a friend. Follow their profile to see their coordinates and center the map on them using "Focus on Me."
Scenario 2: You’re organizing a meetup and want others to find you. Click "Share Position" to make your location visible on the map.
Scenario 3: You’re in a private setting and don’t want your location shared. Click "Stop Sharing" to hide your position.

3. Nearby Users and Group Interactions
Features:
Nearby Users List: Displays users within proximity who are online and active within the last hour (3600000 ms).
Group Selection: Choose a group size (All, 2, 3, 5, or 10 users) to filter nearby users into a group.
Group Management: View and clear a selected group of users.
User Details:
Shows each user’s name, distance (in meters or kilometers), and last seen time (e.g., "5 minutes ago").
Options to follow/unfollow, poke, or send your location to a specific user.
Poke Feature: Send a poke to a user (with a cooldown timer to prevent spam).
Send Location: Share your location with a specific user.
How to Use:
View Nearby Users:
The "Nearby Users" section lists users who are online and active within the last hour.
Each user’s entry shows their name, distance (e.g., "500m away" or "0.5km away"), and last seen time (e.g., "2 minutes ago").
Select a Group:
Use the dropdown to select a group size (e.g., "2" or "All").
The app filters nearby users to form a group of the chosen size.
The group is displayed under "Group of X users."
Manage Group:
Click "Clear Group" to reset the selected group and start over.
Interact with Users:
Click "Follow" to track a user’s location (or "Unfollow" if already following).
Click "Poke" to send a notification to a user (disabled during the cooldown period, shown as "Poke available in X seconds").
Click "Send Location" to share your coordinates with a specific user.
Handle Empty States:
If no users are nearby, the app shows "No users nearby."
If loading, it displays "Loading nearby users..."
Scenarios:
Scenario 1: You’re at a park and want to connect with a small group. Select "Group size: 3" to form a group of three nearby users, then poke them to start a conversation.
Scenario 2: You see a friend 200m away. Click "Send Location" to share your exact position so they can find you.
Scenario 3: You want to track a colleague during a team-building event. Click "Follow" on their profile to monitor their location on the map.

4. Debug Information
Features:
Debug Panel: Displays technical details for troubleshooting:
Firebase connection status ("Connected" or "Disconnected").
User ID (your unique identifier or "Not set").
Location validity ("Valid" or "Invalid").
Last location update time.
Audio Debugging:
Lists active sound profiles with their frequencies (e.g., "ProfileName (440Hz)").
Shows the current audio state (e.g., playing, paused).
Allows selection of a musical scale for notifications (Pentatonic, Major, Minor, Chromatic).
Force Refresh: Manually refresh the app to reload data.
How to Use:
Check Connection:
Verify Firebase status to ensure the app is connected to the backend.
Check User ID to confirm you’re logged in.
Monitor Location:
Ensure "Location: Valid" and check the "Last Update" time to confirm recent location data.
Audio Settings:
View active sound profiles and their frequencies for notifications.
Select a musical scale (e.g., "Major") to change the sound of notifications.
Force Refresh:
Click "Force Refresh" if the app is stuck or data isn’t updating.
Scenarios:
Scenario 1: The map isn’t loading. Check the debug panel for "Firebase: Disconnected" or "Location: Invalid" to diagnose the issue, then click "Force Refresh."
Scenario 2: You want a unique notification sound. Select the "Pentatonic" scale for a distinct tone when poked.
Scenario 3: You’re a developer testing the app. Use the debug panel to monitor User ID and location updates during testing.

5. Audio Permissions
Features:
Audio Permission Prompt: Requests permission to enable sound notifications if not already granted.
Enable Sound Button: Activates sound notifications.
How to Use:
Grant Permission:
If the "Audio Permission Required" section appears, click "Enable Sound" to allow the app to play notification sounds.
Verify:
After enabling, check the profile section for "🔔 Sound On" to confirm.
Scenarios:
Scenario 1: You’re in a noisy environment and want audible alerts for pokes. Click "Enable Sound" to ensure you hear notifications.
Scenario 2: You’re testing the app and notice no sound. Check the audio permission section and enable it if prompted.

General Usage Tips
Permissions: Ensure your browser/device allows location access and sound playback for full functionality.
Internet Connection: A stable internet connection is required for Firebase connectivity and real-time updates.
Cooldowns: Be aware of the poke cooldown to avoid spamming users.
Privacy: Use "Go Offline" or "Stop Sharing" to control when your location is visible.
Error Handling: Check error messages in the location or nearby users sections for issues like GPS failure or network problems.

Possible Scenarios for Using the App
Social Events:
Context: You’re at a large convention and want to find friends.
Actions: Share your location, follow friends, and poke them to meet up. Use the map to navigate to their position.
Outcome: Easily coordinate meetups in a crowded space.
Group Activities:
Context: You’re organizing a scavenger hunt with a group of 5 players.
Actions: Select "Group size: 5" to form a team, share your location, and monitor their positions on the map.
Outcome: Keep track of everyone’s location during the game.
Safety and Coordination:
Context: You’re hiking with friends and want to ensure no one gets lost.
Actions: Follow key members, share your location, and use sound notifications to stay alerted to pokes if someone needs help.
Outcome: Stay connected and ensure group safety.
Casual Meetups:
Context: You’re in a new city and want to connect with nearby users for a coffee meetup.
Actions: Go online, check nearby users, form a small group, and send your location to coordinate a meeting spot.
Outcome: Make new connections in real-time.
Debugging and Testing:
Context: You’re a developer or beta tester troubleshooting the app.
Actions: Use the debug panel to check Firebase status, location validity, and audio settings. Force refresh if data stalls.
Outcome: Identify and resolve technical issues quickly.

Accessing the App
The app is accessible via a web browser and an Android app.
Ensure your device supports geolocation and has an internet connection.
For sound features, grant audio permissions when prompted.
If you encounter issues, check the debug panel or error messages for guidance.

Additional Notes
Firebase Integration: The app uses Firebase for real-time data (e.g., user locations, status). Ensure your device isn’t blocking Firebase connections.
Musical Scales: The audio feature’s musical scales (Pentatonic, Major, etc.) allow customization of notification sounds, which is unique for a location-based app.
Cooldowns: The poke cooldown (e.g., "Poke available in X seconds") prevents abuse and ensures fair interactions.
Privacy Controls: Features like "Stop Sharing" and "Go Offline" give you control over your visibility, making the app suitable for privacy-conscious users.

