declare module 'read-time-estimate' {
	function readTimeEstimate(
		text: string,
		customWordTime?: number,
		customImageTime?: number,
		chineseKoreanReadTime?: number,
		imageTags?: string[]
	): {
		humanizedDuration: string;
		duration: number;
		totalWords: number;
		wordTime: number;
		totalImages: number;
		imageTime: number;
		otherLanguageTimeCharacters: number;
		otherLanguageTime: number;
	};
	export = readTimeEstimate;
}
