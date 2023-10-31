const card = document.querySelector(".card");
const container = document.querySelector(".container");
let count = 1;
card.addEventListener("click", () => {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  //   const newCard = card.cloneNode();
  //   newCard.classList.remove("add-card");
  newCard.innerHTML = `${count++}`;
  //   count++;
  container.appendChild(newCard);

  console.log(newCard);
});
