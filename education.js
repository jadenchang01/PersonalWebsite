// PDF Modal Functions
function openPdfViewer() {
    const pdfModal = document.getElementById('pdfModal');
    const pdfFrame = document.getElementById('pdfFrame');
    
    // Path to your local PDF file inside the repository
    const pdfUrl = 'Images/Resume.pdf';
    
    // Set the iframe source directly
    pdfFrame.src = pdfUrl;
    
    // Show the modal
    pdfModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePdfViewer() {
    const pdfModal = document.getElementById('pdfModal');
    const pdfFrame = document.getElementById('pdfFrame');
    
    // Hide the modal
    pdfModal.classList.remove('active');
    
    // Allow scrolling on the body again
    document.body.style.overflow = '';
    
    // Clear the iframe source after a short delay (for transition)
    setTimeout(() => {
        pdfFrame.src = '';
    }, 300);
}

// Timeline Filter Functions
function filterTimeline(category) {
    const containers = document.querySelectorAll('.container[data-category]');
    const yearMarkers = document.querySelectorAll('.year-marker');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    console.log('Filtering by:', category);
    console.log('Total containers found:', containers.length);
    
    // Update active button
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        }
    });
    
    let visibleContainers = [];
    
    containers.forEach(container => {
        const containerCategory = container.getAttribute('data-category');
        console.log('Container category:', containerCategory, 'Target:', category);
        if (category === 'all') {
            container.classList.remove('hidden');
            container.style.display = 'block';
            visibleContainers.push(container);
        } else if (containerCategory === category) {
            container.classList.remove('hidden');
            container.style.display = 'block';
            visibleContainers.push(container);
        } else {
            // Hide non-matching containers
            container.classList.add('hidden');
            container.style.display = 'none';
        }
    });
    
    console.log('Visible containers after filtering:', visibleContainers.length);
    
    // Handle year markers - show only if they have visible items after them
    yearMarkers.forEach(marker => {
        let hasVisibleItemsAfter = false;
        let currentElement = marker.nextElementSibling;
        
        // Look ahead to see if there are any visible containers after this year marker
        while (currentElement) {
            if (currentElement.classList.contains('year-marker')) {
                // Hit the next year marker, stop looking
                break;
            }
            
            if (currentElement.classList.contains('container') && 
                currentElement.hasAttribute('data-category') && 
                !currentElement.classList.contains('hidden') &&
                currentElement.style.display !== 'none') {
                hasVisibleItemsAfter = true;
                break;
            }
            
            currentElement = currentElement.nextElementSibling;
        }
        
        // Show/hide year marker based on whether it has visible items
        if (hasVisibleItemsAfter) {
            marker.style.display = 'flex';
            marker.style.opacity = '1';
        } else {
            marker.style.display = 'none';
            marker.style.opacity = '0';
        }
    });
    
    // Add a small delay for smooth transitions
    setTimeout(() => {
        visibleContainers.forEach((container, index) => {
            container.style.animationDelay = `${index * 0.1}s`;
        });
    }, 50);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing...'); // Debug log
    
    // Add event listeners to filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    console.log('Found filter buttons:', filterBtns.length); // Debug log
    
    filterBtns.forEach((btn, index) => {
        console.log(`Button ${index}:`, btn.getAttribute('data-filter')); // Debug log
        
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = btn.getAttribute('data-filter');
            console.log('Button clicked, filter:', filter); // Debug log
            
            if (filter) {
                filterTimeline(filter);
            }
        });
    });
    
    // Add event listeners for PDF modal
    const pdfModal = document.getElementById('pdfModal');
    
    // Close when clicking outside the PDF container
    pdfModal?.addEventListener('click', (event) => {
        if (event.target === pdfModal) {
            closePdfViewer();
        }
    });
    
    // Close when pressing the Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && pdfModal?.classList.contains('active')) {
            closePdfViewer();
        }
    });
    
    // Add staggered animation to timeline items
    const containers = document.querySelectorAll('.container');
    containers.forEach((container, index) => {
        container.style.animationDelay = `${index * 0.1}s`;
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    });
    
    // Test the filtering function
    console.log('Testing filter functions...');
    const testContainers = document.querySelectorAll('.container[data-category]');
    console.log('Containers with data-category:', testContainers.length);
    testContainers.forEach(container => {
        console.log('Container category:', container.getAttribute('data-category'));
    });
});

// Email copy function
function myFunction() {
    const copyText = "chang.ihj05@gmail.com";
    navigator.clipboard.writeText(copyText);
    alert("Copied (" + copyText + ") to clipboard");
}
