---
title: "Fonts Jar"
type: "Chrome Extension"
year: 2022
roles: ["Developer","Designer"]
technologies: [{"title":"React","url":"https://reactjs.org/"},{"title":"TypeScript","url":"https://www.typescriptlang.org/"},{"title":"Plasmo","url":"https://github.com/PlasmoHQ/plasmo"},{"title":"Tailwind","url":"https://tailwindcss.com/"},{"title":"Docker","url":"https://www.docker.com/"},{"title":"GitHub Actions","url":"https://github.com/features/actions"},{"title":"Figma","url":"https://www.figma.com/"}]
image: "/images/fonts-jar-89e03436efd62c453c1ca6ec730405743b190ddd-1920x960.png"
imageAlt: "Fonts Jar logo"
liveButton: {"text":"Visit store listing","url":"https://chrome.google.com/webstore/detail/fonts-jar/hkkhacceelmpcaiegjpijfpgaefokagj"}
repositoryButton: {"text":"Visit repository","url":"https://github.com/DaveKeehl/fonts-jar"}
excerpt: "An open-source Chrome extension to save your favorite fonts from a list of supported websites (including Google Fonts and Adobe Fonts), so you never forget they exist."
updatedAt: "2023-03-30T15:14:41Z"
nutshell: "<p>Fonts Jar is a Chrome extension that allows users to save their favorite fonts from an always growing list of supported websites. The fonts that are added to the favorites list are always available in the extension popup, ready to be removed, searched, filtered and grouped in collections.</p>"
---

## Introduction

Fonts Jar is a Chrome extension that allows users to save their favorite fonts from an always growing list of supported websites (like [Google Fonts](undefined) and [Adobe Fonts](undefined)). The fonts that are added to the favorites list are always available in the extension popup, ready to be removed, searched, filtered and grouped in collections for better organization. Moreover, the fonts you add to Fonts Jar are kept in sync between the devices where you are logged with your Chrome profile, so you will always be one click away from your favorites list.

The goal is to support an always increasing number of websites and browser stores, so that Fonts Jar can be used as a cross-website fonts management tool.

## The problem

I have been doing design work since 2014, and - especially in the last few years - one of the most annoying things I’ve had to deal with, is browsing fonts online. Nowadays, there is no shortage of websites where one can browse pages and pages of fonts, and that’s a problem in my opinion. We have too many options, and it has become increasingly difficult to remember where a specific font was found.

Was <insert_here_a_font_name> on Google Fonts? Adobe Fonts? Who knows!

## The solution

At one point, I thought that enough was enough and there HAD to be a better way. I couldn’t accept the idea that every designer basically had to come up with their own typography bookmarking system to stop this madness. So I decided it was time to do something about it.

The idea behind Fonts Jar is simple: inject a button in a font page, that when clicked extracts the font’s data and adds it to the favorites list in the extension popup, becoming available to the user. Once in the popup, the font will always be one-click away and you will never worry again about which website it came from.

I was aware of other browser extensions and desktop apps that already tackled this problem, but none of them was quite what I had in mind. In my opinion, they all did a bit too much and I just wanted something minimal and easy-to-use, to group my favorite fonts from the internet.

## The design process

In order to make my idea concrete, I had to come up with 3 design elements:

1. The logo

1. The button that is injected in the font page

1. The extension popup where all the favorite fonts are listed

### Logo

When I started to think about the extension’s name and logo, the first thing that came to my mind was The Legend of Zelda, where you can use empty bottles to catch and collect fairies, insects, water and potions. I didn’t particularly like the word bottle, so I went with Jar (another object taken from the The Legend of Zelda.. I’m a big fan as you can tell!), which I though fit well in the context of fonts.

The background colors are shamelessly taken from the Google Fonts logo, but are used in a 4-point gradient that looks very colorful, fresh and modern.


### Injected button

Since I wanted the button to integrate well in the pages where it’s injected, its design process was fairly easy. All I had to was to replicate the style of other buttons in the page (or in the website), and to come up with a style variant for the button in its toggled state (when the user clicks on it, and the text changes from “add to favorites” to “remove from favorites”). Figures 2 and 3 show the Roboto page on Google Fonts, with the Fonts Jar button injected next to the native “Download family” button.



### Extension popup

As opposed to the button, the popup required more thought process, as it was unique to my extension and I wanted to create the best UX possible. The popup’s UI is comprised of 3 sections:

1. Header

1. Topbar

1. Favorites

The header is a simple brand component that contains the logo, the extension’s name, the slogan and it utilizes the brand colors to form a strong identity. The topbar is located below the header, and it comprises of a searchbar and a toolbar loaded with 4 actions (sort by name/date, sort ascending/descending, open filter by website modal, open collections manager modal). Finally, the popup shows the list of favorite fonts that the user has populated by clicking on the button injected in the font pages.

As shown in Figure 4, hovering on a font reveals 2 buttons: one to assign the selected font to an already created collection, and another one to remove the selected font from the favorites list.





## Chrome extensions

There are many ways to build a Chrome extension, but no matter what tools you use, in the context of a project like Fonts Jar, the underlying extension architecture comprises of the following 3 main parts:

1. Content scripts

1. Popup

1. Manifest

Content scripts are files that run in the context of web pages and are able to read details of the web pages the browser visits, make changes to them and pass information to their parent extension. This is in fact how Fonts Jar is able to extract the font’s data: when a user visits a supported font page, a content script kicks in and extracts the data by inspecting the DOM.

As opposed to content scripts, the popup is a visual element and it’s the little window that gets shown when clicking on the extension icon from the extensions list in the top-right corner of Chrome’s window. The popup is just simple HTML that can be put together and styles as you want. By default it expects raw HTML, but you can also use [React](undefined) or any other UI framework during development. If you do that, you need to compile it down to raw HTML in a build step, to be able to load the extension in your browser.

Finally, the manifest is a JSON file that provides metadata about the extension, such as the name, version, author, icons, permissions and where to find the resources needed to load the content scripts and popup window.

## The development process

Since this was my first time building an extension, I wanted to go vanilla and don’t use any framework (at least initially). That way I could have learned the basics of the Chrome API and have a better understanding of the extension’s architecture. Because of that, my initial tech stack was the following:

- [TypeScript](undefined): the main programming language

- HTML: to create the markup for the injected button and the extension popup

- CSS: to style the button and the popup

- [esbuild](undefined): to build the code and put the final bundle together

- [GitHub Actions](undefined): for Continuous Integration (CI) and Continuous Delivery (CD)

- [Docker](undefined): to create an image that can be used to develop Fonts Jar both from macOS and Windows, without having to worry about missing dependencies

This setup worked quite well, and I was able to have full control over the entire process of detecting the currently loaded website, extracting the font’s data and building the popup. However, after a while I started to notice some aspects that I didn’t particularly enjoy (especially in terms of developer experience). In particular:

- Supporting a new website was hard, and there were many moving pieces that had to fit together well. TypeScript’s type system helped a lot, since a missing property would make the build process fail, but it was still a cumbersome process

- Manipulating the DOM with vanilla JS/TS is not best experience, especially when you want the UI to be highly interactive. You often end up with many manually created event listeners and the code to handle it grows fast, becoming hard to parse

For these reasons, after the initial Fonts Jar version was complete, I started looking around for better options and I eventually found [Plasmo](undefined), a framework specifically made for creating browser extensions with many great features, such as first-class support for React and TypeScript, auto-reloading and HMR, abstractions over the Chrome Storage and Messaging APIs and the ability to create builds for multiple target browsers (e.g Chrome, Firefox, Edge, Safari).

Since I was afraid to break stuff, I didn’t port the whole thing in one go, but rather bit by bit, making sure that everything kept working as expected. However, the more I used Plasmo, the more I was blown away and now that Fonts Jar is made 100% with Plasmo, I can say that its maintenance is a breeze (at least compared to how it was before), and both adding new features and adding support for new websites requires a lot less effort. Now, when I want to support a new website I only need to create a new content script, fill it with some information about the new website, do some styling and that’s it.
