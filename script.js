// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then( function(json){
            //console.log(json[0]);
            for (Object in json){
                for (field in Object){
                    console.log(field);
                }
                //console.log(Object);
            }
            const div = document.getElementById("container")
            for(i=0;i<json.length;i++){
                if(json[i].active === true){
                    div.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                        <h3 class = "bold">${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li class = "active">Active :${json[i].active}</li>
                            <li>Skills :${json[i].skills}</li>
                            <li>Hours in Space :${json[i].hoursInSpace}</li>
                        </ul>
                        </div>
                        <img src = ${json[i].picture}></img>    
                    </div>` 
                }
                
                else{
                    div.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                        <h3 class = "bold">${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            
                            <li>Active :${json[i].active}</li>
                            <li>Skills :${json[i].skills}</li>
                            <li>Hours in Space :${json[i].hoursInSpace}</li>
                            
                        </ul>
                        
                        </div>
                        <img src = ${json[i].picture}></img>    
                    </div>`
                }
                
            }
            div.innerHTML += `<p>Number of astronauts: ${json.length}</p>`
        })
    })
})