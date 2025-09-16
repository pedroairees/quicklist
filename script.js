const form = document.querySelector('form')
const newItem = document.getElementById('addItem')
const itemList = document.querySelector('.itens-list')

const alertNewItem = document.querySelector('.alert-add')
const alertDelItem = document.querySelector('.alert-remove')

form.onsubmit = (event) => {
    event.preventDefault()
    creatingNewItem()
    
}

function creatingNewItem() {
    let nameItemList = newItem.value.replaceAll(" ", "-")

    const divItem = document.createElement('div')
    divItem.classList.add('item', nameItemList)
    itemList.prepend(divItem)
    
    const divItemName = document.createElement('div')
    divItemName.classList.add('item-name')
    divItem.prepend(divItemName)

    const inputCheckbox = document.createElement('input')
    inputCheckbox.type = 'checkbox'
    inputCheckbox.id = nameItemList
    inputCheckbox.name = nameItemList
    divItemName.prepend(inputCheckbox)

    const labelItem = document.createElement('label')
    labelItem.setAttribute('for', nameItemList)
    labelItem.textContent = newItem.value
    divItemName.append(labelItem)

    const btnDel = document.createElement('button')
    btnDel.classList.add('btn-dell-item')
    btnDel.innerHTML = '<img src="./images/bin.svg" alt="Imagem ilustrativa de um lixeira">'
    divItem.append(btnDel)
    btnDel.addEventListener('click', () => {
        itemList.removeChild(divItem)
    })

    alertNewItem.classList.remove('display-none')

    newItem.value = ''
    newItem.focus()
}

const btnRemoveAlertRemove = document.getElementById('remove-alert-remove')
itemList.addEventListener('click', (event) => {
    const btnDel = event.target.closest('.btn-dell-item')

    if(btnDel) {
        const itemDelete = btnDel.closest('.item')
        itemDelete.remove()
        alertDelItem.classList.remove('display-none')
    }
})

const btnRemoveAlertAddition = document.getElementById('remove-alert-addition')
btnRemoveAlertAddition.addEventListener('click', () => {
    alertNewItem.classList.add('display-none')
})

const btnRemoveAletDel = document.getElementById('remove-alert-remove')
btnRemoveAlertRemove.addEventListener('click', () => {
    alertDelItem.classList.add('display-none')
})