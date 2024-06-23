import Image from "next/image";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
<div className="h-full p-4 rounded-xl px-4 bg-pink-100 " style={{backgroundImage: 'url("https://media.tenor.com/kKmvIr30vQYAAAAj/stars-changing-colors.gif")'}}>
      <div className="flex justify-center items-center pt-4 pb-2">
        <Image
          src="/Profile.gif"
          width={500}
          height={500}
          alt="profile picture"
          className="w-3/4 aspect-square rounded-full border-4 border-white"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Anya Forger</h1>
        <p className="text-base">Software Engineer</p>
      </div>

      <div className="py-10 text-center ">" My power is wonderful. "</div>
      <div className="p-6 mx-1 xl:mx-6 bg-pink-100 rounded-md">
        <p>
          <b>Age:</b> 6
        </p>
        <p>
          <b>Status:</b> Single
        </p>
        <p>
          <b>Location:</b> Japan
        </p>
      </div>
    </div>
  );
};

export default Profile;
