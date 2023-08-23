import { Card, Skeleton, SkeletonText, CardBody } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Skeleton></Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
