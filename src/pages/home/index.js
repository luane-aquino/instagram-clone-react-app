import React from "react";
import { Helmet } from 'react-helmet'
import Stories from "../../components/Stories";
import TimeLine from "../../components/TimeLine";

export default function Home() {
  return (
    <>
      <Helmet><title>Homepage</title></Helmet>
      <div className="home">
        <TimeLine />
        <Stories />
      </div>
    </>
  );
}
