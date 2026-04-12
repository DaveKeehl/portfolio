const WORDS_PER_MIN = 275;
const IMAGE_READ_TIME = 12;
const IMAGE_TAGS = ["img", "Image"];

const WORD_RE = /\w+/g;
const TAG_RE = /<[^>]*>/gi;

function imageReadTime(
  text: string,
  customImageTime = IMAGE_READ_TIME,
  tags = IMAGE_TAGS,
) {
  const tagPattern = new RegExp(
    String.raw`<(${tags.join("|")})([\w\W]+?)[\/]?>`,
    "g",
  );
  const count = [...text.matchAll(tagPattern)].length;
  const seconds =
    count > 10
      ? (count / 2) * (customImageTime + 3) + (count - 10) * 3
      : (count / 2) * (2 * customImageTime + (1 - count));
  return { time: seconds / 60, count };
}

function humanizeTime(time: number) {
  if (time < 0.5) return "less than a minute";
  if (time < 1.5) return "1 minute";
  return `${Math.ceil(time)} minutes`;
}

export default function readTime(
  text: string,
  customWordTime?: number,
  customImageTime?: number,
  imageTags?: string[],
) {
  const { time: imageTime, count: totalImages } = imageReadTime(
    text,
    customImageTime,
    imageTags,
  );
  const stripped = text.trim().replaceAll(TAG_RE, "");
  const wordCount = (stripped.match(WORD_RE) ?? []).length;
  const wordTime = wordCount / (customWordTime ?? WORDS_PER_MIN);
  const duration = imageTime + wordTime;
  return {
    humanizedDuration: humanizeTime(duration),
    duration,
    totalWords: wordCount,
    wordTime,
    totalImages,
    imageTime,
  };
}
