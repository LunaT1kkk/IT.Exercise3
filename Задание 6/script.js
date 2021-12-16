Vue.createApp({
    data() {
        return {
            visible1: true,
            visible2: false,
            articles: [
                { 
                    article: 'Vue JS',
                    url:'https://vuejs.org/', 
                    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"  
                },
                {
                    article: 'Unity',
                    url:'https://unity.com/ru',
                    img:'https://unity.com/logo-unity-web.png'  
                },
                 {
                     article: 'Visual Studio', 
                     url:'https://visualstudio.microsoft.com/ru/vs/', 
                     img:'http://dataenginer.ru/wp-content/uploads/2018/11/visual_studio_purple.png'
                 },
                 {
                     article: 'Python', 
                     url:'https://www.python.org/', 
                     img:'https://web-creator.ru/uploads/Page/19/python.svg'  
                 }
            ]
        };
    }
}).mount('#app');