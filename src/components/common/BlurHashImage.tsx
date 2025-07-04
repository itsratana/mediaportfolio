import { Blurhash } from "react-blurhash";
import { useState } from "react";

interface BlurHashImageProps {
  src: string;
  blurHash: string;
  alt?: string;
}

export default function BlurHashImage({ src, blurHash, alt }: BlurHashImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ position: "relative", overflow: "hidden", minHeight: "300px" }}>
      {!loaded && (
        <Blurhash
          hash={blurHash}
          width="100%"
          height={300}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
            width: "100%",
            height: "auto",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.4s ease",
            display: "block",
            position: "relative",
        }}
      />
    </div>
  );
}
