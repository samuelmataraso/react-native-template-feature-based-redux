const phoneMask = value => {
	if (!value) return value;
	let withMask = value.replace(/\D/g, '');
	if (withMask.length > 11) withMask = withMask.substr(0, 11);
	if (withMask.length < 11) {
		withMask = withMask.replace(/^(\d\d)(\d)/g, '$1 $2');
		withMask = withMask.replace(/(\d{4})(\d)/, '$1-$2');
	} else if (value.length >= 11) {
		withMask = withMask.replace(/^(\d\d)(\d)/g, '$1 $2');
		withMask = withMask.replace(/(\d{5})(\d)/, '$1-$2');
	}
	return withMask;
};

export default {
	phoneMask,
};
