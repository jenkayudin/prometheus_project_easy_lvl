const items = [
    {
        "image": "https://i.ibb.co/qk3WZzd/bouquet-cart1.png",
        "name": "Ніжна свіжість",
        "flovers": "троянди та лілії",
        "price": 445
    },
    {
        "image": "https://i.ibb.co/kSqMtYg/bouquet-cart2.png",
        "name": "Сорбет",
        "flovers": "хризантеми та троянди",
        "price": 450
    },
    {
        "image": "https://i.ibb.co/P9mTcQT/bouquet-cart3.png",
        "name": "Yellow song",
        "flovers": "соняшники та солідаго",
        "price": 455
    },
    {
        "image": "https://i.ibb.co/M8NL0gT/bouquet-cart4.png",
        "name": "Персиковий нектар",
        "flovers": "лілії та троянди",
        "price": 455
    },
    {
        "image": "https://i.ibb.co/LYMJ9mc/bouquet-cart5.png",
        "name": "Аврора",
        "flovers": "лілії та троянди",
        "price": 460
    },
    {
        "image": "https://i.ibb.co/Y7jdbq5/bouquet-cart6.png",
        "name": "Класика кохання",
        "flovers": "червоні троянди",
        "price": 465
    }
]

class Item{
    constructor(obj){
        this.image = obj.image;
        this.name = obj.name;
        this.flovers = obj.flovers;
        this.price = obj.price;
    }
    
    createCatalogItem(){
        return(
        `
        <a class="catalog__item" href="#">
            <img class="catalog__img" src=${this.image}>
            <div class="catalog__name">
                ${this.name}:<br> ${this.flovers}
            </div>
            <div class="catalog__price">
                ${this.price} грн
            </div>
        </a>
        `
        )
    }
}

class App{
    static renderAll(items){
        const catalog = document.getElementById('catalog');
        items.forEach(e => {
            const item = new Item(e);
            catalog.innerHTML += item.createCatalogItem();  
        });
        return catalog;
    }
}

App.renderAll(items);

const list = document.querySelector('.header__list');

function toggleClassActive() {
    list.classList.toggle('active');
}

