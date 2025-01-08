import Image from "next/image";

interface FullscreenLoaderProps {
  label: string;
}

export const FullscreenLoader = ({ label }: FullscreenLoaderProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2 ">
      <Image
        src="/logo.svg"
        alt="logo"
        width={50}
        height={50}
        className="-ml-3"
      />
      {label && <p className="texts-sm text-muted-foreground">{label}</p>}
    </div>
  );
};
