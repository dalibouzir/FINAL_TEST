

/*
*/





let items2 =[];
var count =0;
var inputdata;
var inputdata2;
var counter1 = 0;
var rmvbtn1 = document.getElementById("rmvbtn");
rmvbtn1.style.display = "none";

var enter = document.getElementById("input");
enter.addEventListener("keyup", function (event) {
	if (event.keyCode === 13) {
		document.getElementById("submit").click();
	}
});



function addItem() {

	inputdata = document.getElementById("input").value;

	if (inputdata == "") {


		var empty = document.getElementById("emptyInput");
		empty.textContent = "empty task!";
		empty.style.display = "block";
		empty.style.opacity = "1";
        empty.style.color ="black";

		setTimeout(function () {
			empty.style.opacity = "0";
			empty.style.transition = "2s";
		}, 2000);
		setTimeout(function () {

			empty.style.display = "none";
		}, 3200);



	} else {
		
		document.getElementById("input").value = "";

		var pTag = document.createElement("p");
		var tasktag = document.createElement("span");
       var taskcheck = document.createElement("span");
		var task = document.createTextNode(inputdata);
		var check = document.createElement("span");
		var uncheck = document.createElement("span");

		taskcheck.appendChild(check);
		taskcheck.appendChild(uncheck);


		check.style.display = "none";

		tasktag.appendChild(task);
		tasktag.style.width="20px"

		let text = document.getElementById("input");
		//console.log(text.value);
		db.collection("todo").add({
			text : tasktag.innerText,
			status : "active",
		    user : usee
			
})






pTag.appendChild(taskcheck);

		pTag.appendChild(tasktag);
		var result = document.getElementById("result");
		result.appendChild(pTag);



		var options = document.createElement("span");
		var remove = document.createElement("span");
		var date =document.createElement("h3");
		var edit = document.createElement("span");
		var done = document.createElement("span");
		var important = document.createElement("span");
		var notImportant = document.createElement("span");

		


		//////CLass/////
		edit.setAttribute("class", "fas fa-edit editIcon");
		date.setAttribute("class","fa-solid fa-calendar-days ");
		
		done.setAttribute("class", "fas fa-check-circle doneIcon");
		remove.setAttribute("class", "fas fa-trash-alt trashIcon");

		/////ID////
		edit.setAttribute("id", "edit");
		date.setAttribute("id","date");
		
		done.setAttribute("id", "done");
		remove.setAttribute("id", "remove");
		tasktag.setAttribute("id","text");





		uncheck.addEventListener("click", checking);
		check.addEventListener("click", checking);




		options.appendChild(important);
		options.appendChild(notImportant);
		options.appendChild(edit);
		options.appendChild(done);
		options.appendChild(remove);
		
		options.appendChild(date);
		options.setAttribute("class", "options")
		pTag.appendChild(options);
		tasktag.style.textDecoration = "none";
		done.addEventListener("click", taskdone);
		pTag.classList.add("tasks");

		
		important.style.display = "none";
		notImportant.style.display = "inline";

		notImportant.addEventListener("click", importantStar);


		important.addEventListener("click", importantStar);

		function importantStar() {

			if (important.style.display == "none") {
				notImportant.style.display = "none";
				important.style.display = "inline";
				if (tasktag.style.textDecoration == "none")
					pTag.style.background = "rgba(255,255,255,0.5)";
			} else if (notImportant.style.display == "none") {
				notImportant.style.display = "inline";
				important.style.display = "none";
				if (tasktag.style.textDecoration == "none")
					pTag.style.background = "rgba(255,255,255,0.3)"

			}


		}
		uncheck.setAttribute("class", "far fa-square uncheckIcon");
		check.setAttribute("class", "fas fa-check-square");



		var edittex =edit.addEventListener("click",edittext);
		
		function edittext(){
			
			var input = prompt("edit tasks");
			
			
			
			if (input == "") {


				var empty = document.getElementById("emptyInput");
				empty.textContent = "empty task!";
				empty.style.display = "block";
				empty.style.opacity = "1";
				empty.style.color ="black";
		
				setTimeout(function () {
					empty.style.opacity = "0";
					empty.style.transition = "3s";
				}, 2000);
				setTimeout(function () {
		
					empty.style.display = "none";
				}, 3200);
				while(input == ""){
				input = prompt("Please edit tasks NOT EMPTY");
			}
			}else{
			var empty = document.getElementById("emptyInput");
		empty.textContent = "Task has been Edited";
		empty.style.display = "block";
		empty.style.opacity = "1";
        empty.style.color ="black";
		setTimeout(function () {
			empty.style.opacity = "0";
			empty.style.transition = "3s";
		}, 2000);
		setTimeout(function () {

			empty.style.display = "none";
		}, 3200);}
		items2.forEach((item)=>{
			if(item.user==usee){

				if(item.text==tasktag.innerText){
					const docRef = db.collection("todo").doc(item.id);
					docRef.update({
						text:input
					
					})
				}
			}})
		tasktag.innerText = input;
		}
		

		function checking() {

			if (check.style.display == "none") {
				uncheck.style.display = "none";
				check.style.display = "inline";
				
								counter1++;

			} else if (uncheck.style.display == "none") {
				uncheck.style.display = "inline";
				
				check.style.display = "none";
				
				counter1--;


			}
			if (counter1)
				rmvbtn1.style.display = "block";
			else if (counter1==0)
				rmvbtn1.style.display = "none";


		}


		function taskdone() {

			if (tasktag.style.textDecoration == "none") {
				tasktag.style.textDecoration = "line-through";
				done.style.color = "rgba(255,255,255,0.8)";
				done.style.border="1px rgba(56, 56, 56, 0.5)"
				pTag.style.background = "rgba(255,255,255,0.1)";
				items2.forEach((item)=>{
					if(item.user==usee){

						if(item.text==tasktag.innerText){
							const docRef = db.collection("todo").doc(item.id);
							docRef.update({
								status:"done"
							
							})

						}
					}})

			} else if (tasktag.style.textDecoration == "line-through") {
				tasktag.style.textDecoration = "none";
				done.style.color = "rgba(255,255,255,0.8)";
				pTag.style.background = "rgba(56, 56, 56, 0.5)";
				if (important.style.display == "inline") pTag.style.background = "rgba(255,255,255,0.5)";
				items2.forEach((item)=>{
					if(item.user==usee){

						if(item.text==tasktag.innerText){
							const docRef = db.collection("todo").doc(item.id);
							docRef.update({
								status:"active"
							
							})
							
						}
					}})




			}



		}
		var removeb = remove.addEventListener("click", fadermv);

		function fadermv() {
			items2.forEach((item)=>{
				if(item.user==usee){

					if(item.text==tasktag.innerText){
						const docRef = db.collection("todo").doc(item.id);
						docRef.delete();
					}
				}})
			var delayInMilliseconds = 500;

			pTag.style.opacity = "0";
			pTag.style.transition = ".7s";
			
			
			setTimeout(function paak() {
				options.parentNode.remove();
			}, delayInMilliseconds);

		}



		var rmvv = document.getElementById("rmvbtn");


		rmvv.addEventListener("click", rmvslc);
rmvv.addEventListener("click", function(){counter1=0;rmvbtn1.style.display = "none";});

		function rmvslc() {

			if (check.style.display == "inline") {

				check.parentNode.parentNode.style.opacity = "0";
				check.parentNode.parentNode.style.transition = ".5s";


				setTimeout(function paak() {
					check.parentNode.parentNode.remove();
				}, 500);

			}

		}
       

		


	}

}




////////////////////
;
//import {getDatabase, ref,push, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";///////////////////

var usee="";
auth.onAuthStateChanged((user) => {
	if (user) {

		usee=user.email;
	  var uid = user.uid;
	  // ...
	} else {
		console.log("ereeee");
	}
  }); 



 function getitems(){
	db.collection("todo").onSnapshot((snapshot)=>{
		let items= [];
		//console.log(snapshot);
		snapshot.docs.forEach((doc)=>{
			items.push({
				id:doc.id,

				...doc.data()
			})
			
		})
		items2=items;
		generateItmes(items);
	})
 }

 function generateItmes(items){

	let itemHTML ="";
	itemHTML +=`
			<div id="layer">
              <h id="h4">Old tasks :</h>
              <button id="delall" Onclick="delall()">delete all tasks<i class="fas fa-trash-alt"></i></button>
			  <button id="delall" Onclick="edit()">edit all tasks<i class="fas fa-edit editIcon"></i></button>
              </div>`
	items.forEach((item)=>{
		if(item.user==usee){
			//console.log(item.id);
			itemHTML +=`
			
			<p class="tasks">
				<span>
					<span class="fas fa-check-square" style="display: none;"> </span>
					<span class="far fa-square uncheckIcon"></span> 
				</span>
				<span id="text" style-"width: 20px;float=" right" text-decoration: none; ">${item.text}</ span> 
				
			</p>
			`
		}
			
	})
	
		

	document.querySelector(".taa").innerHTML = itemHTML;
	// createEventListener();
	// createEventListener2();
	
 }

 function delall(){
	items2.forEach((item)=>{
	if(item.user==usee){


const docRef = db.collection("todo").doc(item.id);

docRef.delete().then(function() {
	console.log("Document successfully deleted!");
}).catch(function(error) {
	console.error("Error removing document: ", error);
});
}})
 }
 function edit(){
	items2.forEach((item)=>{
	if(item.user==usee){


const docRef = db.collection("todo").doc(item.id);
var input = prompt("edit tasks");
docRef.update({
	text:input

}).then(function() {
	console.log("Document successfully edited!");
}).catch(function(error) {
	console.error("Error editing the document: ", error);
});
}})
}
 


//  function createEventListener(){
// 	let removetask = document.querySelectorAll(".tasks #delall");
// 	removetask.forEach((remove)=>{

		
// 	 let ls=[]; 
			
			
// 	//console.log(removetask);
	
// 		remove.addEventListener("click",function(){
// 			items2.forEach((item)=>{
// 			if(item.user==usee){
// 				console.log(item.id);

// 		const docRef = db.collection("todo").doc(item.id);
		
// 		docRef.delete().then(function() {
// 			console.log("Document successfully deleted!");
// 		}).catch(function(error) {
// 			console.error("Error removing document: ", error);
// 		});
// 		}})})
		

// 	})
// }
// function createEventListener2(){
// 	let edittask = document.querySelectorAll(".tasks #edit");
// 	edittask.forEach((remove)=>{
// 		count2++;
		
	 
		

// 	})
// }












  getitems();
	
 





	
// let chooseDateButton = document.getElementById("choose-date-button");
// let taskDateInput = document.getElementById("task-date");

// let dt = new Date();

// let dateString = dt.toString();

// let Time = dateString.substring(16, 25);

// var count = document.getElementById("counter").innerHTML;
// let message = new String('');
// var count2=0;
// if(Time.substring(0, 2)>=12){
  
// 	message ="Good Evening Sir\n " ;
  
	
//   }else{
	
// 	message ="Good Morning Sir\n "   ;
//   }
// 	let counter = 0;
//  const chatbotContainer = document.getElementById("chatbot-container");
//  if(count2>0){
// 	document.getElementById("counter").innerHTML = ("you have "+counter+count2+" Task You need to complete")
//  }
//  document.getElementById("submit").addEventListener("click", function() {
// 	 if (inputdata != "") {
// 			 counter++;
// 			 document.getElementById("rmvbtn").addEventListener("click", function() {
// 					 counter=0;
// 					 //console.log(counter);
// 					 message2=("\nyou have NO Tasks  to complete");
// 					 count = message2+" and "+ count2 +" current tasks still not done";
// 					 chatbotContainer.innerHTML=message+" "+count;
// 					 console.log(count);
// 		 });
//    document.getElementById("remove").addEventListener("click", function() {
// 	 counter-=1;
// 	 console.log(counter);
// 	 if(counter==0){document.getElementById("counter").innerHTML = ("you have NO Tasks  to complete");}
// 	 else{document.getElementById("counter").innerHTML = ("you have "+counter+count2+" Task You need to complete");}
// 	 });
 
// 	//  document.getElementById("done").addEventListener("click", function() {
// 	// 	 counter-=1;
// 	// 	 console.log(counter);
// 	// 	 if(counter==0){document.getElementById("counter").innerHTML = ("you have NO Tasks  to complete");}
// 	//  else{document.getElementById("counter").innerHTML = ("you have "+counter+" You need to complete");}
// 	// 	 });
 
		 
		 
		 
 
 
// 			 message2=("\nyou have "+counter+" Task You need to complete")
// 			 count = message2;
// 			 console.log("num"+count2);
// 			 chatbotContainer.innerHTML=message+" "+count+count2;
			 
// 			}
// }
 
//  )
