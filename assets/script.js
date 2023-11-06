
var topics = ["HTML", "CSS", "Git", "JavaScript" ];
var randomTopic = topics[Math.floor(Math.random()*topics.length)];

/*
function listTopics(){
    for (var x =0; x< topics.length; x++){
        console.log(topics[x]);
     }
}
*/

/*
function listTopics(){
    for (const topic of topics) {
        console.log(topic);
    }
}
*/
function listTopics(){
    topics.forEach(topic => {
        console.log(topic);
    });
}


/*
function selectTopic(){
    var topic = "";
    topic = randomTopic;
    
    if(topic==='HTML'){
        console.log("Let's study HTML!");
    } else if(topic==='CSS'){
        console.log("Let's study CSS!");
    } else if(topic==='Git'){
        console.log("Let's study Git!");
    } else if(topic==='JavaScript'){
        console.log("Let's study JavaScript!");
    } else{
        console.log("Please try agian!");
    }
}

*/

function selectTopic(topic){
    if(!( topics.includes(topic))){
        console.log("Please try again!");
    }else{
        console.log(`Let's study ${topic}!`);
    }
}
console.log("Here are the topics we learned thought Prework: ");
listTopics();
console.log("Which topic should we study first?");
selectTopic(randomTopic);