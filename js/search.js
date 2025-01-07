// Товари для кожної категорії
const products = {
    nike: [
        {
            name: "Nike Air Max",
            price: "4000 грн",
            img: "images/nike-air-max.webp",
            description: "Nike Air Max — це культові кросівки з технологією амортизації Air, які забезпечують комфорт і підтримку при кожному кроці. Ідеальні для бігу та щоденного використання."
        },
        {
            name: "Nike Revolution",
            price: "3500 грн",
            img: "images/nike-revolution.jpg",
            description: "Моделі Nike Revolution поєднують легкість, стиль і зручність. Вони підходять для активних людей, які цінують комфорт та сучасний дизайн."
        },
        {
            name: "Nike Pegasus",
            price: "3700 грн",
            img: "images/nike-pegasus.webp",
            description: "Nike Pegasus — це кросівки для бігу, які пропонують ідеальний баланс між амортизацією і підтримкою. Ці кросівки підходять для спортсменів та любителів активного відпочинку."
        },
        {
            name: "Nike ZoomX",
            price: "4500 грн",
            img: "images/nike-zoomx.jpg",
            description: "Nike ZoomX — це високопродуктивні кросівки для тих, хто шукає максимальну швидкість і мінімальний вага. Вони оснащені новітньою технологією ZoomX для легкості і швидкості."
        },
        {
            name: "Nike Court",
            price: "3200 грн",
            img: "images/nike-court.jpeg",
            description: "Nike Court — це стильні тенісні кросівки, які поєднують комфорт і стабільність. Вони мають класичний вигляд і чудово підходять для активних тренувань."
        },
        {
            name: "Nike Free RN",
            price: "3900 грн",
            img: "images/nike-free-rn.jpeg",
            description: "Nike Free RN — це кросівки для бігу, що забезпечують природний рух. Легка конструкція і гнучка підошва допомагають досягати максимальних результатів."
        },
    ],
    adidas: [
        {
            name: "Adidas UltraBoost",
            price: "4500 грн",
            img: "images/adidas-ultraboost.webp",
            description: "Adidas UltraBoost — це кросівки, які дарують неймовірний комфорт завдяки технології Boost. Ідеальні для бігу та повсякденного використання."
        },
        {
            name: "Adidas Stan Smith",
            price: "3000 грн",
            img: "images/adidas-stan-smith.WebP",
            description: "Stan Smith — це класика від Adidas. Ці кросівки поєднують простий стиль та високу якість, що робить їх популярними серед любителів вуличної моди."
        },
        {
            name: "Adidas Gazelle",
            price: "2800 грн",
            img: "images/adidas-gazelle.WebP",
            description: "Adidas Gazelle — стильні кросівки з ретро-стилем, які підходять для повсякденного носіння та додають яскравості кожному образу."
        },
        {
            name: "Adidas NMD",
            price: "4200 грн",
            img: "images/adidas-nmd.WebP",
            description: "Adidas NMD — це футуристичний дизайн з максимальною зручністю. Ці кросівки призначені для міського життя та активного способу життя."
        },
        {
            name: "Adidas Samba",
            price: "2900 грн",
            img: "images/adidas-samba.jpeg",
            description: "Adidas Samba — культові кросівки, які стали символом вуличного стилю. Вони поєднують комфорт і стиль для будь-якого випадку."
        },
        {
            name: "Adidas Superstar",
            price: "3400 грн",
            img: "images/adidas-superstar.jpeg",
            description: "Adidas Superstar — це легендарні кросівки, які завоювали популярність завдяки своєму простому, але ефектному дизайну та міцній конструкції."
        },
    ],
    jordan: [
        {
            name: "Jordan 1",
            price: "6000 грн",
            img: "images/jordan-1.jpg",
            description: "Jordan 1 — це оригінальні баскетбольні кросівки, що стали іконою стилю. Вони поєднують у собі класичний дизайн і сучасні технології для максимального комфорту."
        },
        {
            name: "Jordan 4",
            price: "6500 грн",
            img: "images/jordan-4.jpg",
            description: "Jordan 4 — це популярна модель, що поєднує стиль і функціональність. Вони забезпечують відмінну підтримку та комфорт для спорту та повсякденного носіння."
        },
        {
            name: "Jordan 11",
            price: "7000 грн",
            img: "images/jordan-11.jpg",
            description: "Jordan 11 — це вишукані кросівки, які стали легендою завдяки своєму елегантному дизайну і інноваційним технологіям для підвищеного комфорту."
        },
    ],
    newbalance: [
        {
            name: "New Balance 574",
            price: "4000 грн",
            img: "images/nb-574.jpeg",
            description: "New Balance 574 — це класика в світі спортивного взуття. Вони поєднують стиль і комфорт для тих, хто шукає зручне взуття для щоденного використання."
        },
        {
            name: "New Balance 1080",
            price: "5000 грн",
            img: "images/nb-1080.webp",
            description: "New Balance 1080 — це кросівки для бігу з технологією Fresh Foam, які дарують максимальний комфорт під час тренувань та довгих пробіжок."
        },
        {
            name: "New Balance 997",
            price: "4200 грн",
            img: "images/nb-997.webp",
            description: "New Balance 997 — стильні кросівки з преміальних матеріалів, які поєднують сучасний дизайн і комфорт для щоденного носіння."
        },
        {
            name: "New Balance 880",
            price: "4600 грн",
            img: "images/nb-880.webp",
            description: "New Balance 880 — це кросівки для бігу, які забезпечують відмінну амортизацію та підтримку при кожному кроці. Ідеально підходять для любителів активного способу життя."
        },
    ],
};

// Функція для фільтрації та відображення результатів пошуку
function searchProducts(query) {
    const results = [];

    // Перевірка кожного товару з усіх категорій
    Object.keys(products).forEach(category => {
        products[category].forEach(product => {
            if (product.name.toLowerCase().includes(query.toLowerCase())) {
                results.push(product);
            }
        });
    });

    // Оновлення списку результатів пошуку
    const searchResultsList = document.getElementById("search-results-list");
    searchResultsList.innerHTML = ""; // Очищення попередніх результатів

    if (results.length === 0) {
        searchResultsList.innerHTML = "<li>Не знайдено товарів, що відповідають запиту.</li>";
    } else {
        results.forEach(product => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <h4>${product.name}</h4>
                <p>${product.price}</p>
                <p>${product.description}</p>
            `;
            searchResultsList.appendChild(listItem);
        });
    }
}

// Обробник події на форму для пошуку
document.getElementById("search-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Запобігання перезавантаження сторінки
    const query = document.getElementById("search").value;
    searchProducts(query);
});
