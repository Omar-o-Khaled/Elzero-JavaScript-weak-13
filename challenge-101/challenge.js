// create header elements
let header=document.createElement("header");
let logo=document.createElement("div");
let logoText=document.createTextNode("Omar");
let nav=document.createElement("nav");
let ulNav=document.createElement("ul");

logo.className="logo"
ulNav.className="ul_links";

let navitems=["Home","about","Services","content"];

for(let i=0;i<navitems.length;i++){
    let li=document.createElement("li");
    let aLinks=document.createElement("a");
    
    aLinks.innerHTML=navitems[i];
    aLinks.href="#";
    li.appendChild(aLinks);
    ulNav.appendChild(li);

    // css
    aLinks.style.cssText="color: #23a96e; font-size:20px; text-transform:capitalize; text-decoration:none"
}

nav.append(ulNav);
logo.appendChild(logoText);
header.append(logo,nav);

// css style
header.style.cssText="display:flex; justify-content:space-between; align-items: center; padding:10px";
logo.style.cssText="color: #23a96e; font-size:24px; font-weight:bold; text-transform:uppercase";
ulNav.style.cssText="display:flex; justify-content:space-between; align-items: center; gap:20px; list-style:none";



// creat main page
let parentSection=document.createElement("section");

let boxs_counter=15;

for(let i=1;i<=boxs_counter;i++){

    // create box
    let box=document.createElement("div");
    let boxNumber=document.createElement("p");
    let boxText=document.createElement("p");

    // create classes
    box.className="product_box";
    boxNumber.className="box_number";
    boxNumber.id=`p-id-${i}`
    boxText.className="box_text";

    // create text
    boxNumber.innerHTML=`${i}`;
    boxText.innerHTML=`product`;

    // css style
    box.style.cssText="width: 32%; flex-direction: column; display: flex; justify-content: center; align-items: center; background-color: white; height: 98px;";
    boxNumber.style.cssText="font-size: 24px; font-weight: 900; font-family: cursive; padding: 10px 0px 0 0; margin: 0;";
    boxText.style.cssText="margin: 0; padding: 0 0 10px 0; color: dimgray; font-size: 14px;";

    // append
    box.append(boxNumber,boxText);
    parentSection.append(box);

    
}
// css style
parentSection.style.cssText="display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 20px; background-color: #BDBDBD; padding:20px ; align-content: center;";



// create footer
let footer=document.createElement("footer");
let footer_content=document.createTextNode("copyright 2021");


// content
footer.appendChild(footer_content);

// css
footer.style.cssText= "background-color: #23a96e; padding: 10px; display: flex; align-items: center; justify-content: center; margin-top: 12px; color: white; font-size: 20px; font-family: sans-serif;";

// body append
document.body.append(header,parentSection,footer);
