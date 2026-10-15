import { ImageResponse } from "next/og"

export const alt = "Louis Thomas — Senior Full-Stack · Technical Lead"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

const loadInter = async (weight: 400 | 600) => {
  const css = await fetch(`https://fonts.googleapis.com/css2?family=Inter:wght@${weight}`, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko",
    },
  }).then((res) => res.text())

  const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype|woff)'\)/)?.[1]
  if (!url) throw new Error(`Could not resolve Inter ${weight}`)

  const font = await fetch(url)
  if (!font.ok) throw new Error(`Could not download Inter ${weight}`)

  return font.arrayBuffer()
}

export default async function OpenGraphImage() {
  const [regular, semibold] = await Promise.all([loadInter(400), loadInter(600)])

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#151415",
        padding: "96px",
      }}
    >
      <div
        style={{
          fontSize: 84,
          fontWeight: 600,
          fontFamily: "Inter",
          color: "#e8ebed",
          letterSpacing: "-2.8px",
          lineHeight: 1,
        }}
      >
        Louis THOMAS
      </div>
      <div
        style={{
          marginTop: 24,
          fontSize: 32,
          fontWeight: 400,
          fontFamily: "Inter",
          color: "rgba(232, 235, 237, 0.6)",
          letterSpacing: "-0.3px",
          lineHeight: 1.2,
        }}
      >
        Senior Full-Stack · Technical Lead
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: regular,
          weight: 400,
          style: "normal",
        },
        {
          name: "Inter",
          data: semibold,
          weight: 600,
          style: "normal",
        },
      ],
    }
  )
}
