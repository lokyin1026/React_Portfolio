import React from "react";

interface divBox {
  childrenSlot: () => React.ReactNode;
}

export const Divbox: React.FC<divBox> = ({ childrenSlot }) => {
  return (
    <div className="div-bg tw:p-14 tw:rounded-lg tw:max-w-[1100px] tw:mx-auto tw:text-center tw:mt-12">
      {childrenSlot()}
    </div>
  );
};
