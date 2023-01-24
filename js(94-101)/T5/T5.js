let arr=document.body.children;

for(let i=0;i<arr.length-1;i++){
    arr[i].onclick=function(){
        console.log(`This is a ${this.tagName}`);
    }
}

