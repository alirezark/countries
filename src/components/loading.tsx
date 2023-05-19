import Image from "next/image";

import LoadingSVG from "../../public/assets/images/loading.svg";

function Loading() {
  return (
    <div className="flex w-full justify-center p-3">
      <Image priority src={LoadingSVG} alt="loading" width={84} height={50} />
    </div>
  );
}

export default Loading;
