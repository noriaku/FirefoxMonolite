![firefox_monolite_hero](resources/images/firefox_monolite_hero.png)

<br />
<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=With%20love%20from&message=PERU&colorA=333333&colorB=E6A3A2"/>
    </a>
    <a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE">
        <img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=333333&colorA=333333&colorB=B8D9B0"/>
    </a>
</p>

## 🌱 Genesis

<p align="justify">
Monolite theme aims to combine the beauty of pastel colors with monochromatic tones. Using small fonts, prioritizes screen space for greater vision range and increased productivity. On the other hand, we really recommend to use <a href="https://github.com/noriaku/firefox-monolite/tree/main/startup-page">monolite startup page</a>, designed for people who love terminal environment feeling & ascii art.
</p>
 
## 🦊 Firefox Theme guide

To start, you must clone the repo. You will get also the folder `startup-page`, I really recommend you to follow steps to use it as startpage, cuz works with the same colorscheme and philosophy.

1. Inside Firefox search at the top bar for `about:support`.
2. Find the `Profile Folder` and click `Open Folder`. This gives your Firefox Profile Folder.
3. Move `chrome` folder inside theme folder to your Profile Folder.
4. Inside `about:config` set the following properties (changing the boolean value):
   - `browser.search.widget.inNavBar`: false
   - `services.sync.prefs.sync.browser.urlbar.showSearchSuggestionsFirst`: false
5. Restart firefox, and be familiar with the keys.

> Obs. If you want to uninstall the theme, just must remove `chrome` folder inside your Firefox Profile Folder and restart your browser.

## 🚀 Startpage guide

To start, you must clone the repo and move the folder `startup-page` to a save place.

1. Click on menu icon in the top right corner in firefox and move to "Home" tab. Or put `about:preferences#home` in your top search bar.
2. In the "Home" tab, look for "New Windows and Tabs" section.
3. Inside "Homepage and new windows" set the path of startup-page folder with index.html. For example `file:///home/noriaku/Documents/startup-page/index.html` or a URL with your local webserver.

By the way, for customize the startpage with your custom data (nickname, city, etc), you must edit the database placed at `startup-page/src/database/profile.json`. It allows you to change the following fields:

- Username
- Category name
- Links of each category
- City & Country

Obs. I really recommend you to hostself your startup-page using any local webserver, for example, docker looks atractive for me. If not, weather api won't work cuz CORS problems. On the other hand, you must change the API coordinates with your own info inside `index.js`, check: [open meteo documentation](https://open-meteo.com/en/docs), it's very easy & free.

## 🦅 Setting up Apache

As many people ask how use the startpage with a local web server: many extensions needs to work with local webserver, I'll explain step by step how configure your local web server using apache and a Linux distribution, in this case: debian.

1. Update system & install packages.

```bash
sudo apt update; sudo apt install apache2; # Instructions for debian based distros.
```

2. Copy or move all the files of `start-page` inside apache web server path

```bash
sudo mv /path/to/startup-page/* /var/www/html
```

3. Start the web server & it's all. Server will be running at `127.0.0.1` or `localhost` (use that URL in your extension or firefox address for new tab).

```bash
sudo systemctl enable apache2
```

> Obs. Guide made for debian based distros, cuz of `apt` packages. On the other hand, I've tested this setup using the [New Tab Override](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/) extension, and it works perfectly. Any questions, open a new issue.

## 🐋 Setting up Docker

Docker is another convenient way to host the start page. You must install docker, for that see [docs](https://docs.docker.com/get-docker/).

1. Build the image via `docker` command. All the instructions are written inside Dockerfile.

```bash
docker build -t startup-page .
```

2. Run the image. You can change the port mapping of `8080` into something you want. At this point you must see your startup-page at `localhost:8080`.

```bash
docker run -d -p 8080:80 startup-page
```

3. Change your startup page (`user.js` file, in your Profile Directory path). This will do automatically the config, also you can use an extension of New Tab or manually change the URL to show as new firefox windows inside configuration.

```js
/*
 * Set startup page
 * 0 = blank , 1 = home, 2 = last visited, 3 = resume previous session
*/
user_pref('browser.startup.page', 0);
/*
 * Set home page
 * about:home = Firefox Home, custom url, about:blank
*/
user_pref('browser.startup.homepage', 'http://localhost:<port>');
```

> Obs. Using Docker with the -d option allows it to run as a background process, so it will operate each time you turn on your PC. On the other hand, if it does not work, you can try using: `docker run -d -p 8080:80 --restart=unless-stopped startup-page`, which will explicitly set it to do so.

## 💡 Shorcuts

1. Open new tab: `Ctrl + T`.
2. Close tab: `Ctrl + W`.
3. Bookmarks: `Ctrl + Shift + B`.
4. Previus page: `Alt + Left arrow`.
5. Next page: `Alt + Right arrow`.
6. Recharge: `Ctrl + R`.
7. Change next tab: `Ctrl + Tab`.
8. Change previous tab `Ctrl + Shift + Tab`.
