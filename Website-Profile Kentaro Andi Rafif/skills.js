document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');
    const infoBox = document.querySelector('.info-box');
    const infoTitle = infoBox.querySelector('.info-title');
    const infoDescription = infoBox.querySelector('.info-description');

    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            const skillName = card.dataset.skill;
            const skillInfo = card.dataset.info;

            // Remove 'active' class from all cards
            skillCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('active');
                }
            });

            // Toggle 'active' class on the clicked card
            card.classList.toggle('active');

            // Check if the card is now active
            if (card.classList.contains('active')) {
                // Update info box content
                infoTitle.textContent = skillName;
                infoDescription.textContent = skillInfo;
                // Show info box
                infoBox.classList.add('visible');
            } else {
                // Hide info box
                infoBox.classList.remove('visible');
            }
        });
    });

    // Hide info box if clicked outside
    document.addEventListener('click', (event) => {
        if (!infoBox.contains(event.target) && !event.target.closest('.skill-card')) {
            infoBox.classList.remove('visible');
            skillCards.forEach(card => card.classList.remove('active'));
        }
    });
});