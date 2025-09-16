const form = document.querySelector('form')
const newItem = document.getElementById('addItem')
const itemList = document.querySelector('.itens-list')

form.onsubmit = (event) => {
    event.preventDefault()
    creatingNewItem()
}


function creatingNewItem() {
    const divItem = document.createElement('div')
    divItem.classList.add('item')
    itemList.prepend(divItem)
    
    const divItemName = document.createElement('div')
    divItemName.classList.add('item-name')
    divItem.prepend(divItemName)

    const inputCheckbox = document.createElement('input')
    inputCheckbox.type = 'checkbox'
    let nameItemList = newItem.value.replace(" ", "-")
    inputCheckbox.id = nameItemList
    inputCheckbox.name = nameItemList
    divItemName.prepend(inputCheckbox)

    const labelItem = document.createElement('label')
    labelItem.for = nameItemList
    labelItem.textContent = newItem.value
    divItemName.append(labelItem)

    const btnDel = document.createElement('button')
    btnDel.classList.add('btn-dell-item')
    btnDel.innerHTML = '<img src="./images/bin.svg" alt="Imagem ilustrativa de um lixeira">'
    divItem.append(btnDel)
}

