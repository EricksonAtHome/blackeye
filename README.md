# BLACKEYE v2.0

Educational phishing-awareness toolkit based on [ShellPhish](https://shellphish.net) by thelinuxchoice.

![BLACKEYE preview](https://raw.githubusercontent.com/EricksonAtHome/blackeye/main/img/bkev3.png)

> **Disclaimer:** Use BLACKEYE only with explicit permission, in controlled lab environments, and for authorized security education or testing. Unauthorized use against real users is illegal. Developers assume no liability for misuse.

## What is included in this repository

This repository currently ships the following ready-to-use templates under `sites/`:

| Menu # | Service | Folder |
|--------|---------|--------|
| 08 | Badoo | `sites/badoo` |
| 15 | Apple ID | `sites/apple` |
| 34 | Amazon | `sites/amazon` |
| 40 | Custom | `sites/create` |

Additional menu entries are listed for compatibility with upstream BLACKEYE releases, but their template folders are not included in this checkout. If you select one of those options, the script now shows a clear message instead of crashing.

Related projects:

- [Binance Email Support clone](https://github.com/EricksonAtHome/bes)
- [UTS7 (User Tracking System 7)](https://github.com/EricksonAtHome/UTS7)

## Requirements

Install these before running the tool:

- `bash`
- `php` (built-in development server)
- `jq` (JSON parsing for ngrok/IP lookups)
- `curl` and `wget`
- `unzip` (only needed when ngrok is downloaded automatically)

For **Localtunnel** (menu option 2):

- `node` and `npm`

For **Ngrok** (menu option 1):

- A free [ngrok account](https://ngrok.com/) and auth token are recommended on current ngrok releases

### Debian / Ubuntu example

```bash
sudo apt update
sudo apt install -y php jq curl wget unzip
```

### Termux example

```bash
pkg install php jq wget curl unzip
```

## Installation

Clone the repository and install Node dependencies for Localtunnel:

```bash
git clone https://github.com/EricksonAtHome/blackeye.git
cd blackeye
npm install
chmod +x blackeye.sh
bash blackeye.sh
```

### PowerShell (WSL recommended)

```powershell
git clone https://github.com/EricksonAtHome/blackeye.git
cd blackeye
wsl bash blackeye.sh
```

Running the script directly in Windows PowerShell without WSL is not supported.

## Usage

1. Start the script:

```bash
bash blackeye.sh
```

2. Enter a menu number with or without a leading zero (`6`, `06`, and `34` all work).
3. Choose a tunnel method:
   - `1` = Ngrok
   - `2` = Localtunnel
4. Share the generated URL only inside your authorized lab scenario.

### Common issues

| Problem | Fix |
|---------|-----|
| `Invalid option!` when choosing `01`, `02`, etc. | Fixed in current script — leading zeros are accepted. Update to the latest version. |
| `cd: sites/<name>: No such file or directory` | That template is not bundled here. Pick one of the included templates listed above. |
| `jq: command not found` | Install `jq` (see Requirements). |
| `PHP is required` | Install `php`. |
| Localtunnel asks for a password/IP | This is expected on first visit. Visitors must enter your public IP shown by Localtunnel. |
| Ngrok does not return a link | Sign in to ngrok, install the current ngrok binary, and configure your auth token. |

## Tunneling options

### Ngrok

The script can download a legacy ngrok binary automatically, but current ngrok accounts usually require authentication. If tunnel creation fails, install ngrok manually and run:

```bash
ngrok config add-authtoken <your-token>
```

### Localtunnel

Dependencies are installed with `npm install`. The script uses the local `lt` binary from `node_modules/.bin`.

## Introduction video

[Watch the installation walkthrough](https://www.dropbox.com/scl/fi/j9kn2cz4mk1uh3uz6cnnb/V-deo-31-3-24-17-07-24.mov?rlkey=j9gms5hmgaedz6pw7axi86gil&dl=0)

![How it works](https://raw.githubusercontent.com/EricksonAtHome/blackeye/main/img/hiws2.png)

## Credits

- Maintained by [@EricksonAtHome](https://github.com/EricksonAtHome/blackeye)
- Original phishing page templates by [An0nUD4Y](https://github.com/An0nUD4Y)
- Based on ShellPhish by [thelinuxchoice](https://github.com/thelinuxchoice)

## Support

If this project helps your security education work, you can support development:

- [Buy Me a Coffee](https://www.buymeacoffee.com/ericksonathome)
- [UTS7 on Gumroad](https://bpighold.gumroad.com/l/UTS7/s80jfjs)

Contact: [@EricksonHolding on Instagram](https://instagram.com/EricksonHolding)

## License

See [LICENSE](LICENSE).
