/**
 * The brand palette every listing asset is painted with.
 *
 * One module, imported by the icon rasteriser, the banner renderer and the
 * screenshot frames alike. Three copies of the same hex is exactly how an icon
 * and a banner drift apart.
 *
 * Every value is a Tailwind teal stop, so the ramp is already
 * contrast-tested against itself rather than hand-picked to be close to
 * something. Teal, because this is plumbing rather than a shop feature, and plumbing should not shout.
 *
 * `.wordpress-org/icon.svg` repeats these values because SVG cannot import;
 * its header names this file as canonical.
 */
export const BRAND = {
	/** What the assets call the plugin. One place, so a rename is one edit. */
	name: 'Scheduled',
	nameAccent: 'Data Fetch',
	tagline: 'Fetch on a schedule',

	/** Ground, darkest first. */
	ink: '#042f2e',
	inkMid: '#134e4a',
	inkLift: '#115e59',

	/** Accent, deep to bright. */
	royal: '#0d9488',
	royalLight: '#14b8a6',
	sky: '#2dd4bf',

	/** The wordmark's gradient, and anything that must stay legible on the ground. */
	accent: '#5eead4',

	/** Shadow colour under white cards, so shadows read as the same hue. */
	shadow: '4, 47, 46',

	/** The glyph fill, top to bottom. */
	glyphTop: '#ffffff',
	glyphMid: '#f0fdfa',
	glyphBase: '#99f6e4',
} as const;

/**
 * The field, as stacked CSS backgrounds — glow, specular, ground, in the order
 * CSS paints them. `angle` tilts the ground ramp.
 *
 * @param angle Ground ramp angle, in degrees.
 */
export function field( angle = 135 ): string {
	return [
		'radial-gradient(70% 100% at 78% 104%, rgba(13, 148, 136, .38) 0%, rgba(13, 148, 136, 0) 64%)',
		'linear-gradient(to bottom, rgba(255, 255, 255, .10) 0%, rgba(255, 255, 255, 0) 34%)',
		`linear-gradient(${ angle }deg, ${ BRAND.ink } 0%, ${ BRAND.inkMid } 42%, ${ BRAND.inkLift } 100%)`,
	].join( ', ' );
}

/** Alias, so the banner and the frames can each call it by the name that fits. */
export const glassField = field;

/**
 * The mark, without its squircle — a tile inside a branded field would be a
 * panel on a panel.
 *
 * @param size Rendered size in pixels; the viewBox is always the 256 master.
 */
export function markSvg( size: number ): string {
	return `<svg width="${ size }" height="${ size }" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="mark-glyph" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0" stop-color="${ BRAND.glyphTop }"/>
      <stop offset="0.6" stop-color="${ BRAND.glyphMid }"/>
      <stop offset="1" stop-color="${ BRAND.glyphBase }"/>
    </linearGradient>
  </defs>
	<circle cx="120" cy="106" r="72" fill="none" stroke="url(#mark-glyph)" stroke-width="20"/>
	<path d="M120 66 V110 L152 128" fill="none" stroke="url(#mark-glyph)" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
	<rect x="182" y="140" width="20" height="56" rx="10" fill="url(#mark-glyph)"/>
	<path d="M166 186 L218 186 L192 224 Z" fill="url(#mark-glyph)"/>
</svg>`;
}
