Cisco RoomOS Systems maynot go into standby if local presentation share preview is active. For rooms with outside roombooking panels, occupancy may not be correctly reflected. The Js xAPI macro aims to resolve that by:<br>
monitoring the room’s occupancy and the screen share status. It checks the occupancy every 2 minutes and displays a warning if the room is empty for two consecutive checks. After the warning, it stops the screen share after 1 minute.
