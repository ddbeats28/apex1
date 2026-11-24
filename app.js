const STORAGE_KEY = "lootverse_products_v1";
const LEGACY_KEYS = ["apexdrip_products_v2", "apexdrip_products_v1"];
const categories = ["Gaming", "Technology", "Gadgets", "Lifestyle", "Deals", "Software"];
const brands = [
  {name:"Kreo",category:"Gaming",region:"India",url:"https://kreo-tech.com/",tag:"Gaming gear"},
  {name:"Razer",category:"Gaming",region:"Global / APAC",url:"https://www.razer.com/ap-en/store",tag:"Gaming peripherals"},
  {name:"Redragon",category:"Gaming",region:"Global",url:"https://redragonshop.com/",tag:"Gaming accessories"},
  {name:"Logitech",category:"Gaming & Tech",region:"India",url:"https://www.logitech.com/en-in",tag:"PC peripherals"},
  {name:"Kinguin",category:"Gaming",region:"Global",url:"https://www.kinguin.net/",tag:"Digital games marketplace"},
  {name:"Secretlab",category:"Gaming",region:"Global",url:"https://secretlab.co/",tag:"Gaming chairs & desks"},
  {name:"Green Man Gaming",category:"Gaming",region:"Global",url:"https://www.greenmangaming.com/",tag:"PC games"},
  {name:"Acer Store",category:"Gaming & Tech",region:"India",url:"https://store.acer.com/en-in/",tag:"Laptops & electronics"},
  {name:"Hostinger",category:"Software",region:"Global / India",url:"https://www.hostinger.com/",tag:"Web hosting"},
  {name:"Bitdefender",category:"Software",region:"India / Global",url:"https://www.bitdefender.com/en-in/",tag:"Cybersecurity"},
  {name:"Elementor",category:"Software",region:"Global",url:"https://elementor.com/",tag:"Website builder"},
  {name:"Canva",category:"Software",region:"Global",url:"https://www.canva.com/",tag:"Design tools"},
  {name:"Adobe",category:"Software",region:"India / Global",url:"https://www.adobe.com/in/",tag:"Creative software"},
  {name:"Tata CLiQ",category:"Lifestyle",region:"India",url:"https://www.tatacliq.com/",tag:"Fashion & lifestyle"},
  {name:"FARFETCH",category:"Lifestyle",region:"Global / India",url:"https://www.farfetch.com/in/",tag:"Luxury fashion"},
  {name:"Nike",category:"Lifestyle",region:"India",url:"https://www.nike.in/",tag:"Sportswear"},
  {name:"Adidas",category:"Lifestyle",region:"India",url:"https://www.adidas.co.in/",tag:"Sportswear"},
  {name:"PUMA",category:"Lifestyle",region:"India",url:"https://in.puma.com/in/en",tag:"Sportswear"},
  {name:"PlayStation Direct",category:"Gaming",region:"US",url:"https://direct.playstation.com/en-us",tag:"Consoles, controllers & games"},
  {name:"Best Buy",category:"Technology",region:"US",url:"https://www.bestbuy.com/",tag:"Electronics & retailer offers"},
  {name:"Apple Store",category:"Technology",region:"US",url:"https://www.apple.com/store",tag:"Smartphones & laptops"},
  {name:"Anker",category:"Gadgets",region:"US",url:"https://www.anker.com/",tag:"Charging & portable power"},
  {name:"Govee",category:"Gaming",region:"US",url:"https://us.govee.com/",tag:"RGB lighting & accessories"},
  {name:"JBL",category:"Lifestyle",region:"US",url:"https://www.jbl.com/",tag:"Portable audio"}
];
const starterProducts = [
 {id:"n1",name:"Swarm 75 Phantom White Wireless Keyboard",brand:"Kreo",category:"Gaming",type:"Keyboards",badge:"NEW DROP",description:"A 75% wireless mechanical keyboard with a clean white build for compact battle stations.",image:"assets/shop-kreo-swarm75.webp",affiliateUrl:"https://kreo-tech.com/products/swarm-75-phantom-white-wireless-gaming-keyboard",featured:true},
 {id:"n2",name:"Hawk Pro Wireless Gaming Mouse",brand:"Kreo",category:"Gaming",type:"Mice",badge:"GAMER PICK",description:"A lightweight wireless mouse built for quick flicks and long sessions.",image:"assets/shop-kreo-hawk.webp",affiliateUrl:"https://kreo-tech.com/products/hawk-pro-black-wireless-gaming-mouse",featured:true},
 {id:"n3",name:"Surge Pro Wireless Controller",brand:"Kreo",category:"Gaming",type:"Controllers",badge:"TMR STICKS",description:"A wireless PC controller with TMR joysticks and RGB accents.",image:"assets/shop-kreo-surge.webp",affiliateUrl:"https://kreo-tech.com/products/surge-pro-wireless-gaming-controller-with-tmr-joysticks",featured:false},
 {id:"n4",name:"Terra XXL Deskmat — System of the Sun",brand:"Kreo",category:"Gaming",type:"Desk Setup",badge:"DESK UPGRADE",description:"An extra-large deskmat with a planetary print to anchor your setup.",image:"assets/shop-kreo-terra.webp",affiliateUrl:"https://kreo-tech.com/products/terra-xxl-deskmat-system-of-the-sun",featured:false},
 {id:"n5",name:"Razer DeathAdder V3 Pro",brand:"Razer",category:"Gaming",type:"Mice",badge:"ESPORTS GRADE",description:"An ultra-light ergonomic wireless mouse made for competitive play.",image:"assets/shop-rz-deathadder.webp",affiliateUrl:"https://www.razer.com/ap-en/gaming-mice/razer-deathadder-v3-pro",featured:true},
 {id:"n6",name:"Razer BlackWidow V4 Pro",brand:"Razer",category:"Gaming",type:"Keyboards",badge:"RGB FLAGSHIP",description:"A full-size mechanical keyboard with a command dial, macro keys and underglow.",image:"assets/shop-rz-blackwidow.webp",affiliateUrl:"https://www.razer.com/ap-en/gaming-keyboards/razer-blackwidow-v4-pro",featured:true},
 {id:"n7",name:"Razer BlackShark V2 Pro",brand:"Razer",category:"Gaming",type:"Headsets",badge:"PRO AUDIO",description:"A wireless esports headset tuned for clear footsteps and comms.",image:"assets/shop-rz-blackshark.webp",affiliateUrl:"https://www.razer.com/ap-en/gaming-headsets/razer-blackshark-v2-pro",featured:false},
 {id:"n8",name:"Razer Kraken V4 Pro",brand:"Razer",category:"Gaming",type:"Headsets",badge:"OLED HUB",description:"A wireless RGB headset with an OLED control hub for quick audio tweaks.",image:"assets/shop-rz-kraken.webp",affiliateUrl:"https://www.razer.com/ap-en/gaming-headsets/razer-kraken-v4-pro",featured:false},
 {id:"n9",name:"Razer Basilisk V3",brand:"Razer",category:"Gaming",type:"Mice",badge:"CUSTOM RGB",description:"A customisable RGB mouse with a tilt scroll wheel and programmable buttons.",image:"assets/shop-rz-basilisk.webp",affiliateUrl:"https://www.razer.com/ap-en/gaming-mice/razer-basilisk-v3",featured:false},
 {id:"n10",name:"Razer Wolverine V3 Pro",brand:"Razer",category:"Gaming",type:"Controllers",badge:"XBOX & PC",description:"A wireless esports controller for Xbox and PC with remappable controls.",image:"assets/shop-rz-wolverine.webp",affiliateUrl:"https://www.razer.com/ap-en/console-controllers/razer-wolverine-v3-pro",featured:true},
 {id:"n11",name:"APEX-HIVE K774 PRO Keyboard",brand:"Redragon",category:"Gaming",type:"Keyboards",badge:"HOT PICK",description:"A compact mechanical keyboard with per-key RGB and a volume knob.",image:"assets/shop-rd-k774.webp",affiliateUrl:"https://redragonshop.com/products/apex-hive-k774",featured:false},
 {id:"n12",name:"NUBULA K769 HE Rapid Trigger Keyboard",brand:"Redragon",category:"Gaming",type:"Keyboards",badge:"RAPID TRIGGER",description:"A Hall-effect magnetic keyboard with rapid trigger for fast inputs.",image:"assets/shop-rd-k769.webp",affiliateUrl:"https://redragonshop.com/products/nubula-k769-he-rapid-trigger-gaming-keyboard",featured:false},
 {id:"n13",name:"CROSSFIRE H893 Gaming Headset",brand:"Redragon",category:"Gaming",type:"Headsets",badge:"SQUAD COMMS",description:"An over-ear gaming headset with a detachable boom mic.",image:"assets/shop-rd-h893.webp",affiliateUrl:"https://redragonshop.com/products/crossfire-h893",featured:false},
 {id:"n14",name:"G902 Display Gaming Controller",brand:"Redragon",category:"Gaming",type:"Controllers",badge:"BUILT-IN SCREEN",description:"A gaming controller with a built-in display and RGB lighting.",image:"assets/shop-rd-g902.webp",affiliateUrl:"https://redragonshop.com/products/g902",featured:false},
 {id:"n15",name:"PG1M Pro Glass Gaming Mouse Pad",brand:"Redragon",category:"Gaming",type:"Desk Setup",badge:"SPEED SURFACE",description:"A glass mouse pad for smooth, consistent glide.",image:"assets/shop-rd-pg1m.webp",affiliateUrl:"https://redragonshop.com/products/pg1m-pro-glass-gaming-mouse-pad",featured:false},
 {id:"n16",name:"Logitech G502 X Plus",brand:"Logitech",category:"Gaming",type:"Mice",badge:"LIGHTFORCE",description:"A wireless RGB gaming mouse with hybrid optical-mechanical switches.",image:"assets/shop-lg-g502.webp",affiliateUrl:"https://www.logitechg.com/en-in/products/gaming-mice/g502-x-plus-wireless-lightforce.html",featured:true},
 {id:"n17",name:"Logitech G515 TKL Wireless Keyboard",brand:"Logitech",category:"Gaming",type:"Keyboards",badge:"LOW PROFILE",description:"A slim tenkeyless wireless gaming keyboard with low-profile switches.",image:"assets/shop-lg-g515.webp",affiliateUrl:"https://www.logitechg.com/en-in/products/gaming-keyboards/g515-tkl-wireless-keyboard.html",featured:false},
 {id:"n18",name:"Logitech G435 Wireless Headset",brand:"Logitech",category:"Gaming",type:"Headsets",badge:"FEATHERWEIGHT",description:"A light wireless and Bluetooth gaming headset for all-day comfort.",image:"assets/shop-lg-g435.webp",affiliateUrl:"https://www.logitechg.com/en-in/products/gaming-audio/g435-wireless-bluetooth-gaming-headset.html",featured:false},
 {id:"n19",name:"Secretlab TITAN Evo Gaming Chair",brand:"Secretlab",category:"Gaming",type:"Chairs & Desks",badge:"ERGO THRONE",description:"An ergonomic gaming chair with built-in lumbar support and 4D armrests.",image:"assets/shop-sl-titan.webp",affiliateUrl:"https://secretlab.co/products/titan-evo-24-r-sw-0107",featured:true},
 {id:"n20",name:"Secretlab MAGPAD Desk Mat",brand:"Secretlab",category:"Gaming",type:"Desk Setup",badge:"CLEAN DESK",description:"A magnetic desk mat that keeps a large setup tidy.",image:"assets/shop-sl-magpad.webp",affiliateUrl:"https://secretlab.co/products/magpad-desk-mat-15",featured:false},
 {id:"n21",name:"Secretlab ErgoArch Monitor Light Bar",brand:"Secretlab",category:"Technology",type:"Desk Lighting",badge:"GLARE FREE",description:"A monitor light bar add-on that lights the desk without screen glare.",image:"assets/shop-sl-lightbar.webp",affiliateUrl:"https://secretlab.co/products/ergoarch-monitor-light-bar",featured:false},
 {id:"n22",name:"IMPACTSPHERE GS818 Speakers",brand:"Redragon",category:"Technology",type:"Audio",badge:"DESK AUDIO",description:"Wood-finish desktop speakers for gaming and music.",image:"assets/shop-rd-gs818.webp",affiliateUrl:"https://redragonshop.com/products/impactsphere-gs818",featured:false},
 {id:"n23",name:"Logitech MX Master 3S",brand:"Logitech",category:"Technology",type:"Productivity",badge:"WORK FLOW",description:"A quiet performance mouse with an 8K sensor and MagSpeed scrolling.",image:"assets/shop-lg-mx3s.webp",affiliateUrl:"https://www.logitech.com/en-in/products/mice/mx-master-3s.html",featured:true},
 {id:"n24",name:"Logitech MX Keys S",brand:"Logitech",category:"Technology",type:"Productivity",badge:"TYPE SMARTER",description:"A low-profile wireless keyboard with smart backlighting.",image:"assets/shop-lg-mxkeys.webp",affiliateUrl:"https://www.logitech.com/en-in/products/keyboards/mx-keys-s.html",featured:false},
 {id:"n25",name:"Logitech Brio 500 Webcam",brand:"Logitech",category:"Technology",type:"Webcams",badge:"CALL READY",description:"A 1080p HDR webcam with Show Mode for desk demos.",image:"assets/shop-lg-brio.webp",affiliateUrl:"https://www.logitech.com/en-in/products/webcams/brio-500-webcam.html",featured:false},
 {id:"n26",name:"Obsidian 15.6\" Portable Monitor",brand:"Kreo",category:"Technology",type:"Monitors",badge:"SECOND SCREEN",description:"A slim, lightweight FHD portable monitor for travel and dual-screen setups.",image:"assets/shop-kreo-obsidian.webp",affiliateUrl:"https://kreo-tech.com/products/obsidian-15-6-fhd-slim-lightweight-portable-monitor-1",featured:true},
 {id:"n27",name:"Axis Ergonomic Wireless Mouse",brand:"Kreo",category:"Technology",type:"Productivity",badge:"ERGO PICK",description:"An ergonomic wireless mouse with dual scroll wheels.",image:"assets/shop-kreo-axis.webp",affiliateUrl:"https://kreo-tech.com/products/axis-ergonomic-dual-scroll-rgb-mouse",featured:false},
 {id:"n28",name:"Glace Laptop Cooler",brand:"Kreo",category:"Gadgets",type:"Laptop Coolers",badge:"STAY COOL",description:"A laptop cooling pad with RGB fans for long gaming sessions.",image:"assets/shop-kreo-glace.webp",affiliateUrl:"https://kreo-tech.com/products/glace-laptop-cooler",featured:true},
 {id:"n29",name:"Owl Lite FHD Webcam",brand:"Kreo",category:"Gadgets",type:"Creator Gear",badge:"STREAM READY",description:"A compact full-HD webcam for streams, classes and calls.",image:"assets/shop-kreo-owl.webp",affiliateUrl:"https://kreo-tech.com/products/owl-lite-white-fhd-webcam",featured:false},
 {id:"n30",name:"Slab Key Light",brand:"Kreo",category:"Gadgets",type:"Creator Gear",badge:"GLOW UP",description:"A desk key light for brighter, cleaner streams and video calls.",image:"assets/shop-kreo-slab.webp",affiliateUrl:"https://kreo-tech.com/products/slab-key-light-white",featured:false},
 {id:"n31",name:"Elementor Website Builder",brand:"Elementor",category:"Software",type:"Website Builders",badge:"BUILD FAST",description:"A drag-and-drop builder for creating and managing WordPress sites.",image:"assets/shop-elementor-hero.webp",affiliateUrl:"https://elementor.com/",featured:true},
 {id:"n32",name:"Elementor AI Site Planner",brand:"Elementor",category:"Software",type:"Website Builders",badge:"AI POWERED",description:"AI tools that help plan, design and launch a site faster.",image:"assets/shop-elementor-start.webp",affiliateUrl:"https://elementor.com/",featured:false},
 {id:"n33",name:"Hostinger Web Hosting",brand:"Hostinger",category:"Software",type:"Hosting",badge:"GO LIVE",description:"Web hosting plans with a free domain option and easy site setup.",image:"assets/shop-host-og.webp",affiliateUrl:"https://www.hostinger.com/in/web-hosting",featured:true},
 {id:"n34",name:"Bitdefender Total Security",brand:"Bitdefender",category:"Software",type:"Security",badge:"STAY SAFE",description:"Multi-device protection against malware, ransomware and scams.",image:"assets/shop-bd-home.webp",affiliateUrl:"https://www.bitdefender.com/en-in/consumer/total-security",featured:true},
 {id:"n35",name:"Canva Pro",brand:"Canva",category:"Software",type:"Design",badge:"DESIGN ANYTHING",description:"Premium templates, brand kits and AI design tools for creators.",image:"assets/design-apps.webp",affiliateUrl:"https://www.canva.com/pro/",featured:false},
 {id:"n36",name:"Adobe Creative Cloud",brand:"Adobe",category:"Software",type:"Design",badge:"CREATOR SUITE",description:"Photoshop, Premiere Pro, Illustrator and more in one plan.",image:"assets/creator-gear.webp",affiliateUrl:"https://www.adobe.com/in/creativecloud.html",featured:false},
 {id:"n37",name:"PUMA Fade LS Y2K Sneakers",brand:"PUMA",category:"Lifestyle",type:"Sneakers",badge:"Y2K DROP",description:"Chunky, retro-runner sneakers with a Y2K-inspired silhouette.",image:"assets/shop-puma-fadey2k.webp",affiliateUrl:"https://in.puma.com/in/en/pd/fade-ls-y2k-sneakers/407000?swatch=02",featured:true},
 {id:"n38",name:"PUMA Fade Sneakers",brand:"PUMA",category:"Lifestyle",type:"Sneakers",badge:"STREET READY",description:"Everyday sneakers with a layered, sporty upper.",image:"assets/shop-puma-fade.webp",affiliateUrl:"https://in.puma.com/in/en/pd/puma-fade-sneakers/406203?swatch=04",featured:false},
 {id:"n39",name:"Originals & Streetwear",brand:"Adidas",category:"Lifestyle",type:"Apparel",badge:"ICONIC STYLE",description:"Shop classic three-stripe sneakers, track tops and streetwear.",image:"assets/streetwear.webp",affiliateUrl:"https://www.adidas.co.in/",featured:false},
 {id:"n40",name:"Luxury Sneakers & Designer Fashion",brand:"FARFETCH",category:"Lifestyle",type:"Luxury",badge:"LUXE EDIT",description:"Discover designer sneakers, bags and fashion from global boutiques.",image:"assets/fashion.webp",affiliateUrl:"https://www.farfetch.com/in/",featured:false},
 {id:"n41",name:"Gaming Laptops & Monitors",brand:"Acer",category:"Technology",type:"Laptops",badge:"ACER STORE",description:"Browse Predator and Nitro gaming laptops and monitors at Acer India.",image:"assets/laptop.webp",affiliateUrl:"https://store.acer.com/en-in/",featured:false},
 {id:"n42",name:"Hot PC Game Deals",brand:"Green Man Gaming",category:"Deals",type:"Game Offers",badge:"HOT DEALS",description:"Check current discounts on PC games, pre-orders and bundles.",image:"assets/pc-games.webp",affiliateUrl:"https://www.greenmangaming.com/",featured:false},
 {id:"a15",name:"PlayStation 5 Consoles",brand:"PlayStation Direct",category:"Gaming",type:"Consoles",badge:"CONSOLE PICK",description:"Browse PS5 systems and bundles for your living-room setup.",image:"assets/console.webp",affiliateUrl:"https://direct.playstation.com/en-us/hardware/ps5",featured:true},
 {id:"a4",name:"Gaming Laptop Collection",brand:"Acer",retailer:"Acer Store",category:"Gaming",type:"Gaming Laptops",badge:"PC GAMING",description:"Browse portable gaming rigs at the official Acer India store.",image:"assets/laptop.webp",affiliateUrl:"https://store.acer.com/en-in/",featured:true},
 {id:"a1",name:"RGB Mechanical Gaming Keyboards",brand:"Redragon",category:"Gaming",type:"Accessories",badge:"RGB PICK",description:"Find a mechanical keyboard with customizable lighting for your desk.",image:"assets/keyboard.webp",affiliateUrl:"https://redragonshop.com/",featured:true},
 {id:"a5",name:"Wireless Headphones & Audio",brand:"Logitech",category:"Technology",type:"Electronics",badge:"TECH FIND",description:"Explore computer audio, headsets and everyday peripherals.",image:"assets/headphones.webp",affiliateUrl:"https://www.logitech.com/en-in",featured:true},
 {id:"a16",name:"Magnetic Power Banks",brand:"Anker",category:"Gadgets",type:"Charging",badge:"ON THE GO",description:"Compare compact portable chargers for compatible phones and accessories.",image:"assets/power.webp",affiliateUrl:"https://www.anker.com/collections/power-banks",featured:true},
 {id:"a17",name:"iPhone Collection",brand:"Apple Store",category:"Technology",type:"Smartphones",badge:"PHONE EDIT",description:"Compare iPhone models, colour options, and storage at Apple.",image:"assets/phones.webp",affiliateUrl:"https://www.apple.com/iphone/",featured:true},
 {id:"a18",name:"MacBook Air",brand:"Apple Store",category:"Technology",type:"Laptops",badge:"WORK ANYWHERE",description:"Explore Apple’s lightweight laptop lineup and available configurations.",image:"assets/notebook.webp",affiliateUrl:"https://www.apple.com/macbook-air/",featured:false},
 {id:"a19",name:"RGB Lights for Gaming Setups",brand:"Govee",category:"Gaming",type:"Accessories",badge:"NEON SETUP",description:"Explore light bars and ambient accents for a neon desk setup.",image:"assets/gaming-setup.webp",affiliateUrl:"https://us.govee.com/collections/gaming-lights",featured:false},
 {id:"a20",name:"Portable Bluetooth Speakers",brand:"JBL",category:"Lifestyle",type:"Everyday Gear",badge:"EVERYDAY PICK",description:"Find compact speakers for desk listening and time outdoors.",image:"assets/speaker.webp",affiliateUrl:"https://www.jbl.com/bluetooth-speakers/",featured:true},
 {id:"a21",name:"Gaming & Electronics Deals",brand:"Best Buy",category:"Deals",type:"Tech Offers",badge:"RETAILER OFFERS",description:"Check Best Buy’s current deals on gaming, PC accessories and electronics.",image:"assets/laptop.webp",affiliateUrl:"https://www.bestbuy.com/site/electronics/top-deals/pcmcat1563302969402.c",featured:true},
 {id:"a22",name:"Sneaker & Sportswear Sale",brand:"Nike",category:"Deals",type:"Lifestyle Offers",badge:"RETAILER OFFERS",description:"Browse discounted footwear and activewear on Nike’s US sale page.",image:"assets/sneakers.webp",affiliateUrl:"https://www.nike.com/w/sale-3yaep",featured:true},
 {id:"a2",name:"Precision Gaming Mouse",brand:"Razer",category:"Gaming",price:null,oldPrice:null,discount:0,badge:"GAMER PICK",description:"Explore performance-focused mice and accessories from a dedicated gaming brand.",image:"assets/mouse.webp",affiliateUrl:"https://www.razer.com/ap-en/store",featured:true},
 {id:"a3",name:"Gaming Chair & Desk Setup",brand:"Secretlab",category:"Gaming",price:null,oldPrice:null,discount:0,badge:"LEVEL UP",description:"Discover ergonomic gaming chairs and desk accessories for your battle station.",image:"assets/gaming-chair.webp",affiliateUrl:"https://secretlab.co/",featured:true},
 {id:"a6",name:"Streaming & Creator Gadgets",brand:"Kreo",category:"Gadgets",type:"Creator Gear",price:null,oldPrice:null,discount:0,badge:"CREATOR GEAR",description:"Discover creator-focused tech, streaming accessories and useful gadgets.",image:"assets/creator-gear.webp",affiliateUrl:"https://kreo-tech.com/",featured:false},
 {id:"a7",name:"Web Hosting & Domain Tools",brand:"Hostinger",category:"Software",price:null,oldPrice:null,discount:0,badge:"BUILD ONLINE",description:"Explore hosting plans and tools for launching websites and online projects.",image:"assets/web-tools.webp",affiliateUrl:"https://www.hostinger.com/",featured:true},
 {id:"a8",name:"Security & Antivirus Software",brand:"Bitdefender",category:"Software",price:null,oldPrice:null,discount:0,badge:"DIGITAL SAFETY",description:"Compare digital security tools and protection options from Bitdefender.",image:"assets/cybersecurity.webp",affiliateUrl:"https://www.bitdefender.com/en-in/",featured:false},
 {id:"a9",name:"Creative Design & Editing Tools",brand:"Adobe",category:"Software",price:null,oldPrice:null,discount:0,badge:"CREATE MORE",description:"Discover creative apps for photography, video, design and documents.",image:"assets/design-apps.webp",affiliateUrl:"https://www.adobe.com/in/",featured:false},
 {id:"a10",name:"Sneakers & Sportswear",brand:"Nike",category:"Lifestyle",price:null,oldPrice:null,discount:0,badge:"STYLE DROP",description:"Explore footwear, apparel and sportswear collections from Nike.",image:"assets/sneakers.webp",affiliateUrl:"https://www.nike.in/",featured:true},
 {id:"a11",name:"Streetwear & Everyday Style",brand:"Adidas",category:"Lifestyle",price:null,oldPrice:null,discount:0,badge:"DAILY DRIP",description:"Browse sport-inspired apparel, footwear and accessories.",image:"assets/streetwear.webp",affiliateUrl:"https://www.adidas.co.in/",featured:false},
 {id:"a12",name:"Fashion & Lifestyle Finds",brand:"Tata CLiQ",category:"Lifestyle",price:null,oldPrice:null,discount:0,badge:"STYLE RADAR",description:"Discover fashion, accessories and lifestyle collections for India.",image:"assets/fashion.webp",affiliateUrl:"https://www.tatacliq.com/",featured:false},
 {id:"a13",name:"Digital Game Deals",brand:"Green Man Gaming",category:"Deals",price:null,oldPrice:null,discount:0,badge:"DEAL RADAR",description:"Check current PC game offers and availability at the retailer.",image:"assets/pc-games.webp",affiliateUrl:"https://www.greenmangaming.com/",featured:true},
 {id:"a14",name:"Digital Games & Game Keys",brand:"Kinguin",category:"Deals",price:null,oldPrice:null,discount:0,badge:"DIGITAL FINDS",description:"Explore digital game listings. Review seller, region and activation details before purchase.",image:"assets/game-keys.webp",affiliateUrl:"https://www.kinguin.net/",featured:false}
];
const pages = {
  gaming: {title:"Gaming", highlight:"Gear", category:"Gaming", eyebrow:"01 / THE GAMING EDIT", icon:"game", image:"assets/gaming-setup.webp", description:"Shop keyboards, mice, headsets, controllers, chairs and consoles from Razer, Kreo, Redragon, Logitech, Secretlab and more."},
  technology: {title:"Technology", category:"Technology", eyebrow:"02 / THE TECH EDIT", icon:"screen", image:"assets/phones.webp", description:"Find laptops, smartphones, audio, and electronics across official stores and retailers."},
  gadgets: {title:"Smart", highlight:"Gadgets", label:"Gadgets", category:"Gadgets", eyebrow:"03 / THE GADGET EDIT", icon:"box", image:"assets/power.webp", description:"Find useful upgrades, from portable chargers to handy creator gear."},
  lifestyle: {title:"Lifestyle", highlight:"Finds", label:"Lifestyle", category:"Lifestyle", eyebrow:"04 / THE EVERYDAY EDIT", icon:"spark", image:"assets/speaker.webp", description:"Discover everyday essentials, sneakers, and gear you’ll actually use."},
  software: {title:"Software", highlight:"& Tools", label:"Software", category:"Software", eyebrow:"05 / THE CREATOR STACK", icon:"laptop", image:"assets/shop-elementor-hero.webp", description:"Build, design and protect with hosting, website builders, creative apps and security tools."},
  deals: {title:"Best", highlight:"Deals", label:"Best Deals", category:"Deals", eyebrow:"06 / THE DEAL RADAR", icon:"bolt", image:"assets/laptop.webp", description:"Find retailer sales and special offers. Confirm prices and availability before you buy."},
  discover: {title:"Discover", highlight:"More", label:"Discover", eyebrow:"07 / THE FULL CATALOG", icon:"compass", description:"Browse finds from multiple shopping platforms and independent brand stores in one place."}
};
const defaultTypes = {a2:"Accessories",a3:"Accessories",a10:"Sneakers",a11:"Apparel",a12:"Apparel",a13:"Game Offers",a14:"Game Offers"};
const fallbackImage = "assets/product-fallback.svg";
function normalizeProducts(list) {
  return list.filter(product => product && typeof product.id === "string" && typeof product.name === "string").map(product => {
    const starter = starterProducts.find(item => item.id === product.id);
    return {
      ...product,
      category: product.category === "Tech" ? (starter?.category || "Technology") : product.category,
      type: product.type ?? (starter?.category === product.category || product.category === "Tech" ? starter?.type : "") ?? defaultTypes[product.id] ?? "",
      retailer: product.retailer ?? starter?.retailer ?? ""
    };
  });
}
function loadProducts() {
  try {
    const current = localStorage.getItem(STORAGE_KEY);
    const legacy = current ? null : LEGACY_KEYS.map(key => localStorage.getItem(key)).find(Boolean);
    let list = JSON.parse(current ?? legacy ?? "null");
    if (!Array.isArray(list)) return normalizeProducts(starterProducts);
    if (legacy) {
      // Bring newly added catalog items into catalogs saved before the rebrand.
      const savedIds = new Set(list.map(product => product?.id));
      list = [...starterProducts.filter(product => product.id.startsWith("n") && !savedIds.has(product.id)), ...list];
    }
    return normalizeProducts(list);
  } catch {
    return normalizeProducts(starterProducts);
  }
}
let products = loadProducts();
let editingId = null;
let currentPage = "home";
let homeFilter = "All";
let catalogFilter = "All";
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const escapeHtml=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const icon = name => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const labelFor = category => category === "Deals" ? "Best Deals" : category;
const retailerFor = product => product.retailer || product.brand || "";
const currencyFor = product => product.currency || "INR";
const isDeal = product => product.category === "Deals" || Number(product.discount) > 0;
function money(value, currency = "INR") {
  if (value == null || value === "" || !Number.isFinite(Number(value)) || Number(value) < 0) return "Check retailer";
  try {
    return new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", { style:"currency", currency, maximumFractionDigits:2 }).format(Number(value));
  } catch {
    return "Check retailer";
  }
}
function webUrl(value) {
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}
function imageUrl(value) {
  return /^assets\/[a-z0-9-]+\.(webp|svg)$/i.test(value) ? value : webUrl(value) || fallbackImage;
}
const productImage = (product, lazy = true) => `<img ${lazy ? 'loading="lazy" ' : ""}src="${escapeHtml(imageUrl(product.image))}" alt="" width="640" height="420">`;
function saveProducts(){localStorage.setItem(STORAGE_KEY,JSON.stringify(products));renderProducts();renderAdminOverview()}
function renderBrands() {
  $("#brandDirectory").innerHTML = brands.map(brand => `<a class="brand-tile" href="${escapeHtml(brand.url)}" target="_blank" rel="noopener noreferrer"><span class="brand-tile-name">${escapeHtml(brand.name)}</span><span class="brand-tile-tag">${escapeHtml(brand.tag)}</span><span class="brand-tile-region">${escapeHtml(brand.region)}</span>${icon("external")}</a>`).join("");
}
function renderDepartments() {
  $("#departmentGrid").innerHTML = Object.entries(pages).map(([key, page]) => `<a class="department-card" href="#${key}">${icon(page.icon)}<h3>${page.label || page.title}</h3><p>${page.description}</p><span class="department-arrow">${icon("external")}</span></a>`).join("");
}
function renderChips(host, filters, active, clickHandler) {
  host.innerHTML = filters.map(value => `<button class="chip" type="button" data-value="${escapeHtml(value)}" aria-pressed="${value === active}">${escapeHtml(value === "All" ? "All picks" : labelFor(value))}</button>`).join("");
  host.onclick = event => {
    const target = event.target.closest("button[data-value]");
    if (!target) return;
    host.querySelectorAll("button").forEach(button => button.setAttribute("aria-pressed", String(button === target)));
    clickHandler(target.dataset.value);
  };
}
function retailerLink(product, label, className) {
  const url = webUrl(product.affiliateUrl);
  return url ? `<a class="${className}" href="${escapeHtml(url)}" target="_blank" rel="sponsored nofollow noopener" aria-label="${label}: ${escapeHtml(retailerFor(product) || product.name)} (opens in a new tab)">${label} ${icon("external")}</a>` : "";
}
function productPrice(product) {
  const price = money(product.price, currencyFor(product));
  const oldPrice = Number(product.oldPrice) > Number(product.price) && price !== "Check retailer" ? money(product.oldPrice, currencyFor(product)) : "";
  return `<span class="price ${price === "Check retailer" ? "price-check" : ""}">${escapeHtml(price)}</span>${oldPrice && oldPrice !== "Check retailer" ? `<span class="old-price">${escapeHtml(oldPrice)}</span>` : ""}`;
}
function productCard(product) {
  const badge = product.discount > 0 && product.discount <= 100 ? `${Number(product.discount)}% off` : product.badge || "Loot Select";
  const id = escapeHtml(product.id);
  const name = escapeHtml(product.name);
  return `<article class="product-card"><button type="button" class="product-image" data-view="${id}" aria-label="${escapeHtml(badge)}: View ${name}">${productImage(product)}<span class="product-badge ${isDeal(product) ? "badge-deal" : product.featured ? "badge-featured" : ""}">${escapeHtml(badge)}</span></button><div class="product-info"><div class="product-brand">${escapeHtml(retailerFor(product) || labelFor(product.category))}</div><h3 class="product-name">${name}</h3><p class="product-desc">${escapeHtml(product.description)}</p><div class="price-row">${productPrice(product)}</div><div class="product-bottom"><button class="view-product" type="button" data-view="${id}" aria-label="Details for ${name}">DETAILS ${icon("arrow")}</button>${retailerLink(product, "VISIT STORE", "buy-link")}</div></div></article>`;
}
const byFeatured = (first, second) => Number(Boolean(second.featured)) - Number(Boolean(first.featured));
function mixCategories(list) {
  const groups = [...list.reduce((map, product) => map.set(product.category, [...(map.get(product.category) || []), product]), new Map()).values()];
  const mixed = [];
  for (let index = 0; mixed.length < list.length; index++) groups.forEach(group => group[index] && mixed.push(group[index]));
  return mixed;
}
function renderHomePicks() {
  const pool = products.filter(product => homeFilter === "All" ? !isDeal(product) : product.category === homeFilter).sort(byFeatured);
  const picks = homeFilter === "All" ? mixCategories(pool).slice(0, 8) : pool.slice(0, 8);
  $("#productGrid").innerHTML = picks.map(productCard).join("");
  $("#homeEmpty").hidden = picks.length > 0;
}
function renderFeaturedDeals() {
  const picks = products.filter(isDeal).sort(byFeatured).slice(0, 3);
  $("#featuredDeals").innerHTML = picks.map(product => `<button class="deal-row" type="button" data-view="${escapeHtml(product.id)}">${productImage(product)}<span><strong>${escapeHtml(product.name)}</strong><small>${escapeHtml(retailerFor(product))}</small></span>${icon("arrow")}</button>`).join("") || '<p class="brand-note">No offers listed in this catalog yet.</p>';
}
function collectionProducts() {
  if (currentPage === "deals") return products.filter(isDeal);
  const category = pages[currentPage]?.category;
  return category ? products.filter(product => product.category === category) : products;
}
function catalogOptions(list) {
  const valueFor = currentPage === "discover" ? product => product.category : product => product.type;
  return ["All", ...new Set(list.map(valueFor).filter(Boolean))];
}
function renderCatalog() {
  const retailer = $("#retailerSelect").value;
  const term = $("#searchInput").value.trim().toLowerCase();
  const sort = $("#sortSelect").value;
  const list = collectionProducts().filter(product => {
    const filterValue = currentPage === "discover" ? product.category : product.type;
    const haystack = [product.name, product.description, product.category, product.type, product.brand, retailerFor(product)].join(" ").toLowerCase();
    return (catalogFilter === "All" || filterValue === catalogFilter) && (!retailer || retailerFor(product) === retailer) && term.split(/\s+/).every(word => haystack.includes(word));
  });
  const sortFunctions = {
    featured:byFeatured,
    name:(first, second) => first.name.localeCompare(second.name),
    discount:(first, second) => (Number(second.discount) || 0) - (Number(first.discount) || 0),
    "price-low":(first, second) => {
      if (first.price == null) return second.price == null ? 0 : 1;
      if (second.price == null) return -1;
      return currencyFor(first).localeCompare(currencyFor(second)) || Number(first.price) - Number(second.price);
    }
  };
  list.sort(sortFunctions[sort] || byFeatured);
  $("#allProductGrid").innerHTML = list.map(productCard).join("");
  $("#resultsCount").textContent = `${list.length} ${list.length === 1 ? "find" : "finds"}`;
  $("#emptyState").hidden = list.length > 0;
}
function updateCatalogControls() {
  const list = collectionProducts();
  const filters = catalogOptions(list);
  const select = $("#retailerSelect");
  const selectedRetailer = select.value;
  const retailers = [...new Set(list.map(retailerFor).filter(Boolean))].sort((first, second) => first.localeCompare(second));
  select.innerHTML = '<option value="">All stores</option>' + retailers.map(name => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join("");
  select.value = retailers.includes(selectedRetailer) ? selectedRetailer : "";
  $("#retailerControl").hidden = retailers.length < 2;
  if (!filters.includes(catalogFilter)) catalogFilter = "All";
  renderChips($("#catalogFilters"), filters, catalogFilter, value => { catalogFilter = value; renderCatalog(); });
}
function renderProducts() {
  renderHomePicks();
  renderFeaturedDeals();
  if (currentPage !== "home") {
    updateCatalogControls();
    renderCatalog();
  }
}
function openProduct(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  $("#modalContent").innerHTML = `<figure class="modal-image">${productImage(product, false)}<figcaption>${String(product.image).startsWith("assets/shop-") ? `Image: ${escapeHtml(retailerFor(product))}` : "Illustrative product photo"}</figcaption></figure><div class="modal-copy"><div class="eyebrow">${escapeHtml(labelFor(product.category))} / ${escapeHtml(retailerFor(product))}</div><h2 id="modalTitle">${escapeHtml(product.name)}</h2><p>${escapeHtml(product.description)}</p><div class="price-row">${productPrice(product)}</div><p class="disclosure">Prices, stock, and delivery can vary by region. Confirm details on the retailer’s site. LOOTVERSE may earn a commission from qualifying purchases.</p>${retailerLink(product, "VISIT RETAILER", "btn btn-primary")}</div>`;
  $("#productModal").showModal();
}
/* Local-only admin: edits are stored in this browser. Use a secure hosted database/auth system for shared live publishing. */
function showAdmin(tab="overview"){$("#adminPanel").classList.remove("hidden");document.body.style.overflow="hidden";$$(".admin-tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));if(tab==="overview"){$("#adminTitle").textContent="OVERVIEW";renderAdminOverview()}if(tab==="products"){$("#adminTitle").textContent="PRODUCTS";renderAdminProducts()}if(tab==="add"){$("#adminTitle").textContent=editingId?"EDIT PRODUCT":"ADD PRODUCT";renderProductForm(editingId)}}
function hideAdmin(){$("#adminPanel").classList.add("hidden");document.body.style.overflow="";renderProducts()}
function renderAdminOverview(){$("#adminView").innerHTML=`<div class="notice"><strong>LOCAL DASHBOARD:</strong> Product changes are saved in this browser only, not automatically published to all visitors. Use approved affiliate tracking URLs in the product editor. Export your catalog regularly.</div><div class="stats-grid"><div class="stat-card"><small>TOTAL PRODUCTS</small><strong>${products.length}</strong></div><div class="stat-card"><small>PRODUCT CATEGORIES</small><strong>${new Set(products.map(p=>p.category)).size}</strong></div><div class="stat-card"><small>BRAND PARTNERS FEATURED</small><strong>${brands.length}</strong></div></div><div class="admin-card"><h3>QUICK ACTIONS</h3><div class="form-actions"><button class="btn btn-primary" id="overviewAdd">＋ ADD PRODUCT</button><button class="small-btn" id="exportProducts">↓ EXPORT PRODUCTS JSON</button><label class="small-btn" for="importFile">↑ IMPORT PRODUCTS JSON</label><input id="importFile" type="file" accept=".json,application/json" class="hidden"></div></div><div class="admin-card"><h3>RECENT PRODUCTS</h3>${products.slice(0,6).map(p=>`<p class="admin-product-name">${escapeHtml(p.name)} <span style="color:#8191a8;font-weight:400">· ${escapeHtml(p.category)} · ${escapeHtml(p.brand||"Unassigned")}</span></p>`).join("")||"No products yet."}</div>`;$("#overviewAdd").onclick=()=>showAdmin("add");$("#exportProducts").onclick=exportProducts;$("#importFile").onchange=importProducts}
function renderAdminProducts(){$("#adminView").innerHTML=`<div class="notice">Manage your product catalog. Add your approved affiliate tracking URL, accurate current product image, and verified price/currency. Never present sample prices as live offers.</div><div class="admin-card"><h3>PRODUCT CATALOG (${products.length})</h3><table class="admin-table"><thead><tr><th>IMAGE</th><th>PRODUCT</th><th>CATEGORY</th><th>BRAND</th><th>PRICE</th><th>ACTIONS</th></tr></thead><tbody>${products.map(p=>`<tr><td><img class="admin-thumb" src="${escapeHtml(p.image)}" alt=""></td><td>${escapeHtml(p.name)}</td><td>${escapeHtml(p.category)}</td><td>${escapeHtml(p.brand||"—")}</td><td>${money(p.price,p.currency||"INR")}</td><td><div class="table-actions"><button class="small-btn" data-edit="${escapeHtml(p.id)}">EDIT</button><button class="small-btn danger" data-delete="${escapeHtml(p.id)}">DELETE</button></div></td></tr>`).join("")}</tbody></table></div>`;$$("[data-edit]").forEach(b=>b.onclick=()=>{editingId=b.dataset.edit;showAdmin("add")});$$("[data-delete]").forEach(b=>b.onclick=()=>{if(confirm("Delete this product?")){products=products.filter(p=>p.id!==b.dataset.delete);saveProducts();renderAdminProducts()}})}
function renderProductForm(id) {
  const product = products.find(item => item.id === id) || { category:"Gaming", currency:"INR" };
  const fields = [
    ["name", "Product name", "text", "required", true],
    ["brand", "Brand", "text"],
    ["retailer", "Retailer (optional)", "text"],
    ["type", "Subcategory (e.g. Consoles)", "text"],
    ["badge", "Badge text", "text"],
    ["price", "Verified price", "number", 'min="0" step=".01"'],
    ["oldPrice", "Verified former price", "number", 'min="0" step=".01"'],
    ["discount", "Verified discount (%)", "number", 'min="0" max="100"'],
    ["image", "Image URL or bundled asset path", "text", "required", true],
    ["affiliateUrl", "Retailer or approved affiliate URL", "url", 'required pattern="https?://.+"', true]
  ];
  $("#adminView").innerHTML = `<div class="notice">Leave price and discount blank when unverified. Updates are local to this browser.</div><form id="productForm" class="admin-card"><div class="form-grid">
    <label class="field">Category<select name="category">${categories.map(category => `<option value="${category}"${product.category === category ? " selected" : ""}>${labelFor(category)}</option>`).join("")}</select></label>
    <label class="field">Currency<select name="currency"><option value="INR">INR — Indian Rupee</option><option value="USD"${product.currency === "USD" ? " selected" : ""}>USD — US Dollar</option></select></label>
    ${fields.map(([name, label, type, attributes, full]) => `<label class="field${full ? " full" : ""}">${label}<input name="${name}" type="${type}" value="${escapeHtml(product[name])}" ${attributes || ""}></label>`).join("")}
    <label class="field full">Short description<textarea name="description">${escapeHtml(product.description)}</textarea></label>
    <label class="feature-field"><input name="featured" type="checkbox"${product.featured ? " checked" : ""}> Feature this product</label></div>
    <div class="form-actions"><button class="btn btn-primary" type="submit">SAVE PRODUCT</button><button class="small-btn" type="button" id="cancelForm">Cancel</button></div></form>`;
  $("#cancelForm").onclick = () => { editingId = null; showAdmin("products"); };
  $("#productForm").onsubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    const text = key => data.get(key).trim();
    const number = key => text(key) === "" ? null : Number(text(key));
    const next = { id:id || `p${Date.now()}`, name:text("name"), brand:text("brand"), retailer:text("retailer"), category:text("category"), type:text("type"), badge:text("badge"), price:number("price"), oldPrice:number("oldPrice"), currency:text("currency"), image:text("image"), affiliateUrl:text("affiliateUrl"), description:text("description"), discount:number("discount"), featured:data.has("featured") };
    products = id ? products.map(item => item.id === id ? next : item) : [next, ...products];
    saveProducts();
    editingId = null;
    showAdmin("products");
  };
}
function exportProducts(){const blob=new Blob([JSON.stringify(products,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="lootverse-products.json";a.click();URL.revokeObjectURL(url)}
function importProducts(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const list = JSON.parse(reader.result);
      if (!Array.isArray(list)) throw Error();
      const normalized = normalizeProducts(list);
      if (normalized.length !== list.length) throw Error();
      products = normalized;
      saveProducts();
      alert("Product catalog imported.");
    } catch {
      alert("Invalid product JSON file.");
    }
  };
  reader.readAsText(file);
}

function renderCollection(page, options) {
  $("#breadcrumbCurrent").textContent = page.label || page.title;
  $("#collectionEyebrow").innerHTML = `${icon(page.icon)} ${page.eyebrow}`;
  $("#collectionTitle").innerHTML = page.highlight ? `${page.title} <em>${page.highlight}</em>` : `<em>${page.title}</em>`;
  $("#collectionDescription").textContent = page.description;
  $("#catalogEyebrow").textContent = currentPage === "deals" ? "RETAILER SALES & DISCOUNTS" : "BROWSE THE COLLECTION";
  $("#catalogTitle").innerHTML = currentPage === "deals" ? "Explore <em>Offers</em>" : "Shop the <em>Catalog</em>";
  const image = $("#collectionImage");
  image.hidden = !page.image;
  if (page.image) image.src = page.image;
  else image.removeAttribute("src");
  $("#searchInput").value = options.get("q") || "";
  $("#sortSelect").value = "featured";
  $("#retailerSelect").value = "";
  catalogFilter = options.get("type") || "All";
  $("#brands").hidden = currentPage !== "discover";
  updateCatalogControls();
  renderCatalog();
}
function setMenu(open) {
  $("#mainNav").classList.toggle("open", open);
  $("#menuToggle").setAttribute("aria-expanded", String(open));
}
function route(focusHeading = false) {
  const [hash, query] = location.hash.slice(1).split("?");
  if (hash === "admin") {
    showAdmin("overview");
    return;
  }
  if (!$("#adminPanel").classList.contains("hidden")) hideAdmin();
  const aliases = {tech:"technology", "best-deals":"deals", "all-products":"discover", brands:"discover"};
  const key = Object.hasOwn(aliases, hash) ? aliases[hash] : hash;
  const page = Object.hasOwn(pages, key) ? pages[key] : null;
  currentPage = page ? key : "home";
  $("#homePage").hidden = Boolean(page);
  $("#collectionPage").hidden = !page;
  $$("#mainNav a").forEach(link => {
    if (link.dataset.page === currentPage) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  setMenu(false);
  document.title = page ? `${page.label || page.title} | LOOTVERSE` : "LOOTVERSE — Level Up Your Loot | Gaming Gear, Tech & Drip";
  if (page) renderCollection(page, new URLSearchParams(query));
  const anchors = {brands:"brands", categories:"categories", trending:"trending", "featured-deals":"featured-deals", "all-products":"catalogTitle"};
  if (Object.hasOwn(anchors, hash)) document.getElementById(anchors[hash]).scrollIntoView();
  else if (focusHeading) {
    $(page ? "#collectionTitle" : "#main-content").focus({ preventScroll:true });
    window.scrollTo(0, 0);
  }
}

$("#searchInput").addEventListener("input", renderCatalog);
$("#sortSelect").addEventListener("change", renderCatalog);
$("#retailerSelect").addEventListener("change", renderCatalog);
$("#clearFilters").addEventListener("click", () => {
  $("#searchInput").value = "";
  $("#retailerSelect").value = "";
  catalogFilter = "All";
  updateCatalogControls();
  renderCatalog();
  $("#searchInput").focus();
});
$("#searchToggle").addEventListener("click", () => {
  setMenu(false);
  $("#overlaySearch").value = currentPage === "discover" ? $("#searchInput").value : "";
  $("#searchOverlay").showModal();
});
$("#searchForm").addEventListener("submit", event => {
  event.preventDefault();
  const term = $("#overlaySearch").value.trim();
  const target = term ? `#discover?${new URLSearchParams({q:term})}` : "#discover";
  $("#searchOverlay").close();
  if (location.hash === target) route(true);
  else location.hash = target;
});
[["#searchOverlay", "#closeSearch"], ["#productModal", "#modalClose"]].forEach(([dialogId, closeId]) => {
  const dialog = $(dialogId);
  $(closeId).addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
});
$("main").addEventListener("click", event => {
  const trigger = event.target.closest("button[data-view]");
  if (trigger) openProduct(trigger.dataset.view);
});
$("#main-content").addEventListener("error", event => {
  if (event.target.matches(".product-image img, .deal-row img") && event.target.getAttribute("src") !== fallbackImage) event.target.src = fallbackImage;
}, true);
$("#modalContent").addEventListener("error", event => {
  if (event.target.matches("img") && event.target.getAttribute("src") !== fallbackImage) event.target.src = fallbackImage;
}, true);
$("#menuToggle").addEventListener("click", event => setMenu(event.currentTarget.getAttribute("aria-expanded") !== "true"));
$("#mainNav").addEventListener("click", event => { if (event.target.closest("a")) setMenu(false); });
document.addEventListener("click", event => {
  const link = event.target.closest("a[href^='#']");
  if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.hash !== location.hash) return;
  event.preventDefault();
  route(true);
});
document.addEventListener("keydown", event => {
  if (event.key !== "Escape" || !$("#mainNav").classList.contains("open")) return;
  setMenu(false);
  $("#menuToggle").focus();
});
$(".skip-link").addEventListener("click", event => {
  event.preventDefault();
  $("#main-content").focus();
});
$$(".admin-tab").forEach(button => button.addEventListener("click", () => { editingId = null; showAdmin(button.dataset.tab); }));
$("#adminAddBtn").onclick = () => { editingId = null; showAdmin("add"); };
$("#backToSite").onclick = () => { location.hash = "home"; };
$("#year").textContent = new Date().getFullYear();
renderChips($("#homeFilters"), ["All", "Gaming", "Technology", "Gadgets", "Lifestyle", "Software"], homeFilter, value => { homeFilter = value; renderHomePicks(); });
renderDepartments();
renderBrands();
renderProducts();
route();
window.addEventListener("hashchange", () => route(true));
