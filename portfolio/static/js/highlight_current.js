let home_page = document.getElementById('home');
let about_page = document.getElementById('about');
let projects_page = document.getElementById('projects');

// reset all highlights
home_page.innerHTML = "Home ";
about_page.innerHTML = "About ";
projects_page.innerHTML = "Projects ";

// set the current page (for now we only have three)
let adr = "";

// splits into this form => htpp(s):, '', (weblink), '/' or '', (tag1), (tag2), etc....
const split_addr = window.location.href.split('/');