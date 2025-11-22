const sections = [
    "hero",
    "our-story",
    "gallery",
    "invitation",
    "venue",
    "rsvp"
];

sections.forEach(section => {
    fetch(`sections/${section}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById(section).innerHTML = html;
        });
});
