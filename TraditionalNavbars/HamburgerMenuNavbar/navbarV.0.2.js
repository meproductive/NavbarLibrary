//Button and Navigation's dom declarations
const navigation = document.getElementById("navigation");
const menubtn = document.getElementById("menu-btn");

    //Function Declaration ES6+
    const hamburgerMenu = () => {
        navigation.classList.toggle('active');
        menubtn.classList.toggle('active');
    };

  //EVENTLISTENER on click function 
  menubtn.addEventListener('click', hamburgerMenu);