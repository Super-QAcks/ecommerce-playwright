/** Escapes a string so it can be embedded safely in a RegExp. */
export function escapeRegExp(value: string): string {
	return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Escapes a string for use inside a double-quoted CSS attribute value: [attr="..."] */
export function escapeAttr(value: string): string {
	return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

/**
 * Matches a link whose text is exactly `name`, tolerating an optional
 * count like "(5)" before or after it. Case-sensitive.
 */
export function nameWithOptionalCount(name: string): RegExp {
	const n = escapeRegExp(name.trim());
	return new RegExp(`^\\s*(\\(\\d+\\)\\s*)?${n}(\\s*\\(\\d+\\))?\\s*$`);
}
