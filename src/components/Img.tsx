import { resolveImage } from '../lib/images';
import Placeholder from './Placeholder';

type Props = {
  /** "folder/name" without extension, e.g. "hero/home-hero-product-image" */
  name: string;
  alt?: string;
  fit?: 'cover' | 'contain';
  tint?: string;
  className?: string;
  /** placeholder label shown when the file is missing. */
  fallback?: string;
  loading?: 'lazy' | 'eager';
};

/**
 * Renders the real photo if a matching file exists, a looping muted video for
 * video files, or a sized Placeholder when the slot is empty.
 */
export default function Img({
  name,
  alt = '',
  fit = 'cover',
  tint,
  className = '',
  fallback,
  loading = 'lazy',
}: Props) {
  const asset = resolveImage(name);

  if (!asset) {
    return (
      <Placeholder
        label={fallback ?? name.split('/').pop()}
        tint={tint}
        className={className}
      />
    );
  }

  const objectFit = fit === 'contain' ? 'object-contain' : 'object-cover';

  if (asset.isVideo) {
    return (
      <video
        className={`${objectFit} ${className}`}
        src={asset.url}
        autoPlay
        muted
        loop
        playsInline
        aria-label={alt || undefined}
      />
    );
  }

  return (
    <img
      className={`${objectFit} ${className}`}
      src={asset.url}
      alt={alt}
      loading={loading}
      decoding="async"
      draggable={false}
    />
  );
}
