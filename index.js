//To add a quiz simply add an object similar to C, D and M and update the click function.

var questions;
var question;
$(".quiz").click(function(){
    question=0;    
    if($(this).val() == "cats") questions = questionsC
    else if($(this).val() == "dogs") questions = questionsD
    else if($(this).val() == "marine") questions = questionsM
    else if($(this).val() == "alpine") questions = questionsE
    else if($(this).val() == "australian") questions = questionsAU
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
    },
]    





//Alpine Animals section
//suchi
const questionsE = [
    {   'name': 'question1',
        'sticker': "images/alpine/marmot.jpg",
        'question': "Which animal is found throughout the alps and has adapted to the harsh winters by hibernating in burrows?",
        'choices': ['Aardvark', 'Marmot', 'Prairie Dog','Burrowing owl'],
        'correctanswer': 'Marmot'
    },
    {
        'name': 'question2',
        'sticker': "images/alpine/salamander.jpg",
        'question': "Which is the only amphibian in Europe that gives birth to fully developed young?",
        'choices': ['Alpine Gecko', 'Crocodile', 'Alpine Salamander','Asian water monitor'],
        'correctanswer': 'Alpine Salamander'
    },
    {
        'name': 'question3',
        'sticker': "images/alpine/ibex.jpg",
        'question': "Which animal has evolved to traverse near vertical cliffs in order to avoid deep snow and find food during the winter?",
        'choices': ['Scimitar-Horned Oryx', 'Blackbuck', 'Alpine Ibex','Mountain goat'],
        'correctanswer': 'Alpine Ibex'
    },
    {
        'name': 'question4',
        'sticker': "images/alpine/pika.jpg",
        'question': "Despite their cuddly appearance, these animals which are the smallest members of the lagomorph group—are among North America's toughest animals",
        'choices': ['pika', 'pangolins', 'chipmunks','woodchuck'],
        'correctanswer': 'pika'
    },
    {
        'name': 'question5',
        'sticker': "images/alpine/lynx.jpg",
        'question': "One of Europe's largest predators, has bounced back from the brink of extinction in Europe but it is still critically endangered in some areas.",
        'choices': ['Ocelot', 'Jaguarundi', 'Eurasian Lynx','Serval'],
        'correctanswer': 'Eurasian Lynx'
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

const questionsAU = [
    {   'name': 'question1',
        'sticker': 'images/australian/tasmaniandevil.jpg',
        'question': "Name this endangered Australian native animal.",
        'choices': ['Fox Den', 'Tasmanian Devil', 'Tasmanian Tiger','Greater Bilby'],
        'correctanswer': 'Tasmanian Devil'
    },
    {
        'name': 'question2',
        'sticker': "images/australian/cuttlefish.jpg",
        'question': "The ______ is the largest Cephalopod, and can weigh as much as 10kg! It can be found along the southern coast from Shark Bay in WA to Brisbane in Queensland.",
        'choices': ['Goulds Squid', 'Blue-ringed Octopus', 'Great Australian Cuttlefish','Southern Calamari Squid'],
        'correctanswer': 'Great Australian Cuttlefish'
    },
    {
        'name': 'question3',
        'sticker': "",
        'question': "There were 2 species of bilby, one is sadly extinct but the other can still be found in Australia although it is endangered. What are the two species?",
        'choices': ['Lesser & Greater', 'Smaller & Bigger', 'Higher & Lower','Shorter & Longer'],
        'correctanswer': 'Lesser & Greater'
    },
    {
        'name': 'question4',
        'sticker': "",
        'question': "________ are similar to manatees in appearance and the only marine mammal which is a herbivore. They are threatened with extinction and are also known as sea cows or the “Lady of The Sea” and are thought to be the inspiration behind tales of mermaids.",
        'choices': ['Manatee', 'Sea Lion', 'Dugong','Fur Seal'],
        'correctanswer': 'Dugong'
    },
    {
        'name': 'question5',
        'sticker': "images/australian/flyingfox.jpg",
        'question': "This is endemic to Australia, they are also known as fruit bats and many do not use echo-location",
        'choices': ['Flying Fox', 'Ghost Bat', 'Emballonuridae','Goulds Wattled Bat'],
        'correctanswer': 'Flying Fox'
    },
    {
        'name': 'question6',
        'sticker': "images/australian/galah.jpg",
        'question': "An Australian cockatoo with a reputation for not being too bright.",
        'choices': ['Black', 'Little Corella', 'Palm','Galah'],
        'correctanswer': 'Galah'
    },
    {
        'name': 'question7',
        'sticker': "images/australian/numbat.jpg",
        'question': "The ________ resembles an anteater and is in fact known as the banded anteater.",
        'choices': ['Echidna', 'Numbat', 'Aardvark','Spiny Anteater'],
        'correctanswer': 'Numbat'
    },
    {
        'name': 'question8',
        'sticker': "images/australian/quokka.jpg",
        'question': "The cutest of all native Australian animals and the happiest creature on the planet!",
        'choices': ['Red-necked Wallaby', 'Tammar', 'Quokka','Whiptail'],
        'correctanswer': 'Quokka'
    },
    {
        'name': 'question9',
        'sticker': "images/australian/wallaroo.jpg",
        'question': "One of the marsupials in Australia.",
        'choices': ['Wallaroo', 'Wallaby', 'Kangaroo','Wombat'],
        'correctanswer': 'Wallaroo'
    },
    {
        'name': 'question10',
        'sticker': "images/australian/wombat.jpg",
        'question': "One of the marsupials in Australia.",
        'choices': ['Wallaroo', 'Wallaby', 'Kangaroo','Wombat'],
        'correctanswer': 'Wombat'
    },
    {
        'name': 'question11',
        'sticker': "images/australian/platypus.jpg",
        'question': "Name this monotreme.",
        'choices': ['Obdurodon', 'Kollikodon', 'Platypus','Echidna'],
        'correctanswer': 'Platypus'
    },
    {
        'name': 'question12',
        'sticker': "images/australian/australianboxjellyfish.jpg",
        'question': "This is the most venomous marine animal.",
        'choices': ['Atolla jellyfish', 'Australian box jellyfish', 'Lions mane jellyfish','Cannonball jellyfish'],
        'correctanswer': 'Australian box jellyfish'
    },
    {
        'name': 'question13',
        'sticker': "images/australian/coastaltaipan.jpg",
        'question': "Some of the world’s most poisonous snakes such as this one can be found in Australia.",
        'choices': ['Coastal Taipan', 'Inland Taipan', 'Tiger Snake','Brown Snake'],
        'correctanswer': 'Coastal Taipan'
    },

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
            if(questions[question].sticker){
                $('#sticker').append(`<img height=240 width=240 src=${questions[question].sticker}>`);
            }//show image only if provided in the data object above
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

