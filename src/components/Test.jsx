
import "react-multi-carousel/lib/styles.css";

import UAParser from "ua-parser-js";
import React, { Fragment } from "react";
import Simple from "../components/Simple";


import Section from "../components/Section";

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Test = ({ deviceType }) => {
  return (
    <Fragment>
      <Section>
        <Simple deviceType={deviceType} />
      </Section>
    </Fragment>
  );
};

export default Test;