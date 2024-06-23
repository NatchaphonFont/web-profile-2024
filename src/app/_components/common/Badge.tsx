import React from "react";

type Props = {};

const Badge = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className="bg-pink-800 text-white px-2 py-1 text-xs rounded"style={{backgroundImage: 'url("https://media.tenor.com/kKmvIr30vQYAAAAj/stars-changing-colors.gif")'}}>
      {props.children}
    </div>
  );
};

export default Badge;
