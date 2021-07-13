const card = document.querySelector(".cardInner");

card.addEventListener("click", function (e) {
    console.log("Clicked");
  card.classList.toggle('is-flipped');
});

const card1 = document.querySelector(".cardInner1");

card1.addEventListener("click", function (e) {
    console.log("Clicked");
  card1.classList.toggle('is-flipped');
});
