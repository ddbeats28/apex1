# APEXDRIP STORE

A static, affiliate-first product discovery website for India and international visitors.

## Included
- THE HUB — a neon gaming landing view with an animated photo slideshow, a scrolling photo strip, editorial trending picks and featured retailer offers
- Animated real-photo banners and photo strips on every department page and on the Privacy and Disclosure pages (motion is disabled for visitors who prefer reduced motion)
- Dedicated Gaming, Technology, Gadgets, Lifestyle, Best Deals and Discover views
- Discover catalog with store filters, links to official retailers and a retailer directory
- Product cards, catalog-wide search, subcategory filters, sorting and product details
- Responsive desktop and mobile styling
- Browser-local product dashboard with add/edit/delete and JSON import/export
- Affiliate disclosure and privacy information pages

## Publish
Upload the contents of this folder to the root of your static hosting project. Keep `index.html`, `styles.css`, `app.js`, `privacy.html`, `disclosure.html`, and `assets/` together. Department URLs use hashes (such as `#hub`, `#gaming` or `#gaming?type=Consoles`; the old `#home` link still opens The Hub) and don’t need server redirects.

## Important affiliate setup
The included brand links are the official destinations supplied for this build. They are **not represented as approved affiliate tracking links**. Apply to each affiliate program, wait for approval, then replace the retailer URL on each product with your own tracking URL. Follow each program's brand, paid-search, coupon, disclosure and geographic rules. The current starter catalog deliberately does not show made-up live prices or discounts; it displays “CHECK RETAILER” until you enter a verified price.

## Product dashboard limitations
Open `index.html#admin` to manage the catalog in the current browser. Changes are saved in that browser's local storage only; they do not automatically publish for all visitors. To manage products centrally across devices, connect a secure database and authenticated admin service before production.

## Currency and regional availability
Product editor supports INR and USD. Confirm local stock, shipping, taxes, warranties and regional eligibility on the retailer's website. Brand destinations may redirect by location.

## Before launch
- Add your approved affiliate tracking links.
- Verify product images, descriptions, prices and discount claims.
- Add a real contact email/address and update the privacy notice accordingly.
- Review affiliate program disclosure requirements and applicable local laws.
- Test all links and layouts on mobile and desktop.
