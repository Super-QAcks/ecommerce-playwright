export function parsePrice(text: string): number {
	return Number(text.replace("Rs.", "").trim());
}
