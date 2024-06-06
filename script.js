const inspireBtn = document.getElementById('inspireBtn');
const anotherBtn = document.getElementById('anotherBtn');
const descriptionEl = document.getElementById('description');
const ideaTextEl = document.getElementById('ideaText');

const apiUrl = 'https://corsproxy.io/?https://itsthisforthat.com/api.php?json';

inspireBtn.addEventListener('click', getIdea);
anotherBtn.addEventListener('click', getIdea);

function getIdea() {
  descriptionEl.style.display = 'none';
  inspireBtn.style.display = 'none';
  anotherBtn.style.display = 'block';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const { this: thisValue, that: thatValue } = data;
      ideaTextEl.textContent = `You should make a ${thisValue} that will be used for ${thatValue}.`;
    })
    .catch(error => {
      console.error('Error:', error);
      ideaTextEl.textContent = 'Sorry, something went wrong. Please try again later.';
    });
}
