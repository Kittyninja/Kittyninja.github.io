var questions = [{
        name: "What is your favorite tool?",
        answers: [{
         name : "Axe",
         feeder : "Hunter"
        },
        {
         name : "Sword",
         feeder : "Warrior"
        },
        {
         name : "Pickaxe",
         feeder : "Miner"
        },
        {
         name : "Hoe",
         feeder : "Brewer"
        },
        {
         name : "Shovel",
         feeder : "Builder"
        }          
        ],
        user: null
      },
                     {
        name: "What is your favorite block?",
        answers: [{
         name : "Cobblestone",
         feeder : "Hunter"
        },
        {
         name : "Diamond Block",
         feeder : "Warrior"
        },
        {
         name : "Gold Ore",
         feeder : "Miner"
        },     
        {
         name : "Obsidian",
         feeder : "Brewer"
        },
        {
         name : "Wooden Plank",
         feeder : "Builder"
        },          
        ],
        user: null
      },
        {
        name: "What is your favorite minigame?",
        answers: [{
         name : "Bedwars",
         feeder : "Hunter"
        },
        {
         name : "Skywars",
         feeder : "Warrior"
        },
        {
         name : "Block Hunt",
         feeder : "Miner"
        },     
        {
         name : "Item Collect",
         feeder : "Brewer"
        },
        {
         name : "Build Battle",
         feeder : "Builder"
        },          
        ],
        user: null
      }
    ]
        

    function drawAll() {
      
      for (var i = 0; i < questions.length; i++) {
        var sheen = questions[i].answers
          shuffle(sheen)
        document.getElementById("wrapper").innerHTML += questions[i].name + ": <br> <div id = 'answers" + i + "'></div><br><br>"
        for (var j = 0; j < questions[i].answers.length; j++) {
          
          
          
          document.getElementById("answers" + i).innerHTML += "<button onclick = 'answer(" + i + "," + j + ")' id = 'questions" + i + "answers" + j + "'>" + questions[i].answers[j].name
        }
      }
    }

    function answer(question, answer) {
      questions[question].user = questions[question].answers[answer].feeder
      document.getElementById("cheeg").innerHTML = ""


    }

    function submit() {
      var cheegs = []
      document.getElementById("cheeg").innerHTML = null
      for (var i = 0; i < questions.length; i++) {
        document.getElementById("cheeg").innerHTML += "Question " + (i + 1) + " Answer: " + questions[i].user + "<br>"

        cheegs.push(questions[i].user)

      }
      console.log(getModes(cheegs)[0])
      if (getModes(cheegs)[0] === "Hunter") {
        document.getElementById("results").innerHTML = " You are a hunter!"
      } else if (getModes(cheegs)[0] === "Warrior") {
        document.getElementById("results").innerHTML = " Pretty obvious that you are a Warrior."
      } else if (getModes(cheegs)[0] === "Miner") {
        document.getElementById("results").innerHTML = " You are a miner. You mine ore. Durrrr."
      } else if (getModes(cheegs)[0] === "Brewer") {
        document.getElementById("results").innerHTML = " You are a brewer. Preeeetttyyyy obvious."
      } else if (getModes(cheegs)[0] === "Builder") {
        document.getElementById("results").innerHTML = " You are a builder that makes architecture!"
      } else {
        document.getElementById("results").innerHTML = "YOU ARE DAMN UNDEFINED"
      }


    }
