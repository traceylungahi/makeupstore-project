const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
fetch(url)
.then(resp => resp.json())
.then(data => {
    console.log(data)
    data.map((items) => {

    })
})