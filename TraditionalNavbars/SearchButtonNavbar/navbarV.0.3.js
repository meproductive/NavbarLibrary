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

 //Buttons's & input's dom declarations
 const searchbtn = document.getElementById('search-btn');
 const closebtn = document.getElementById('close-btn');
 const searchinput = document.getElementById('search-input');
 
    const openSearchinput = () => {

        searchinput.classList.add('active');
        searchinput.style.display = 'flex';

        searchbtn.classList.add('active');
        searchbtn.style.float = 'left';

        closebtn.style.display = 'flex';
        closebtn.classList.add('active');

    };

    const closeSearchinput = () => {

        closebtn.style.display = 'none';
        searchinput.style.display = 'none';
        searchbtn.classList.remove('active');
        
    }

    searchbtn.addEventListener('click', openSearchinput);
    closebtn.addEventListener('click', closeSearchinput);
