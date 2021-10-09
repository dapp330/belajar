import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import NavbarComponent from "./components/NavbarComponent";
import {
  CarouselComponent,
  AvatarComponent,
  CardComponent,
} from "./components/ContentComponent";
import CardsComponent from "./components/CardsComponent";
import "tachyons/css/tachyons.min.css";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout style={{ flexDirection: "Column" }}>
        <Header style={{ padding: 0 }}>
          <NavbarComponent />
        </Header>
        <Content>
          <CarouselComponent />
          <br />
          <AvatarComponent />
          <br />
          <br />
          <CardsComponent />
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default App;
