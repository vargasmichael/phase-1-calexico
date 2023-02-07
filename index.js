// Write your code here...

    fetch('http://localhost:3000/menu')
    .then(function (response)  {
        if (response.ok) {
          return response.json()
        } else {
          throw (response.statusText)
        }
    })
    .then(function(data) {
            populateMenu(data)
            populateMenuItems(data[0])
        })

const menu = document.querySelector('#menu-items');
const image = document.querySelector('#dish-image');
const name1 = document.querySelector('#dish-name');
const description = document.querySelector('#dish-description');
const price = document.querySelector('#dish-price');

    function populateMenu(items){
        items.forEach(item => {
            const spanItem = document.createElement('span');
            spanItem.innerText = item.name
            menu.appendChild(spanItem)
            spanItem.addEventListener('click', () => {
                populateMenuItems(item)
            } )
        })
    } console.log(menu)

    function populateMenuItems(food){
       image.src = food.image;
       name1.innerText = food.name;
       description.innerText = food.description;
       price.innerText = food.price;
    }

    

        