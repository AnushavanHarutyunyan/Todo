function Click_btn() {

    let valueInput = document.getElementsByClassName('input_type')[0].value;
    let createElemLi = document.createElement('li');
        //createElemLi.innerHTML = valueInput;
        createElemLi.className = 'li';
    let label = document.createElement("label");

    let checkbox = document.createElement("input");
        checkbox.type = 'checkbox';
        checkbox.checked = false;

    document.getElementsByClassName('ul_list')[0].append(createElemLi);
    let lenghtLi = document.getElementsByTagName("li")["length"];
    let liId = createElemLi.id = 'li' + lenghtLi;
        label.htmlFor = 'label_id' + lenghtLi;
    label.id = 'label_id' + lenghtLi;
        checkbox.id = 'label_id' + lenghtLi;
    

    let removeBtn = document.createElement('span');
        removeBtn.className = 'removeBtn';
        removeBtn.innerHTML = 'Delete';

    document.getElementsByClassName('li')[lenghtLi - 1].append(label);
    document.getElementsByClassName('li')[lenghtLi - 1].append(removeBtn);
    label.innerHTML = valueInput;

    document.getElementsByTagName("li")[lenghtLi - 1].append(checkbox);
    document.getElementsByClassName("input_type")[0].value = '';

    checkbox.addEventListener('click',function () {
        if(checkbox.checked === true) {
            let checkboxid = document.getElementById('label_id' + lenghtLi);
            checkboxid.style.textDecoration = 'line-through';
            
        }

        if(checkbox.checked === false){
            checkboxid = document.getElementById('label_id' + lenghtLi);
            checkboxid.style.textDecoration = 'none';
        }
    });

    removeBtn.addEventListener('click',function () {
        document.getElementById(liId).remove()
    })
}
