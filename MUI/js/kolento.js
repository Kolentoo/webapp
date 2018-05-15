

let bHeight = document.documentElement.clientHeight;
let group = document.getElementsByClassName('mslide');
let newGroup = [...new Set(group)]
newGroup.map(item=>{
	item.style.height=bHeight+'px'
})










