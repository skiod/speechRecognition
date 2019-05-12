//instance Artom object

let artyom = new Artyom();
//check if APIs supported
if(!artyom.speechSupported()) alert('speechSupported not supported')
if(!artyom.recognizingSupported()) alert('recognizingSupported not supported')

//stop any recognition
artyom.fatality();

//initialize artyom
artyom.initialize({
    lang:"en-GB",
    continuous:true,
    listen:true,
    debug:true,
    obeyKeyword: "listen to me",
    speed:1
}).then(function(){
    artyom.say("ready");
});

//commands
artyom.addCommands([
    {
        description:"Say hi to me",
        indexes:["hello","shut down yourself"],
        action:function(i){
            if(i == 0){ 
                artyom.say('hi') 
            }
            if(i == 1){
                artyom.dontObey();
                artyom.say('you will regret')
            }
        }
    }
]);