//Button and Navigation's dom declarations
const navigation = document.getElementById('navigation');
const menubtn = document.getElementById('menu-btn');

    //Function declaration ES6+
    const hamburgerMenu = () => {
        navigation.classList.toggle('active');
        menubtn.classList.toggle('active');
    };

  //EVENTLISTENER on click function 
  menubtn.addEventListener('click', hamburgerMenu);

 //Search button's dom declaration
 const searchbtn = document.getElementById('search-btn');
 const closebtn = document.getElementById('close-btn');
 const searchinput = document.getElementById('search-input');
 const primaryNavitem = document.querySelectorAll('primary-nav-item');

    const openSearchinput = () => {
        searchinput.classList.add('active');
        searchinput.style.display = 'flex';
        searchbtn.style.float = 'left';
        closebtn.style.display = 'flex';
    };

    const closeSearchinput = () => {
        closebtn.classList.remove('active');
    }

    searchbtn.addEventListener('click', openSearchinput);
    closebtn.addEventListener('click', closeSearchinput);
