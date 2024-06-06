const inspireBtn = document.getElementById('inspireBtn');
const anotherBtn = document.getElementById('anotherBtn');
const descriptionEl = document.getElementById('description');
const ideaTextEl = document.getElementById('ideaText');

const apiUrl = 'https://itsthisforthat.com/api.php?json';

inspireBtn.addEventListener('click', getIdea);
anotherBtn.addEventListener('click', getIdea);

function getIdea() {
  descriptionEl.style.display = 'none';
  inspireBtn.style.display = 'none';
  anotherBtn.style.display = 'block';

  fetch('https://itsthisforthat.com/api.php?json', { mode: 'no-cors' })
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Request failed with status: ' + response.status);
      }
    })
    .then(data => {
      const parsedData = JSON.parse(data);
      const { this: thisValue, that: thatValue } = parsedData;
      ideaTextEl.textContent = `You should make a ${thisValue} that will be used for ${thatValue}.`;
    })
    .catch(error => {
      console.error('Error:', error);
      ideaTextEl.textContent = 'Sorry, something went wrong. Please try again later.';
    });
}
