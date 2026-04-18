import { CSSProperties, ReactNode } from "react";

type BeamPreset = "colorful" | "ocean" | "sunset" | "mono";
type BeamSize = "sm" | "md" | "lg";

const presetVars: Record<BeamPreset, { beam1: string; beam2: string; beam3: string; beam4: string }> = {
  colorful: { beam1: "#7c3aed", beam2: "#06b6d4", beam3: "#f59e0b", beam4: "#ec4899" },
  ocean: { beam1: "#38bdf8", beam2: "#22c55e", beam3: "#06b6d4", beam4: "#60a5fa" },
  sunset: { beam1: "#fb7185", beam2: "#f97316", beam3: "#f59e0b", beam4: "#a78bfa" },
  mono: { beam1: "rgba(255,255,255,0.9)", beam2: "rgba(255,255,255,0.6)", beam3: "rgba(255,255,255,0.3)", beam4: "rgba(255,255,255,0.12)" },
};

const sizeVars: Record<BeamSize, { radius: string; padding: string; blur: string }> = {
  sm: { radius: "16px", padding: "1.2px", blur: "14px" },
  md: { radius: "20px", padding: "1.6px", blur: "16px" },
  lg: { radius: "26px", padding: "2px", blur: "18px" },
};

export type BorderBeamProps = {
  children: ReactNode;
  className?: string;
  size?: BeamSize;
  preset?: BeamPreset;
  durationSec?: number;
  strength?: number;
};

export default function BorderBeam({
  children,
  className,
  size = "md",
  preset = "colorful",
  durationSec = 7,
  strength = 0.9,
}: BorderBeamProps) {
  const colors = presetVars[preset];
  const sizing = sizeVars[size];
  const style: CSSProperties & {
    "--beam-radius"?: string;
    "--beam-padding"?: string;
    "--beam-duration"?: string;
    "--beam-blur"?: string;
    "--beam-strength"?: string;
    "--beam-1"?: string;
    "--beam-2"?: string;
    "--beam-3"?: string;
    "--beam-4"?: string;
  } = {
    "--beam-radius": sizing.radius,
    "--beam-padding": sizing.padding,
    "--beam-duration": `${durationSec}s`,
    "--beam-blur": sizing.blur,
    "--beam-strength": String(strength),
    "--beam-1": colors.beam1,
    "--beam-2": colors.beam2,
    "--beam-3": colors.beam3,
    "--beam-4": colors.beam4,
  };

  return (
    <div className={`beam-frame ${className ?? ""}`} style={style}>
      <div className="beam-content">{children}</div>
    </div>
  );
}
