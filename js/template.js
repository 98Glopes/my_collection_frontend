function renderHome(comic){
var html = `
            <div class="col-md-4">
            <h2> ${ comic.name }</h2>
            <p>Autor: ${ comic.autor }<br />Publisher: ${ comic.publisher }</p>
            <p style="text-overflow: ellipsis;">${ comic.description.slice(0,100)}...</p>
            <p>
            <a class="btn btn-secondary" href="#" role="button"><i class="fa fa-book"></i> </a>
            <a class="btn btn-secondary" href="#" role="button"><i class="fa fa-pencil"></i> </a>
            <a class="btn btn-secondary" href="#" role="button"><i class="fa fa-times"></i> </a>
            </p>
            </div>

`;
    return html;
}

var content = document.getElementById("content");

function distributeHTML(element, index, array){

    content.insertAdjacentHTML("afterbegin", renderHome(element))

}

//data.forEach(distributeHTML);

bodyTag = document.getElementsByTagName('body');
bodyTag.onload = makeRequest('https://mycollectionapi.herokuapp.com/comic_books/', loadHome);

function loadHome() {
 if (httpRequest.readyState === 4) {
   if (httpRequest.status === 200) {
       var data = JSON.parse(httpRequest.response);
       data.forEach(distributeHTML);
   } else {
     alert('There was a problem with the request.');
   }
 }
}

function loadRegister(){

  var html = `<form class="form-horizontal" id="registerForm" onsubmit="return false">
  <fieldset>
  
  <!-- Form Name -->
  <legend>Register a new comic book</legend>
  
  <!-- Text input-->
  <div class="form-group">
    <label class="col-md-12 control-label" for="textinput">Title</label>  
    <div class="col-md-12">
    <input id="textinput" name="name" type="text" placeholder="Title" class="form-control input-md" required="">
      
    </div>
  </div>
  
  <!-- Text input-->
  <div class="form-group">
    <label class="col-md-12 control-label" for="autor">Autor</label>  
    <div class="col-md-12">
    <input id="autor" name="autor" type="text" placeholder="Autor" class="form-control input-md">
      
    </div>
  </div>
  
  <!-- Text input-->
  <div class="form-group">
    <label class="col-md-12 control-label" for="publisher">Publisher</label>  
    <div class="col-md-12">
    <input id="publisher" name="publisher" type="text" placeholder="Publisher" class="form-control input-md" required="">
      
    </div>
  </div>
  
  <!-- Textarea -->
  <div class="form-group">
    <label class="col-md-12 control-label" for="description">Description</label>
    <div class="col-md-12">                     
      <textarea class="form-control" id="description" name="description"></textarea>
    </div>
  </div>

  </fieldset>
  </form>
    <div class="col-md-12">
    <button type='button' onclick="registerNew()" class="btn btn-primary">Save</button>
  </div>
  <div class="form-group">


</div>`; 

  var content = document.getElementById("content");
  content.innerHTML = html

}

document.getElementById('register').addEventListener("click", loadRegister);

function getForm(formId) {
  var elements = document.getElementById(formId).elements;

  var obj ={};
  for(var i = 1 ; i < elements.length ; i++){
      var item = elements.item(i);
      console.log(item.name);
      obj[item.name] = item.value;
  }

  return obj;
}
function registerNewCallback(){
  if (httpRequest.readyState === 4) {
    console.log(httpRequest.status)
    if (httpRequest.status === 201) {
      console.log(httpRequest.response);
      
      window.location.replace("index.html");
      } else {
      alert('There was a problem with the request.');
    }
  }
}
function registerNew(){

  var data = getForm("registerForm");
  console.log(data);
  makePOSTRequest("https://mycollectionapi.herokuapp.com/comic_books/", registerNewCallback, data);

}