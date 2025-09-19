// Simple mock recommendation service to simulate an AI call
// In real usage, replace with a backend API call that runs an AI model

export type Pet = {
  id: string;
  name: string;
  type: string;
  breed: string;
  age: string;
  gender: string;
  location: string;
  image: string;
  description: string;
  isUrgent: boolean;
};

export async function getPetRecommendations(prompt: string, all: Pet[]): Promise<Pet[]> {
  // Simulate network latency
  await new Promise((r) => setTimeout(r, 900));

  const p = (prompt || "").toLowerCase();

  // Very naive scoring based on keyword presence.
  // Backend AI should replace this with proper embeddings / LLM ranking.
  const keywords = p
    .split(/[^a-zA-Z]+/)
    .map((k) => k.trim())
    .filter(Boolean);

  if (keywords.length === 0) {
    // Default: return a diverse sample
    return all.slice(0, Math.min(3, all.length));
  }

  const score = (pet: Pet) => {
    const hay = `${pet.name} ${pet.type} ${pet.breed} ${pet.age} ${pet.gender} ${pet.location} ${pet.description}`.toLowerCase();
    let s = 0;
    for (const k of keywords) {
      if (hay.includes(k)) s += 1;
    }
    // small boosts
    if (p.includes("kid") || p.includes("family")) {
      if (/gentle|calm|kids|family|house-trained/i.test(pet.description)) s += 1;
    }
    if (p.includes("active") || p.includes("hike") || p.includes("run")) {
      if (/energetic|outdoor|hiking|active/i.test(pet.description)) s += 1;
    }
    return s;
  };

  return [...all]
    .map((pet) => ({ pet, s: score(pet) }))
    .sort((a, b) => b.s - a.s)
    .slice(0, 6)
    .map((x) => x.pet);
}
