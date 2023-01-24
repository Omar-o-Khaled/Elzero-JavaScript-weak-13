let addInput=document.querySelector(".classes-to-add");
let removeInput=document.querySelector(".classes-to-remove");
let parentElemnet=document.querySelector(".classes-list").children[1];

let valueArray=[];

parentElemnet.innerHTML="No Element";

addInput.addEventListener("blur",addElement);
removeInput.addEventListener("blur",removeElement);

// add values to array
function addElement(){
    let addInputValus=addInput.value;
    let addArray=addInputValus.trim().split(" ");

    for(let i=0;i<addArray.length;i++){
        if(addArray[i]!==""){
            valueArray.push(addArray[i]);
            addInput.value="";
        }
    }
    valueArray=valueArray.sort();
    getValues(valueArray)
}

// create Element from array
function getValues(arrayValus){
    parentElemnet.innerHTML="";
    if(arrayValus.length==0){
        parentElemnet.appendChild(document.createTextNode("No Element"));
    }
    for(let i=0;i<arrayValus.length;i++){
        let span=document.createElement("span");
        span.innerHTML=arrayValus[i].toLocaleLowerCase();
        parentElemnet.append(span)
    }
}

// remove ELement from array
function removeElement(){
    let removeInputValus=removeInput.value;
    removeInputValus=removeInputValus.split(" ");

    for(let i=0;i<removeInputValus.length;i++){
        for(let k=0;k<valueArray.length;k++){
            if(removeInputValus[i] !=="" && valueArray[k].toLocaleLowerCase() === removeInputValus[i].toLocaleLowerCase()){
                valueArray.splice(valueArray.indexOf(removeInputValus[i]),1)
            }
        }
    }
    getValues(valueArray)
        removeInput.value="";
}

