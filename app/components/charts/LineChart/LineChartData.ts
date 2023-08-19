type AxisDataExtractor<TData> = (data: TData) => number;

type AxisData = { x: number; y: number }[];

export class LineChartData<TData> {
  public id: number;
  public data: AxisData;
  public color: string;

  constructor(
    data: TData[],
    settings: {
      xAxis: AxisDataExtractor<TData>;
      yAxis: AxisDataExtractor<TData>;
      color?: string;
    },
  ) {
    this.id = 1;
    this.data = data.map((d) => ({
      x: settings.xAxis(d),
      y: settings.yAxis(d),
    }));
    this.color = settings.color ?? "hsl(226, 70%, 50%)";
  }
}
