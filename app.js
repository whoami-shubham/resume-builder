/*
*  i am maintaining Ids for each element  as a variable and whenever i create a element i increase the id of that
*  element and pass that id as parameter to eventHandler function in order to access that element.
*/

var Address = 1
var phone = 0
var email = 0
var tr = 2
var skl = 1;
function new_skill(skill,name){
	skl = skl + 1;
	let id = 's'+skl;
	return `<span class="badge badge-primary m-5" id=${id} onmouseenter="show_d('${id}')" onmouseleave="hide_d('${id}')">${name}<span class="glyphicon glyphicon-remove" onclick="del('${id}')"></span></span>`;
}
function new_address(address){
	Address = Address + 1;
	let id = 'addr'+Address;
	return `<span onmouseenter="show('${id}')" onmouseleave="hide('${id}')" id=${id}><input type="text" class="col-sm-9" placeholder="Address" maxlength="18">
					<button class="btn btn-success" onclick="add('address')"><span class="glyphicon glyphicon-plus-sign"></span></button><button class="btn btn-danger" onclick="del('${id}')"><span class="glyphicon glyphicon-trash"></span></button><br></span>`;
}
function new_email(email){
	email = email + 1;
	let id = 'email' + email;
	return `<span onmouseenter="show('${id}')" onmouseleave="hide('${id}')" id=${id}><input type="email" class="col-sm-9" placeholder="email" >
					<button class="btn btn-success" onclick="add('email')"><span class="glyphicon glyphicon-plus-sign"></span></button><button class="btn btn-danger" onclick="del('${id}')"><span class="glyphicon glyphicon-trash"></span></button><br></span>`;
}

function new_phone(phone){
	phone = phone +1;
	let id = 'phone'+phone;
	return `<span onmouseenter="show('${id}')" onmouseleave="hide('${id}')" id=${id}><input type="tel"  class="col-sm-9" placeholder="phone" maxlength="13"><button class="btn btn-success" onclick="add('phone')"><span class="glyphicon glyphicon-plus-sign"></span></button><button class="btn btn-danger" onclick="del('${id}')"><span class="glyphicon glyphicon-trash"></span></button><br></span>`;
}

function addelement(id){
	id = 'td'+id;
	var elem = document.getElementById(id);
	 var str = `<p class="heading2">Heading</p>
							<ul>
								<li>About</li>
								<li>About</li>
							</ul>
							`;
	elem.insertAdjacentHTML("beforeend",str);
}


function new_tr(tr_no){
     tr = tr + 1;
     let id = 'tr'+tr;
     return `<tr id=${id} onmouseenter="show('${id}')" onmouseleave="hide('${id}')">
						<td class="col-sm-3"><p class="heading1" contenteditable="true">HEADING</p></td>
						<td class="col-sm-8" contenteditable="true" id="td${tr}"><p class="heading2">heading<button class="btn btn-success" contenteditable="false" onclick="addelement('${tr}')"><span class="glyphicon glyphicon-plus-sign"></span></button></p>
							<ul>
								<li>about</li>
								<li>About</li>
							</ul>
						</td>
						<td class="col-sm-1">
						<button class="btn btn-success" onclick="add('tr')"><span class="glyphicon glyphicon-plus-sign"></span></button><button class="btn btn-danger" onclick="del('${id}')"><span class="glyphicon glyphicon-trash"></span></button></td>
					</tr>`;
}



function show(e) {
	var ele = document.getElementById(e)
	console.log('show')
	var btn = ele.getElementsByTagName('button')
	for(let button of btn){
		button.style.visibility="visible";
	}
	if(e=='skills'){
	 document.getElementById('sk').style.borderBottom="thin solid blueviolet";
	}

}
function hide(e){
	var ele = document.getElementById(e)
	var btn = ele.getElementsByTagName('button')
	for(let button of btn){
		button.style.visibility="hidden";
	}
	if(e=='skills'){
		document.getElementById('sk').style.border="none";
	}
	console.log('hide')
}
function add(type){
	 var new_add = document.getElementById('add');
	 var new_ph =  document.getElementById('ph');
	 var new_em = document.getElementById('em');
	 var new_trow = document.getElementById('table');
	 var skill = document.getElementById('skill')
	 var t = document.getElementById('sk');
     if(type=='address'){
         new_add.insertAdjacentHTML("beforeend", new_address(Address));
     }
     else if(type=='email'){
        new_em.insertAdjacentHTML("beforeend", new_email(email));
     }
     else if(type=='phone'){
       new_ph.insertAdjacentHTML("beforeend", new_phone(phone));
     }
     else if(type=='tr'){
          new_trow.insertAdjacentHTML("afterbegin", new_tr(tr));
     }
     else{
          if(t.value.trim().length>=1){
          	skill.insertAdjacentHTML("beforeend",new_skill(skl,t.value));
          	t.value='';
          }
     }
	
}
function del(id){
	var elem = document.getElementById(id);
    elem.parentNode.removeChild(elem);
}

function show_d(id){
   let elem = document.getElementById(id).getElementsByTagName('span')[0]
   elem.style.visibility = "visible";
}

function hide_d(id){
	let elem = document.getElementById(id).getElementsByTagName('span')[0]
    elem.style.visibility = "hidden";
}

/*
* in PDF function i am swaping content of body with content of resume while printing it.
* after that i am swaping back.
*/

function PDF(){
	var body = document.body.innerHTML;
	var content = document.getElementById('resume').innerHTML;
	document.body.innerHTML = content;
	window.print();
	document.body.innerHTML = body;
}
