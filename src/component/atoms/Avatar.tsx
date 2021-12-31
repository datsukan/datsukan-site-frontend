import Image from "next/image";
import type { VFC } from "react";

type Props = {
  imageUrl: string;
};

export const Avatar: VFC<Props> = ({ imageUrl }) => {
  return (
    <Image
      src={imageUrl}
      alt="icon"
      className="flex justify-center items-center max-w-full rounded-full ring-gray-200"
      width={96}
      height={96}
    />
  );
};
