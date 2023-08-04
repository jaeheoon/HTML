// import React, { useContext } from 'react';
import Content from "./Content";
import Footer from "./Footer";
import Headder from "./Headder";
// import { ThemeContext } from '../ContextExampleApp';

function Page() {
  // const theme = useContext(ThemeContext);
  return (
    <div className="page">
      <Headder />
      <Content />
      <Footer />
    </div>
  );
}

export default Page;