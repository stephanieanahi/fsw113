// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number

class Bug {
    constructor(reportedBY,system,subSystem,bugDesc) {
        // This constructor should be set up to accept the four user-input values from index.html: 
        // reportedBy, system, subSystem, and bugDesc

        this.reportedBY = reportedBY
        this.system = system
        this.subSystem = subSystem
        this.bugDesc = bugDesc
    }

    addBug() {
        // Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
        // It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below). 
       var listWrapper = document.querySelector("#listWrapper")
       
       
       var div = document.createElement("div")
       listWrapper.append(div)
       
       
       var deleteBtn = document.createElement("button")
        
        div.append(deleteBtn)
        deleteBtn.addEventListener("click",()=>this.deleteBug(div))
        deleteBtn.innerHTML="&times;"
        deleteBtn.style.backgroundColor="red"
        deleteBtn.style.borderRadius="15px"
      
        
       
        var resolveButton = document.createElement("button")
        div.append(resolveButton)
        resolveButton.addEventListener("click",()=> this.resolveBug(div))
        resolveButton.style.backgroundColor="red"
        resolveButton.style.borderRadius="15px"
        resolveButton.innerHTML="&check;"
       
        
       
        var p1 = document.createElement("p")
        p1.textContent=this.reportedBY 
        div.append(p1)
        

        var p2 = document.createElement("p")
        p2.textContent=this.system + ' / ' + this.subSystem
        div.append(p2)
      

        var p3 = document.createElement("p")
        p3.textContent=this.bugDesc
        div.append(p3)
        

    }

    deleteBug(div) {
        // Create code that will remove the appropriate bug from the DOM. 
        // You may need to Google how to remove an element from the DOM.
        div.remove()
    }

    resolveBug(div) {
        // Create code that changes the appropriate bug report to a darker color
        div.style.backgroundColor="brown"
    }
}

function reportBug() {
    // Create code that instantiates the Bug class with the data input by the 
    // user in the index.html form. Then call the method to add the new bug report.
    var reportedBY = document.querySelector("#reportedBy")
    var system = document.querySelector("#system")
    var subSystem = document.querySelector("#subSystem")
    var bugDesc = document.querySelector("#bugDesc")
    let newBugObj = new Bug(reportedBY.value, system.selectedOptions[0].text, subSystem.selectedOptions[0].text, bugDesc.value )
    newBugObj.addBug()
   

}
