/**
 * Renders a JSON-LD structured-data block. `data` is serialized as-is; pass
 * plain schema objects built via the helpers in `lib/seo`.
 */
export default function JsonLd({data}: {data: Record<string, unknown> | Record<string, unknown>[]}) {
  return (
    <script
      type="application/ld+json"
      // Structured data is trusted, build-time content — no user input.
      dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}
    />
  );
}
