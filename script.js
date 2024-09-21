// Function to show the modal with a message
function showModal(message) {
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = message;
    document.getElementById('modal').style.display = 'block';
}

// Function to close the modal
document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

function showNextPart(currentPart, nextPart) {
    document.getElementById(currentPart).style.display = 'none';
    document.getElementById(nextPart).style.display = 'block';
}


// Handle Part 1 result
document.getElementById('part-1-next').addEventListener('click', function () {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');

    if (!q1 || !q2) {
        showModal('Please answer all questions.');
        return;
    }

    if (q1.value === 'yes' || q2.value === 'yes') {
        showNextPart('part-1', 'part-2');
    } else {
        showModal('You are not depressed.');
    }
});

// Handle Part 2 result
document.getElementById('part-2-next').addEventListener('click', function () {
    let score = 0;

    for (let i = 3; i <= 11; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (!answer) {
            showModal('Please answer all questions.');
            return;
        }
        score += parseInt(answer.value);
    }

    if (score >= 7) {
        showNextPart('part-2', 'part-3');
    } else {
        showModal('You have slight or no depression.');
    }
});

// Handle Part 3 result
document.getElementById('submit-survey').addEventListener('click', function () {
    let score = 0;
    const pointValues = [1, 2, 6, 8, 8, 9, 4, 10, 4];

    for (let i = 12; i <= 20; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (!answer) {
            showModal('Please answer all questions.');
            return;
        }
        score += parseInt(answer.value) ? pointValues[i - 12] : 0;
    }

    if (score === 0) {
        showModal('You are depressed but show no signs of suicide.');
    } else if (score >= 1 && score <= 8) {
        showModal('You have depression with mild signs of suicidal thoughts.');
    } else if (score >= 9 && score <= 16) {
        showModal('You have depression with moderate signs of suicidal thoughts.');
    } else if (score >= 17) {
        showModal('You have depression with severe signs of suicidal thoughts.');
    }
});
