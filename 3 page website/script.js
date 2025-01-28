// yes and no buttons yay
const yesButton = document.getElementById('yesBtn');
const noButton = document.getElementById('noBtn');
const resultDiv = document.getElementById('result');

// Function for yes click
yesButton.addEventListener('click', () => {
  resultDiv.innerHTML = `
    <p>You pressed Yes! Awesome! You are setting yourself up for success!!!</p>
    <div class="subpage-buttons">
      <button class="button" onclick="location.href='explain.html'">PRESS ME</button>
    </div>
  `;
});

// Function for no click
noButton.addEventListener('click', () => {
  resultDiv.innerHTML = `
    <p>You pressed no huh...alright then...your choice I guess </p>
    <button id="button" class="button">PROCRASTINATE</button>
  `;

  // event listener for PROCRASTINATE button
  const procrastinateButton = document.getElementById('button');
  procrastinateButton.addEventListener('click', () => {
    const links = [
      "https://www.hackertyper.com/",
      "https://pixelsfighting.com/",
      "https://orb.farm/",
      "https://www.nytimes.com/crosswords",
      "https://en.wikipedia.org/wiki/Special:Random",
      "https://sites.google.com/site/populardoodlegames/google-snake",
      "https://jspaint.app/#local:91cb0472a317a",
      "https://98.js.org/",
      "https://www.google.com/logos/2010/pacman10-i.html",
      "https://www.merriam-webster.com/dictionary/procrastinate"
    ];

    const randomIndex = Math.floor(Math.random() * links.length);
    window.open(links[randomIndex], "_blank"); // Open a random website
  });
});
