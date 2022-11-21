const WORDS_PER_MIN = 275; // wpm
const IMAGE_READ_TIME = 12; // in seconds
const CHINESE_KOREAN_READ_TIME = 500; // cpm
const IMAGE_TAGS = ['img', 'Image'];

/**
 * Get Image Read Time from a string.
 * @param imageTags
 * @param text
 * @returns
 */
function imageCount(imageTags: string[], text: string) {
	const combinedImageTags = imageTags.join('|');
	const pattern = `<(${combinedImageTags})([\\w\\W]+?)[\\/]?>`;
	const reg = new RegExp(pattern, 'g');
	return (text.match(reg) || []).length;
}

function imageReadTime(
	customImageTime = IMAGE_READ_TIME,
	tags = IMAGE_TAGS,
	text: string
) {
	let seconds = 0;
	const count = imageCount(tags, text);

	if (count > 10) {
		seconds = (count / 2) * (customImageTime + 3) + (count - 10) * 3; // n/2(a+b) + 3 sec/image
	} else {
		seconds = (count / 2) * (2 * customImageTime + (1 - count)); // n/2[2a+(n-1)d]
	}

	return {
		time: seconds / 60,
		count
	};
}

/**
 * Get Words count from a string.
 * @param text
 * @returns
 */
function wordsCount(text: string) {
	const pattern = '\\w+';
	const reg = new RegExp(pattern, 'g');
	return (text.match(reg) || []).length;
} // Chinese / Japanese / Korean

function otherLanguageReadTime(text: string) {
	const pattern =
		'[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]';
	const reg = new RegExp(pattern, 'g');
	const count = (text.match(reg) || []).length;
	const time = count / CHINESE_KOREAN_READ_TIME;
	const formattedString = text.replace(reg, '');
	return {
		count,
		time,
		formattedString
	};
}

function wordsReadTime(text: string, wordsPerMin = WORDS_PER_MIN) {
	const {
		count: characterCount,
		time: otherLanguageTime,
		formattedString
	} = otherLanguageReadTime(text);
	const wordCount = wordsCount(formattedString);
	const wordTime = wordCount / wordsPerMin;
	return {
		characterCount,
		otherLanguageTime,
		wordTime,
		wordCount
	};
}

/**
 * Strip HTML tags string.
 * @param text
 * @returns
 */
function stripTags(text: string) {
	const pattern = '<\\w+(\\s+("[^"]*"|\\\'[^\\\']*\'|[^>])+)?>|<\\/\\w+>';
	const reg = new RegExp(pattern, 'gi');
	return text.replace(reg, '');
}

/**
 * Strip HTML tags string.
 * @param text
 * @returns
 */
function stripWhitespace(text: string) {
	return text.replace(/^\s+/, '').replace(/\s+$/, '');
}

/**
 * Convert time(in minutes) to a humanized string.
 * @param time
 * @returns
 */
function humanizeTime(time: number) {
	if (time < 0.5) {
		return 'less than a minute';
	}

	if (time >= 0.5 && time < 1.5) {
		return '1 minute';
	}

	return `${Math.ceil(time)} minutes`;
}

function readTime(
	text: string,
	customWordTime?: number,
	customImageTime?: number,
	chineseKoreanReadTime?: number,
	imageTags?: string[]
) {
	const { time: imageTime, count: imageCount$$1 } = imageReadTime(
		customImageTime,
		imageTags,
		text
	);
	const strippedString = stripTags(stripWhitespace(text));
	const { characterCount, otherLanguageTime, wordTime, wordCount } =
		wordsReadTime(strippedString, customWordTime);
	return {
		humanizedDuration: humanizeTime(imageTime + wordTime),
		duration: imageTime + wordTime,
		totalWords: wordCount,
		wordTime,
		totalImages: imageCount$$1,
		imageTime,
		otherLanguageTimeCharacters: characterCount,
		otherLanguageTime
	};
}

export default readTime;
