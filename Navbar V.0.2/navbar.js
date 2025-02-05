//Button and Navigation's dom declarations
const navigation = document.getElementById("navigation");
const menubtn = document.getElementById("menu-btn");

//If statement querying if we have these variables then function supposed to work
if (navigation && menubtn) {
    const openFunc = () => {
        navigation.classList.toggle('active');
        menubtn.classList.toggle('active');
    };

  //EVENTLISTENER on click function 
  menubtn.addEventListener('click', openFunc);
     
};