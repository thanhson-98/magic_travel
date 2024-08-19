export const truncateTextByWidth = (text, maxWidth, font = '16px Roboto') => {
	const ellipsis = '...';
	const expendWidth = 100;
	const newMaxWidth = maxWidth + expendWidth;
	let width = getTextWidth(text, font);

	if (width <= newMaxWidth) {
		return text;
	}

	let truncatedText = '';
	for (const element of text) {
		truncatedText += element;
		width = getTextWidth(truncatedText + ellipsis, font);
		if (width > newMaxWidth) {
			return truncatedText.slice(0, -1) + ellipsis;
		}
	}

	return text;
};
