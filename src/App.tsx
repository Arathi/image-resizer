import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import {
  Button,
  Card,
  Input,
  InputNumber,
  Radio,
  Select,
  SelectProps,
  Space,
  Grid,
} from "@arco-design/web-react";

import "@arco-design/web-react/dist/css/arco.css";
import "./App.css";
import Settings from "./components/settings";

const { Row, Col } = Grid;

export default function App() {
  const resizeOptions: SelectProps["options"] = [
    {
      value: "none",
      label: "不缩放",
    },
    {
      value: "original",
      label: "保持原比例",
    },
    {
      value: "fit-to-width",
      label: "自适应宽度",
    },
    {
      value: "fit-to-height",
      label: "自适应高度",
    },
  ];

  const formatOptions: SelectProps["options"] = [
    {
      value: "auto",
      label: "自动",
    },
    {
      value: "jpg",
      label: "JPEG",
    },
    {
      value: "png",
      label: "PNG",
    },
    {
      value: "webp",
      label: "WebP",
    },
    {
      value: "bmp",
      label: "BitMap",
    },
  ];

  return (
    <>
      <Row style={{ width: "100vw", height: "100vh" }}>
        <Col flex={"320px"} style={{ height: "100%", padding: "0 8px" }}>
          <Settings />
        </Col>
        <Col flex={1} style={{ height: "100%", backgroundColor: "blue" }}></Col>
      </Row>
    </>
  );
}
