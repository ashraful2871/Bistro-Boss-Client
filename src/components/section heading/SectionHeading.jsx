import React from "react";

const SectionHeading = ({ subHeading, heading }) => {
  return (
    <div className="text-center md:w-4/12 mx-auto">
      <p className="text-warning">--- {subHeading} ---</p>
      <h2 className="text-4xl border-y-2 py-4 mb-5 uppercase">{heading}</h2>
    </div>
  );
};

export default SectionHeading;
