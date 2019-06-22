import React from "react";

const TotalComponent = props => {
  const { total } = props;

  const formatNumber = num => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 10000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
  };

  return (
    <div className="num" id="total">
      {formatNumber(total)}
    </div>
  );
};

export default TotalComponent;
