const WORDS_PER_MIN = 275;
const IMAGE_READ_TIME = 12;
const CHINESE_KOREAN_READ_TIME = 500;
const IMAGE_TAGS = ['img', 'Image'];

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
    seconds = (count / 2) * (customImageTime + 3) + (count - 10) * 3;
  } else {
    seconds = (count / 2) * (2 * customImageTime + (1 - count));
  }

  return { time: seconds / 60, count };
}

function wordsCount(text: string) {
  const pattern = '\\w+';
  const reg = new RegExp(pattern, 'g');
  return (text.match(reg) || []).length;
}

function otherLanguageReadTime(text: string) {
  const pattern =
    '[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]';
  const reg = new RegExp(pattern, 'g');
  const count = (text.match(reg) || []).length;
  const time = count / CHINESE_KOREAN_READ_TIME;
  const formattedString = text.replace(reg, '');
  return { count, time, formattedString };
}

function wordsReadTime(text: string, wordsPerMin = WORDS_PER_MIN) {
  const { count: characterCount, time: otherLanguageTime, formattedString } =
    otherLanguageReadTime(text);
  const wordCount = wordsCount(formattedString);
  const wordTime = wordCount / wordsPerMin;
  return { characterCount, otherLanguageTime, wordTime, wordCount };
}

function stripTags(text: string) {
  const pattern = '<\\w+(\\s+("[^"]*"|\\\'[^\\\']*\'|[^>])+)?>|<\\/\\w+>';
  const reg = new RegExp(pattern, 'gi');
  return text.replace(reg, '');
}

function stripWhitespace(text: string) {
  return text.replace(/^\s+/, '').replace(/\s+$/, '');
}

function humanizeTime(time: number) {
  if (time < 0.5) return 'less than a minute';
  if (time >= 0.5 && time < 1.5) return '1 minute';
  return `${Math.ceil(time)} minutes`;
}

export default function readTime(
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
    otherLanguageTime,
  };
}
