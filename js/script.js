document.addEventListener("DOMContentLoaded", function() {
    // Get the content div
    const contentDiv = document.querySelector('.content');

    // Function to load topic content
    function loadTopicContent(topicUrl) {
        fetch(topicUrl)
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;
            })
            .catch(error => {
                console.error('Error fetching topic content:', error);
            });
    }

    // Get all the topic links in the sidebar
    const topicLinks = document.querySelectorAll('.sidebar a');

    // Attach click event listeners to each topic link
    topicLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const topicUrl = this.getAttribute('href'); // Get the href attribute of the clicked link
            loadTopicContent(topicUrl); // Load topic content
        });
    });
});
