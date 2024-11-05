// Script para controlar o botão e a barra lateral
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');

    menuBtn.addEventListener('click', function () {
        // Verifica a posição da barra e ajusta
        if (sidebar.style.left === "-200px") {
            sidebar.style.left = "0";
        } else {
            sidebar.style.left = "-200px";
        }
        
    });
});
