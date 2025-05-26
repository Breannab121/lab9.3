const commentInput = document.getElementById('comment');
const button = document.querySelector('.button');
const commentList = document.getElementById('addComment');

button.addEventListener('click', function (e) {
    e.preventDefault(); // stop default behavior

    // Get the trimmed value from the input (remove spaces from start and end)
    const commentText = commentInput.value.trim(); 
    // If the input is empty after trimming, stop the function (don’t add a blank comment)
    if (!commentText) return;
    
    const li = document.createElement('li');
    const removeButton = document.createElement('button');
    const now = new Date();
    const dateString = now.toLocaleString();
    li.classList.add('comment-item'); // Add a CSS class to the comment

    // Combine comment text and date in one line using innerHTML
    li.innerHTML = `Guest ${commentText} — <small>${dateString}</small>`;
    li.style.backgroundColor = '#f4f4f4';
    li.style.padding = '12px';
    li.style.marginBottom = '10px';
    li.style.borderRadius = '8px';
    li.style.fontFamily = 'Arial, sans-serif';
    li.style.position = 'relative';

 
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');

    // Add remove function directly here:
    removeButton.addEventListener('click', function () {
        li.remove();
    });

    // Append the button to the li, and the li to the list
    li.appendChild(removeButton);
    commentList.appendChild(li);

    commentInput.value = "";

});

