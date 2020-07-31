//To add a quiz simply add an object similar to C, D and M and update the click function.

var questions;
var question;
$(".quiz").click(function(){
    question=0;    
    if($(this).val() == "cats") questions = questionsC
    else if($(this).val() == "dogs") questions = questionsD
    else if($(this).val() == "marine") questions = questionsM
    animalQuizActivate();
});





//Wild Cats section
const questionsC = [
    {   'name': 'question1',
        'sticker': "images/cats/lion.jpg",
        'question': "Do male lions hunt prey or protect territory, what is more common?",
        'choices': ['Hunt prey', 'Protect territory', 'Both','Neither'],
        'correctanswer': 'Protect territory'
    },
    {
        'name': 'question2',
        'sticker': "images/cats/rustycat.jpg",
        'question': "Rusty-spotted cats are mostly found in which country?",
        'choices': ['US', 'Spain', 'Indonesia','India'],
        'correctanswer': 'India'
    },
    {
        'name': 'question3',
        'sticker': "images/cats/ocelot.jpg",
        'question': "Where is Ocelot mostly found?",
        'choices': ['Australia & New Zealand', 'South Asia', 'Mexico & South America', 'Europe'],
        'correctanswer': 'Mexico & South America'
    },
    {
        'name': 'question4',
        'sticker': "images/cats/lion.jpg",
        'question': "What is the scientific name for lion?",
        'choices': ['panthera leo', 'felis catus', 'acinonyx jubatus','puma concolor'],
        'correctanswer': 'panthera leo'
    },
    {
        'name': 'question5',
        'sticker': "images/cats/jaguar.jpg",
        'question': "What is a jaguar's usual call called?",
        'choices': ['saw', 'purr', 'whistle','scream'],
        'correctanswer': 'saw'
    },
    {
        'name': 'question6',
        'sticker': "images/cats/snowleopard.jpg",
        'question': "What is the natural habitat of snow leopards?",
        'choices': ['South and Central Asia mountains', 'Andes mountains', 'The Alps and the Artic','Alaskan mountains'],
        'correctanswer': 'South and Central Asia mountains'
    },
    {
        'name': 'question7',
        'sticker': "images/cats/puma.jpg",
        'question': "Which of the following is the rarest puma sub-species?",
        'choices': ['Eastern cougar', 'Costa Rican cougar', 'Wisconsin puma','Florida panther'],
        'correctanswer': 'Florida panther'
    },
    {
        'name': 'question8',
        'sticker': "images/cats/tiger.jpg",
        'question': "What is the most common tiger?",
        'choices': ['Sumatran tiger', 'Siberian tiger', 'Bengal tiger','Caspian tiger'],
        'correctanswer': 'Bengal tiger'
    },
    {
        'name': 'question9',
        'sticker': "images/cats/cheetah.jpg",
        'question': "The word 'cheetah' is derived from the word 'chita' meaning 'spotted one' in which language?",
        'choices': ['Swahili', 'Afrikaans', 'Hindi','Urdu'],
        'correctanswer': 'Hindi'
    },
    {
        'name': 'question10',
        'sticker': "images/cats/Canadian_lynx.jpg",
        'question': "Lynx are specialized hunters that target ______, which make up the bulk of their diet",
        'choices': ['Snowshoe hare', 'Arctic hare', 'Antelope jackrabbit','Scrub hare'],
        'correctanswer': 'Snowshoe hare'
    },
]




//Wild Dogs section
const questionsD = [
    {   'name': 'question1',
        'sticker': "images/dogs/greywolf.jpg",
        'question': "What is grey wolf called in North America?",
        'choices': ['White wolf', 'Timber wolf', 'Common wolf','Grey wolf'],
        'correctanswer': 'Timber wolf'
    },
    {
        'name': 'question2',
        'sticker': "images/dogs/Crab-eating_Fox.jpg",
        'question': "Name this wild canid.",
        'choices': ['Kit fox', 'Swift fox', 'Crab-eating fox','Island fox'],
        'correctanswer': 'Crab-eating fox'
    },
    {
        'name': 'question3',
        'sticker': "images/dogs/blanfords-fox.jpg",
        'question': "Blanford’s fox are the second smallest species of fox in the world. What is the smallest?",
        'choices': ['Fennec fox', 'Bengal fox', 'Darwin fox','Bat-eared fox'],
        'correctanswer': 'Fennec fox'
    },
    {
        'name': 'question4',
        'sticker': "images/dogs/short-eared.-dog.jpg",
        'question': "The short-eared dog depends on the burrows dug up by_____?",
        'choices': ['gopher', 'pangolins', 'armadillo','woodchuck'],
        'correctanswer': 'armadillo'
    }
]



//Marine Animals section
const questionsM = [
    {   'name': 'question1',
        'sticker': "images/marine/noaa_california_sea_lion.jpg",
        'question': "Name this marine mammal.",
        'choices': ['Bearded seal', 'California sea lion', 'Dugong','Harbor seal'],
        'correctanswer': 'California sea lion'
    },
    {
        'name': 'question2',
        'sticker': "images/marine/noaa_false_killer_whale.jpg",
        'question': "False killer whales are members of the dolphin family. They have a similar shaped ______ to killer whales.",
        'choices': ['fin', 'teeth', 'skull','body'],
        'correctanswer': 'skull'
    },
    {
        'name': 'question3',
        'sticker': "images/marine/shutterstock_ethan_daniels_american_horseshoe_crab.jpg",
        'question': "The American horseshoe crab is closely related to______",
        'choices': ['spiders', 'crabs', 'shrimps','lobsters'],
        'correctanswer': 'spiders'
    },
    {
        'name': 'question4',
        'sticker': "images/marine/hawaiian-bobtail.jpg",
        'question': "This is the _______ bobtail squid. ",
        'choices': ['Hawaiian', 'Alaskan', 'Canadian','Japanese'],
        'correctanswer': 'Hawaiian'
    }
]


//Quiz function
function animalQuizActivate(){
        $('br').remove();
        $('img').remove(); // Removing picture and other elements to make way for next question
        $('h5').remove();
        $('form').remove();
        $('#checkanswer').remove();
        $('.answercomment').remove();
        $('#nextquestion').remove();
        if(question < questions.length){ //Below quiz body executed if not the end of the quiz
            $('#sticker').append(`<img height=240 width=240 src=${questions[question].sticker}>`);
            $('#question').append(`<br><h5>${questions[question].question}</h5>`);  
            //Enclosing value attribute with quotes to ensure multi-strings with spaces are all captured, if no quotes then only the first string of a multi-string value is captured      
            $('#choices').append(`
                <form name="form" id="question1form">
                    <label><input type="radio" name=${questions[question].name} value="${questions[question].choices[0]}"> ${questions[question].choices[0]}</label><br> 
                    <label><input type="radio" name=${questions[question].name} value="${questions[question].choices[1]}"> ${questions[question].choices[1]}</label><br>
                    <label><input type="radio" name=${questions[question].name} value="${questions[question].choices[2]}"> ${questions[question].choices[2]}</label><br>
                    <label><input type="radio" name=${questions[question].name} value="${questions[question].choices[3]}"> ${questions[question].choices[3]}</label><br>
                </form>
                <button id="checkanswer">Check answer</button><br><br>              
                `);
        } else {
            $('#choices').append(`<h5>Nice work!</h5>`);
            question=0;
        }
        $("#question1form").submit(function(e) { //To prevent form from auto refreshing
            e.preventDefault();
        });
        $('#checkanswer').click(function(){ 
            $('.answercomment').remove();
            var ele = document.getElementsByName(questions[question].name);
            for(var i=0;i<ele.length;i++){ //checking if checked button value matches the 'correctanswer'
                if (ele[i].checked){
                    console.log(ele[i].value) ;
                    console.log(questions[question].correctanswer)
                    if(ele[i].value == questions[question].correctanswer) {
                        $('#checkanswer').attr("disabled",true); 
                        $('#answer').append(`<p class="answercomment">You are right!</p>`)
                        question++;
                        if(question == questions.length-1) nextQuestion = "Last question"
                        else if(question == questions.length) nextQuestion = "Good job!"
                        else nextQuestion = "Next question"                      
                        $('#next').append(`<button id="nextquestion" onclick=animalQuizActivate()>${nextQuestion}</button>`)
                    }
                    else {
                        $('#answer').append(`<p class="answercomment">Try again</p>`)
                    }
                } 
            }
        });
    }

