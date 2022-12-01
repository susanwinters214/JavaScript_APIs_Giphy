

let searchBtn = document.getElementById("submitSearch");
let searchInput = document.getElementById("searchWord");
let feedbackEle = document.getElementById("feedback");
let img = document.querySelector("img");

searchBtn.addEventListener("click", () => {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=EyJXJeOoltkXKW2L1gJbcHY4uq2zul65&s=" +
      searchInput.value,
    { mode: "cors" }
  )
    .then((response) => response.json())
    .then((res) => {
      feedbackEle.textContent = "";
      img.src = res.data.images.original.url;
      searchInput.value = "";
    })
    .catch((err) => {
      console.error(err);
      feedbackEle.textContent = err.message;
    });
});
