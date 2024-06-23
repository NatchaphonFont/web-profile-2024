import React from "react";
import Card from "./common/Card";
import Badge from "./common/Badge";

type Props = {};

const Personality = (props: Props) => {
  return (
    <Card title="Personality">
      <div>
        <p className="text-lg"> Adventurers (ISFP) </p>
        <p className="pb-2">
        Are flexible and charming individuals who are always ready to explore and experience something new.
        </p>
        <div className="flex gap-1">
          <Badge>Adventurers</Badge>
          <Badge>OBSERVANT</Badge>
          <Badge>FEELING</Badge>
          <Badge>PROSPECTING</Badge>
        </div>
      </div>
    </Card>
  );
};

export default Personality;
