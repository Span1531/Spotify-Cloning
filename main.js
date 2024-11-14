// Wait for the DOM to load completely
document.addEventListener("DOMContentLoaded", function() {
    
    // Smooth scrolling for the arrow button
    const scrollToContentBtn = document.getElementById("scrollDown");
    const contentSection = document.querySelector(".content");  // Assuming .content is the section below the banner
    
    scrollToContentBtn.addEventListener("click", function(e) {
        e.preventDefault();
        contentSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Play Music Button Event
    const playMusicBtn = document.querySelector(".play-btn");
    
    playMusicBtn.addEventListener("click", function() {
        // Placeholder logic for playing music
        alert("Music is playing! (Replace this with actual music playing code)");
        
        // You can add code here to trigger an actual music player, fetch a song list, etc.
    });

    // Update Listening Trends Dynamically
    const latestTrendsContainer = document.querySelector(".latest-trends");
    
    // Mock function to update latest trends (fetch from API in a real-world scenario)
    function updateLatestTrends() {
        const trends = [
            "Song 1 - Artist A",
            "Song 2 - Artist B",
            "Song 3 - Artist C",
            "Song 4 - Artist D"
        ];

        latestTrendsContainer.innerHTML = "";
        trends.forEach(trend => {
            const trendItem = document.createElement("p");
            trendItem.textContent = trend;
            latestTrendsContainer.appendChild(trendItem);
        });
    }
    
    // Call the updateLatestTrends function to populate the trends section
    updateLatestTrends();

    // Optionally: Add more interactivity for cards or hover effects
    const cards = document.querySelectorAll(".card");
    
    cards.forEach(card => {
        card.addEventListener("mouseover", function() {
            card.classList.add("card-hover");  // Assume "card-hover" class adds some visual effect
        });

        card.addEventListener("mouseout", function() {
            card.classList.remove("card-hover");
        });
    });
});
