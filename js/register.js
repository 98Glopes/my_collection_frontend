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
  
    var host = "https://mycollectionapi.herokuapp.com/comic_books/";
    var data = getForm("registerForm");
    console.log(data);
    makeRequest(host, registerNewCallback, data, 'POST');
  
  }