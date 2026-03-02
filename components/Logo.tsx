"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

const LOGO_LIGHT = "/assets/logo/quanticologo.png";
const LOGO_DARK = "/assets/logo/quanticonegro.png";

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
  href?: string;
  priority?: boolean;
  onClick?: () => void;
};

export function Logo({ className = "h-8 w-auto sm:h-9 lg:h-10 object-contain object-left", width = 140, height = 44, href = "#inicio", priority = false, onClick }: LogoProps) {
  const { theme } = useTheme();
  const src = theme === "dark" ? LOGO_DARK : LOGO_LIGHT;

  const image = (
    <Image
      src={src}
      alt="Quantico System Global"
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );

  if (href) {
    return (
      <Link href={href} className="flex items-center shrink-0 min-w-0" onClick={onClick}>
        {image}
      </Link>
    );
  }

  return image;
}
