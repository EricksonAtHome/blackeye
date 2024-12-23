from pycaw.pycaw import AudioUtilities, IAudioEndpointVolume

def set_system_volume_to_max():
    try:
        # Get the audio devices
        devices = AudioUtilities.GetSpeakers()
        
        # Activate the audio endpoint volume interface
        interface = devices.Activate(
            IAudioEndpointVolume._iid_, 1, None)

        # Query the audio interface
        volume = interface.QueryInterface(IAudioEndpointVolume)

        # Check if the speaker is muted and unmute it
        if volume.GetMute():
            volume.SetMute(0, None)  # 0 means unmute

        # Set the system volume to 100%
        volume.SetMasterVolumeLevelScalar(1.0, None)

        print("9/11")
    except Exception as e:
        print(f"Something went wrong but keep going: {e}")

# Run the function
set_system_volume_to_max()
