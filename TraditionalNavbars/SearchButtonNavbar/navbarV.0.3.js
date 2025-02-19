// Button and Navigation's dom declarations
const navigation = document.getElementById('navigation');
const menubtn = document.getElementById('menu-btn');

    // Function declaration ES6+
    const hamburgerMenu = () => {
        navigation.classList.toggle('active');
        menubtn.classList.toggle('active');
    };

  // EVENTLISTENER on click function
  menubtn.addEventListener('click', hamburgerMenu);

 // Buttons's & input's dom declarations
 const searchbtn = document.getElementById('search-btn');
 const closebtn = document.getElementById('close-btn');
 const searchinput = document.getElementById('search-input');

 // ul tag's parent id's dom declaration
 const parentt = document.getElementById('parent').children;
 // matched media screen size min-width 768px passes to variable
 const primaryItems = window.matchMedia('(min-width: 768px)');

    const openSearchinput = () => {

        searchinput.classList.add('active');
        searchbtn.classList.add('active');
        closebtn.classList.add('active');
        
        // if statement checks if primaryItem's value matches
        if (primaryItems.matches) {
            // for loop iterates until fourths child of parent element and applies css styling display to each child
            for (let i = 0; i < 4; i++){
                parentt[i].style.display = 'none';
            }
        }

    };

    const closeSearchinput = () => {

        closebtn.classList.remove('active');
        searchinput.classList.remove('active');
        searchbtn.classList.remove('active');

        // for loop iterates until fourths child of parent element and applies css styling display to each child
        for (let i = 0; i < 4; i++){
            parentt[i].style.display = 'flex';
        }
        
    }

    // EVENTLISTENER on click functions
    searchbtn.addEventListener('click', openSearchinput);
    closebtn.addEventListener('click', closeSearchinput);
