import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

function HomeComponent() {
  return (
    <div>
      <Layout>
        <Header>
          <div style={{ gap: "16px", display: "flex" }}>
            <Link style={{ color: "white" }} to="/">
              Home
            </Link>
            <Link style={{ color: "white" }} to="/about">
              About
            </Link>
            <Link style={{ color: "white" }} to="/company">
              Company Profile
            </Link>
          </div>
        </Header>
        <Content>Content</Content>
        <Footer style={{ textAlign: "center" }}>
          &#169; 2024 PT Indodev Niaga Internet
        </Footer>
      </Layout>
    </div>
  );
}

export default HomeComponent;
