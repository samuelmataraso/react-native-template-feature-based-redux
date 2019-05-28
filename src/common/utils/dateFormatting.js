const dateFormatting = value => {
	if (!value) return value;
	let withMask = value.replace(/\D/g, '');
	if (withMask.length > 6) withMask = withMask.substr(0, 6);
	if (withMask.length > 2 && withMask.length < 5) {
		withMask = withMask.replace(/^(\d{2})(\d+)/g, '$1/$2');
	} else if (withMask.length >= 5) {
		withMask = withMask.replace(/(\d{2})(\d{2})(\d+)/, '$1/$2/$3');
	}
	return withMask;
};

export default {
	dateFormatting,
};
