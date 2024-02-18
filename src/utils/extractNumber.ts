export function extractNumber(input: string): number {
	const match = input.match(/\d+/); // Matches any sequence of digits

	return match ? parseInt(match[0]) : 0;
}

// export function extractScoreAndAnalysis(input: string): {
// 	score: number;
// 	analysis: string;
// } {
// 	const scoreRegex = /Score:\s*(\d+)/;
// 	const analysisRegex = /\*\*Analysis:\*\*\s*(.*)/;

// 	const scoreMatch = input.match(scoreRegex);
// 	const analysisMatch = input.match(analysisRegex);

// 	if (!scoreMatch || !analysisMatch) {
// 		return { score: 0, analysis: "" };
// 	}

// 	const score = parseInt(scoreMatch[1]);
// 	const analysis = analysisMatch[1];
// 	return { score, analysis };
// }


export function extractScoreAndAnalysis(input: string): {
	score: number;
	analysis: string;
  } {
	// Define regex patterns to capture score and analysis text
	const scoreRegex = /Score:\s*(\d+)/;
	const analysisRegex = /Analysis:\s*(.*)/;
  
	// Attempt to match the patterns in the input string
	const scoreMatch = input.match(scoreRegex);
	const analysisMatch = input.match(analysisRegex);
  
	// Extract score if matched, defaulting to 0 if not found
	const score = scoreMatch ? parseInt(scoreMatch[1], 10) : 0;
  
	// Extract analysis text if matched, defaulting to an empty string if not found
	const analysis = analysisMatch ? analysisMatch[1].trim() : "";
  
	return { score, analysis };
  }

  export function extractQuestions(input:string) {
	console.log(input);
    // Define regex pattern to capture questions
	const questionRegex = /\d+\.\s+(.*)|^(?!.*\d+\.\s+)(.*)/gm;

	// Find all matches in the input string
	const matches = input.match(questionRegex);

	// If matches are found, return them; otherwise, return an empty array
	return matches || [];
	}