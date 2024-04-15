const minusButtons = document.querySelectorAll('.minus-btn');
const plusButtons = document.querySelectorAll('.plus-btn');
const deleteButtons = document.querySelectorAll('.delete-btn');
const likeButtons = document.querySelectorAll('.like-btn');
const quantities = document.querySelectorAll('.quantity');
const totalPrice = document.getElementById('total-price');

let total = 0;


//dimunitions mes produits avec le btn-
minusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (quantities[index].innerText > 0) {
            quantities[index].innerText--;
            total -= 10;
            totalPrice.innerText = `$${total}`;
        }
    });
});


//augmenter mes produits avec le btn+
plusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        quantities[index].innerText++;
        total += 10;
        totalPrice.innerText = `$${total}`;
    });
});


//supprimer des produits
deleteButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        total -= quantities[index].innerText * 10;
        quantities[index].innerText = 0;
        totalPrice.innerText = `$${total}`;
    });
});


//mon bouton like
likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerText === '❤️') {
            button.innerText = '💔';
            button.style.backgroundColor = '#ff0000';
        } else {
            button.innerText = '❤️';
            button.style.backgroundColor = '#ffcc00';
        }
    });
});
