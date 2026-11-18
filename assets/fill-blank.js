// Each example belongs to a specific meaning so shared spellings retain separate progress.
export function vocabularyFillBlanks(words) {
  return words.flatMap(({ senses }) => senses.flatMap(({ senseId, fillBlank }) => {
    if (!fillBlank) return [];
    return [{
      ...fillBlank,
      id: `${senseId}:fill-blank`,
      senseId,
      type: "fill-blank",
      source: "course vocabulary",
      reviewStatus: "approved",
    }];
  }));
}

export function completedSentence(question) {
  return question.sentence?.replace("____", () => question.correct);
}
