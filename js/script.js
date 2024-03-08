// Get references to sidebar and content elements
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

// Function to toggle sidebar visibility
function toggleSidebarHide() {
    // Check if sidebar is currently visible
    const isVisible = getComputedStyle(sidebar).display !== 'none';
    
    // If sidebar is visible, hide it; otherwise, show it
    sidebar.style.display = isVisible ? 'none' : 'block';
    
    // Adjust content margin based on sidebar visibility
    content.style.marginLeft = isVisible ? '0' : '250px';
}

function toggleSidebarShow() {
    // Check if sidebar is currently visible
    const isVisible = getComputedStyle(sidebar).display === 'none';
    
    // If sidebar is visible, hide it; otherwise, show it
    sidebar.style.display = isVisible ? 'none' : 'block';
    
    // Adjust content margin based on sidebar visibility
    content.style.marginLeft = isVisible ? '0' : '250px';
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
