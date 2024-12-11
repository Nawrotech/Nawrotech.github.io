window.addEventListener("scroll", function() {
    const navigation = document.querySelector(".navigation");
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    console.log(navigation);

    if (scrollTop > 0) {
        navigation.classList.add("active");
    } else {
        navigation.classList.remove("active");
      }

});