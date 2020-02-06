function render_comics(comic){
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

    content.insertAdjacentHTML("afterbegin", render_comics(element))

}

//data.forEach(distributeHTML);

bodyTag = document.getElementsByTagName('body');
bodyTag.onload = makeRequest('http://0.0.0.0:5000/comic_books/', handleCallback);

function handleCallback() {
 if (httpRequest.readyState === 4) {
   if (httpRequest.status === 200) {
       var data = JSON.parse(httpRequest.response);
       data.forEach(distributeHTML);
   } else {
     alert('There was a problem with the request.');
   }
 }
}