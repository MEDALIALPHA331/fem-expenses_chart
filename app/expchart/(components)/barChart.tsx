"use client";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
// import json from "../(assets)/data.json";

type ExpansesData = {
  day: string;
  amount: number;
};

const data = [
  {
    day: "Mo",
    amount: 17.45,
  },
  {
    day: "Tu",
    amount: 34.91,
  },
  {
    day: "We",
    amount: 52.36,
  },
  {
    day: "Th",
    amount: 31.07,
  },
  {
    day: "Fr",
    amount: 23.39,
  },
  {
    day: "Sa",
    amount: 43.28,
  },
  {
    day: "Su",
    amount: 25.48,
  },
] satisfies ExpansesData[];

function BarChartComponent() {
  return (
    <ResponsiveContainer>
      <BarChart data={data} barCategoryGap={5} margin={{ left: 0 }}>
        <XAxis
          dataKey="day"
          tick={true}
          fontSize={14}
          // hide={true}
        />
        <YAxis axisLine={false} tick={false} hide={true} />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
        <Bar
          dataKey="amount"
          fill="hsl(10, 79%, 65%)"
          //@ts-ignore
          shape={<CustomBar />}
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartComponent;

const CustomBar = (props: ExpansesData) => {
  // Find the maximum value
  const maxValue = Math.max(...data.map((item) => item.amount));

  const [fill, setFill] = useState(
    props.amount === maxValue ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)",
  );

  return (
    <Rectangle
      {...props}
      fill={fill}
      onMouseEnter={() =>
        props.amount !== maxValue
          ? setFill("hsl(186, 65%, 60%)")
          : setFill("hsl(186, 80%, 60%)")
      }
      onMouseLeave={() =>
        props.amount !== maxValue
          ? setFill("hsl(10, 79%, 65%)")
          : setFill("hsl(186, 65%, 60%)")
      }
    />
  );
};

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: any;
  label?: string;
}) => {
  //TODO: switch case on days
  if (active && payload && payload.length) {
    return (
      <div className="">
        <p className="text-ec-neutral-dark-brown">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};
