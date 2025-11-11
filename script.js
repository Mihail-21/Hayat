// ===== TRANSLATIONS =====
const translations = {
  ru: {
    title: "Ресторан Hayat - Грузинская кухня",
    nav: {
      home: "Главная",
      about: "О нас",
      menu: "Меню",
      bar: "Бар",
      reservation: "Бронирование",
      reviews: "Отзывы",
      contact: "Контакты",
    },
    hero: {
      title: "Добро пожаловать в Hayat",
      subtitle: "Аутентичная грузинская кухня в сердце города",
      cta: "Забронировать столик",
    },
    about: {
      title: "О ресторане",
      description:
        "Ресторан Hayat - это место, где традиции грузинской гостеприимства встречаются с современными кулинарными стандартами. Мы предлагаем вам увлекательное путешествие в мир богатых вкусов и ароматов Грузии, где каждое блюдо рассказывает свою уникальную историю.",
      description2:
        "Наш шеф-повар с многолетним опытом воссоздает классические рецепты, используя только лучшие ингредиенты и секретные техники приготовления. От сочных шашлыков до нежных хачапури - каждый ужин у нас становится незабываемым событием.",
    },
    menu: {
      title: "Наше меню",
      appetizers: "Закуски",
      salads: "Салаты",
      khachapuri: "Хачапури",
      khinkali: "Хинкали",
      main: "Основные блюда",
      grill: "Гриль",
      soups: "Супы",
      garnishes: "Гарниры",
      sauces: "Соусы",
      breads: "Хлебы",
      appetizers: {
        items: {
          pkhali: {
            name: "Пхали",
            description:
              "Традиционная закуска из шпината с грецкими орехами и специями",
          },
          chakhokhbili: {
            name: "Чахохбили",
            description: "Тушеная курица с томатами и зеленью",
          },
          badrijani: {
            name: "Бадриджани",
            description: "Баклажаны с ореховой пастой и гранатом",
          },
        },
      },
      salads: {
        items: {
          georgian: {
            name: "Грузинский салат",
            description: "Свежие овощи с грузинскими специями",
          },
        },
      },
    },
    bar: {
      title: "Барное меню",
      wines: "Вина",
      cocktails: "Коктейли",
      spirits: "Крепкие напитки",
      soft: "Безалкогольные",
      wines: {
        items: {
          saperavi: {
            name: "Саперави",
            description: "Красное сухое вино из Кахети",
          },
          kindzmarauli: {
            name: "Киндзмараули",
            description: "Полусладкое красное вино",
          },
          tsinandali: {
            name: "Цинандали",
            description: "Белое сухое вино с фруктовыми нотками",
          },
          rkatsiteli: {
            name: "Ркацители",
            description: "Традиционное белое вино Грузии",
          },
        },
      },
      cocktails: {
        items: {
          chacha_mojito: {
            name: "Чача Мохито",
            description: "Грузинская чача с мятой и лаймом",
          },
          tbilisi_sunrise: {
            name: "Рассвет Тбилиси",
            description: "Экзотический коктейль с гранатовым соком",
          },
          georgian_mule: {
            name: "Грузинский мул",
            description: "Чача с имбирем и грузинскими специями",
          },
        },
      },
      spirits: {
        items: {
          chacha: {
            name: "Чача",
            description: "Грузинская виноградная водка",
          },
          aragi: {
            name: "Араги",
            description: "Традиционный грузинский самогон",
          },
        },
      },
      soft: {
        items: {
          natakhari: {
            name: "Натахтари",
            description: "Натуральный лимонад из Грузии",
          },
          borjomi: {
            name: "Боржоми",
            description: "Легендарная минеральная вода",
          },
          uzo: {
            name: "Узо",
            description: "Традиционный грузинский напиток из тархуна",
          },
        },
      },
    },
    reservation: {
      title: "Бронирование столика",
      name: "Имя",
      phone: "Телефон",
      date: "Дата",
      time: "Время",
      guests: "Количество гостей",
      occasion: "Повод",
      occasion_default: "Выберите повод",
      birthday: "День рождения",
      anniversary: "Годовщина",
      business: "Деловая встреча",
      date_night: "Свидание",
      family: "Семейный ужин",
      friends: "Встреча с друзьями",
      notes: "Особые пожелания",
      submit: "Забронировать",
    },
    reviews: {
      title: "Отзывы наших гостей",
      reviews1: {
        name: "Александр Петров",
        date: "15 ноября 2024",
        text: "Потрясающий ресторан! Атмосфера настоящей Грузии, блюда просто восхитительные. Особенно понравились хинкали и шашлык. Обязательно вернемся снова!",
      },
      reviews2: {
        name: "Мария Иванова",
        date: "10 ноября 2024",
        text: "Идеальное место для семейных ужинов. Дети тоже остались в восторге от блюд. Отличное обслуживание, красивый интерьер. Рекомендую!",
      },
      reviews3: {
        name: "Дмитрий Смирнов",
        date: "5 ноября 2024",
        text: "Отличная грузинская кухня! Хачапури просто обалденные, вино тоже на высоте. Единственное - иногда нужно ждать заказ дольше, чем хотелось бы.",
      },
      reviews4: {
        name: "Елена Козлова",
        date: "1 ноября 2024",
        text: "Праздновали здесь день рождения - было просто великолепно! Персонал очень attentive, помогли с выбором блюд. Все гости остались довольны.",
      },
      reviews5: {
        name: "Антон Волков",
        date: "28 октября 2024",
        text: "Аутентичная грузинская атмосфера! Музыка живая, блюда вкусные, порции щедрые. Чача - отдельная история! Настоящее погружение в Грузию.",
      },
      reviews6: {
        name: "Ольга Новикова",
        date: "25 октября 2024",
        text: "Очень хорошее место для романтического ужина. Красивая атмосфера, вкусная еда. Немного шумно по выходным, но это добавляет жизни ресторану.",
      },
    },
    contact: {
      title: "Контакты",
      address_title: "Адрес",
      address: "ул. Тверская, 15, Москва",
      phone_title: "Телефон",
      phone: "+7 (495) 123-45-67",
      email_title: "Email",
      email: "info@hayat-restaurant.ru",
      hours_title: "Часы работы",
      hours: "Пн-Вс: 12:00 - 23:00",
    },
    footer: {
      about: "О Hayat",
      about_text:
        "Ресторан аутентичной грузинской кухни, где традиции встречаются с современностью.",
      quick_links: "Быстрые ссылки",
      about_link: "О нас",
      menu_link: "Меню",
      reservation_link: "Бронирование",
      follow: "Следите за нами",
      follow_text: "Подпишитесь на наши социальные сети для акций и новостей.",
      copyright: "© 2024 Hayat Restaurant. Все права защищены.",
    },
  },
  en: {
    title: "Hayat Restaurant - Georgian Cuisine",
    nav: {
      home: "Home",
      about: "About",
      menu: "Menu",
      bar: "Bar",
      reservation: "Reservation",
      reviews: "Reviews",
      contact: "Contact",
    },
    hero: {
      title: "Welcome to Hayat",
      subtitle: "Authentic Georgian cuisine in the heart of the city",
      cta: "Book a Table",
    },
    about: {
      title: "About Restaurant",
      description:
        "Hayat Restaurant is a place where Georgian hospitality traditions meet modern culinary standards. We offer you a fascinating journey into the world of rich flavors and aromas of Georgia, where each dish tells its unique story.",
      description2:
        "Our chef with many years of experience recreates classic recipes using only the best ingredients and secret cooking techniques. From juicy kebabs to tender khachapuri - every dinner with us becomes an unforgettable event.",
    },
    menu: {
      title: "Our Menu",
      appetizers: "Appetizers",
      salads: "Salads",
      khachapuri: "Khachapuri",
      khinkali: "Khinkali",
      main: "Main Dishes",
      grill: "Grill",
      soups: "Soups",
      garnishes: "Garnishes",
      sauces: "Sauces",
      breads: "Breads",
      appetizers: {
        items: {
          pkhali: {
            name: "Pkhali",
            description:
              "Traditional spinach appetizer with walnuts and spices",
          },
          chakhokhbili: {
            name: "Chakhokhbili",
            description: "Stewed chicken with tomatoes and herbs",
          },
          badrijani: {
            name: "Badrijani",
            description: "Eggplants with nut paste and pomegranate",
          },
        },
      },
      salads: {
        items: {
          georgian: {
            name: "Georgian Salad",
            description: "Fresh vegetables with Georgian spices",
          },
        },
      },
    },
    bar: {
      title: "Bar Menu",
      wines: "Wines",
      cocktails: "Cocktails",
      spirits: "Spirits",
      soft: "Soft Drinks",
      wines: {
        items: {
          saperavi: {
            name: "Saperavi",
            description: "Dry red wine from Kakheti",
          },
          kindzmarauli: {
            name: "Kindzmarauli",
            description: "Semi-sweet red wine",
          },
          tsinandali: {
            name: "Tsinandali",
            description: "Dry white wine with fruity notes",
          },
          rkatsiteli: {
            name: "Rkatsiteli",
            description: "Traditional Georgian white wine",
          },
        },
      },
      cocktails: {
        items: {
          chacha_mojito: {
            name: "Chacha Mojito",
            description: "Georgian chacha with mint and lime",
          },
          tbilisi_sunrise: {
            name: "Tbilisi Sunrise",
            description: "Exotic cocktail with pomegranate juice",
          },
          georgian_mule: {
            name: "Georgian Mule",
            description: "Chacha with ginger and Georgian spices",
          },
        },
      },
      spirits: {
        items: {
          chacha: {
            name: "Chacha",
            description: "Georgian grape vodka",
          },
          aragi: {
            name: "Aragi",
            description: "Traditional Georgian moonshine",
          },
        },
      },
      soft: {
        items: {
          natakhari: {
            name: "Natakhari",
            description: "Natural lemonade from Georgia",
          },
          borjomi: {
            name: "Borjomi",
            description: "Legendary mineral water",
          },
          uzo: {
            name: "Uzo",
            description: "Traditional Georgian tarragon drink",
          },
        },
      },
    },
    reservation: {
      title: "Table Reservation",
      name: "Name",
      phone: "Phone",
      date: "Date",
      time: "Time",
      guests: "Number of Guests",
      occasion: "Occasion",
      occasion_default: "Select Occasion",
      birthday: "Birthday",
      anniversary: "Anniversary",
      business: "Business Meeting",
      date_night: "Date Night",
      family: "Family Dinner",
      friends: "Friends Gathering",
      notes: "Special Requests",
      submit: "Reserve",
    },
    reviews: {
      title: "Guest Reviews",
      reviews1: {
        name: "Alexander Petrov",
        date: "November 15, 2024",
        text: "Amazing restaurant! Real Georgian atmosphere, dishes are just delicious. Especially liked khinkali and kebabs. We will definitely come back again!",
      },
      reviews2: {
        name: "Maria Ivanova",
        date: "November 10, 2024",
        text: "Perfect place for family dinners. The children were also delighted with the dishes. Excellent service, beautiful interior. I recommend!",
      },
      reviews3: {
        name: "Dmitry Smirnov",
        date: "November 5, 2024",
        text: "Great Georgian cuisine! Khachapuri are just amazing, wine is also top-notch. The only thing - sometimes you have to wait for an order longer than you'd like.",
      },
      reviews4: {
        name: "Elena Kozlova",
        date: "November 1, 2024",
        text: "We celebrated a birthday here - it was just magnificent! The staff is very attentive, helped with choosing dishes. All guests were satisfied.",
      },
      reviews5: {
        name: "Anton Volkov",
        date: "October 28, 2024",
        text: "Authentic Georgian atmosphere! Live music, tasty food, generous portions. Chacha is a separate story! A real immersion into Georgia.",
      },
      reviews6: {
        name: "Olga Novikova",
        date: "October 25, 2024",
        text: "Very good place for a romantic dinner. Beautiful atmosphere, tasty food. A bit noisy on weekends, but it adds life to the restaurant.",
      },
    },
    contact: {
      title: "Contact",
      address_title: "Address",
      address: "Tverskaya Street, 15, Moscow",
      phone_title: "Phone",
      phone: "+7 (495) 123-45-67",
      email_title: "Email",
      email: "info@hayat-restaurant.ru",
      hours_title: "Working Hours",
      hours: "Mon-Sun: 12:00 - 23:00",
    },
    footer: {
      about: "About Hayat",
      about_text:
        "Restaurant of authentic Georgian cuisine where traditions meet modernity.",
      quick_links: "Quick Links",
      about_link: "About Us",
      menu_link: "Menu",
      reservation_link: "Reservation",
      follow: "Follow Us",
      follow_text: "Subscribe to our social networks for promotions and news.",
      copyright: "© 2024 Hayat Restaurant. All rights reserved.",
    },
  },
  bg: {
    title: "Ресторант Hayat - Грузинска кухня",
    nav: {
      home: "Начало",
      about: "За нас",
      menu: "Меню",
      bar: "Бар",
      reservation: "Резервация",
      reviews: "Ревюта",
      contact: "Контакт",
    },
    hero: {
      title: "Добре дошли в Hayat",
      subtitle: "Автентична грузинска кухня в сърцето на града",
      cta: "Резервирайте маса",
    },
    about: {
      title: "За ресторанта",
      description:
        "Ресторант Hayat е място, където традициите на грузинското гостоприемство срещват модерните кулинарни стандарти. Предлагаме ви завладяващо пътешествие в света на богатите вкусове и аромати на Грузия, където всяко ястие разказва своя уникална история.",
      description2:
        "Нашият готвач с многогодишен опит воссъздава класически рецепти, използвайки само най-добрите съставки и тайни техники за готвене. От сочни кебапи до нежни хачапури - всяка вечеря при нас става незабравимо събитие.",
    },
    menu: {
      title: "Нашето меню",
      appetizers: "Предястия",
      salads: "Салати",
      khachapuri: "Хачапури",
      khinkali: "Хинкали",
      main: "Основни ястия",
      grill: "Грил",
      soups: "Супи",
      garnishes: "Гарнитури",
      sauces: "Сосове",
      breads: "Хлябове",
      appetizers: {
        items: {
          pkhali: {
            name: "Пхали",
            description: "Традиционно предястие от спанак с орехи и подправки",
          },
          chakhokhbili: {
            name: "Чахохбили",
            description: "Задушено пиле с домати и подправки",
          },
          badrijani: {
            name: "Бадрижани",
            description: "Патладжани с орехова паста и нар",
          },
        },
      },
      salads: {
        items: {
          georgian: {
            name: "Грузинска салата",
            description: "Пресни зеленчуци с грузински подправки",
          },
        },
      },
    },
    bar: {
      title: "Бар меню",
      wines: "Вина",
      cocktails: "Коктейли",
      spirits: "Алкохол",
      soft: "Безалкохолни",
      wines: {
        items: {
          saperavi: {
            name: "Саперави",
            description: "Сухо червено вино от Какети",
          },
          kindzmarauli: {
            name: "Киндзмараули",
            description: "Полусладко червено вино",
          },
          tsinandali: {
            name: "Цинандали",
            description: "Сухо бяло вино с плодови нотки",
          },
          rkatsiteli: {
            name: "Ркацители",
            description: "Традиционно грузинско бяло вино",
          },
        },
      },
      cocktails: {
        items: {
          chacha_mojito: {
            name: "Чача Мохито",
            description: "Грузинска чача с мента и лайм",
          },
          tbilisi_sunrise: {
            name: "Залез в Тбилиси",
            description: "Екзотичен коктейл с нар сок",
          },
          georgian_mule: {
            name: "Грузински мул",
            description: "Чача с джинджифил и грузински подправки",
          },
        },
      },
      spirits: {
        items: {
          chacha: {
            name: "Чача",
            description: "Грузинска гроздова водка",
          },
          aragi: {
            name: "Араги",
            description: "Традиционна грузинска ракия",
          },
        },
      },
      soft: {
        items: {
          natakhari: {
            name: "Натахтари",
            description: "Природен лимонад от Грузия",
          },
          borjomi: {
            name: "Боржоми",
            description: "Легендарна минерална вода",
          },
          uzo: {
            name: "Узо",
            description: "Традиционна грузинска напитка от тархун",
          },
        },
      },
    },
    reservation: {
      title: "Резервация на маса",
      name: "Име",
      phone: "Телефон",
      date: "Дата",
      time: "Час",
      guests: "Брой гости",
      occasion: "Повод",
      occasion_default: "Изберете повод",
      birthday: "Рожден ден",
      anniversary: "Годишнина",
      business: "Бизнес среща",
      date_night: "Свидание",
      family: "Семейна вечеря",
      friends: "Сбирка с приятели",
      notes: "Специални пожелания",
      submit: "Резервирай",
    },
    reviews: {
      title: "Ревюта на гости",
      reviews1: {
        name: "Александър Петров",
        date: "15 ноември 2024",
        text: "Невероятен ресторант! Реална грузинска атмосфера, ястията са просто вкусни. Особено харесах хинкали и кебапи. Непременно ще се върнем отново!",
      },
      reviews2: {
        name: "Мария Иванова",
        date: "10 ноември 2024",
        text: "Перфектно място за семейни вечери. Децата също бяха очаровани от ястията. Отлично обслужване, красив интериор. Препоръчвам!",
      },
      reviews3: {
        name: "Дмитрий Смирнов",
        date: "5 ноември 2024",
        text: "Отлична грузинска кухня! Хачапурите са просто невероятни, виното също е на високо ниво. Единственото - понякога трябва да се чака поръчката по-дълго от желаното.",
      },
      reviews4: {
        name: "Елена Козлова",
        date: "1 ноември 2024",
        text: "Отбелязахме рожден ден тук - беше просто великолепно! Персоналът е много внимателен, помогна с избора на ястия. Всички гости бяха доволни.",
      },
      reviews5: {
        name: "Антон Волков",
        date: "28 октомври 2024",
        text: "Автентична грузинска атмосфера! Жива музика, вкусна храна, щедри порции. Чачата е отделна история! Реално потапяне в Грузия.",
      },
      reviews6: {
        name: "Олга Новикова",
        date: "25 октомври 2024",
        text: "Много добро място за романтична вечеря. Красива атмосфера, вкусна храна. Малко шумно през уикендите, но това добавя живот на ресторанта.",
      },
    },
    contact: {
      title: "Контакт",
      address_title: "Адрес",
      address: "ул. Тверская, 15, Москва",
      phone_title: "Телефон",
      phone: "+7 (495) 123-45-67",
      email_title: "Email",
      email: "info@hayat-restaurant.ru",
      hours_title: "Работно време",
      hours: "Пн-Нд: 12:00 - 23:00",
    },
    footer: {
      about: "За Hayat",
      about_text:
        "Ресторант на автентична грузинска кухня, където традициите срещат модерността.",
      quick_links: "Бързи връзки",
      about_link: "За нас",
      menu_link: "Меню",
      reservation_link: "Резервация",
      follow: "Последвайте ни",
      follow_text:
        "Абонирайте се за нашите социални мрежи за промоции и новини.",
      copyright: "© 2024 Hayat Restaurant. Всички права запазени.",
    },
  },
};

// ===== INITIALIZATION =====
document.addEventListener("DOMContentLoaded", function () {
  initializeLanguage();
  initializeMenu();
  initializeBarMenu();
  initializeMobileMenu();
  initializeSmoothScroll();
  initializeHeaderScroll();
  initializeReservationForm();
  initializeAnimations();
  console.log("Hayat Restaurant initialized successfully");
});

// ===== LANGUAGE FUNCTIONALITY =====
let currentLanguage = "ru";

function initializeLanguage() {
  const langButtons = document.querySelectorAll(".lang-btn");

  langButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const lang = this.dataset.lang;
      changeLanguage(lang);

      langButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

function changeLanguage(lang) {
  currentLanguage = lang;

  // Update document title
  document.title = translations[lang].title;

  // Update all elements with data-i18n attribute
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const key = element.dataset.i18n;
    const translation = getNestedTranslation(translations[lang], key);
    if (translation) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        if (element.placeholder) {
          element.placeholder = translation;
        } else {
          element.value = translation;
        }
      } else {
        element.textContent = translation;
      }
    }
  });

  // Update form placeholders
  updateFormPlaceholders(lang);

  console.log(`Language changed to: ${lang}`);
}

function getNestedTranslation(obj, key) {
  return key
    .split(".")
    .reduce((current, prop) => current && current[prop], obj);
}

function updateFormPlaceholders(lang) {
  const notesTextarea = document.getElementById("notes");
  if (notesTextarea) {
    notesTextarea.placeholder =
      lang === "ru"
        ? "Расскажите о ваших особых пожеланиях..."
        : lang === "en"
        ? "Tell us about your special requests..."
        : "Разкажете ни за вашите специални желания...";
  }
}

// ===== MENU FUNCTIONALITY =====
function initializeMenu() {
  const menuTabs = document.querySelectorAll(".menu-tab[data-category]");
  const menuContents = document.querySelectorAll(".menu-content");

  menuTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const category = this.dataset.category;

      menuTabs.forEach((t) => t.classList.remove("active"));
      menuContents.forEach((c) => c.classList.remove("active"));

      this.classList.add("active");
      const targetContent = document.getElementById(category);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
}

// ===== MOBILE MENU =====
function initializeMobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      nav.classList.toggle("active");
    });
  }

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        menuToggle.classList.remove("active");
        nav.classList.remove("active");
      }
    });
  });
}

// ===== SMOOTH SCROLL =====
function initializeSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// ===== HEADER SCROLL EFFECT =====
function initializeHeaderScroll() {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// ===== RESERVATION FORM =====
function initializeReservationForm() {
  const form = document.getElementById("reservationForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      console.log("Reservation data:", data);

      // Show success message
      showReservationSuccess();

      // Reset form
      form.reset();
    });
  }
}

function showReservationSuccess() {
  const successMessage = document.createElement("div");
  successMessage.className = "reservation-success";
  successMessage.innerHTML = `
        <div class="success-content">
            <i class="fas fa-check-circle"></i>
            <h3>${
              getNestedTranslation(
                translations[currentLanguage],
                "reservation.success_title"
              ) || "Спасибо!"
            }</h3>
            <p>${
              getNestedTranslation(
                translations[currentLanguage],
                "reservation.success_message"
              ) || "Ваша заявка принята. Мы свяжемся с вами в ближайшее время."
            }</p>
            <button class="close-btn">${
              getNestedTranslation(
                translations[currentLanguage],
                "reservation.close"
              ) || "Закрыть"
            }</button>
        </div>
    `;

  document.body.appendChild(successMessage);

  // Add styles
  const style = document.createElement("style");
  style.textContent = `
        .reservation-success {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .success-content {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
            max-width: 400px;
            animation: slideUp 0.3s ease;
        }
        
        .success-content i {
            font-size: 3rem;
            color: #4caf50;
            margin-bottom: 1rem;
        }
        
        .success-content h3 {
            margin-bottom: 1rem;
            color: #333;
        }
        
        .success-content p {
            margin-bottom: 1.5rem;
            color: #666;
        }
        
        .close-btn {
            background: linear-gradient(45deg, #ff4444, #ff6666);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: bold;
            transition: transform 0.3s ease;
        }
        
        .close-btn:hover {
            transform: scale(1.05);
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
  document.head.appendChild(style);

  // Close button functionality
  const closeBtn = successMessage.querySelector(".close-btn");
  closeBtn.addEventListener("click", function () {
    successMessage.remove();
    style.remove();
  });

  // Auto close after 5 seconds
  setTimeout(() => {
    if (successMessage.parentNode) {
      successMessage.remove();
      style.remove();
    }
  }, 5000);
}

// ===== ANIMATIONS =====
function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Add fade-in class to elements
  const animateElements = document.querySelectorAll(
    ".section-title, .menu-item, .bar-item, .review-card"
  );
  animateElements.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });
}

// ===== FORM VALIDATION =====
function validateForm(form) {
  const inputs = form.querySelectorAll("input[required], select[required]");
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });

  return isValid;
}

// ===== UTILITIES =====
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Set minimum date for reservation to today
function setMinDate() {
  const dateInput = document.getElementById("date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
  }
}

// Initialize date restriction
setMinDate();
