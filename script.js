const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition )();
recognition.lang = "en-US"


const btn = document.querySelector("#btn")
btn.addEventListener("click",function(){
    
    function speak(text) {
        const abc = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(abc);

    }
    function handleCommands(command){
        if(command.includes("open youtube")){
            speak("Opening Youtube...")
            window.open("https://www.youtube.com","_blank")
        }else if(command.includes("open Instagram")) {
            speak("Opening Instagram...")
            window.open("https://www.instagram.com","_blank")

        }else if(command.includes("open whatsapp")) {
            speak("Opening Whatsapp...")
            window.open("https://www.whatsapp.com","_blank")

        }else {
            speak("sorry i cant help")
        }
    }
    speak("Hello, how can I help you")
    setTimeout(()=>{
        recognition.start()
    },2000);
    recognition.onresult = (event)=>{
       const command = event.results[0][0].transcript.toLowerCase();
       handleCommands(command)
       
        
    };
});