let div=document.querySelector(".our-element");
let start=document.createElement("div");

div.nextElementSibling.remove();

start.innerHTML="Start";
start.className="start";
start.title="Start Element";
start.setAttribute("data-value","Start");
document.body.prepend(start);

end=start.cloneNode(false);
end.innerHTML="End";
end.className="End";
end.title="End Element";
end.setAttribute("data-value","End");

document.body.append(end);

