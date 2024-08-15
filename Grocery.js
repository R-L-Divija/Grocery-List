
document.addEventListener('click', function (event) {
    // Check if the clicked element has the 'close' class
    if (event.target.classList.contains('close')) {
        let div = event.target.parentElement;
        div.style.display = 'none';
    }
});

function addItemFunction() {
    let text = document.getElementById('addItem').value;
    let element = document.getElementById('list');

    if (text === "") {
        alert('You must Add an item');
    } else {
        let list = document.createElement('li');
        let node = document.createTextNode(text);
        list.innerHTML = "<i class='material-icons close'>close</i>";
        list.appendChild(node);
        element.appendChild(list);
        document.getElementById("addItem").value = "";
    }
}
