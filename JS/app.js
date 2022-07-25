let button = document.querySelector(`header nav button`)
button.addEventListener(`click`, sideBarToggler)

function sideBarToggler(){
 let sidebar = document.querySelector(`.sidebar`)

sidebar.classList.toggle(`.activeSidebar`)

}