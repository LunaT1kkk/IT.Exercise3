Vue.createApp({
    data() {
        return {
            sumPrice: 0,
            arr: [
                {
                    name: 'Программирование в Python (3 месяца)', 
                    price: 12000,
                    flag: false,
                },
                {
                    name: 'Программирование в Python (6 месяцев)', 
                    price: 20000,
                    flag: false,
                },
                {
                    name: 'Программирование на C++ (6 месяцев)', 
                    price: 22000,
                    flag: false,
                },
                {
                    name: 'Программирование на JS (3 месяца)', 
                    price: 10000,
                    flag: false,
                },
                {
                    name: 'Фронт-энд разработчик (1 год)', 
                    price: 110000,
                    flag: false,
                },
                {
                    name: 'Бэк-энд разработчик (1 год)', 
                    price: 120000,
                    flag: false,
                }
            ]
        };
    }
}).mount('#app');

let box = document.getElementsByTagName("button");
for (let i = 0; i < box.length; i++){
    box[i].onclick = function() {
        if (this.style.backgroundColor == "")
            this.style.backgroundColor = "#42f54b";
        else 
            this.style.backgroundColor = ""
    };
}