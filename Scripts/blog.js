var button = document.getElementById('navButton');
var sidebar = document.getElementById('sidebarCol');
var postCol = document.getElementById('postCol');
var row = document.getElementById('row');
var sidebarHeader = document.getElementById('sidebarHeader');
var sidebarLink = document.getElementById('sidebarLink');
var sidebarLI = document.getElementsByClassName('sidebarLI');
console.log(sidebarLI);
var clicked = false;
var readMoreClicked = false;
var buttonMore = document.getElementsByClassName('readMore');

var origSidebarStyle = {
    display: sidebar.style.display,
    width: sidebar.style.display
};

var origPostColStyle = {
    width: postCol.style.width
};

var origSidebarHeader = {
  fontSize: sidebarHeader.style.fontSize
};


function displaySideBar(){

    function resetStyling() {
        if(window.innerWidth > 768) {
            sidebar.style.display = origSidebarStyle.display;
            sidebar.style.width = origSidebarStyle.width;
            postCol.style.width = origPostColStyle.width;
            sidebarHeader.style.fontSize = origSidebarHeader.fontSize;
        }
    }

    window.onresize = resetStyling;
    if(!clicked){
        sidebar.style.display = 'block';
        sidebar.style.width = '30%';
        postCol.style.width = '70%';
        sidebarHeader.style.fontSize = '2.5em';
        Object.keys(sidebarLI).forEach(function (liIndex) {
            var li = sidebarLI[liIndex];
            li.style.fontSize = '1.3em'

        });
        clicked = true
    } else {
        console.log('second click');
        sidebar.style.display = 'none';
        postCol.style.width = '100%';
        clicked = false
    }
}



function displayMore(){
    var buttonId = this.getAttribute('id').substr(6);
    console.log(buttonId);
    var span = document.getElementById(`post${buttonId}Span`);


    if(!readMoreClicked){
         span.style.display = 'block';
        this.innerHTML = 'Read Less';

        readMoreClicked = true
    }else{
        span.style.display = 'none';
        this.innerHTML = 'Read More';

        readMoreClicked = false

    }



}

button.addEventListener('click', displaySideBar);
for (var i = 0; i < buttonMore.length; i++) {
    buttonMore[i].addEventListener('click',displayMore);
}