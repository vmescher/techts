export default defineEventHandler((event) => {
	const { locale, ns } = getRouterParams(event);

	const dictionaries: Record<string, Record<string, any>> = {
		'ru:header': {
			header_nav_catalog: 'Каталог продукции',
			header_nav_about: 'О компании',
			header_nav_brands: 'Бренды',
			header_nav_payment: 'Доставка и оплата',
			header_nav_contacts: 'Контакты',
		},
		'en:header': {
			header_nav_catalog: 'Product catalog',
			header_nav_about: 'About us',
			header_nav_brands: 'Brands',
			header_nav_payment: 'Shipping and payment',
			header_nav_contacts: 'Contacts',
		},
	};

	const key = `${locale}:${ns}`;

	return dictionaries[key] || {};
});
