// Fetches a Google font as a TTF ArrayBuffer for use with next/og's ImageResponse
// (satori needs ttf/otf, not woff2). The &text= subset makes Google return a
// small truetype file containing only the glyphs we render.
export async function loadGoogleFont(
  font: string,
  text: string,
  weight = 400
): Promise<ArrayBuffer> {
  const family = `${font.replace(/ /g, "+")}:wght@${weight}`;
  const url = `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(
    text
  )}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src:\s*url\((.+?)\)\s*format\(['"]?(?:opentype|truetype)['"]?\)/
  );
  if (!resource) throw new Error(`Failed to locate font file for ${font}`);
  const res = await fetch(resource[1]);
  if (!res.ok) throw new Error(`Failed to fetch font file for ${font}`);
  return res.arrayBuffer();
}
