import React from "react";
import Benefits from "../../component/Benefits/Benefits";
import "./Subscription.css";
import Packages from "../../component/Packages/Packages";

const Subscription = props => {
  const PackageRef = React.useRef;

  const handleScroll = () => {
    PackageRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pkg__bnfts__container">
      <Benefits handleScroll={handleScroll} />
      <Packages pkgRef={PackageRef} />
    </div>
  );
};

export default Subscription;
