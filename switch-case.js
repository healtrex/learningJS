var expr = 'Papayas';
switch (expr) {
	case 'Oranges':
		console.log('Oranges are $0.59 per pound.');
		break;
	case 'Mangoes':
		console.log('Mangoes are $0.79 per pound.');
		break;
	case 'Papayas':
		console.log('Papayas are $1.49 per pound.');
		break;
	default:
		console.log('Sorry we are all out of' + expr + '.');
}
