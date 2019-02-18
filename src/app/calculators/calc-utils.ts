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
}