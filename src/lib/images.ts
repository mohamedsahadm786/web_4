/**
 * Image resolver.
 * Eagerly imports every file under src/images/** and builds a lookup keyed by
 * "<folder>/<name>" (lower-cased, no extension). Drop a correctly-named file
 * into src/images/<folder>/ and it resolves automatically — no code change.
 */
const modules = import.meta.glob('../images/**/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const VIDEO_EXT = ['mp4', 'webm', 'mov', 'ogv'];

export type ResolvedAsset = { url: string; isVideo: boolean };

const map = new Map<string, ResolvedAsset>();

for (const [path, url] of Object.entries(modules)) {
  // path looks like ../images/hero/home-hero-product-image.webp
  const m = path.match(/images\/([^/]+)\/([^/]+)\.([^.]+)$/);
  if (!m) continue;
  const [, folder, name, ext] = m;
  const key = `${folder}/${name}`.toLowerCase();
  map.set(key, { url, isVideo: VIDEO_EXT.includes(ext.toLowerCase()) });
}

/** Resolve "folder/name" (no extension) to an asset, or null if absent. */
export function resolveImage(name: string): ResolvedAsset | null {
  return map.get(name.toLowerCase()) ?? null;
}
