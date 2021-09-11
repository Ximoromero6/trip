(function() {
    const ACCESS_KEY = "aokuoXe9p189GgcswSFraFX-EO5cbckCWKH2zFFfZRw",
        SECRET_KEY = "ZA3NW4GYZIJkHGqOHlH9eE4BmDfBGRs0Jbatpr1fI7k",
        URL = `https://api.unsplash.com/topics/Fzo3zuOHN6w/photos?per_page=50&orientation=squarish&client_id=${ACCESS_KEY}`;

    let getIMage = () => {
        let xhttp = new XMLHttpRequest(),
            random = Math.floor(Math.random() * 50);

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let random__photo = JSON.parse(xhttp.responseText)[random];
                document.querySelector(".background__main__section").src = random__photo.urls !== undefined ? random__photo.urls.full : "../images/background__main__section__02.jpg";
            }
        };
        xhttp.open("GET", URL, true);
        xhttp.send();
    };

    getIMage();

    let container_mobile = document.querySelector("#header > div.container");

    document.querySelector(".open_menu_button").addEventListener("click", () => {
        container_mobile.classList.add("open");
    });

    document.querySelector(".close_menu_button").addEventListener("click", () => {
        container_mobile.classList.remove("open");
    });

})();