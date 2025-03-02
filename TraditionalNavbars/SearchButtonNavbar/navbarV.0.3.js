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
 const searchform = document.getElementById('search-form');

 // ul tag's parent id's dom declaration
 const parentt = document.getElementById('parent').children;

 // matched media screen size min-width 769px passes to variable
 const responsive = window.matchMedia('(min-width: 769px)');
    
    const openSearchinput = () => {

        searchinput.classList.add('active');
        searchbtn.classList.add('active');
        closebtn.classList.add('active');

        searchinput.focus();

        searchform.style.width = '20.55rem';
        
        // if statement checks if responsive's value matches
        if (responsive.matches) {
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

        searchform.style.width = '0';

        // for loop iterates until fourths child of parent element and applies css styling display to each child
        for (let i = 0; i < 4; i++){
            parentt[i].style.display = 'flex';
        }
        
    };
    
    // Function to handle screen resize
    const handleResize = () => {
        // If the screen size is less than 768px, keep it search items open with nav items
        if (!responsive.matches) { 
            openSearchinput();
            for (let i = 0; i < 4; i++){
                parentt[i].style.display = 'flex';
            }
            searchinput.style.transition = 'none';
            searchbtn.style.transition = 'none';
        } 
        else {
            // Else the screen size is 768px or more, close the search input to default case
            closeSearchinput();
            searchinput.style.transition = 'none';
            searchbtn.style.transition = 'none';
            setTimeout(() => {
                searchinput.style.transition = 'width 0.5s ease-in-out, opacity 0.1s ease-in-out, visibility 0.1s ease-in-out';
                searchbtn.style.transition = 'right 0.5s ease-in-out';
            }, 0);
        }

    };

    // EVENTLISTENER on click functions
    searchbtn.addEventListener('click', openSearchinput);
    closebtn.addEventListener('click', closeSearchinput);

    // Add resize EVENTLISTENER to handle screen size changes
    window.addEventListener('resize', handleResize);

    // Add load EVENTLISTENER to keep search input open on page loads
    window.addEventListener('load', () => {
        if (!responsive.matches) {
            searchinput.classList.add('active');
            searchbtn.classList.add('active');
        }
        else {
            closeSearchinput();
        }

    });