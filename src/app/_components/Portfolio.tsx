import React from "react";
import Card from "./common/Card";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <Card title="Portfolio">
      <div>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://github.com/NatchaphonFont/Blog.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500"
            >
              Blog - Wu-Camp
            </a>
          </li>
         
        </ul>
      </div>
    </Card>
  );
};

export default Portfolio;
