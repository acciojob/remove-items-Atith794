//your JS code here. If required.
// let btn = document.getElementsByTagName("input");
// btn.addEventListener("click",()=>{
// 	let ele = document.getElementById("colorSelect");
// 	// let ili = ele.querySelector("option");
// 	// ili.deleteElementsByTagName("option");
// 	// ele.deleteElementsByTagName("option");
// 	ele.getElementsByTagName("option").remove();
// })

let colorSelect = document.getElementById("colorSelect");
let removeBtn = document.querySelector('input[type="button"]');

removeBtn.addEventListener("click",function(){
	
	let selectedOptn = colorSelect.options[colorSelect.selectedIndex];

	if(selectedOptn){
		colorSelect.removeChild(selectedOptn);
	}
});