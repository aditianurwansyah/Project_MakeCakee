function setTheme(theme) { 
    let root = document.documentElement;
    if (theme === 'light') {
        root.style.setProperty('--background-color', '#ffffff');
        root.style.setProperty('--text-color', '#000000');
    } else if (theme === 'dark') {
        root.style.setProperty('--background-color', '#000000');
        root.style.setProperty('--text-color', '#ffffff');
    }   
}
setTheme('light'); 