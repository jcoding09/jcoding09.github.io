// Get references to sidebar and content elements
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

function toggleSidebarHide() {
    // Hide the sidebar
    sidebar.style.display = 'none';
    
    // Adjust content margin to remove the space occupied by the sidebar
    content.style.marginLeft = '0';
}

function toggleSidebarShow() {
    // Show the sidebar
    sidebar.style.display = 'block';
    
    // Adjust content margin to accommodate the sidebar
    content.style.marginLeft = '250px';
}


// Event listener to toggle sidebar visibility when sidebar button is clicked
document.getElementById('sidebarHide').addEventListener('click', toggleSidebarHide);


document.getElementById('sidebarShow').addEventListener('click', toggleSidebarShow);

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
