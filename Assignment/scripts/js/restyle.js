var counter = 0;

function changeColours(){
    counter +=1;
    switch (counter){
        case 1:
            setColour('fanta');
            break;
        case 2:
            setColour('sprite');
            break;
		case 3:
            setColour('black');
			break;
        case 4:
            resetColours();
    }
}

function setColour(colour){
    switch (colour){
        case 'cola':
            document.getElementById('body').style.backgroundColor = '#cc0000';
            var header_sections = document.getElementsByClassName('main-colour');
            for (let i = 0; i < header_sections.length; i++) {
                header_sections.item(i).style.backgroundColor = '#000000';
            }
            document.getElementById('footer').style.backgroundColor = '#000000';
            break;
        case 'sprite':
            document.getElementById('body').style.backgroundColor = '#85ff4d';
            var header_sections = document.getElementsByClassName('main-colour');
            for (let i = 0; i < header_sections.length; i++) {
                header_sections.item(i).style.backgroundColor = '#0d4c01';
            }
            document.getElementById('footer').style.backgroundColor = '#0d4c01';
            break;
        case 'fanta':
            document.getElementById('body').style.backgroundColor = '#ff8000';
            var header_sections = document.getElementsByClassName('main-colour');
            for (let i = 0; i < header_sections.length; i++) {
                header_sections.item(i).style.backgroundColor = '#ffbf00';
            }
            document.getElementById('footer').style.backgroundColor = '#ffbf00';
            break;
        case 'black':
            document.getElementById('body').style.backgroundColor = 'e6e6e6';
            var header_sections = document.getElementsByClassName('main-colour');
            for (let i = 0; i < header_sections.length; i++) {
                header_sections.item(i).style.backgroundColor = '262626';
            }
            document.getElementById('footer').style.backgroundColor = '262626';
            break;
    }
}

function resetColours(){
    setColour('cola');
    counter = 0;
}