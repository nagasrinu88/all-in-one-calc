export class CalculatorUtil {
  /**
   * 
   * @param p principal amuont
   * @param r rate of interest
   * @param n interest compounding frequency
   * @param t time in months
   */
  static computeRD(p, r, n, t): number {
    let amount = 0;
    for (let i = 0; i < t; i++) {
      amount += this.computeFD(p, r, n, t - i);
    }
    return amount;
  }

  /**
   * 
   * @param p principal amuont
   * @param r rate of interest
   * @param n interest compounding frequency
   * @param t time in months
   */
  static computeFD(p, r, n, t): number {
    t = t / 12;
    return p * Math.pow(1 + r / n, n * t);
  }

  static computeEMI(p, r, n): number {
    r = r / 12;
    return (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }

  static computeTenure(p, r, emi): number {
    r = r / 12;
    const x = 1 + r;
    const y = emi / (emi - p * r);
    console.log(x, y);
    return Math.log(y) / Math.log(x);
  }

  static computeInterestForMonth(p, R, N, n, emi) {
    return emi - Math.pow((1 / (1 + R / 1200)), (N - n + 1)) * emi;
  }
}