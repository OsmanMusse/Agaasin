let likecomment = document.querySelector(".path-1");
let button = document.querySelector("#btn-1");

button.addEventListener("click", function(){

  likecomment.classList.remove("on");
  likecomment.classList.add("on");

});
