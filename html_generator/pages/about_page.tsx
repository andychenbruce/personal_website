import React from "react";
import Wrapper from "../wrapper.js";

import AboutInfo from "../includes/about_info.js";
function AboutPage(props: any) {
  return (
    <Wrapper {...props}>
      <AboutInfo />
    </Wrapper>
  );
}

export default AboutPage;
