import {
  Card,
  Form,
  InputNumber,
  Radio,
  Select,
  SelectProps,
  Button,
  Space,
  Input,
} from "@arco-design/web-react";
import "./index.css";
import { useState } from "react";

type Rotate = "none" | "counter-clockwise-90" | "clockwise-90" | "rotate-180";
type ScaleRule = "none" | "original-ratio" | "fit-to-width" | "fit-to-height";
type Format = "auto" | "jpg" | "png" | "webp" | "bmp";
type OutputDirType = "original" | "picture" | "custom";

export default function Settings() {
  const [showCardTitle, setShowCardTitle] = useState(false);
  const [scale, setScale] = useState<number>(1);
  const [rotate, setRotate] = useState<Rotate>("none");
  const [scaleRule, setScaleRule] = useState<ScaleRule>("none");
  const [format, setFormat] = useState<Format>("auto");
  const [outputDirType, setOutputDirType] = useState<OutputDirType>("original");

  const resizeOptions: SelectProps["options"] = [
    {
      label: "不缩放",
      value: "none",
    },
    {
      label: "按比例缩放",
      value: "original-ratio",
    },
    {
      label: "适应宽度",
      value: "fit-to-width",
    },
    {
      label: "适应高度",
      value: "fit-to-height",
    },
  ];

  const formatOptions: SelectProps["options"] = [
    {
      label: "自动",
      value: "auto",
    },
    {
      label: "JPEG",
      value: "jpg",
    },
    {
      label: "PNG",
      value: "png",
    },
    {
      label: "WebP",
      value: "webp",
    },
    {
      label: "BMP",
      value: "bmp",
    },
  ];

  return (
    <>
      <Form>
        <Card size="small" title={showCardTitle ? "旋转" : undefined}>
          <Radio.Group defaultValue={"none"} direction="vertical">
            <Radio value={"none"}>不旋转</Radio>
            <Radio value={"counter-clockwise-90"}>逆时针旋转90</Radio>
            <Radio value={"clockwise-90"}>顺时针旋转90</Radio>
            <Radio value={"rotate-180"}>旋转180</Radio>
          </Radio.Group>
        </Card>

        <Card
          size="small"
          title={showCardTitle ? "缩放" : undefined}
          style={{ marginTop: 8 }}
        >
          <Form.Item
            label={"缩放规则"}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Select options={resizeOptions} defaultValue={"none"} />
          </Form.Item>
          <Form.Item
            label={"缩放倍率"}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <InputNumber
              value={scale}
              min={0.001}
              max={1}
              step={0.001}
              onChange={(value) => setScale(value)}
            />
          </Form.Item>
          <Form.Item
            label={"分辨率"}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Space>
              <InputNumber min={0} />
              x
              <InputNumber min={0} />
            </Space>
          </Form.Item>
        </Card>

        <Card
          size={"small"}
          title={showCardTitle ? "格式" : undefined}
          style={{ marginTop: 8 }}
        >
          <Form.Item
            label={"格式"}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Select options={formatOptions} defaultValue={"auto"} />
          </Form.Item>
          <Form.Item
            label={"质量"}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <InputNumber min={0} max={100} step={0.001} defaultValue={90} />
          </Form.Item>
        </Card>

        <Card
          size={"small"}
          title={showCardTitle ? "输出" : undefined}
          style={{ marginTop: 8 }}
        >
          <Radio.Group
            defaultValue={"custom"}
            direction="vertical"
            style={{ marginBottom: 8 }}
          >
            <Radio value="original">保存到源目录</Radio>
            <Radio value="picture">保存到用户图片目录</Radio>
            <Radio value="custom">保存到自定义目录</Radio>
          </Radio.Group>
          <Form.Item
            label={"输出目录"}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Space>
              <Input placeholder="选择输出目录" />
              <Button>...</Button>
            </Space>
          </Form.Item>
          <Form.Item
            label={"文件名前缀"}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Input placeholder="输入文件名前缀" />
          </Form.Item>
          <Form.Item
            label={"文件名预览"}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Input placeholder="文件名预览" disabled />
          </Form.Item>
        </Card>
      </Form>
    </>
  );
}
