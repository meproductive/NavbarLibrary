// Button and Navigation's dom declarations
const navigation = document.getElementById('navigation');
const menubtn = document.getElementById('menu-btn');

    // Function declaration ES6+
    const hamburgerMenu = () => {
        //defining classList 'active' to toggle token
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
       
    // Function declaration ES6+ to open searchinput
    const openSearchinput = () => {
        //defining classList 'active' to add token on click function
        searchinput.classList.add('active');
        searchbtn.classList.add('active');
        closebtn.classList.add('active');

        //giving the search items wrapper width on click function
        searchform.style.width = '21.40rem';
        
        // if statement checks if responsive's value matches
        if (responsive.matches) {
            // for loop iterates until fourths child of parent element and applies css styling display to each child
            for (let i = 0; i < 4; i++){
                parentt[i].style.display = 'none';
            }
        }

    };

    // Function declaration ES6+ to close searchinput
    const closeSearchinput = () => {
        //removing classList 'active' with remove token on click function
        closebtn.classList.remove('active');
        searchinput.classList.remove('active');
        searchbtn.classList.remove('active');

        //giving the search items wrapper default width on click function
        searchform.style.width = '0.8rem';

        // for loop iterates until fourths child of parent element and applies css styling display to each child
        for (let i = 0; i < 4; i++){
            parentt[i].style.display = 'flex';
        }
        
    };
    
    // Function to handle screen resize
    const handleResize = () => {
        // If the screen size is less than 768px, keep it search items open with nav items
        if (!responsive.matches) { 
            //for smooth animation
            openSearchinput();
    
            searchinput.style.transition = 'none';
            searchbtn.style.transition = 'none';
        } 
        // Else the screen size is 768px or more, close the search input to default case
        else {
            //for smooth animation 
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
        //If screen size is less than 768px when page loads prevents unwanted behaviour
        if (!responsive.matches) {
            //keeps search input and search button open
            searchinput.classList.add('active');
            searchbtn.classList.add('active');
            
        }
        else {
            closeSearchinput();
        }

    });