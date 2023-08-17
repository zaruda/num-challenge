import { useMemo } from "react";
import { useWatch } from "react-hook-form";
import { LineChart, LineChartData } from "@app/components/charts";
import { PensionPlan } from "@app/domain";

import { DUMMY_PENSION_PLAN } from "./constants";
import { ProjectionChartProps } from "./types";

export const ProjectionChart = ({
  control,
  formState,
}: ProjectionChartProps) => {
  const formData = useWatch({ control }) as PensionPlan;

  const chartData = useMemo(() => {
    const plan = formState.isValid ? formData : DUMMY_PENSION_PLAN;

    const projection = new PensionPlan(plan).calculateSavingsProjection();

    return new LineChartData(projection, {
      xAxis: (projection) => Number(projection.year) + plan.age,
      yAxis: (projection) => Number(projection.amount.toFixed(2)),
    });
  }, [formData, formState.isValid]);

  return (
    <div className="h-[400px] w-full">
      <LineChart data={[chartData]} />
    </div>
  );
};
