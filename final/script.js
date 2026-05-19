let score = 0;

function showInfo(year) {
  const info = {
    "1888s": " The beginning of seconds long black and white film.",
    "1890s": "Motion pictures become longer (about a minute long). This marks the beginning of the film industry and entertainment business.",
    "1902": "Natrual colored film emerged",
    "1920s": "Talkies sprouted, quickly leaving silent films in the dust. These films started with bulky equipment, wire condensed stages, and sound-on-disc before slowly adapting to sound-on-equipment and travel sized sound devices.",
    "1950s": "TV, home video, and internet films became common. People now had the option to create lasting memories with video cameras and watch movies from the comfort of their homes.",
    "2000s": "Digital movies and CGI dominate.",
    
  };

  document.getElementById("timeline-info").innerText = info[year];
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));

  score++;
  document.getElementById("score").innerText = "Score: " + score;
}

const snacks = document.querySelectorAll('.snacks img');
snacks.forEach(snack => {
  snack.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData("text", e.target.id);
  });
});

function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

dragElement(document.getElementById('snack1'));
dragElement(document.getElementById('snack2'));
dragElement(document.getElementById('snack3'));
dragElement(document.getElementById('snack4'));
dragElement(document.getElementById('snack5'));
dragElement(document.getElementById('snack6'));
dragElement(document.getElementById('snack7'));
dragElement(document.getElementById('snack8'));
dragElement(document.getElementById('snack9'));
dragElement(document.getElementById('snack10'));

