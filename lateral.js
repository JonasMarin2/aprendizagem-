document.addEventListener('DOMContentLoaded', function () {
    let menuBtn = document.getElementById('menu-btn');
    let sidebar = document.getElementById('sidebar');
    menuBtn.addEventListener('click', function () {
        if (sidebar.style.left === "-200px") {
            sidebar.style.left = "0";
        } else {
            sidebar.style.left = "-200px";
        }
        
    });
});
