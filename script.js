var input=document.getElementById("userinput");
var button=document.getElementById("btn");
var ul=document.querySelector("ul");

button.addEventListener('click',function(){
    if(input.value.length > 0){

        var li=document.createElement("li");
        //append child= add an html element
        //create text node= is used to create text("....")
        li.appendChild(document.createTextNode(input.value)); 
        //and we have attach it to ul that why we have selected ul above.
        ul.appendChild(li);
        //After adding something text box must be empty.
        input.value="";
        
        var removeTask = document.createElement('input');
        removeTask.setAttribute('type', 'button');
        removeTask.setAttribute("value", "❌");
        removeTask.addEventListener('click', function() {
            ul.removeChild(li);
        }, false);
        ul.appendChild(removeTask);
    }
    
}) 
 
  

