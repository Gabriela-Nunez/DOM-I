const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

//Header Nav Links

const headerNavs = document.querySelectorAll('nav a');
headerNavs.forEach((link, i) => link.textContent = Object.values(siteContent.nav)[i]);
headerNavs.forEach((link) => link.style.color = 'gray');
headerNavs.forEach((link) => link.classList.add("italic"));

//Logo Image

const logoImage = document.querySelector('#logo-img');
logoImage.setAttribute('src', siteContent.images["logo-img"]);

//cta-text and button

const ctaText = document.querySelector('h1');
ctaText.textContent = siteContent.cta["h1"];

const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta["button"];

//round code snippets image

const ctaImg = document.querySelector('.cta img');
ctaImg.setAttribute('src', siteContent.images["cta-img"]);

//top-content

const features = document.querySelector('.top-content h4');
features.textContent = siteContent["main-content"]["features-h4"];
const featuresText = document.querySelector('.top-content p');
featuresText.textContent = siteContent["main-content"]["features-content"];
const about = document.querySelector('.text-content:nth-of-type(2) h4');
about.textContent = siteContent["main-content"]["about-h4"];
const aboutText = about.nextElementSibling;
aboutText.textContent = siteContent["main-content"]["about-content"];

//code snippets across screen

const middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent.images["accent-img"]);

// bottom content 

const services = document.querySelector('.bottom-content h4');
services.textContent = siteContent["main-content"]["services-h4"];
const servicesText = services.nextElementSibling;
servicesText.textContent = siteContent["main-content"]["services-content"];
const product = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
product.textContent = siteContent["main-content"]["product-h4"];
const productText = product.nextElementSibling;
productText.textContent = siteContent["main-content"]["product-content"];
const vision = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
vision.textContent = siteContent["main-content"]["vision-h4"];
const visionText = vision.nextElementSibling;
visionText.textContent = siteContent["main-content"]["vision-content"];

//contact section

const contact = document.querySelector('.contact h4');
contact.textContent = siteContent.contact["contact-h4"];
const address = document.querySelector('.contact p');
address.textContent = siteContent.contact["address"];
const phoneNumber = address.nextElementSibling;
phoneNumber.textContent = siteContent.contact["phone"];
const email = phoneNumber.nextElementSibling;
email.textContent = siteContent.contact["email"];

//copyright

const copyright = document.querySelector('footer a');
copyright.textContent = siteContent.footer["copyright"];
copyright.classList.add("bold");

