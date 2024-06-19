function deleteProduct(id) {
    fetch('https://fakestoreapi.com/products/' + id, {
        method: "DELETE"
    })
        .then(res => console.log(res))
}



fetch('https://fakestoreapi.com/products').then((response) => {
    return response.json()
})
    .then((data) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            document.querySelector('.all_products').innerHTML += `

            <div class="all_products_item" data-id="${data[i].id}">
                <img src="${data[i].image}">
                <h2>Name:${data[i].title}</h2>
                <h2>Price:${data[i].price}</h2>
                <button>Добавить в корзину</button>
                
            </div>
    `
    }


            const deleteBtns = document.querySelectorAll('.deleteBtn')

            for (let i = 0; i < deleteBtns.length; i++) {
                const id = deleteBtns[i].parentElement.getAttribute('data-id')

                deleteBtns[i].addEventListener('click', () => {

                    deleteBtns[i].parentElement.remove()
                    deleteProduct(id)
                })
            }

            console.log(deleteBtns);
        })



function sort(target) {
    fetch(`https://fakestoreapi.com/products??limit=${limitInpVal}sort=${target.value}`)
        .then(res => res.json())    
        .then(data => {
            document.querySelector('.all_products').innerHTML = ''
            for (let i = 0; i < data.length; i++) {
                document.querySelector('.all_products').innerHTML += `
            <div class="all_products_item" data-id="${data[i].id}">
                <img src="${data[i].image}">
                <h2>Name:${data[i].title}</h2>
                <h2>Price:${data[i].price}</h2>
                <button>Добавить в корзину</button>
                <button class="deleteBtn" style="border-color:red;color:red;margin-top:10px">Удалить</button>
            </div>
            `
            }
    })
}

            document.querySelector('select').addEventListener('change',(event)=>{
                sort(event.target)
})



                        document.querySelector('.limit').oninput = (event)=>{
                            fetch(`https://fakestoreapi.com/products?limit=${event.target.value}`)
                            .then(res => res.json())    
                            .then(data => {
                                document.querySelector('.all_products').innerHTML = ''
                                for (let i = 0; i < data.length; i++) {
                                    document.querySelector('.all_products').innerHTML += `
                                <div class="all_products_item" data-id="${data[i].id}">
                                    <img src="${data[i].image}">
                                    <h2>Name:${data[i].title}</h2>
                                    <h2>Price:${data[i].price}</h2>
                                    <button>Добавить в корзину</button>
                                    <button class="deleteBtn" style="border-color:red;color:red;margin-top:10px">Удалить</button>
                                </div>
                                `
                                }
                        })
                        }

// event.target в JavaScript — это значение, которое указывает на цель события взаимодействия пользователя, обычно в функции обработчика событий.

// Оно представляет собой элемент DOM, на котором произошло событие. Например, в слушателе события для нажатия кнопки e.target указывает на конкретный элемент кнопки.




// Если мы работаем с полем ввода, 
// event.target.value вернет то, что в данный момент введено в поле.
// value хранит текущее значение элемента. 