function renderEdit(comic){
var html =`
<div class="card">
<div class="card-header">
  <ul class="nav nav-tabs card-header-tabs">
    <li class="nav-item">
    <a class="nav-link" role="button" href="index.html"><i class="fa fa-arrow-left"></i> </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" name="${ comic.id }" onclick="loadSingle(name)">View</a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" href="#" name="${ comic.id }" onclick="loadEdit(name)">Edit</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" name="${ comic.id }" onclick="deleteReg(name, '${ comic.name }')">Delete</a>
    </li>
  </ul>
</div>
<div class="card-body">
  <form class="form-horizontal" id="registerForm" onsubmit="return false">
    <fieldset>
    
    <!-- Form Name -->
    <legend>Register a new comic book</legend>
    
    <!-- Text input-->
    <div class="form-group">
      <label class="col-md-12 control-label" for="textinput">Title</label>  
      <div class="col-md-12">
      <input id="textinput" name="name" type="text" value="${ comic.name }" class="form-control input-md" required="">
        
      </div>
    </div>
    
    <!-- Text input-->
    <div class="form-group">
      <label class="col-md-12 control-label" for="autor">Autor</label>  
      <div class="col-md-12">
      <input id="autor" name="autor" type="text" value="${ comic.autor }" class="form-control input-md">
        
      </div>
    </div>
    
    <!-- Text input-->
    <div class="form-group">
      <label class="col-md-12 control-label" for="publisher">Publisher</label>  
      <div class="col-md-12">
      <input id="publisher" name="publisher" type="text" value="${ comic.publisher }" class="form-control input-md" required="">
        
      </div>
    </div>
    
    <!-- Textarea -->
    <div class="form-group">
      <label class="col-md-12 control-label" for="description">Description</label>
      <div class="col-md-12">                     
        <textarea class="form-control" id="description" name="description" value="${ comic.description }">${ comic.description }</textarea>
      </div>
    </div>
  
    </fieldset>
    </form>
      <div class="col-md-12">
        <button type='button' name="${ comic.id }" onclick="update(name)" class="btn btn-primary">Save</button>
      </div>
</div>
</div>
      
`
return html;
}

function loadEdit(name){
    var host = `https://mycollectionapi.herokuapp.com/comic_books/${name}/`;
    //console.log(host);
    makeGET(host, function(){
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
         
                var content = document.getElementById('content');
                var data = JSON.parse(httpRequest.response);
                content.innerHTML = renderEdit(data);
            } else {
              alert('There was a problem with the request.');
            }
          }
    })
}

function update(name){
    var host = `https://mycollectionapi.herokuapp.com/comic_books/${ name }/`;
    var data = getForm("registerForm"); //function in register.js
    console.log(host +'update \n');
    makeRequest(host, function(){
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                loadSingle(name);
            } else {
              alert('There was a problem with the request.');
            }
          }
    }, data, 'PUT');

}