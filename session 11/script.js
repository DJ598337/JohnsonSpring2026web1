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

dragElement(document.getElementById('sunglasses 1'));
dragElement(document.getElementById('sunglasses 2'));
dragElement(document.getElementById('shirt 1'));
dragElement(document.getElementById('shirt 2'));
dragElement(document.getElementById('shirt 3'));
dragElement(document.getElementById('pants 4'));
dragElement(document.getElementById('pants 5'));
dragElement(document.getElementById('dress 6'));
dragElement(document.getElementById('dress 7'));
dragElement(document.getElementById('images'));
dragElement(document.getElementById('necklace 4'));
dragElement(document.getElementById('necklace 5'));
dragElement(document.getElementById('necklace 6'));
dragElement(document.getElementById('necklace 7'));
