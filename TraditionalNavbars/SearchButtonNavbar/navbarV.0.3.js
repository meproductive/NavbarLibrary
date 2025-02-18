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
 const parentt = document.getElementById('parent').children;

    const openSearchinput = () => {

        searchinput.classList.add('active');
        searchbtn.classList.add('active');
        closebtn.classList.add('active');

        for (let i = 0; i < 4; i++){
            parentt[i].style.display = 'none';
        }

    };

    const closeSearchinput = () => {

        closebtn.classList.remove('active');
        searchinput.classList.remove('active');
        searchbtn.classList.remove('active');

        for (let i = 0; i < 4; i++){
            parentt[i].style.display = 'flex';
        }
        
    }

    searchbtn.addEventListener('click', openSearchinput);
    closebtn.addEventListener('click', closeSearchinput);
