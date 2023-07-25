const allLang = ['EN', 'RU', 'KZ'];
let currentLang = localStorage.getItem('language') || 'ru';
const langButtons = document.querySelectorAll(".header_btn");
const currentPathName = window.location.pathname;
const placeholderAll = document.querySelectorAll(".asd");
let currentTextObject = {};


const homeTexts = {
	"home_page_title": {
		RU: "Главная | Furniture",
		KZ: "Үй | Furniture",
		EN: "Home | Furniture",
	},
	"home_page-1": {
		RU: "Аккаунт",
		KZ: "Аккаунт",
		EN: "Account",
	},
	"home_page-2": {
		RU: "Закладки",
		KZ: "Бетбелгілер",
		EN: "Bookmarks",
	},
	"home_page-3": {
		RU: "Оплата",
		KZ: "Төлем",
		EN: "Payment",
	},
	"home_page-4": {
		RU: "Корзина",
		KZ: "Себет",
		EN: "Cart",
	},
	"home_page-5": {
		RU: "Вход",
		KZ: "Кіру",
		EN: "Login",
	},
	"home_page-6": {
		RU: "Главная",
		KZ: "Басты бет",
		EN: "Main",
	},
	"home_page-7": {
		RU: "Магазин",
		KZ: "Дүкен",
		EN: "Shop",
	},
	"home_page-13": {
		RU: "Контакты",
		KZ: "Байланыстар",
		EN: "Contacts",
	},
	"home_page_contacts": {
		RU: "Контакты | Furniture",
		KZ: "Байланыстар | Furniture",
		EN: "Contacts | Furniture",
	},
	"contact-us": {
		RU: "Свяжитесь c нами",
		KZ: "Байланыс бізбен",
		EN: "Contact with us",
	},
	"contact-send": {
		RU: "Отправить",
		KZ: "Жіберу",
		EN: "Send",
	},
	"contact-fill": {
		RU: "Заполните форму",
		KZ: "Пішінді толтырыңыз",
		EN: "Fill the form",
	},
	"contact-theme": {
		RU: "Тема",
		KZ: "Тақырып",
		EN: "Theme",
	},
	"contact-messege": {
		RU: "Ваше сообщение",
		KZ: "Сіздің хабарламаңыз",
		EN: "Your messege",
	},
	"contact-us-1": {
		RU: "c нами",
		KZ: "бізбен",
		EN: "with us",
	},
	"home_page-100": {
		RU: "Контакты",
		KZ: "Байланыстар",
		EN: "Contacts",
	},
	"home_page-8": {
		RU: "Продукты",
		KZ: "Өнімдер",
		EN: "Products",
	},
	"home_page-101": {
		RU: "Продукты",
		KZ: "Өнімдер",
		EN: "Products",
	},
	"product-warranty": {
		RU: "Гарантия 1 год",
		KZ: "Кепілдік 1 жыл",
		EN: "Warranty 1 year",
	},
	"product_quantity": {
		RU: "Количество",
		KZ: "Саны",
		EN: "Quantity",
	},
	"product_buy": {
		RU: "Купить",
		KZ: "Сатып алу",
		EN: "Buy",
	},
	"product_collection": {
		RU: "Коллекция:Новая",
		KZ: "Топтама: Жаңа",
		EN: "Collection:New",
	},
	"product_brand": {
		RU: "Брэнд:Furniture",
		KZ: "Брэнд:Furniture",
		EN: "Brand:Furniture",
	},
	"home_page_product": {
		RU: "Продукты | Furniture",
		KZ: "Өнімдер | Furniture",
		EN: "Products | Furniture",
	},
	"product-review": {
		RU: "Отзывы (5)",
		KZ: "Пікірлер (5)",
		EN: "Reviews (5)",
	},
	"review": {
		RU: "Оставьте свой отзыв",
		KZ: "Пікір қалдырыңыз",
		EN: "Leave your feedback",
	},
	"confirm": {
		RU: "Подтвердить",
		KZ: "Растау",
		EN: "Confirm",
	},
	"home_page-9": {
		RU: "Детали",
		KZ: "Егжей",
		EN: "Details",
	},
	"home_page-14": {
		RU: "Поиск",
		KZ: "Іздеу",
		EN: "Search",
	},
	"home_page-15": {
		RU: "Мебель для вашего дома",
		KZ: "Үйіңізге арналған жиһаз",
		EN: "Furniture for your home",
	},
	"home_page-16": {
		RU: "Выбирайте товары со скидками",
		KZ: "Жеңілдіктері бар өнімдерді таңдаңыз",
		EN: "Choose products with discounts",
	},
	"home_more": {
		RU: "Подробнее",
		KZ: "Көбірек",
		EN: "More",
	},
	"home_page-17": {
		RU: "Мебель для спальни",
		KZ: "Жатын бөлме жиһазы",
		EN: "Bedroom furniture",
	},
	"home_page-18": {
		RU: "Набор решений для дома",
		KZ: "Үй шешімдер жинағы",
		EN: "Home solution set",
	},
	"home_page-payment": {
		RU: "Оплата",
		KZ: "Төлем",
		EN: "Payment",
	},
	"home_page-cart": {
		RU: "Корзина",
		KZ: "Себет",
		EN: "Cart",
	},
	"home_page-login": {
		RU: "Вход",
		KZ: "Кіру",
		EN: "Login",
	},
	"home_page-category": {
		RU: "Категории",
		KZ: "Санаттар",
		EN: "Category",
	},
	"home_page-living": {
		RU: "Гостинная",
		KZ: "Тұрғын бөлме",
		EN: "Living Room",
	},
	"home_page-sofas": {
		RU: "Диваны",
		KZ: "Дивандар",
		EN: "Sofas" ,
	},
    "home_page-armchairs": {
		RU: "Кресла",
		KZ: "Орындықтар",
		EN: "Armchairs",
	},
    "home_page-cabinets": {
	    RU: "Шкафы",
	    KZ: "Шкафтар",
	    EN: "Cabinets",
    },
    "home_page-tables": {
	    RU: "Столы",
	    KZ: "Кестелер",
	    EN: "Tables", 
    },
    "home_page-pedestals": {
	    RU: "Тумбы",
	    KZ: "Тұғырлар",
	    EN: "Pedestals",
    },
	"home_page-bedroom": {
	    RU: "Спальня",
	    KZ: "Жатын бөлме",
	    EN: "Bedroom",
	},
	"home_page-armchairs-2": {
		RU: "Кресла",
		KZ: "Орындықтар",
		EN: "Armchairs",
	},
	"home_page-beds": {
		RU: "Кровати",
		KZ: "Төсектер",
		EN: "Beds",
	},
	"home_page-tables-2": {
		RU: "Столы",
		KZ: "Кестелер",
		EN: "Tables", 
	},	
	"home_page-chairs": {
		RU: "Стулья",
		KZ: "Орындықтар",
		EN: "Chairs", 
	},
	"home_page-pedestals-2": {
		RU: "Тумбы",
		KZ: "Тұғырлар",
		EN: "Pedestals",
	},
	"home_page-puffs": {
		RU: "Пуфы",
		KZ: "Пуфы",
		EN: "Puffs",
	},
	"home_page-dressers": {
		RU: "Комоды",
		KZ: "Киім-кешектер",
		EN: "Dressers",
	},
	"home_page-hallway": {
		RU: "Прихожая",
		KZ: "Дәліз",
		EN: "Hallway",
	},
	"home_page-cabinets-2": {
	    RU: "Шкафы",
	    KZ: "Шкафтар",
	    EN: "Cabinets",
    },
	"home_page-hangers": {
		RU: "Вешалки",
		KZ: "Iлгіштер",
		EN: "Hangers",
	},
	"home_page-pedestals-3": {
		RU: "Тумбы",
		KZ: "Тұғырлар",
		EN: "Pedestals",
	},
	"home_page-dressers-2": {
		RU: "Комоды",
		KZ: "Киім-кешектер",
		EN: "Dressers",
	},
	"home_page-hangers-2": {
		RU: "Напольные вешалки",
		KZ: "Еденге арналған ілгіштер",
		EN: "Floor hangers",
	},
	"home_kitchen": {
		RU: "Кухня",
		KZ: "Ас үй",
		EN: "Kitchen",
	},
	"home_office": {
		RU: "Домашний офис",
		KZ: "Үйдегі офис",
		EN: "Home office",
	},
	"home_children": {
		RU: "Детская",
		KZ: "Бала бөлмесі",
		EN: "Childrens room",
	},
	"home_studio": {
		RU: "Студия",
		KZ: "Студия",
		EN: "Studio",
	},
	"home_garden": {
		RU: "Сад и дача",
		KZ: "Бақша және коттедж",
		EN: "Garden",
	},
	"price": {
		RU: "Цена",
		KZ: "Бағасы",
		EN: "Price",
	},
	"money": {
		RU: "₸",
		KZ: "₸",
		EN: "$",
	},
	"money-2": {
		RU: "₸ 1 000 000",
		KZ: "₸ 1 000 000",
		EN: "$ 1 000 000",
	},
	"home_goods": {
		RU: "Товары",
		KZ: "Тауарлар",
		EN: "Products",
	},
//cart page
"cart_page-1": {
	RU: "Аккаунт",
	KZ: "Аккаунт",
	EN: "Account",
},
"cart_page-2": {
	RU: "Закладки",
	KZ: "Бетбелгілер",
	EN: "Bookmarks",
},
"cart_page-3": {
	RU: "Оплата",
	KZ: "Төлем",
	EN: "Payment",
},
"cart_page-4": {
	RU: "Корзина",
	KZ: "Себет",
	EN: "Cart",
},
"cart_page-5": {
	RU: "Вход",
	KZ: "Кіру",
	EN: "Login",
},
"cart_page-6": {
	RU: "Главная",
	KZ: "Басты бет",
	EN: "Main",
},
"cart_page-7": {
	RU: "Магазин",
	KZ: "Дүкен",
	EN: "Shop",
},
"cart_page-13": {
	RU: "Контакты",
	KZ: "Байланыстар",
	EN: "Contacts",
},
"cart_page-8": {
	RU: "Продукты",
	KZ: "Өнімдер",
	EN: "Products",
},
"cart_page-9": {
	RU: "Детали",
	KZ: "Егжей",
	EN: "Details",
},
"cart_page-14": {
	RU: "Поиск",
	KZ: "Іздеу",
	EN: "Search",
},
"cart_page-15": {
	RU: "Мебель для вашего дома",
	KZ: "Үйіңізге арналған жиһаз",
	EN: "Furniture for your home",
},
"cart_page-16": {
	RU: "Выбирайте товары со скидками",
	KZ: "Жеңілдіктері бар өнімдерді таңдаңыз",
	EN: "Choose products with discounts",
},
"cart_more": {
	RU: "Подробнее",
	KZ: "Көбірек",
	EN: "More",
},
"cart_page-17": {
	RU: "Мебель для спальни",
	KZ: "Жатын бөлме жиһазы",
	EN: "Bedroom furniture",
},
"cart_page-18": {
	RU: "Набор решений для дома",
	KZ: "Үй шешімдер жинағы",
	EN: "Home solution set",
},
"cart_page-payment": {
	RU: "Оплата",
	KZ: "Төлем",
	EN: "Payment",
},
"cart_page-cart": {
	RU: "Корзина",
	KZ: "Себет",
	EN: "Cart",
},
"cart_page-login": {
	RU: "Вход",
	KZ: "Кіру",
	EN: "Login",
},
"cart_page-category": {
	RU: "Категории",
	KZ: "Санаттар",
	EN: "Category",
},
"cart_page-living": {
	RU: "Гостинная",
	KZ: "Тұрғын бөлме",
	EN: "Living Room",
},
"cart_page-sofas": {
	RU: "Диваны",
	KZ: "Дивандар",
	EN: "Sofas" ,
},
"cart_page-armchairs": {
	RU: "Кресла",
	KZ: "Орындықтар",
	EN: "Armchairs",
},
"cart_page-cabinets": {
	RU: "Шкафы",
	KZ: "Шкафтар",
	EN: "Cabinets",
},
"cart_page-tables": {
	RU: "Столы",
	KZ: "Кестелер",
	EN: "Tables", 
},
"cart_page-pedestals": {
	RU: "Тумбы",
	KZ: "Тұғырлар",
	EN: "Pedestals",
},
"cart_page-bedroom": {
	RU: "Спальня",
	KZ: "Жатын бөлме",
	EN: "Bedroom",
},
"cart_page-armchairs-2": {
	RU: "Кресла",
	KZ: "Орындықтар",
	EN: "Armchairs",
},
"cart_page-beds": {
	RU: "Кровати",
	KZ: "Төсектер",
	EN: "Beds",
},
"cart_page-tables-2": {
	RU: "Столы",
	KZ: "Кестелер",
	EN: "Tables", 
},	
"cart_page-chairs": {
	RU: "Стулья",
	KZ: "Орындықтар",
	EN: "Chairs", 
},
"cart_page-pedestals-2": {
	RU: "Тумбы",
	KZ: "Тұғырлар",
	EN: "Pedestals",
},
"cart_page-puffs": {
	RU: "Пуфы",
	KZ: "Пуфы",
	EN: "Puffs",
},
"cart_page-dressers": {
	RU: "Комоды",
	KZ: "Киім-кешектер",
	EN: "Dressers",
},
"cart_page-hallway": {
	RU: "Прихожая",
	KZ: "Дәліз",
	EN: "Hallway",
},
"cart_page-cabinets-2": {
	RU: "Шкафы",
	KZ: "Шкафтар",
	EN: "Cabinets",
},
"cart_page-hangers": {
	RU: "Вешалки",
	KZ: "Iлгіштер",
	EN: "Hangers",
},
"cart_page-pedestals-3": {
	RU: "Тумбы",
	KZ: "Тұғырлар",
	EN: "Pedestals",
},
"cart_page-dressers-2": {
	RU: "Комоды",
	KZ: "Киім-кешектер",
	EN: "Dressers",
},
"cart_page-hangers-2": {
	RU: "Напольные вешалки",
	KZ: "Еденге арналған ілгіштер",
	EN: "Floor hangers",
},
"cart_kitchen": {
	RU: "Кухня",
	KZ: "Ас үй",
	EN: "Kitchen",
},
"cart_office": {
	RU: "Домашний офис",
	KZ: "Үйдегі офис",
	EN: "Home office",
},
"cart_children": {
	RU: "Детская",
	KZ: "Бала бөлмесі",
	EN: "Childrens room",
},
"cart_studio": {
	RU: "Студия",
	KZ: "Студия",
	EN: "Studio",
},
"cart_garden": {
	RU: "Сад и дача",
	KZ: "Бақша және коттедж",
	EN: "Garden",
},
"cart_price": {
	RU: "Цена",
	KZ: "Бағасы",
	EN: "Price",
},
"cart_money": {
	RU: "₸",
	KZ: "₸",
	EN: "$",
},
"cart_money-2": {
	RU: "₸ 1 000 000",
	KZ: "₸ 1 000 000",
	EN: "$ 1 000 000",
},
"cart_goods": {
	RU: "Товары",
	KZ: "Тауарлар",
	EN: "Products",
},
"home_service": {
    RU: "Сервис",
    KZ: "Қызмет",
    EN: "Service",
},
"home_help": {
    RU: "Помощь",
    KZ: "Көмектесіңдер",
    EN: "Help",
},

"home_feedback": {
    RU: "Обратная связь",
    KZ: "Кері байланыс",
    EN: "Feedback",
},
"home_status": {
    RU: "Статус заказа",
    KZ: "Тапсырыс мәртебесі",
    EN: "Order status",
},
"home_use": {
    RU: "Условия пользования",
    KZ: "Қолдану ережелері",
    EN: "Terms of use",
},
"home_tearms": {
    RU: "Политика конфиденциальности",
    KZ: "Құпиялылық саясаты",
    EN: "Privacy policy",
},
"home_return": {
    RU: "Правила возврата",
    KZ: "Тауарды Қайтару Шарттары",
    EN: "Return policy",
},
"home_tickets": {
    RU: "Система билетов",
    KZ: "Билет жүйесі",
    EN: "Tickets system",
},
"home_info": {
    RU: "Информация о компании",
    KZ: "Компания туралы ақпарат",
    EN: "Company information",
},
"home_vak": {
    RU: "Вакансии",
    KZ: "Жұмыс орындары",
    EN: "Jobs",
},
"home_partnairs": {
    RU: "Партнеры",
    KZ: "Серіктестер",
    EN: "Partners",
},
"home_rigths": {
    RU: "Права",
    KZ: "Құқықтар",
    EN: "Rights",
},
"home_call": {
    RU: "Свяжитесь с нами",
    KZ: "Бізбен байланысыңыз",
    EN: "Contact us",
},
"home_inform": {
    RU: "Получайте информацию о скидках и новинках",
    KZ: "Жеңілдіктер мен жаңа өнімдер туралы ақпарат алыңыз",
    EN: "Get information about discounts and new products",
},
"home_policy": {
    RU: "Политика",
    KZ: "Саясат",
    EN: "Policy",
},
"home_about": {
    RU: "О нас",
    KZ: "Біз туралы",
    EN: "About us",
},
"money-3": {
	RU: "₸",
	KZ: "₸",
	EN: "$",
},
"money-4": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-5": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-6": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-7": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-8": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-9": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-10": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-11": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-12": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-13": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-14": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-15": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-16": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-17": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-18": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-19": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-20": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-21": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-22": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-23": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-24": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-25": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-26": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-27": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-28": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-29": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-30": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-31": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-32": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-33": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-34": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-35": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-36": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-37": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-38": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-39": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-40": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-41": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-50": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-51": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-52": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-53": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-54": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-55": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-56": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"money-57": {
	RU: "₸100 100",
	KZ: "₸100 100",
	EN: "$100 100",
},
"money-58": {
	RU: "₸100 000",
	KZ: "₸100 000",
	EN: "$100 000",
},
"home_shop-1": {
    RU: "Журнальный стол и кресло",
    KZ: "Кофе үстелі мен кресло",
    EN: "Coffee table and armchair",
},
"home_shop-2": {
    RU: "Журнальный стол и кресло",
    KZ: "Кофе үстелі мен кресло",
    EN: "Coffee table and armchair",
},
"home_shop-3": {
    RU: "Добавить в корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-8": {
    RU: "Добавить в корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-4": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-5": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-7": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-9": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_page-30": {
	RU: "Большой выбор мебели",
	KZ: "Жиһаздың үлкен таңдауы",
	EN: "Large selection of furniture",
},
"home_page-31": {
	RU: "Колекции мебели",
	KZ: "Жиһаз топтамалары",
	EN: "Furniture collections",
},
"home_shop-11": {
    RU: "Журнальный стол",
    KZ: "Кофе үстелі",
    EN: "Coffee table",
},
"home_shop-12": {
    RU: "Журнальный стол",
    KZ: "Кофе үстелі",
    EN: "Coffee table",
},
"home_shop-13": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-14": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-15": {
    RU: "Добавить в корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-16": {
    RU: "Журнальный стол",
    KZ: "Кофе үстелі",
    EN: "Coffee table",
},
"home_shop-17": {
    RU: "Набор в гостинную",
    KZ: "Қонақ бөлме жиынтығы",
    EN: "Living room set",
},
"home_shop-18": {
    RU: "Набор в гостинную",
    KZ: "Қонақ бөлме жиынтығы",
    EN: "Living room set",
},
"home_shop-19": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-20": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-21": {
    RU: "Добавить в корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-23": {
    RU: "Диван и столик в спальню",
    KZ: "Жатын бөлмедегі диван мен үстел",
    EN: "Sofa and table in the bedroom",
},
"home_shop-22": {
    RU: "Диван и столик в спальню",
    KZ: "Жатын бөлмедегі диван мен үстел",
    EN: "Sofa and table in the bedroom",
},
"home_shop-25": {
    RU: "Кресло для отдыха",
    KZ: "Демалыс креслосы",
    EN: "Leisure chair",
},
"home_shop-24": {
    RU: "Кресло для отдыха",
    KZ: "Демалыс креслосы",
    EN: "Leisure chair",
},
"home_shop-26": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-27": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-28": {
    RU: "Добавить в корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-29": {
    RU: "Стулья и стол",
    KZ: "Орындықтар мен үстел",
    EN: "Chairs and table",
},
"home_shop-30": {
    RU: "Стулья и стол",
    KZ: "Орындықтар мен үстел",
    EN: "Chairs and table",
},
"home_shop-31": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-32": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-33": {
    RU: "Добавить в корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-35": {
    RU: "Гостнная",
    KZ: "Тұрғын бөлме",
    EN: "Living room",
},
"home_shop-36": {
    RU: "Спальня",
    KZ: "Жатын бөлме",
    EN: "Bedroom",
},
"home_shop-37": {
    RU: "Прихожая",
    KZ: "Дәліз",
    EN: "Hallway",
},
"home_shop-38": {
    RU: "Детская",
    KZ: "Бала бөлмесі",
    EN: "Children's room",
},
"home_shop-39": {
    RU: "Кухня",
    KZ: "Ас үй",
    EN: "Kitchen",
},
"home_shop-40": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-41": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-42": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-43": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-44": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-45": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-100": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-46": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-47": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-48": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-49": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-50": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-51": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-52": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-53": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-54": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-55": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-56": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-57": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-58": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_sofa": {
	RU: "Диван",
	KZ: "Диван",
	EN: "Sofas" ,
},
"home_living": {
	RU: "Гостинная",
	KZ: "Тұрғын бөлме",
	EN: "Living Room",
},
"home_module-living": {
	RU: "Гостинная",
	KZ: "Тұрғын бөлме",
	EN: "Living Room",
},
"home_bed": {
	RU: "Cпальня",
	KZ: "Жатын бөлме",
	EN: "Bedroom",
},
"home_bed-1": {
	RU: "Cпальня",
	KZ: "Жатын бөлме",
	EN: "Bedroom",
},
"home_bed-2": {
	RU: "Cпальня",
	KZ: "Жатын бөлме",
	EN: "Bedroom",
},
"home_bed-3": {
	RU: "Cпальня",
	KZ: "Жатын бөлме",
	EN: "Bedroom",
},
"home_bed-4": {
	RU: "Cпальня",
	KZ: "Жатын бөлме",
	EN: "Bedroom",
},
"home_hallway-1": {
	RU: "Прихожая",
	KZ: "Дәліз",
	EN: "Hallway",
},
"home_hallway-2": {
	RU: "Прихожая",
	KZ: "Дәліз",
	EN: "Hallway",
},
"home_hallway-3": {
	RU: "Прихожая",
	KZ: "Дәліз",
	EN: "Hallway",
},
"home_hallway-4": {
	RU: "Прихожая",
	KZ: "Дәліз",
	EN: "Hallway",
},
"home_child-1": {
	RU: "Детская",
	KZ: "Бала бөлмесі",
	EN: "Children's Room",
},
"home_child-2": {
	RU: "Детская",
	KZ: "Бала бөлмесі",
	EN: "Children's Room",
},
"home_child-3": {
	RU: "Детская",
	KZ: "Бала бөлмесі",
	EN: "Children's Room",
},
"home_child-4": {
	RU: "Детская",
	KZ: "Бала бөлмесі",
	EN: "Children's Room",
},
"home_kitchen-1": {
	RU: "Кухня",
	KZ: "Ас үй",
	EN: "Kitchen",
},
"home_kitchen-2": {
	RU: "Кухня",
	KZ: "Ас үй",
	EN: "Kitchen",
},
"home_kitchen-3": {
	RU: "Кухня",
	KZ: "Ас үй",
	EN: "Kitchen",
},
"home_kitchen-4": {
	RU: "Кухня",
	KZ: "Ас үй",
	EN: "Kitchen",
},
"home_recomendation": {
	RU: "Рекомендации",
	KZ: "Ұсыныстар",
	EN: "Recomendations",
},
"home_f-1": {
	RU: "Тумба",
	KZ: "Тумба",
	EN: "Cabinet",
},
"home_f-7": {
	RU: "Тумба",
	KZ: "Тумба",
	EN: "Cabinet",
},
"home_f-8": {
	RU: "Тумба",
	KZ: "Тумба",
	EN: "Cabinet",
},
"home_f-9": {
	RU: "Тумба",
	KZ: "Тумба",
	EN: "Cabinet",
},
"home_f-10": {
	RU: "Тумба",
	KZ: "Тумба",
	EN: "Cabinet",
},
"home_f-11": {
	RU: "Тумба",
	KZ: "Тумба",
	EN: "Cabinet",
},
"home_f-2": {
	RU: "Тумба",
	KZ: "Тумба",
	EN: "Cabinet",
},
"home_f-3": {
	RU: "Тумба",
	KZ: "Тумба",
	EN: "Cabinet",
},
"home_f-4": {
	RU: "Тумба",
	KZ: "Тумба",
	EN: "Cabinet",
},
"home_f-5": {
	RU: "Тумба",
	KZ: "Тумба",
	EN: "Cabinet",
},
"home_f-6": {
	RU: "Тумба",
	KZ: "Тумба",
	EN: "Cabinet",
},
"home_shop-59": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-60": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-61": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-62": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-63": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_shop-64": {
    RU: "В корзину",
    KZ: "Себетке қосу",
    EN: "Add to cart",
},
"home_all": {
	RU: "Все права защищены © 2023 Furniture.",
    KZ: "Барлық құқықтар сақталған © 2023 Furniture.",
    EN: "All rights reserved © 2023 Furniture.",
},
"cart_page_title": {
	RU: "Корзина | Furniture",
	KZ: "Себет | Furniture",
	EN: "Cart | Furniture",
},
"shop_page_title": {
	RU: "Магазин | Furniture",
	KZ: "Дүкен | Furniture",
	EN: "Shop | Furniture",
},
"shop_page_title": {
	RU: "Продукты | Furniture",
	KZ: "Өнімдер | Furniture",
	EN: "Products | Furniture",
},
"login_login": {
	RU: "Войдите в аккаунт",
	KZ: "Кіру",
	EN: "Sign in",
},
"login_name": {
	RU: "Имя",
	KZ: "Аты",
	EN: "Name",
},
"login_login-1": {
	RU: "Войти",
	KZ: "Кіру",
	EN: "Sign in",
},
"login_or": {
	RU: "ИЛИ",
	KZ: "НЕМЕСЕ",
	EN: "OR",
},
"login_register": {
	RU: "Зарегистрируйтесь",
	KZ: "Тіркеу",
	EN: "Register",
},
"home_page_login": {
	RU: "Логин | Furniture",
	KZ: "Логин | Furniture",
	EN: "Login | Furniture",
},
"login_register-1": {
	RU: "Зарегистрироваться",
	KZ: "Тіркеу",
	EN: "Register",
},
"login_remember": {
	RU: "Запомнить меня",
	KZ: "Мені есте сақтау",
	EN: "Remember me",
},
"home_page_payment": {
	RU: "Оплата| Furniture",
	KZ: "Төлем | Furniture",
	EN: "Payment | Furniture",
},
"cart_home": {
	RU: "Главная",
	KZ: "Басты бет",
	EN: "Home",
},
"cart_cart": {
	RU: "Корзина",
	KZ: "Себет",
	EN: "Cart",
},
"checkout_home": {
	RU: "Главная",
	KZ: "Басты бет",
	EN: "Home",
},
"checkout_payment": {
	RU: "Оплата",
	KZ: "Төлем",
	EN: "Payment",
},
"checkout-1": {
	RU: "Новый пользователь",
	KZ: "Жаңа пайдаланушы",
	EN: "New user",
},
"checkout_step": {
	RU: "Шаг 1",
	KZ: "1-қадам",
	EN: "Step 1",
},
"checkout-2": {
	RU: "Оплата",
	KZ: "Төлем",
	EN: "Payment",
},
"checkout-3": {
	RU: "Регистрация аккаунта",
	KZ: "Есептік жазбаны тіркеу",
	EN: "Account registration",
},
"checkout-4": {
	RU: "Оплата без регистрации",
	KZ: "Тіркеусіз төлеу",
	EN: "Payment without registration",
},
"checkout-5": {
	RU: "Отмена",
	KZ: "Болдырмау",
	EN: "Cancel",
},
"checkout-6": {
	RU: "Пожалуйста зарегистрируйтесь или используйте Оплату без регистрации",
	KZ: "Тіркеліңіз немесе төлемді тіркеусіз пайдаланыңыз",
	EN: "Please register or use Payment without registration",
},
"checkout-7": {
	RU: "Информация покупателя",
	KZ: "Сатып алушы туралы ақпарат",
	EN: "Buyer Information",
},
"checkout-8": {
	RU: "Продолжить",
	KZ: "Жалғастыру",
	EN: "Continue",
},
"checkout-9": {
	RU: "Оформление заказа",
	KZ: "Тапсырысты қабылдау",
	EN: "Checkout",
},
"checkout-10": {
	RU: "-- Страна --",
	KZ: "-- Мемлекет --",
	EN: "-- Country --",
},
"checkout-11": {
	RU: "-- Регион --",
	KZ: "-- Аймақ --",
	EN: "-- Region --",
},
"checkout-12": {
	RU: "Коментарий",
	KZ: "Пікір",
	EN: "Comment",
},
"checkout-13": {
	RU: "Просмотр и оплата",
	KZ: "Көру және төлеу",
	EN: "View and pay",
},
"login_name-1": {
	RU: "Имя аккаунта",
	KZ: "Төлем алушы",
	EN: "Account name",
},
"checkout_product": {
	RU: "Продукт",
	KZ: "Өнім",
	EN: "Product",
},
"checkout_price": {
	RU: "Цена",
	KZ: "Бағасы",
	EN: "Price",
},
"checkout_quantity": {
	RU: "Количество",
	KZ: "Саны",
	EN: "Quantity",
},
"checkout_total": {
	RU: "Всего",
	KZ: "Барлығы",
	EN: "Total",
},
"login_name-2": {
	RU: "Имя аккаунта",
	KZ: "Төлем алушы",
	EN: "Account name",
},
"login_pass": {
	RU: "Пароль",
	KZ: "Құпия сөз",
	EN: "Password",
},
"login_username-1": {
	RU: "Имя пользователя",
	KZ: "Қолданушының аты",
	EN: "Your name",
},
"login_pass-1": {
	RU: "Повторите пароль",
	KZ: "Құпия сөзді қайталаңыз",
	EN: "Repeat password",
},
"login_companyname": {
	RU: "Название компании",
	KZ: "Компанияның Аты",
	EN: "Company name",
},
"login_name-3": {
	RU: "Имя",
	KZ: "Аты",
	EN: "First Name",
},
"login_name-4": {
	RU: "Фамилия",
	KZ: "Тегi",
	EN: "Last Name",
},
"login_name-4": {
	RU: "Фамилия",
	KZ: "Тегi",
	EN: "Last Name",
},
"login_name-5": {
	RU: "Отчество",
	KZ: "Әкесінің аты",
	EN: "Surname",
},
"login_address": {
	RU: "Фактический адрес",
	KZ: "Нақты мекен-жайы",
	EN: "Actual address",
},
"login_address-1": {
	RU: "Юридический адрес",
	KZ: "Заңды мекен-жайы",
	EN: "Legal address",
},
"login-location": {
	RU: "Местоположение",
	KZ: "Орналасқан жері",
	EN: "Location",
},
"login-password": {
	RU: "Подтвердите пароль",
	KZ: "Құпия сөзді растаңыз",
	EN: "Confirm the password",
},
"login-tel": {
	RU: "Телефон",
	KZ: "Телефон",
	EN: "Phone",
},
"login-mobile": {
	RU: "Мобильный телефон",
	KZ: "Ұялы телефон",
	EN: "Mobile phone",
},
"login-comment": {
	RU: "Напишите комментарий к заказу",
	KZ: "Тапсырысқа пікір жазыңыз",
	EN: "Write a comment to the order",
},
"login_living-1": {
	RU: "Гостинная",
	KZ: "Тұрғын бөлме",
	EN: "Living room",
},
"login_living-2": {
	RU: "Гостинная",
	KZ: "Тұрғын бөлме",
	EN: "Living room",
},
"login_living-3": {
	RU: "Гостинная",
	KZ: "Тұрғын бөлме",
	EN: "Living room",
},
"login_pay": {
	RU: "К оплате",
	KZ: "Төлемге",
	EN: "To pay",
},
"login_nds": {
	RU: "НДС",
	KZ: "ҚҚС",
	EN: "VAT",
},
"login_delivery": {
	RU: "Доставка",
	KZ: "Жеткізу",
	EN: "Delivery",
},
"login_total": {
	RU: "Всего",
	KZ: "Барлығы",
	EN: "Total",
},
"login-pay": {
	RU: "Безналичная оплата",
	KZ: "Қолма-қол ақшасыз төлем",
	EN: "Cashless payment",
},
"login-pay-1": {
	RU: "Оплата при получении",
	KZ: "Төлем алу кезінде",
	EN: "Payment upon receipt",
},
"login-continue": {
	RU: "Продолжить",
	KZ: "Жалғастыру",
	EN: "Continue",
},
"login_free": {
	RU: "Бесплатно",
	KZ: "Тегін",
	EN: "Free",
},
"contact-information": {
	RU: "Информация",
	KZ: "Ақпарат",
	EN: "Information",
},
"contact-kz": {
	RU: "Казахстан, город Алматы",
	KZ: "Казахстан, город Алматы",
	EN: "Kazakhstan, Almaty",
},
"contact-kz": {
	RU: "Казахстан, город Алматы",
	KZ: "Казахстан, город Алматы",
	EN: "Kazakhstan, Almaty",
},
"contact-alm": {
	RU: "Алматы",
	KZ: "Алматы",
	EN: "Almaty",
},
};

function checkPagePathName() {
	switch (currentPathName) {
		case "/index.html":
			currentText = homeTexts;
			break;
			case "/cart.html":
				currentText = anotherTexts;
				break;
				default:
					currentText = homeTexts;
					break;
	}
}
checkPagePathName();

function changeLang()
{
	for (const key in currentText) {
		const element = document.querySelector(`[data-lang=${key}]`);
		if(element) {
			element.textContent = currentText[key][currentLang];
		}
	}
	for (const key in currentText) {
		const element = document.querySelector(`[data-lang=${key}]`);
		if(element) {
        element.placeholder = currentText[key][currentLang] ;
		
	}
	for (const key in currentText) {
		const element = document.querySelector(`[data-lang=${key}]`);
		if(element) {
        element.value = currentText[key][currentLang] ;
		
	}
	}
}
}
changeLang();


langButtons.forEach((btn) => {
	btn.addEventListener('click',(Event) => {
		currentLang = Event.target.dataset.btn;
		localStorage.setItem('language',Event.target.dataset.btn);
		resetActiveClass(langButtons, 'header_btn_active');
		btn.classList.add('header_btn_active');
		changeLang();
	});
});

function resetActiveClass(arr, activeClass) {
	arr.forEach((element) => {
		element.classList.remove(activeClass);
	});

}

function checkActiveLangButton() {
	switch (currentLang) {
		case 'RU':
            document.querySelector('[data-btn="RU"]')
			.classList.add("header_btn_active");
			break;
			case 'KZ':
				document.querySelector('[data-btn="KZ"]')
				.classList.add("header_btn_active");
				break;
				case 'EN':
					document.querySelector('[data-btn="EN"]')
					.classList.add("header_btn_active");
					break;

					default:
						document
						.querySelector('[data-btn="RU"]')
						.classList.add("header_btn_active");
						break;
	}
}
checkActiveLangButton();