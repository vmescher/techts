export default defineEventHandler((event) => {
	const { locale, ns } = getRouterParams(event);

	const dictionaries: Record<string, Record<string, any>> = {
		'ru:common': {
			common_menu: 'Меню',
			common_close: 'Закрыть',
			common_open: 'Открыть',
		},
		'en:common': {
			common_menu: 'Menu',
			common_close: 'Close',
			common_open: 'Open',
		},
		'ru:header': {
			header_nav_catalog: 'Каталог',
			header_nav_about: 'О компании',
			header_nav_brands: 'Бренды',
			header_nav_payment: 'Доставка и оплата',
			header_nav_contacts: 'Контакты',
			header_nav_more: 'Ещё',
			header_callback_btn: 'Оставить заявку',
		},
		'en:header': {
			header_nav_catalog: 'Catalog',
			header_nav_about: 'About us',
			header_nav_brands: 'Brands',
			header_nav_payment: 'Shipping and payment',
			header_nav_contacts: 'Contacts',
			header_nav_more: 'More',
			header_callback_btn: 'Request a callback',
		},
	};

	const key = `${locale}:${ns}`;

	return dictionaries[key] || {};
});
