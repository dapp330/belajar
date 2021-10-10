import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
// import NavbarComponent from "./components/NavbarComponent";
import { CarouselComponent } from "./components/ContentComponent";
import { AvatarsComponent } from "./components/AvatarsComponent";
import { CardsComponent } from "./components/CardsComponent";
import "tachyons/css/tachyons.min.css";
import { NavComponent } from "./components/NavComponent";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout style={{ flexDirection: "Column" }} className={"bg-navy"}>
        <div style={{ padding: 0 }}>
          <NavComponent />
        </div>
        <Content>
          */}
          <br />
          <AvatarsComponent additionalClassname={"mb3 tc pa4 flex flex-wrap"} />
          <CardsComponent />
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default App;
