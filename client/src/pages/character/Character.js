import ReactECharts from "echarts-for-react";
import { Link } from "react-router-dom";
import { Container, Button, Divider } from "semantic-ui-react";

const Character = () => {
  const options = {
    title: {
      text: "FPO Chart",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: ["01", "02", "03", "04", "05"],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["1", "2", "3", "4", "5", "6", "7"],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "01",
        type: "line",
        stack: "01",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "02",
        type: "line",
        stack: "02",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "03",
        type: "line",
        stack: "03",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "04",
        type: "line",
        stack: "04",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "05",
        type: "line",
        stack: "05",
        label: {
          show: true,
          position: "top",
        },
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  };

  return (
    <Container fluid={false} style={{ marginTop: "5rem" }}>
      <Link to={`/`}>
        <Button size="tiny">Home</Button>
      </Link>
      <Divider section />
      <ReactECharts option={options} />
    </Container>
  );
};

export default Character;
