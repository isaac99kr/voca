// Keep types alternating when possible, even when one has fewer eligible words.
export function interleaveQuestionTypes(questions) {
  const byType = new Map();
  for (const question of questions) {
    const group = byType.get(question.type) ?? [];
    group.push(question);
    byType.set(question.type, group);
  }

  const ordered = [];
  let previousType;
  while (byType.size) {
    const ranked = [...byType].sort((left, right) => right[1].length - left[1].length);
    const [type, group] = ranked.find(([type]) => type !== previousType) ?? ranked[0];
    ordered.push(group.pop());
    if (!group.length) byType.delete(type);
    previousType = type;
  }
  return ordered;
}
