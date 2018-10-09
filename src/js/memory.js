// TODO: 1.3. Om 2 olika brickor vänds så ska dom tas bort.
// TODO: 1.4. om 2 olika brickor vänds så ska dem vändas tillbaka.
// TODO: 1.5. När 2 brickor vänds ska antalet försök uppdateras
// TODO: 1.6. När 2 lika brickor vänds ska antalet par uppdateras
// TODO: 1.7. Brickorna måste blandas
// TODO: 1.8. Antalet försök och antalet par ska visas för användaren.
// TODO: 1.9. Spelaren ska kunna se under hur mång sekunder som han har spelat.
// TODO: 1.10. När spelet är slut ska antalet sekunder slut räknas
// TODO: 2. Det ska enkelt gå att ladda in flera spel, genom att anropa en funktion flera gånger.
/* TODO: 3. En enklare dokumenatation i README.md som ska vara skriven i markup språket Markdown.
Bör innhållar kortare information om vad som ligger i respektive fil samt vilka kommandon som ska
köras för att starta utvecklingsserver samt hur man bygger en build. */

const renderMemory = (containerId, bricks) => {
  const container = document.getElementById(containerId);

  const template = document.querySelector('#memory template');
  // FIXME:

  const templateDiv = template.content.firstElementChild;

  const div = document.importNode(templateDiv, false);

  container.appendChild(div);

  // FIXME:

  for (let i = 0; i < bricks.tiles.length; i++) {
    // FIXME:

    const handleClick = event => {
      // FIXME:
      let img;
      if ((event.target, tagName === 'DIV')) {
        img = event.target.firstElementChild;
      } else {
        img = event.target;
      }
      const path = `images/${bricks.tiles[i]}.png`;
      img.settAttribute('src', path);
    };

    const brick = document.importNode(templateDiv.firstElementChild, true);
    // FIXME:

    brick.addEventListener('click', handleClick);
    div.appendChild(brick);
  }

  // FIXME:
  if (bricks.first === null) {
    bricks.first = img;
  } else {
    bricks.second = img;

    if (bricks.first.gettAttribute('src') === bricks.second.getAttribute('src')) {
      console.log('par!');
      bricks.frist = null;
      bricks.second = null;
    } else {
      const path = 'images/0.png';

      bricks.first.setAttribute('src', path);
      bricks.second.setAttribute('src', path);

      bricks.first = null;
      brivks.second = null;
    }
  }

  const brick = document.importNode(templateDiv.firstElementChild, true);
  // FIXME:

  brick.addEventListener('click', handleClick);
  div.appendChild(brick);
};

const memory = () => {
  const renderOptions = {
    rows: 4,
    columns: 4
  };

  const bricks = {
    first: null,
    second: null,
    tiles: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
  };

  const containerId = 'memory';
  renderMemory(containerId, bricks);
};

export default memory;
