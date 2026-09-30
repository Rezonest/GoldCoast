# Gold Coast Engineering & Projects Ltd.

Company website for Gold Coast Engineering & Projects Ltd., serving industrial and infrastructure projects in Ghana and the wider West African region. Built with React and Vite.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

Install the locked dependencies and start the Vite development server:

```powershell
npm.cmd ci
npm.cmd run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`.

In PowerShell environments where script execution blocks `npm.ps1`, use `npm.cmd` as shown above. In other terminals, `npm` works as usual.

## Available commands

```powershell
npm.cmd run dev      # Start the development server
npm.cmd run build    # Create a production build in dist/
npm.cmd run preview  # Preview the production build
npm.cmd run lint     # Run Oxlint
```

## Project layout

```text
App.jsx                 Shared app shell and page navigation
main.jsx                React application entry point
pages/                  Home, About, Capabilities, Network, and Contact pages
components/             Shared header, footer, contact form, and section CTA
data/siteData.js        Page content, navigation, contact details, and form endpoint
data/siteImages.js      Local image path constants
public/images/          Logo and locally stored website photographs
styles/styles.css       Global and responsive site styles
```

Add or replace website images in `public/images/` and update their paths in `data/siteImages.js`. The site logo is `public/images/logo.jpeg`.

## Configuration notes

- Update `CONTACT` in `data/siteData.js` with the published office address, email, and phone number before launch.
- The Contact form prepares an email draft while `SHEETS_URL` is empty. Set `SHEETS_URL` to a configured form endpoint to enable online submission.
- The footer map is an OpenStreetMap regional map centered on Ghana; it does not identify an office address.
- The site photographs are stored locally. The map tiles and Google Fonts still load from external services and require an internet connection.
