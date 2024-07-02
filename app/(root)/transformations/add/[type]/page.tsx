import React from "react";
import { transformationTypes } from "@/constants";
import Header from "@/components/shared/Header";

const AddTranformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const transformation = transformationTypes[type];

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
    </>
  );
};

export default AddTranformationTypePage;
