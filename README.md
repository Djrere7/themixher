# The MixHer — themixher.org

The website for **MixHer Inc.**, a registered Florida nonprofit and platform for female DJs.
_Setting the Tone._

## Stack
- [Astro](https://astro.build) static site
- Deployed via **Cloudflare Pages** (auto-deploy on push to `main`)
- No CMS — content lives in `src/data/site.ts`

## Develop
Node is installed at `~/.local/node` on the build machine (not on PATH).

```bash
export PATH="$HOME/.local/bin:$HOME/.local/node/bin:$PATH"
npm install
node node_modules/astro/astro.js dev --port 4322   # http://localhost:4322
node node_modules/astro/astro.js build             # outputs to dist/
```

## Editing content
Almost all copy, links, sponsorship tiers, and navigation are in **`src/data/site.ts`**.
Search that file for `TODO` — those are the live action links (donation platform,
WhatsApp community, Eventbrite, newsletter endpoint) that need real URLs.

## Media
Drop provided images/video into `public/img` and `public/video`, then wire them into the
`<Media src="..." />` components. Only client-provided media is used.

## Pages
Home · About · Events · DJ Community · First Spin · Sponsors · Contact
