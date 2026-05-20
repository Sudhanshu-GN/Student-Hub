console.log("ExamHub Loaded Successfully");
function sendMessage(){

let input=document.getElementById("userInput").value;

let chatBox=document.getElementById("chat-box");

chatBox.innerHTML += `<p><b>You:</b> ${input}</p>`;

let reply="Sorry, I don't understand.";

if(input.includes("job")){
  reply="Go to Latest Jobs section.";
}
else if(input.includes("result")){
  reply="Check Results page.";
}
else if(input.includes("admit")){
  reply="Admit cards are available in Admit Card section.";
}

chatBox.innerHTML += `<p><b>AI:</b> ${reply}</p>`;

document.getElementById("userInput").value="";
}