const addContentBtn = document.getElementById('Meer');
const removeContentBtn = document.getElementById('Minder');

addContentBtn.addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "Dit is meer content!";
    document.body.appendChild(newParagraph);
});

removeContentBtn.addEventListener('click', function() {
    const paragraphs = document.getElementsByTagName('p');
    if (paragraphs.length > 0) {
        document.body.removeChild(paragraphs[paragraphs.length - 1]);
    }
});
