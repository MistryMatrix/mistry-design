import { ImageResponse } from "next/og";
import { loadGoogleFont } from "@/components/loadGoogleFont";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// "MD" monogram on an off-white circle, in Instrument Sans — the sans-serif
// face used elsewhere on the site, so the mark reads as a clean wordmark.
export default async function Icon() {
  const sans = await loadGoogleFont("Instrument Sans", "MD", 500);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "#f5f0eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#221e1a",
            fontFamily: "Instrument Sans",
            fontWeight: 500,
            fontSize: 30,
            letterSpacing: "-0.015em",
          }}
        >
          MD
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Sans", data: sans, style: "normal", weight: 500 },
      ],
    }
  );
}
