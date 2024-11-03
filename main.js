let hamb = document.querySelector(".hamb");
let navMenu = document.querySelector(".menu");

hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamb.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".title-nav");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamb.classList.remove("active");
  navMenu.classList.remove("active");
}

// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("burger").addEventListener("click", function() {
//         document.querySelector(".header").classList.toggle("open")
//     })
// })

// // Закрыть меню при нажатии на Esc
// window.addEventListener('keydown', (e) => {
//     if (e.key === "Escape") {
//         // Действие при клике
//         document.querySelector(".header").classList.remove("open")
//     }
// });

// // Закрыть меню при клике вне его
// document.getElementById("menu").addEventListener('click', event => {
//     event._isClickWithInMenu = true;
// });
// document.getElementById("burger").addEventListener('click', event => {
//     event._isClickWithInMenu = true;
// });
// document.body.addEventListener('click', event => {
//     if (event._isClickWithInMenu) return;
//     // Действие при клике
//     document.querySelector(".header").classList.remove("open")
// });


// Модальні вікна Works Show


// Відкрити модальне -bubbleshow- вікно
document.getElementById("open-bubbleshow-modall-btn").addEventListener("click", function() {
  document.getElementById("bubbleshow-modall").classList.add("open") 
})
// Закрити модальне вікно
document.getElementById("close-bubbleshow-modall-btn").addEventListener("click", function() {
  document.getElementById("bubbleshow-modall").classList.remove("open")
})
// Закрити модальне вікно при натискані на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("bubbleshow-modall").classList.remove("open")
  }
});
// Закрити модальне вікно при кліку на полі сторінки
document
  .querySelector('#bubbleshow-modall .mod-descript')
  .addEventListener('click', event => {
    event._isClickWithInModal = true;
  });
document.getElementById("bubbleshow-modall").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});

// =======================================================================

// Відкрити модальне -balloonshow- вікно
document.getElementById("open-balloonshow-modall-btn").addEventListener("click", function() {
  document.getElementById("balloonshow-modall").classList.add("open")
})
// Закрити модальне вікно
document.getElementById("close-balloonshow-modall-btn").addEventListener("click", function() {
  document.getElementById("balloonshow-modall").classList.remove("open")
})
// Закрити модальне вікно при натискані на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("balloonshow-modall").classList.remove("open")
  }
});
// Закрити модальне вікно при кліку на полі сторінки
document
  .querySelector('#balloonshow-modall .mod-descript')
  .addEventListener('click', event => {
    event._isClickWithInModal = true;
  });
document.getElementById("balloonshow-modall").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});

// =======================================================================
// Відкрити модальне -neonshow- вікно
document.getElementById("open-neonshow-modall-btn").addEventListener("click", function() {
  document.getElementById("neonshow-modall").classList.add("open")
})
// Закрити модальне вікно
document.getElementById("close-neonshow-modall-btn").addEventListener("click", function() {
  document.getElementById("neonshow-modall").classList.remove("open")
})
// Закрити модальне вікно при натискані на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("neonshow-modall").classList.remove("open")
  }
});
// Закрити модальне вікно при кліку на полі сторінки
document
  .querySelector('#neonshow-modall .mod-descript')
  .addEventListener('click', event => {
    event._isClickWithInModal = true;
  });
document.getElementById("neonshow-modall").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});

// =======================================================================
// Відкрити модальне -neonballoon- вікно
document.getElementById("open-neonballoon-modall-btn").addEventListener("click", function() {
  document.getElementById("neonballoon-modall").classList.add("open")
})
// Закрити модальне вікно
document.getElementById("close-neonballoon-modall-btn").addEventListener("click", function() {
  document.getElementById("neonballoon-modall").classList.remove("open")
})
// Закрити модальне вікно при натискані на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("neonballoon-modall").classList.remove("open")
  }
});
// Закрити модальне вікно при кліку на полі сторінки
document
  .querySelector('#neonballoon-modall .mod-descript')
  .addEventListener('click', event => {
    event._isClickWithInModal = true;
  });
document.getElementById("neonballoon-modall").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});

// =======================================================================

// МОДАЛЬНІ ВІКНА ІНШІ ПОСЛУГИ

// Відкрити модальне -quest- вікно
document.getElementById("open-quest-modall-btn").addEventListener("click", function() {
    document.getElementById("quest-modall").classList.add("open")
})
  // document
  //   .getElementById('open-quest-modall-btn')
  //   .addEventListener('click', function () {
  //     document.getElementById('item').classList.add('open');
  //   });
  // Закрити модальне вікно
  document.getElementById("close-quest-modall-btn").addEventListener("click", function() {
    document
      .getElementById('quest-modall')
      .classList.remove('open');
  })
  // Закрити модальне вікно при натискані на Esc
  window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("quest-modall").classList.remove("open")
    }
  });
  // Закрити модальне вікно при кліку на полі сторінки
  document
    .querySelector('#quest-modall .mod-descript')
    .addEventListener('click', event => {
      event._isClickWithInModal = true;
    });
  document.getElementById("quest-modall").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
  });
  
  // =======================================================================

  // Відкрити модальне -livemusic- вікно
document.getElementById("open-livemusic-modall-btn").addEventListener("click", function() {
  document.getElementById("livemusic-modall").classList.add("open")
})
// Закрити модальне вікно
document.getElementById("close-livemusic-modall-btn").addEventListener("click", function() {
  document.getElementById("livemusic-modall").classList.remove("open")
})
// Закрити модальне вікно при натискані на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("livemusic-modall").classList.remove("open")
  }
});
// Закрити модальне вікно при кліку на полі сторінки
document
  .querySelector('#livemusic-modall .mod-descript')
  .addEventListener('click', event => {
    event._isClickWithInModal = true;
  });
document.getElementById("livemusic-modall").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});

// =======================================================================
  
  // Відкрити модальне --twist-- вікно
  document.getElementById("open-twist-modall-btn").addEventListener("click", function() {
    document.getElementById("twist-modall").classList.add("open")
  })
  // Закрити модальне вікно
  document.getElementById("close-twist-modall-btn").addEventListener("click", function() {
    document.getElementById("twist-modall").classList.remove("open")
  })
  // Закрити модальне вікно при натискані на Esc
  window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("twist-modall").classList.remove("open")
    }
  });
  // Закрити модальне вікно при кліку на полі сторінки
  document
    .querySelector('#twist-modall .mod-descript')
    .addEventListener('click', event => {
      event._isClickWithInModal = true;
    });
  document.getElementById("twist-modall").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
  });
  
  // ============================================================================
  
  // Відкрити модальне --surball-- вікно
  document.getElementById("open-surball-modall-btn").addEventListener("click", function() {
    document.getElementById("surball-modall").classList.add("open")
  })
  // Закрити модальне вікно
  document.getElementById("close-surball-modall-btn").addEventListener("click", function() {
    document.getElementById("surball-modall").classList.remove("open")
  })
  // Закрити модальне вікно при натискані на Esc
  window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("surball-modall").classList.remove("open")
    }
  });
  // Закрити модальне вікно при кліку на полі сторінки
  document
    .querySelector('#surball-modall .mod-descript')
    .addEventListener('click', event => {
      event._isClickWithInModal = true;
    });
  document.getElementById("surball-modall").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
  });
  
  // =========================================================================
  
  // Відкрити модальне --aqua-- вікно
  document.getElementById("open-aqua-modall-btn").addEventListener("click", function() {
    document.getElementById("aqua-modall").classList.add("open")
  })
  // Закрити модальне вікно
  document.getElementById("close-aqua-modall-btn").addEventListener("click", function() {
    document.getElementById("aqua-modall").classList.remove("open")
  })
  // Закрити модальне вікно при натискані на Esc
  window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("aqua-modall").classList.remove("open")
    }
  });
  // Закрити модальне вікно при кліку на полі сторінки
  document
    .querySelector('#aqua-modall .mod-descript')
    .addEventListener('click', event => {
      event._isClickWithInModal = true;
    });
  document.getElementById("aqua-modall").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
  });
  
  // =========================================================================

    // Відкрити модальне --tatu-- вікно
    document.getElementById("open-tatu-modall-btn").addEventListener("click", function() {
      document.getElementById("tatu-modall").classList.add("open")
    })
    // Закрити модальне вікно
    document.getElementById("close-tatu-modall-btn").addEventListener("click", function() {
      document.getElementById("tatu-modall").classList.remove("open")
    })
    // Закрити модальне вікно при натискані на Esc
    window.addEventListener('keydown', (e) => {
      if (e.key === "Escape") {
          document.getElementById("tatu-modall").classList.remove("open")
      }
    });
    // Закрити модальне вікно при кліку на полі сторінки
    document
      .querySelector('#tatu-modall .mod-descript')
      .addEventListener('click', event => {
        event._isClickWithInModal = true;
      });
    document.getElementById("tatu-modall").addEventListener('click', event => {
      if (event._isClickWithInModal) return;
      event.currentTarget.classList.remove('open');
    });
    
    // =========================================================================
  
  // Відкрити модальне --master-- вікно
  document.getElementById("open-master-modall-btn").addEventListener("click", function() {
    document.getElementById("master-modall").classList.add("open")
  })
  // Закрити модальне вікно
  document.getElementById("close-master-modall-btn").addEventListener("click", function() {
    document.getElementById("master-modall").classList.remove("open")
  })
  // Закрити модальне вікно при натискані на Esc
  window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("master-modall").classList.remove("open")
    }
  });
  // Закрити модальне вікно при кліку на полі сторінки
  document
    .querySelector('#master-modall .mod-descript')
    .addEventListener('click', event => {
      event._isClickWithInModal = true;
    });
  document.getElementById("master-modall").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
  });


// slick.min



// slider&modals

let slideToShow = 0;

const modalBtns = document.querySelectorAll('.gallery-modal-btn');

modalBtns.forEach(function (button) {

    button.addEventListener('click', function () {
        const slideNumbeToShow = button.getAttribute('data-index');

        slideToShow = Number(slideNumbeToShow);

        console.log(slideToShow);
    });

});

// Запуск бібліотеки модального вікна
MicroModal.init({
    onShow: function () {
        slider.go(slideToShow);
    }

});




// Запуск бібліотеки слайдеру

const sliderContainer = document.querySelector('.splide');

const slider = new Splide(sliderContainer).mount();
