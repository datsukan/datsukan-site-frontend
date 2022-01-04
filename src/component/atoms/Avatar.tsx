import Image from "next/image";
import type { VFC } from "react";

type Props = {
  imageUrl: string;
  size: number;
};

export const Avatar: VFC<Props> = ({ imageUrl, size }) => {
  return (
    <Image
      src={imageUrl}
      alt="icon"
      className="flex justify-center items-center max-w-full rounded-full ring-gray-200"
      width={size}
      height={size}
    />
  );
};
