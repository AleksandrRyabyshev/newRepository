function openTab(inside) {
    var content = document.getElementsByClassName('tabContent');

    for (var i = 0; i < content.length; i++) {
        content[i].style.display = 'none';
    }

    document.getElementById(inside).style.display = 'block';
}