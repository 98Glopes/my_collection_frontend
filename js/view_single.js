function renderSingle(comic){
var html =`
<div class="card">
<div class="card-header">
  <ul class="nav nav-tabs card-header-tabs">
    <li class="nav-item">
    <a class="nav-link" role="button" href="index.html"><i class="fa fa-arrow-left"></i> </a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" href="#" name="${ comic.id }" onclick="loadSingle(name)">View</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" name="${ comic.id }" onclick="loadEdit(name)">Edit</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" name="${ comic.id }" onclick="deleteReg(name, '${ comic.name }')">Delete</a>
    </li> 
  </ul>
</div>
<div class="card-body">
  <h3 class="card-title">${ comic.name }</h3>
  <p class="card-text">Autor: ${ comic.autor } <br />Publisher: ${ comic.publisher }  </p>
  <p class="card-text">${ comic.description }</p>
</div>
</div>
`
return html;
}

function loadSingle(name){
    var host = `https://mycollectionapi.herokuapp.com/comic_books/${name}/`;
    console.log(host);
    makeGET(host, function(){
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
         
                var content = document.getElementById('content');
                var data = JSON.parse(httpRequest.response);
                content.innerHTML = renderSingle(data);
            } else {
              alert('There was a problem with the request.');
            }
          }
    })
}