import React from "react";
import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
  HomeIcon,
  UserIcon,
  PhoneIcon,
  InformationCircleIcon,
} from "@heroicons/react/solid";

export default function Header() {
  return (
    <div className="bg-slate-900 text-gray-200 flex flex-col items-center p-6 select-none sm:flex-row justify-between ">
      <div className="flex">
        <HeaderIcon Icon={HomeIcon} title="Home" />
        <HeaderIcon Icon={UserIcon} title="Account" />
        <HeaderIcon Icon={PhoneIcon} title="Contact" />
        <HeaderIcon Icon={InformationCircleIcon} title="About" />
      </div>
      <Image
        className="cursor-pointer active:brightness-300"
        src="https://lh3.googleusercontent.com/blogger_img_proxy/ABLy4EwzziIvnzxr4DSTKc4lkowzEZTpSkHA3B5INgP-fYVYJqAsYv425JJ9ddeNBuH3dRscLsTsrEn6b3JS_nF7266QKuk_Jf7m4px6TgeuxX5cid9wDo63sDopXryGM52DRVjFYwyAX1SKBh1dcy6vb1u7=s0-d"
        width={50}
        height={100}
      />
    </div>
  );
}
