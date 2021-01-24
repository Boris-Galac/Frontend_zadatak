/* ---- Shopping cart (navbar) ---- */

const btn = document.querySelector('.cart-btn')
const list = document.querySelector('.shopping-list')
const showcase = document.querySelector('.showcase')

list.style.display = 'none'

/* Open shop-cart */
btn.addEventListener('click', () => {
    if(list.style.display === 'none') {
        list.style.display = 'block'
    } else {
        list.style.display = 'none'
    }
})
// When user clicks out of cart-list
showcase.addEventListener('click', e => {
    if(e.target === e.currentTarget){     
        list.style.display = 'none'
    }
})


/* ---- Shopping cart (showcase) ---- */

let cartBtn = document.querySelector('.cart-btn1')
let shopCrt = document.querySelector('.shop-crt')
let innerList = document.querySelector('.cart-list1')


/* Open shop-cart */
cartBtn.addEventListener('click', ()=>{
    shopCrt.classList.toggle('toggle')    
    innerList.classList.toggle('toggle')

  /*   if(shopCrt.classList.contains('toggle')){
        shopCrt.classList.remove('toggle')
        innerList.classList.remove('toggle')
    }else{
        shopCrt.classList.add('toggle')
        innerList.classList.add('toggle')
    }
 */
})

// When user clicks out of cart-list
showcase.addEventListener('click', e => {
    if(e.target !== e.currentTarget)return 
        shopCrt.classList.remove('toggle')
        innerList.classList.remove('toggle')  
})

/* Scroll by one item */
let cartList = document.querySelector('.cart-list1')
let btnTop = document.querySelector('#scroll-up');
let btnDown = document.querySelector('#scroll-down');


btnTop.addEventListener('click', ()=>{
    cartList.scrollTop -= 85;
    cartList.style.scrollBehavior = 'smooth';
})

btnDown.addEventListener('click', ()=> {
    cartList.scrollTop += 85;
    cartList.style.scrollBehavior = 'smooth';
})



