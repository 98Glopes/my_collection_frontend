function deleteReg(name, value){

    console.log(name, value);
    var control = confirm(`Você deseja excluir ${ value }?`)

    if(control){
        var host = `https://mycollectionapi.herokuapp.com/comic_books/${name}/`
        makeRequest(host, function(){
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200) {
             
                    window.location.href = "index.html"
                } else {
                  alert('There was a problem with the request.');
                }
              }
        }, {}, 'DELETE');

    }

}