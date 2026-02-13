// Select elements
const envelope = document.getElementById('envelope');
const content = document.getElementById('content');
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const music = document.getElementById('musicPlayer');

envelope.addEventListener('click', () => {
    envelope.classList.add('hidden');
    content.classList.remove('hidden');
    document.getElementById('step1').classList.add('active');
    
    // Play the music with low volume so it's not startling
    music.volume = 0.1; // 30% volume
    music.play().catch(error => {
        console.log("Autoplay prevented by browser, waiting for interaction.");
    });
});

// 1. Logic to "Open" the envelope
envelope.addEventListener('click', () => {
    envelope.classList.add('hidden'); // Hide envelope
    content.classList.remove('hidden'); // Show content
    // Ensure the first step is active
    document.getElementById('step1').classList.add('active');
});

// 2. Logic to switch between message steps
function nextStep(stepNumber) {
    // Hide all steps currently visible
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });

    // Determine which step to show next
    let nextId = 'step' + stepNumber;
    
    // Show the next step
    const nextEl = document.getElementById(nextId);
    if (nextEl) {
        nextEl.classList.add('active');
    }
}

// 3. Logic for the "No" button running away
// We use both 'mouseover' (desktop) and 'touchstart' (mobile)
const moveButton = () => {
    // Calculate random position within the viewport
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    // Apply new position
    noBtn.style.position = 'fixed'; // Use fixed to allow movement anywhere on screen
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
};

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevent default touch behavior
    moveButton();
});

// 4. Logic for the "Yes" button
yesBtn.addEventListener('click', () => {
    alert("I knew you'd say yes! Click okay for another surprise! ❤️");
    window.location.href = "https://youtu.be/3MFMBC2P8Oc?t=79";
});