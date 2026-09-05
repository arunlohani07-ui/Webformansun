/* =====================================
   OUR LITTLE FOREVER
   Main Website Script
===================================== */


/* -------------------------------
   OPEN STORY
-------------------------------- */

function openStory() {

  const story = document.getElementById("story");

  story.scrollIntoView({
    behavior: "smooth"
  });

}


/* -------------------------------
   FINAL SURPRISE
-------------------------------- */

function showSurprise() {

  const surprise =
    document.getElementById("surprise");

  surprise.classList.add("show");

  surprise.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

}


/* -------------------------------
   PHOTO GALLERY
   Automatically loads 1.jpg
   to 20.jpg
-------------------------------- */

const photoGrid =
  document.getElementById("photo-grid");


for (let i = 1; i <= 20; i++) {

  const photo =
    document.createElement("div");

  photo.className = "photo";


  const image =
    document.createElement("img");

  image.src =
    `assets/photos/${i}.jpg`;

  image.alt =
    `Our memory ${i}`;

  image.loading = "lazy";


  /*
    If an image hasn't been
    uploaded yet, hide it.
  */

  image.onerror = function () {

    photo.style.display = "none";

  };


  photo.appendChild(image);

  photoGrid.appendChild(photo);

}


/* -------------------------------
   SCROLL REVEAL
-------------------------------- */

const revealElements =
  document.querySelectorAll(
    ".section, .final-card, .story-card, #things > div, .timeline-item"
  );


const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";

          entry.target.style.transform =
            "translateY(0)";

          observer.unobserve(
            entry.target
          );

        }

      });

    },

    {
      threshold: 0.12
    }

  );


revealElements.forEach((element) => {

  element.style.opacity = "0";

  element.style.transform =
    "translateY(35px)";

  element.style.transition =
    "opacity 0.9s ease, transform 0.9s ease";

  observer.observe(element);

});


/* -------------------------------
   IMAGE CLICK EFFECT
-------------------------------- */

document.addEventListener(
  "click",
  function (event) {

    const image =
      event.target.closest(".photo img");

    if (!image) return;


    const overlay =
      document.createElement("div");

    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.zIndex = "9999";
    overlay.style.background =
      "rgba(8,5,12,0.94)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.padding = "20px";
    overlay.style.cursor = "zoom-out";


    const bigImage =
      document.createElement("img");

    bigImage.src = image.src;

    bigImage.style.maxWidth = "95%";
    bigImage.style.maxHeight = "90%";
    bigImage.style.objectFit = "contain";
    bigImage.style.borderRadius = "18px";


    overlay.appendChild(bigImage);

    document.body.appendChild(overlay);

    document.body.style.overflow =
      "hidden";


    overlay.onclick = function () {

      overlay.remove();

      document.body.style.overflow =
        "";

    };

  }
);
