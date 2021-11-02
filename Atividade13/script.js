const checkbox = document.querySelectorAll(".checkbox input");
const inputText = document.querySelector("#text");

checkbox.forEach((box) =>{
    box.addEventListener('click', (e) => {
        checkbox.forEach((box) => {
            box.checked = false;
        });
        e.target.checked = true;
    });
});

inputText.addEventListener('keyup', () => {
    if(checkbox[0].checked){
        inputText.value = inputText.value.toUpperCase();
    } else if(checkbox[1].checked){
        inputText.value = inputText.value.toLowerCase();
    }
});