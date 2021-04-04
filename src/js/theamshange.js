const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
let theme = localStorage.getItem('theme');
const checkBox = document.querySelector('.theme-switch__toggle');
//console.log(theme);
checkBox.checked = (theme == Theme.LIGHT) ?false : true ; console.log(checkBox.checked);

const lightTheme = () => {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);    
};
const darkTheme = () => {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);    
};
    if (theme === Theme.LIGHT) {
        darkTheme();
    }
    else {
        lightTheme();
    }
checkBox.addEventListener('click', () => {
    theme = localStorage.getItem('theme');
  if(theme === Theme.DARK){
        darkTheme();
  }
  else {
    lightTheme();
  }
});