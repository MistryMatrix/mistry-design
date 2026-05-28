"use client";

import { useState } from "react";

export default function CardPreview({
  url,
  displayUrl,
}: {
  url: string;
  displayUrl: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="card-thumb">
      {!failed ? (
        <iframe
          src={url}
          title={displayUrl}
          scrolling="no"
          tabIndex={-1}
          aria-hidden="true"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        // Fallback if the site blocks framing — intentional colored tile + URL
        <div className="thumb-fallback">
          <span>{displayUrl}</span>
        </div>
      )}
    </div>
  );
}
