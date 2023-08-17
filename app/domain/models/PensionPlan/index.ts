interface PensionPlanInput {
  deposit: number;
  monthlyContribution: number;
  retirementAge: number;
  age: number;
  interestRate: number;
}

export interface PlanProjection {
  month: number;
  year: number | null;
  amount: number;
}

/**
 * Pension plan domain model.
 * It contains all necessary fields and methods related to this domain area
 */
export class PensionPlan {
  public deposit: number;
  public monthlyContribution: number;
  public retirementAge: number;
  public age: number;
  public interestRate: number;

  constructor(data: PensionPlanInput) {
    this.deposit = data.deposit;
    this.monthlyContribution = data.monthlyContribution;
    this.retirementAge = data.retirementAge;
    this.age = data.age;
    this.interestRate = data.interestRate;
  }

  private calculateMonthlyCapital(currentCapital: number) {
    const capital = this.monthlyContribution + currentCapital;
    const rate = ((this.interestRate * 100) / 12 + 100) / 100;

    return capital * rate;
  }

  public calculateSavingsProjection() {
    const projection: PlanProjection[] = [];

    // TODO: Fix form validation and remove this if-statement
    if (this.retirementAge < this.age) {
      return [];
    }

    const ageDifferenceInMonths = (this.retirementAge - this.age) * 12;

    const calculateCapital = (
      currentMonth: number,
      currentCapital: number
    ): PlanProjection[] => {
      if (currentMonth === ageDifferenceInMonths + 1) {
        return projection;
      }

      const amount = this.calculateMonthlyCapital(currentCapital);
      projection.push({
        month: currentMonth,
        year: currentMonth % 12 === 0 ? currentMonth / 12 : null,
        amount,
      });

      return calculateCapital(
        currentMonth + 1,
        projection[projection.length - 1]!.amount
      );
    };
    // TODO: Filter part could be improved (removed) to be more straightforward
    // TODO: Do we need to include last year? If not - start from 0, not 1
    return calculateCapital(1, this.deposit).filter((c) => !!c.year);
  }
}
