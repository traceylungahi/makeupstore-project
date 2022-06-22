const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
fetch(url)
.then(resp => resp.json())
.then(data => {
    let body = " "
    data.map((items) => {
        body += `
        <div class="col-md-4">
            <div class="card" style="width:350px">
                <img class="card-img-top" src=${items.image_link} alt="Card image" style="width:80%">
                <div class="card-body">
                  <h4 class="card-title text-dark">${items.brand}</h4>
                  <p class="card-text">${items.description}</p>
                  <a href="#" class="btn btn-secondary">Price</a>
                </div>
              </div>
        </div>
        `
        document.getElementsByClassName("btn").addEventListener("click", () =>{
        document.getElementsByClassName("btn").innerHTML = items.price
        })
    })
    let output = document.getElementById("item").innerHTML = body 

})
.catch((error) => console.log(error))
