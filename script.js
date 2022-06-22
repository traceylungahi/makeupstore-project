const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
fetch(url)
.then(resp => resp.json())
.then(data => {
    let html = " "
    data.map((items) => {
        html += `
        <div class="col-md-4">
            <div class="card" style="width:330px">
                <img class="card-img-top" src=${items.image_link} alt="Card image" style="width:100%">
                <div class="card-body">
                  <h4 class="card-title">${items.brand}</h4>
                  <p class="card-text">${items.description}</p>
                  <a href="#" class="btn btn-primary">${items.price}</a>
                </div>
              </div>
        </div>
        `
    })
    let output = document.getElementById("item").innerHTML = html 
})
.catch((error) => console.log(error))