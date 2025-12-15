// ===== TRANSLATIONS =====

// ===== INITIALIZATION =====
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Content Loaded - Initializing functions");
  initializeLanguage();
  initializeMenu();
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

  // Update all elements with data-i18n attribute
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const key = element.dataset.i18n;
    const translation = getNestedTranslation(
      {
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
              "История ресторана «Хаят» Ресторан «Хаят» появился в Варне в 2023 году — из желания создать место, где каждый сможет почувствовать вкус настоящего Кавказа и тепло домашнего угощения. Мы выросли среди ароматов свежего лаваша, дымных шашлыков и застолий, где за одним столом собирались родные и друзья. И однажды решили передать эту атмосферу здесь, в сердце Варны — в ресторане, где всё просто, честно и по-домашнему.",
            description2:
              "Кухня «Хаят» объединяет армянские и грузинские традиции. Мы готовим с душой — так, как готовят для своих: без спешки, с уважением к рецептам и с любовью к гостям. Каждое блюдо здесь — история. Вкус детства, семейных праздников и вечеров, когда еда объединяет людей. «Хаят» — это не просто ресторан. Это место, куда заходят не случайно. Здесь пахнет тёплым хлебом и специями, звучит смех, а за каждым столом чувствуется уют и душа Кавказа. Добро пожаловать домой — в «Хаят».",
          },
          menu: {
            title: "Наше меню",
            appetizers: "Закуски",
            hotappetizers: "Гарячие закуски",
            salads: "Салаты",
            khachapuri: "Хачапури",
            khinkali: "Хинкали",
            main: "Основные блюда",
            grill: "Гриль",
            new: "Новинки",
            soups: "Супы",
            garnishes: "Гарниры",
            sauces: "Соусы",
            breads: "Хлебы",
          },
          appetizers: {
            items: {
              cheese: {
                name: "Армянсие сиры с зеленью",
                description:
                  "Традиционная закуска из бринзы, сулугуни и шпината",
              },
              heriing: {
                name: "Седёдка под водку",
                description: "Селёдка, варенный картофель, лук маренованный",
              },
              pkhali: {
                name: "Пхали батладжани",
                description:
                  "Баклажаны с ореховой пастой, гранатом, и на салатном листе",
              },
              pkhali2: {
                name: "Баклажаны с помидорами",
                description:
                  "Баклажаны с чесночным соусом и свежими помидорами",
              },
              vegetables: {
                name: "Овощи по-армянски",
                description:
                  "Маринованные овощи по-армянски, в состав входт: Огурцы, помидоры, капуста",
              },
              basturma: {
                name: "Бастурма",
                description:
                  "Традиционная закуска из бринзы, сулугуни и шпината",
              },
              sujuk: {
                name: "Суджук",
                description:
                  "Домашний суджук, приготовленный по армянскому рецепту",
              },
            },
          },
          hotappetizers: {
            items: {
              lavash: {
                name: "Лаваш с травами, брынзой и сыром, приготовленный на огне",
              },
              pepper: {
                name: "Перец, запечённый с брынзой или с сыром",
                description: "Печённый перец с домешней брынзой",
              },
            },
          },
          salads: {
            items: {
              khorovats: {
                name: "Хоровац",
                description:
                  "Традиционный армянский салат из печёных на мангале овощей,заправляется маслом",
              },
              shopska: {
                name: "Шопский салат",
                description:
                  "Свежий помидор, огурец, печёный перец, маринованный лук и сырфета, заправленные растительным маслом",
              },
              green: {
                name: "Салат Green",
                description:
                  "Лёгкий витаминный салат из свежей капусты с зеленью",
              },
              caesar: {
                name: "Салат Цезар с курицей",
                description:
                  "Кассический салат с нежным куриным филе, соусом Цезарь и хрустящими крутонами",
              },
              armenian: {
                name: "Армянский салат",
                description:
                  "Свежие томаты, огурцы и зелень с лёгкой заправкой",
              },
              tabbouleh: {
                name: "Табуле",
                description: "Булгур и мелко нарезанная петрушка",
              },
              crispy: {
                name: "Салат с хрустящими баклажанами",
                description:
                  "Обжаренные баклажаны с овощами и ароматным соусом",
              },
              Hayat: {
                name: "Тёплый салат: Хаят с телячьей вырезкой и баклажанами",
                description:
                  "Сочный тёплый салат с нежной телятиной, баклажанами и овощами",
              },
              georgian: {
                name: "Грузинский салат",
                description:
                  "Свежий салат с огурцами, помидорами и орехами с настоящим духом Грузии!",
              },
            },
          },
          khachapuri: {
            items: {
              imeretian: {
                name: "Хачапури по-имеретински",
                description: "Закрытое хачапури с двумя видами сыра",
              },
              adjarian: {
                name: "Хачапури по-аджарски",
                description:
                  "Закрытое хачапури с двумя видами сыра в форме лодки",
              },
              imeretian: {
                name: "Хачапури по-еревански",
                description: "Хачапури с мясом, украшенное свежими овощами",
              },
              yerevan: {
                name: "Хачапури Намак",
                description:
                  "Авторское прочтение классики Кавказа. Нежное куринное мясо и сочная телятина в тонком тесте с тянущимся сыром, создают насыщенный вкус, в котором гармония лёгкости и силы. Намак - это новое сочетание традиций и современности, рожденное для тех, кто ищет особенный вкус.",
              },
              lobiani: {
                name: "Хачапури лобиани с лобио",
                description:
                  "Пышный хачапури с традиционной фасолевой начинкой",
              },
              mingrelian: {
                name: "Хачапури по-мегрельски",
                description:
                  "Сытный хачапури с двойным сыром - внутри и сверху",
              },
              grilled: {
                name: "Хачапури на мангале",
                description:
                  "Ароматный хачапури, приготовленный на углях с лёгким дымком",
              },
            },
          },
          khinkali: {
            items: {
              feta: {
                name: "Хинкали с брынзой",
              },
              veal: {
                name: "Хинкали с телятиной",
              },
              mama: {
                name: "Мама хинкали",
              },
            },
          },
          main: {
            items: {
              kutabi: {
                name: "Кутабы",
                description:
                  "Кутабы - это тонкие лепёшки, обжаренные на раскалённой сковороде, с начинкой из свежей зелени,овощей, сыра и мяса",
              },
              erebuni: {
                name: "Пицца еребуни",
                description:
                  "Смесь итальянских и армянских традиций, воплощяющих в себе одно блюдо, пиццу, приготовленную с душой и сердцем",
              },
              lahmajo: {
                name: "Ламаджо",
                description:
                  "Тонкая лепёшка с мясным фаршем, восточная пицца, также известная как лахмаджун",
              },
              khurjin: {
                name: "Хурджин со свининой и овощами",
                description:
                  "Отдельно жареная свинина с овощами и травами, в мешочке из лаваша",
              },
              harisa: {
                name: "Хариса(арминская крупа)",
                description:
                  "Традиционное блюла из пшеницы и мяса, приготовленные по старинному рецепту",
              },
              dolma: {
                name: "Долма",
                description:
                  "Долма в виноградных лстьях с мясным фаршем и рисом",
              },
            },
          },
          grill: {
            items: {
              wings: {
                name: "Куринные крилышки",
              },
              ribs: {
                name: "Свинские рёбра",
              },
              chickenshashlik: {
                name: "Шашлык из филе курицы",
              },
              chalagach: {
                name: "Чалагач из ягнёнкалма",
              },
              porkshashlik: {
                name: "Шашлык свиной",
              },
              vealkebap: {
                name: "Люля кебап из телятины",
              },
              kebapassortment: {
                name: "Асорти ис люля кебап",
              },
              vegetables: {
                name: "Овощи на гриле",
              },
              potatoes: {
                name: "Картошка на гриле",
              },
              mushrooms: {
                name: "Грибы на гриле",
              },
            },
          },
          new: {
            items: {
              quail: {
                name: "Перепела на гриле",
              },
              bon: {
                name: "Телятина Бон филе",
              },
              liver: {
                name: "Печень куриная",
              },
            },
          },
          soups: {
            items: {
              okroshka: {
                name: "Окрошка",
                description:
                  "Традиционный холодный молочный суп из славянской кухни, который состоит из мелко нарезанного вареного картофеля, яиц, мяса куриной грудки, свежих трав",
              },
              solyanka: {
                name: "Солянка в кавказком стиле",
                description:
                  "Густом суп на мясном бульоне - настоящая радость для месоедов",
              },
              khashlama: {
                name: "Хашлама ис баранины",
                description:
                  "Известное блюдо армянской и грузинской кухни, наваристый суп из мяса и овощей",
              },
              lobio: {
                name: "Лобио",
                description:
                  "Блюдо грузинской народной кухни, приготовленное из красной фасоли",
              },
            },
          },
          garnishes: {
            items: {
              countrypotatoes: {
                name: "Картофель по-сельски",
              },
              frenchfries: {
                name: "Картофель фри",
              },
              fetapotatoes: {
                name: "Картофель жареный с брынзой",
              },
              homepotatoes: {
                name: "Картофель по-домашнему",
              },
              bulgur: {
                name: "Булгур с грибами",
              },
              rice: {
                name: "Рис с овощами",
              },
            },
          },
          sauces: {
            items: {
              garlic: {
                name: "Чесночный",
              },
              ketchup: {
                name: "Кетчуп",
              },
              satsebeli: {
                name: "Сацебели",
              },
              tkemali: {
                name: "Ткемали",
              },
              adjika: {
                name: "Аджика",
              },
            },
          },
          breads: {
            items: {
              lavash: {
                name: "Лаваш",
              },
              khats: {
                name: "Джингаляев хац",
                description:
                  "Армянский Zhingyalov Khats в переводе значит: хлеб с зеленью, приготавливается хлебная лепёшка без дрожжей, а начинка - мелко нарезанная зелень различных растений",
              },
              basket: {
                name: "Корзина с домашним армянским хлебом",
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
              name: "Алексей Великов",
              date: "26 ноября 2025",
              text: "Забрели в Hayat в Варне и честно, не ожидал, что будет настолько вкусно. Хинкали просто огонь: сочные, ароматные, тесто аккуратное. Хачапури — отдельное удовольствие: сыр тянется, всё горячее, свежее, прямо то, что нужно после долгой прогулки 🤤☺️",
            },
            reviews2: {
              name: "Таня Шевчук",
              date: "15 апреля 2025",
              text: "Отдыхали вчера в заведении, кухня супер, все было очень вкусно! Наконец-то в Варне мы поели вкуснейший шашлык, люля кебаб супер! Отличный сервис, адекватные цены! Если вы хотите вкусно покушать и приятно провести время вам однозначно в Hayat!",
            },
            reviews3: {
              name: "Павел Александрович",
              date: "20 ноября 2025",
              text: "Шашлык был вкусным. Но сам ресторанчик просит ренновации - видно что делали ремонт лет 20 назад.",
            },
            reviews4: {
              name: "Вячеслав Коврайский",
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
            address: "АкчеларПриморски, бул. 8-ми Приморски полк, Варна",
            phone_title: "Телефон",
            phone: "+359876892467",
            email_title: "Email",
            email: "hayat-restaurant@gmail.com",
            hours_title: "Часы работы",
            hours: "Вторник-Воскресенье: 12:00 - 22:30",
          },
          footer: {
            about_text:
              "Ресторан аутентичной грузинской кухни, где традиции встречаются с современностью.",
            quick_links: "Быстрые ссылки",
            about: "О нас",
            menu: "Меню",
            reservation: "Бронирование",
            follow: "Следите за нами",
            follow_text:
              "Подпишитесь на наши социальные сети для акций и новостей.",
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
              "Hayat cuisine combines Armenian and Georgian traditions. We cook with soul — just as we would cook for our own families: without rushing, with respect for recipes and love for our guests. Every dish here has a story behind it. The taste of childhood, family celebrations and evenings when food brings people together. Hayat is not just a restaurant. It is a place where people come for a reason. It smells of warm bread and spices, sounds of laughter fill the air, and every table exudes the cosiness and soul of the Caucasus. Welcome home — to Hayat.",
          },
          menu: {
            title: "Our Menu",
            appetizers: "Appetizers",
            hotappetizers: "Hot appetizers",
            salads: "Salads",
            khachapuri: "Khachapuri",
            khinkali: "Khinkali",
            main: "Main Dishes",
            grill: "Grill",
            new: "new",
            soups: "Soups",
            garnishes: "Garnishes",
            sauces: "Sauces",
            breads: "Breads",
          },
          appetizers: {
            items: {
              cheese: {
                name: "Armenian cheese with greens",
                description:
                  "A traditional appetiser made with brynza, suluguni and spinach.",
              },
              heriing: {
                name: "Herring with vodka",
                description: "Herring, boiled potatoes, pickled onions",
              },
              pkhali: {
                name: "Pkhali batladzani",
                description: "Aubergines with garlic sauce and fresh tomatoes",
              },
              pkhali2: {
                name: "Aubergines with tomatoes",
                description: "Aubergines with garlic sauce and fresh tomatoes",
              },
              vegetables: {
                name: "Armenian-style vegetables",
                description:
                  "Armenian-style pickled vegetables, including cucumbers, tomatoes and cabbage",
              },
              basturma: {
                name: "Basturma",
                description:
                  "Traditional appetiser made from brynza cheese, suluguni cheese and spinach",
              },
              sujuk: {
                name: "Sujuk",
                description:
                  "Homemade sujuk prepared according to an Armenian recipe",
              },
            },
          },
          hotappetizers: {
            items: {
              lavash: {
                name: "Lavash with herbs, brynza and cheese, cooked over a fire",
              },
              pepper: {
                name: "Peppers baked with brynza or cheese",
                description: "Baked peppers with homemade brynza",
              },
            },
          },
          salads: {
            items: {
              khorovats: {
                name: "Khorovats",
                description:
                  "A traditional Armenian salad of grilled vegetables dressed with oil",
              },
              shopska: {
                name: "Shopska Salad",
                description:
                  "Fresh tomato, cucumber, roasted pepper, pickled onion, and syrfeta, dressed with vegetable oil",
              },
              green: {
                name: "Green Salad",
                description:
                  "A light, vitamin-rich salad of fresh cabbage and greens",
              },
              caesar: {
                name: "Caesar Salad with chicken",
                description:
                  "Cassis salad with tender chicken fillet, caesar dressing, and crispy croutons",
              },
              armenian: {
                name: "Armenian Salad",
                description:
                  "Fresh tomatoes, cucumbers, and greens with a light dressing",
              },
              tabbouleh: {
                name: "Tabbouleh",
                description: "Bulgur and finely chopped parsley",
              },
              crispy: {
                name: "Crispy eggplant salad",
                description:
                  "Fried eggplant with vegetables and a flavorful sauce",
              },
              Hayat: {
                name: "Warm salad: khayat with veal tenderloin and eggplant",
                description:
                  "A juicy warm salad with tender veal, eggplant, and vegetables",
              },
              georgian: {
                name: "Georgian Salad",
                description:
                  "A fresh salad with cucumbers, tomatoes, and nuts, with a true Georgian flavor!",
              },
            },
          },
          khachapuri: {
            items: {
              imeretian: {
                name: "Imeretian Khachapuri",
                description: "Closed khachapuri with two types of cheese",
              },
              adjarian: {
                name: "Adjarian Khachapuri",
                description:
                  "Closed khachapuri with two types of cheese, shaped like a boat",
              },
              yerevan: {
                name: "Yerevan Khachapuri",
                description:
                  "Khachapuri with meat, garnished with fresh vegetables",
              },
              namak: {
                name: "Khachapuri Namak",
                description:
                  "A signature take on a Caucasian classic. Tender chicken and juicy veal in a thin crust with stretchy cheese create a rich flavor that balances lightness and strength. Namak is a new combination of tradition and modernity, created for those seeking a unique taste.",
              },
              lobiani: {
                name: "Khachapuri Lobiani with Lobio",
                description:
                  "Fluffy khachapuri with a traditional bean filling",
              },
              mingrelian: {
                name: "Mingrelian Khachapuri",
                description:
                  "Heartfelt khachapuri with double cheese  inside and on top",
              },
              grilled: {
                name: "Grilled Khachapuri",
                description:
                  "Fragrant khachapuri, cooked over charcoal with a light smoky flavor",
              },
            },
          },
          khinkali: {
            items: {
              feta: {
                name: "Khinkali with feta cheese",
              },
              veal: {
                name: "Khinkali with veal",
              },
              mama: {
                name: "Mama Khinkali",
              },
            },
          },
          main: {
            items: {
              kutabi: {
                name: "Kutabi",
                description:
                  "Kutab are thin flatbreads fried in a hot pan, filled with fresh herbs, vegetables, cheese, and meat",
              },
              erebuni: {
                name: "Pizza Erebuni",
                description:
                  "A blend of Italian and Armenian traditions, embodying one dish, pizza made with heart and soul",
              },
              lahmajo: {
                name: "Lahmajo",
                description:
                  "A thin flatbread filled with minced meat, an oriental pizza, also known as lahmajoun.",
              },
              khurjin: {
                name: "Khurjin with pork and vegetables",
                description:
                  "Separately fried pork with vegetables and herbs, in a lavash bag",
              },
              harisa: {
                name: "Harisa (Armenian grain)",
                description:
                  "A traditional wheat and meat dish prepared according to an ancient recipe",
              },
              dolma: {
                name: "Dolma",
                description: "Dolma in grape leaves with minced meat and rice",
              },
            },
          },
          grill: {
            items: {
              wings: {
                name: "Chicken wings",
              },
              ribs: {
                name: "Pork ribs",
              },
              chickenshashlik: {
                name: "Chicken fillet shashlik",
              },
              chalagach: {
                name: "Lamb chalagach",
              },
              porkshashlik: {
                name: "Pork shashlik",
              },
              vealkebap: {
                name: "Veal lula kebap",
              },
              kebapassortment: {
                name: "Lulya kebap assortment",
                description:
                  "3 Types: Veal, Chicken, Pork with Matsoni and Lavash",
              },
              vegetables: {
                name: "Grilled vegetables",
              },
              potatoes: {
                name: "Grilled potatoes",
              },
              mushrooms: {
                name: "Grilled mushrooms",
              },
            },
          },
          new: {
            items: {
              quail: {
                name: "Grilled Quail",
              },
              bon: {
                name: "Veal Bon Fillet",
              },
              liver: {
                name: "Chicken Liver",
              },
            },
          },
          soups: {
            items: {
              okroshka: {
                name: "Okroshka",
                description:
                  "A traditional cold milk soup from Slavic cuisine, consisting of finely chopped boiled potatoes, eggs, chicken breast, and fresh herbs",
              },
              solyanka: {
                name: "Caucasian-style solyanka",
                description:
                  "A thick soup made with meat broth - a true delight for meat-eaters",
              },
              khashlama: {
                name: "Lamb khashlama",
                description:
                  "A well-known dish of Armenian and Georgian cuisine, a rich soup made with meat and vegetables",
              },
              lobio: {
                name: "Lobio",
                description: "A Georgian dish made with red beans",
              },
            },
          },
          garnishes: {
            items: {
              countrypotatoes: {
                name: "Country-Style Potatoes",
              },
              frenchfries: {
                name: "French Fries",
              },
              fetapotatoes: {
                name: "Fried Potatoes with Feta Cheese",
              },
              homepotatoes: {
                name: "Home-Style Potatoes",
              },
              bulgur: {
                name: "Bulgur with Mushrooms",
              },
              rice: {
                name: "Rice with Vegetables",
              },
            },
          },
          sauces: {
            items: {
              garlic: {
                name: "Garlic",
              },
              ketchup: {
                name: "Ketchup",
              },
              satsebeli: {
                name: "Satsebeli",
              },
              tkemali: {
                name: "Tkemali",
              },
              adjika: {
                name: "Lavash",
              },
            },
          },
          breads: {
            items: {
              lavash: {
                name: "Lavash",
              },
              khats: {
                name: "Zhingalyaev Khats",
                description:
                  "Armenian Zhingyalov Khats means bread with herbs It's a yeast-free flatbread filled with finely chopped herbs",
              },
              basket: {
                name: "Basket of homemade Armenian bread",
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
              name: "Alexey Velikov",
              date: "November 26, 2025",
              text: "We stopped by Hayat in Varna and honestly didn't expect it to be so delicious. The khinkali were simply amazing: juicy, flavorful, and the dough was delicate. The khachapuri was a special treat: the cheese was stretchy, everything was hot and fresh, just what you need after a long walk 🤤☺️",
            },
            reviews2: {
              name: "Tanya Shevchuk",
              date: "April 15, 2025",
              text: "We relaxed there yesterday; the food was superb, everything was delicious! Finally, in Varna, we had delicious shashlik, the lula kebab was fantastic! Excellent service, reasonable prices! If you want a delicious meal and a good time, you should definitely go to Hayat!",
            },
            reviews3: {
              name: "Pavel Alexandrovich",
              date: "November 20, 2025",
              text: "The shashlik was delicious. But the restaurant itself needs some renovation – it's obvious it was renovated 20 years ago.",
            },
            reviews4: {
              name: "Vyacheslav Kovraysky",
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
              text: "A great place for a romantic dinner. Beautiful atmosphere, delicious food. A little noisy on weekends, but that adds to the vibe of the restaurant",
            },
          },
          contact: {
            title: "Contact",
            address_title: "Address",
            address: "AkchelarPrimorski, 8th Primorski Polk Blvd",
            phone_title: "Phone",
            phone: "+359876892467",
            email_title: "Email",
            email: "hayat-restaurant@gmail.com",
            hours_title: "Working Hours",
            hours: "Tuesday-Sunday: 12:00 - 22:30",
          },
          footer: {
            about: "About Hayat",
            about_text:
              "Restaurant of authentic Georgian cuisine where traditions meet modernity.",
            quick_links: "Quick Links",
            about: "About Us",
            menu: "Menu",
            reservation: "Reservation",
            follow: "Follow Us",
            follow_text:
              "Subscribe to our social networks for promotions and news.",
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
              "Ресторант Хаят отвори врати във Варна през 2023 г., роден от желанието да създадем място, където всеки може да се докосне до истинския Кавказ и топлината на домашно приготвената храна. Израснахме, заобиколени от ароматите на пресен лаваш, опушен шишчета и празненства, където семейството и приятелите се събираха около масата. И един ден решихме да уловим тази атмосфера тук, в сърцето на Варна, в ресторант, където всичко е просто, искрено и домашно.",
            description2:
              "Кухнята на Хаят съчетава арменски и грузински традиции. Готвим с душа, както готвим за себе си: без бързане, с уважение към рецептите и с любов към нашите гости. Всяко ястие тук разказва история. Това е вкус от детството, семейните тържества и вечерите, когато храната събира хората. Хаят е повече от просто ресторант. Това е място, където хората не идват случайно. Ухае на топъл хляб и подправки, отекват смеховете, а на всяка маса можете да усетите уюта и душата на Кавказ. Добре дошли у дома  в Хаят.",
          },
          menu: {
            title: "Нашето меню",
            appetizers: "Предястия",
            salads: "Салати",
            khachapuri: "Хачапури",
            khinkali: "Хинкали",
            main: "Основни ястия",
            grill: "Грил",
            new: "новинки",
            soups: "Супи",
            garnishes: "Гарнитури",
            sauces: "Сосове",
            breads: "Хлябове",
          },
          appetizers: {
            items: {
              cheese: {
                name: "Арменско сирене с билки",
                description:
                  "Традиционно предястие, приготвено с бринза, сулугуни и спанак",
              },
              heriing: {
                name: "Херинга с водка",
                description: "Херинга, варени картофи, маринован лук",
              },
              pkhali: {
                name: "Пхали батладжани",
                description: "Патладжан с чеснов сос и пресни домати",
              },
              pkhali2: {
                name: "Патладжани с домати",
                description: "Патладжан с чеснов сос и пресни домати",
              },
              vegetables: {
                name: "Арменски зеленчуци",
                description:
                  "Мариновани зеленчуци по арменски, включително: краставици, домати, зеле",
              },
              basturma: {
                name: "Бастурма",
                description:
                  "Традиционно предястие, приготвено с бринза, сулугуни и спанак",
              },
              sujuk: {
                name: "Суджук",
                description: "Домашен суджук, приготвен по арменска рецепта",
              },
            },
          },
          hotappetizers: {
            items: {
              lavash: {
                name: "Лаваш, печен на огън, с билки, сирене фета и сирене",
              },
              pepper: {
                name: "Печени чушки със сирене фета или сирене",
                description: "Печени чушки с домашно приготвено сирене фета",
              },
            },
          },
          salads: {
            items: {
              khorovats: {
                name: "Хоровац",
                description:
                  "Традиционна арменска салата от печени зеленчуци, овкусена с олио",
              },
              shopska: {
                name: "Шопска салата",
                description:
                  "Пресен домат, краставица, печена чушка, маринован лук и сирфета, овкусени с растително масло",
              },
              green: {
                name: "Зелена салата",
                description:
                  "Лека, богата на витамини салата от прясно зеле и зеленина",
              },
              caesar: {
                name: "Салата Цезар с пилешко месо",
                description:
                  "Салата Кашич с крехко пилешко филе, дресинг Цезар и хрупкави крутони",
              },
              armenian: {
                name: "Арменска салата",
                description:
                  "Пресни домати, краставици и зеленина с лек дресинг",
              },
              tabbouleh: {
                name: "Табуле",
                description: "Булгур и ситно нарязан магданоз",
              },
              crispy: {
                name: "Салата с хрупкав патладжан",
                description: "Пържен патладжан със зеленчуци и ароматен сос",
              },
              Hayat: {
                name: "Топла салата: Хаят с телешко филе и патладжан",
                description:
                  "Сочна топла салата с крехко телешко месо, патладжан и зеленчуци",
              },
              georgian: {
                name: "Грузинска салата",
                description:
                  "Свежа салата с краставици, домати и ядки с истинския дух на Грузия!",
              },
            },
          },
          khachapuri: {
            items: {
              imeretian: {
                name: "Имеретински хачапури",
                description: "Затворен хачапури с два вида сирене",
              },
              adjarian: {
                name: "Аджарски хачапури",
                description:
                  "Затворен хачапури с два вида сирене, оформен като лодка",
              },
              yerevan: {
                name: "Еревански хачапури",
                description: "Хачапури с месо, гарнирано с пресни зеленчуци",
              },
              namak: {
                name: "Хачапури Намак",
                description:
                  "Единствена интерпретация на кавказка класика. Крехко пилешко и сочно телешко месо в тънка кора с еластично сирене създават богат вкус, който балансира лекота и сила. Намак е нова комбинация от традиция и модерност, създадена за тези, които търсят уникален вкус.",
              },
              lobiani: {
                name: "Хачапури Лобиани с Лобио",
                description: "Пухкав хачапури с традиционен пълнеж от боб",
              },
              mingrelian: {
                name: "Мингрелски хачапури",
                description:
                  "Сърдечен хачапури с двойно сирене  вътре и отгоре",
              },
              grilled: {
                name: "Печен хачапури",
                description:
                  "Ароматно хачапури, приготвено на дървени въглища с лек опушен вкус",
              },
            },
          },
          khinkali: {
            items: {
              feta: {
                name: "Хинкали със сирене фета",
              },
              veal: {
                name: "Хинкали с телешко",
              },
              mama: {
                name: "Мама Хинкали",
              },
            },
          },
          main: {
            items: {
              kutabi: {
                name: "Кутаби",
                description:
                  "Кутаб са тънки плоски питки, пържени в горещ тиган, пълни с пресни билки, зеленчуци, сирене и месо",
              },
              erebuni: {
                name: "Пица Еребуни",
                description:
                  "Смесица от италиански и арменски традиции, въплъщаваща едно ястие - пица, приготвена със сърце и душа",
              },
              lahmajo: {
                name: "Лахмаджо",
                description:
                  "Тънка плоска питка, пълнена с кайма, ориенталска пица, известна още като лахмаджун",
              },
              khurjin: {
                name: "Хурджин със свинско месо и зеленчуци",
                description:
                  "Отделно пържено свинско месо със зеленчуци и билки, в торбичка лаваш",
              },
              harisa: {
                name: "Хариса (арменско зърно)",
                description:
                  "Традиционно ястие от пшеница и месо, приготвено по древна рецепта",
              },
              dolma: {
                name: "Долма",
                description: "Долма в лозови листа с кайма и ориз",
              },
            },
          },
          grill: {
            items: {
              wings: {
                name: "Пилешки крилца",
              },
              ribs: {
                name: "Свински ребра",
              },
              chickenshashlik: {
                name: "Шиш кебап с пилешко филе",
              },
              chalagach: {
                name: "Агнешки чалагач",
              },
              porkshashlik: {
                name: "Шиш кебап със свинско месо",
              },
              vealkebap: {
                name: "Телешки люля кебап",
              },
              kebapassortment: {
                name: "Асортимент люля кебап",
                description:
                  "3 вида: Телешко, Пилешко, Свинско с Мацони и Лаваш",
              },
              vegetables: {
                name: "Гриловани зеленчуци",
              },
              potatoes: {
                name: "Гриловани картофи",
              },
              mushrooms: {
                name: "Гриловани гъби",
              },
            },
          },
          new: {
            items: {
              quail: {
                name: "Печен пъдпъдък",
              },
              bon: {
                name: "Телешко бон филе",
              },
              liver: {
                name: "Пилешки дроб",
              },
            },
          },
          soups: {
            items: {
              okroshka: {
                name: "Окрошка",
                description:
                  "Традиционна студена млечна супа от славянската кухня, състояща се от ситно нарязани варени картофи, яйца, пилешки гърди и пресни билки",
              },
              solyanka: {
                name: "Солянка в кавказки стил",
                description:
                  "Гъста супа, приготвена с месен бульон - истинска наслада за месоядците",
              },
              khashlama: {
                name: "Агнешка хашлама",
                description:
                  "Известно ястие от арменската и грузинската кухня, богата супа, приготвена с месо и зеленчуци",
              },
              lobio: {
                name: "Лобио",
                description: "Грузинско ястие, приготвено с червен боб",
              },
            },
          },
          garnishes: {
            items: {
              countrypotatoes: {
                name: "Картофи по селски",
              },
              frenchfries: {
                name: "Пържени картофи",
              },
              fetapotatoes: {
                name: "Пържени картофи със сирене фета",
              },
              homepotatoes: {
                name: "Домашни картофи",
              },
              bulgur: {
                name: "Булгур с гъби",
              },
              rice: {
                name: "Ориз със зеленчуци",
              },
            },
          },
          sauces: {
            items: {
              garlic: {
                name: "Чесън",
              },
              ketchup: {
                name: "Кетчуп",
              },
              satsebeli: {
                name: "Сацебели",
              },
              tkemali: {
                name: "Ткемали",
              },
              adjika: {
                name: "Аджика",
              },
            },
          },
          breads: {
            items: {
              lavash: {
                name: "Лаваш",
              },
              khats: {
                name: "Жингаляев Хац",
                description:
                  "Арменският Жингалов Хац означава хляб с билки. Това е плосък хляб без мая, пълен със ситно нарязани билки",
              },
              basket: {
                name: "Кошница с домашен арменски хляб",
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
              name: "Алексей Великов",
              date: "26 ноември 2025 г",
              text: "Спряхме в Хаят във Варна и честно казано не очаквахме да е толкова вкусно. Хинкали бяха просто невероятни: сочни, ароматни, а тестото - крехко. Хачапури беше специално удоволствие: сиренето беше еластично, всичко беше топло и прясно, точно това, от което се нуждаете след дълга разходка 🤤☺️",
            },
            reviews2: {
              name: "Таня Шевчук",
              date: "15 април 2025 г",
              text: "Вчера си починяхме там; храната беше превъзходна, всичко беше вкусно! Най-накрая, във Варна, ядохме вкусен шашлик, люля кебапът беше фантастичен! Отлично обслужване, разумни цени! Ако искате вкусна храна и добро прекарване, определено трябва да отидете в Хаят!",
            },
            reviews3: {
              name: "Павел Александрович",
              date: "20 ноември 2025 г",
              text: "Шашликът беше вкусен. Но самият ресторант се нуждае от ремонт - очевидно е, че е ремонтиран преди 20 години.",
            },
            reviews4: {
              name: "Вячеслав Коврайски",
              date: "1 ноември 2024",
              text: "Празнувахме рожден ден тук - беше просто прекрасно! Персоналът беше много внимателен и ни помогна да изберем ястия. Всички бяха доволни",
            },
            reviews5: {
              name: "Антон Волков",
              date: "28 октомври 2024 г",
              text: "Автентична грузинска атмосфера! Музика на живо, вкусни ястия, щедри порции. Чачата е съвсем друга история! Истинско потапяне в Грузия",
            },
            reviews6: {
              name: "Олга Новикова",
              date: "25 октомври 2024",
              text: "Страхотно място за романтична вечеря. Красива атмосфера, вкусна храна. Малко шумно през уикендите, но това допринася за атмосферата на ресторанта",
            },
          },
          contact: {
            title: "Контакт",
            address_title: "Адрес",
            address: "АкчеларПриморски, бул. 8-ми Приморски полк, Варна",
            phone_title: "Телефон",
            phone: "+359876892467",
            email_title: "Email",
            email: "hayat-restaurant@gmail.com",
            hours_title: "Работно време",
            hours: "Вторник-Воскресенье: 12:00 - 22:30",
          },
          footer: {
            about: "За Hayat",
            about_text:
              "Ресторант на автентична грузинска кухня, където традициите срещат модерността.",
            quick_links: "Бързи връзки",
            about: "За нас",
            menu: "Меню",
            reservation: "Резервация",
            follow: "Последвайте ни",
            follow_text:
              "Абонирайте се за нашите социални мрежи за промоции и новини.",
            copyright: "© 2024 Hayat Restaurant. Всички права запазени.",
          },
        },
      }[lang],
      key
    );
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
