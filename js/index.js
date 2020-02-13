function renderHome(comic){
var html = `
            <div class="col-md-4">
            <h2> ${ comic.name }</h2>
            <p>Autor: ${ comic.autor }<br />Publisher: ${ comic.publisher }</p>
            <p style="text-overflow: ellipsis;">${ comic.description.slice(0,100)}...</p>
            <p>
            <a class="btn btn-secondary" href="#" role="button" name="${ comic.id }" onclick="loadSingle(name)"><i class="fa fa-book"></i> </a>
            <a class="btn btn-secondary" href="#" role="button" name="${ comic.id }" onclick="loadEdit(name)"><i class="fa fa-pencil"></i> </a>
            <a class="btn btn-secondary" href="#" role="button" name="${ comic.id }" id="${ comic.name }" onclick="deleteReg(name, id)"><i class="fa fa-times"></i> </a>
            </p>
            </div>

`;
    return html;
}



function distributeHTML(element, index, array){

    var content = document.getElementById("homeContent");
    content.insertAdjacentHTML("afterbegin", renderHome(element))

}


bodyTag = document.getElementsByTagName('body');
bodyTag.onload = makeGET('https://mycollectionapi.herokuapp.com/comic_books/', loadHome);

function loadHome() {
 if (httpRequest.readyState === 4) {
   if (httpRequest.status === 200) {

       var content = document.getElementById('content');
       content.innerHTML = "<div class='row' id='homeContent'></div>"
       var data = JSON.parse(httpRequest.response);
       data.forEach(distributeHTML);
   } else {
     alert('There was a problem with the request.');
   }
 }
}