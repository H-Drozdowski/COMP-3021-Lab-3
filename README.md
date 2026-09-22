# Phreak Handle Registry

Phreak Handle Registry is a small web page. It lists handles from the phone
phreaking and BBS scene of the 1980s. A handle was the name a person used in
place of a real name. The page lets you search the list by handle or by
speciality.

This app is for Lab 3.

## A note before you start

This app has security flaws. They are there on purpose, for the lab. The code is
for learning here. It is not a pattern to reuse in other projects.

Run the app only on your own computer.

## What you need

- A web browser
- VSCode
- The Live Server extension for VSCode

There is nothing else to install.

## Files

The zip holds these files:

```
.gitignore
index.html
css/style.css
js/app.js
data/handles.json
```

Keep this layout. The page loads each file from its folder.

## Start the app

The page reads its records from `data/handles.json`. Browsers do not let a page
opened straight from a file read another file. So the page runs through Live
Server.

1. Open the project folder in VSCode.
2. Right-click `index.html` in the Explorer panel.
3. Choose Open with Live Server.

A browser tab opens. The address looks something like
`http://127.0.0.1:5500/index.html`.

To stop Live Server, click Port : 5500 in the status bar at the bottom of
VSCode.

## Using the page

Type a search term in the box. Press Enter or click SEARCH.

The search matches part of a handle or part of a speciality. The registry has
four specialities:

- `tone_signaling`
- `trunk_manipulation`
- `social_engineering`
- `hardware`

The results show each handle with its region, the year it joined, and its
speciality.

## After you change the code

Live Server reloads the page when you save a file.

Sometimes the browser keeps an old copy. If a change does not show, reload with
a hard refresh:

- Windows and Linux: Ctrl+Shift+R
- macOS: Cmd+Shift+R

## Version control

The `.gitignore` file is part of the zip. The lab instructions in LEARN explain
the git steps.

## If something goes wrong

**Open with Live Server is not in the menu.** The extension is not installed.
Open the Extensions panel in VSCode, search for Live Server by Ritwick Dey, and
install it.

**Every search says No matching handles in registry.** The records did not load.
Look at the address bar. If it starts with `file://`, the page was opened as a
file. Close the tab and start the page with Live Server.

Your instructor can help if the page still will not load.
