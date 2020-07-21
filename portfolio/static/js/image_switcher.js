image = document.getElementById('profile-pic');

setInterval(() => {
    id = (id + 1) % 2;
    // jinja_tag = `{% static 'images/profiles/${starting_index}${id}.png' %}`;
    // jinja_tag = { static `images/profiles/${starting_index}${id}.png`};
    image.src = `/Users/michael/Desktop/djangoRepo/portfolio/static/images/profiles/${starting_index}${id}.png`
}, 5000);
