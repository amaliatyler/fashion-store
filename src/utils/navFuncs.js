export default function NavFunc() {
  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  if (isMobile.any()) {
    document.body.classList.add("_touch");
  } else {
    document.body.classList.add("_pc");
  }

  const iconMenu = document.querySelector(".header__icon");
  const menuBody = document.querySelector(".nav");

  if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
      /* блокируем возможность взаимодействия со страницей при открытом мобильном меню */
      document.body.classList.toggle("_lock");
      /* добавляем класс активности к бургеру для анимирования */
      iconMenu.classList.toggle("_active");
      /* добавляем класс активности для меню, чтобы оно выезжало */
      menuBody.classList.toggle("_active");
    });
  }
}
