import { ImageResponse } from "next/og";
import { loadGoogleFont } from "@/components/loadGoogleFont";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "MistryDesign — Websites for small businesses in Princeton, NJ";

const LABEL = "PRINCETON, NJ";
const WORDMARK = "MistryDesign";
const TAGLINE =
  "Websites for small businesses that want to look like they mean it.";

export default async function OpengraphImage() {
  const [fraunces, sans] = await Promise.all([
    loadGoogleFont("Fraunces", WORDMARK, 500),
    loadGoogleFont("Instrument Sans", LABEL + TAGLINE, 400),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          background: "#e9e3d8",
          fontFamily: "Instrument Sans",
        }}
      >
        {/* warm gold glow, echoing the site */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(55% 60% at 86% 8%, rgba(201,169,110,0.28), rgba(201,169,110,0))",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.22em",
            color: "#8a8278",
            marginBottom: 30,
          }}
        >
          {LABEL}
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Fraunces",
            fontWeight: 500,
            fontSize: 112,
            letterSpacing: "-0.02em",
            color: "#221e1a",
          }}
        >
          {WORDMARK}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            lineHeight: 1.35,
            color: "#221e1a",
            opacity: 0.62,
            marginTop: 28,
            maxWidth: 880,
          }}
        >
          {TAGLINE}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 44,
            width: 84,
            height: 3,
            background: "#c9a96e",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, style: "normal", weight: 500 },
        { name: "Instrument Sans", data: sans, style: "normal", weight: 400 },
      ],
    }
  );
}
