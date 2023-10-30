async function getSession() {
    try {
        const response = await fetch('/view_session');
        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-list a');
    const content = document.getElementById('content');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const href = this.getAttribute('href');

            content.classList.add('exit');
            setTimeout(function() {
                fetch(href)
                    .then(response => response.text())
                    .then(data => {
                        content.innerHTML = data;
                        content.classList.add('enter');
                        content.classList.remove('exit');

                        history.pushState(null, null, href);
                    });
            }, 500);
        });
    });
});
