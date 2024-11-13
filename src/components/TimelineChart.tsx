import { FC, useState } from "react";
import ReactApexChart from "react-apexcharts";

interface TimelineData {
  x: string;
  y: [number, number];
}

interface ApexChartOptions {
  chart: {
    height: number;
    type: "rangeBar";
  };
  plotOptions: {
    bar: {
      horizontal: boolean;
    };
  };
  xaxis: {
    type: "datetime";
  };
  annotations: {
    xaxis: {
      x: number;
      borderColor: string;
      label: {
        text: string;
        style: {
          color: string;
          background: string;
        };
      };
    }[];
  };
}

interface ApexChartSeries {
  data: TimelineData[];
}

const ApexChartComponent: FC<{ data: TimelineData[] }> = (props: {
  data: TimelineData[];
}) => {
  const { data } = props;
  const [series] = useState<ApexChartSeries[]>([
    {
      data,
    },
  ]);

  const [options] = useState<ApexChartOptions>({
    chart: {
      height: 2000,
      type: "rangeBar",
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      type: "datetime",
    },
    annotations: {
      xaxis: [
        {
          x: new Date().getTime(),
          borderColor: "#FF4560",
          label: {
            text: "Hoy",
            style: {
              color: "#FFFFFF",
              background: "#FF4560",
            },
          },
        },
      ],
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="rangeBar"
          height={4000}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChartComponent;
