document.addEventListener('DOMContentLoaded', (event) => {
  fetchApi();
});

const url =
  "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  function fetchApi () {

  fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    let body = document.getElementById("item");

    body.innerHTML = " ";
    console.log(data[1]);

    //loop through the array

    for (let y = 0; y < data.length; y++) {
      let div_col = document.createElement("div");
      div_col.className = "col-md-4";

      let div_card = document.createElement("div");
      div_card.className = "card";
      div_card.style.width = "350px";

      let img = document.createElement("img");
      img.className = "card-img-top";
      img.src = data[y].image_link;
      img.style.width = "80%";

      let card_body = document.createElement("div");
      card_body.className = "card_body";

      let h4 = document.createElement("h4");
      h4.className = "card-title";
      h4.innerText = data[y].brand;

      let card_text = document.createElement("p");
      card_text.className = "card-text";
      card_text.innerText = data[y].description;

      let a = document.createElement("a");
      a.className = "btn btn-secondary";
      a.innerText = "Price";

      card_body.appendChild(h4);
      card_body.appendChild(card_text);
      card_body.appendChild(a);

      div_card.appendChild(img);
      div_card.appendChild(card_body);

      div_col.appendChild(div_card);

      body.appendChild(div_col);

      a.addEventListener("click", () => {
        let aValue = a.innerHTML;
        if (aValue === "Price") {
          a.innerText = data[y].price;
        } else {
          a.innerText = "Price";
        }
      });
    }
  })
  .catch((error) => console.log(error));
}