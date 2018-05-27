
var vue = new Vue({
    el: '#app',
    data: () => ({
      combos:[
        {href:"https://www.facebook.com/jake.dukin?ref=bookmarks",link:"fab fa-facebook"},
        {href:"https://vk.com/jakeduke",link:"fab fa-vk"},
        {href:"https://www.linkedin.com/in/yakiv-dukin-b17048107/",link:"fab fa-linkedin"},
      ],
      info:[
        {
          name: "Final Project Demo", 
          code:"https://github.com/JakeDuke/Final-Project-Demo",
          demo:"https://github.com/JakeDuke/Final-Project-Demo",
          description:"Elewa Final Project (in development)",
          pic:"./assets/dj.jpg"
        },
        {
          name: "CleanCalc", 
          code:"https://github.com/JakeDuke/CleanCalc",
          demo:"https://jakeduke.github.io/CleanCalc/",
          description:"Simple vanilla calc",
          pic:"./assets/calc.jpg"
        },
        {
          name: "TicTacToe", 
          code:"https://github.com/JakeDuke/TicTacToe",
          demo:"https://jakeduke.github.io/TicTacToe/",
          description:"Vanilla TicTacToe game",
          pic:"./assets/ttt.jpg"
        },
        {
          name: "Pokemon API", 
          code:"https://github.com/JakeDuke/Pokemon-API",
          demo:"https://jakeduke.github.io/Pokemon-API/",
          description:"Testing Pokemon Api",
          pic:"./assets/slow.jpg"
        },
        {
          name: "Binary Addition", 
          code:"https://github.com/JakeDuke/Binary-addition",
          demo:"https://jakeduke.github.io/Binary-addition/",
          description:"Small app based on 'Binary addition' kata",
          pic:"./assets/bin.jpg"
        },
        {
          name:"Tests",
          code:"https://github.com/JakeDuke/Tests-with-simple-libraries",
          demo:"https://github.com/JakeDuke/Tests-with-simple-libraries",
          description:"Testing Test Libraries",
          pic:"./assets/test.jpg"
        }

      ]  
    })
  });
  