import { ImageResponse } from "next/og";
import { loadGoogleFont } from "@/components/loadGoogleFont";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// "MD" monogram on an off-white circle, in Fraunces at weight 400 to match the
// "MistryDesign" nav wordmark exactly.
export default async function Icon() {
  const fraunces = await loadGoogleFont("Fraunces", "MD", 400);

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
            fontFamily: "Fraunces",
            fontWeight: 400,
            fontSize: 33,
            letterSpacing: "-0.03em",
          }}
        >
          MD
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Fraunces", data: fraunces, style: "normal", weight: 400 }],
    }
  );
}
