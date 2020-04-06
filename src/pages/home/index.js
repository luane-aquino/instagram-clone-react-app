import React from "react";
import Header from "../../components/Header";
import Stories from "../../components/Stories";
import TimeLine from "../../components/TimeLine";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <TimeLine />
        <Stories />
      </div>
    </>
  );
}
