Cisco RoomOS Systems may not go into standby if local presentation share preview is active. <br><br>
![image](https://github.com/user-attachments/assets/cf824634-0ec2-42e6-ab7a-2eb05445134e)
<br><br>
For rooms with outside roombooking panels, occupancy may not be correctly reflected. This Js xAPI macro aims to resolve that by monitoring the room’s occupancy and the screen share status. <br><br>It checks the occupancy every 2 minutes and displays a warning (for 55s) if the room is empty for two consecutive checks.<br>
![image](https://github.com/user-attachments/assets/929a4d64-5329-4253-9592-eafc82543ba8)
<br><br>
After the warning, it stops the screen share after 1 minute.<br>
<br>
Normal Console output (when debugs are enabled):
![image](https://github.com/user-attachments/assets/51a0d382-0e64-468b-88fa-152c6d604777)<br><br>
Note: If the camera view is obstructed OR if people in the room are not visible, this macro will go into effect and may disrupt normal meeting conditions. Please use with caution and provide guidance to end-users.
