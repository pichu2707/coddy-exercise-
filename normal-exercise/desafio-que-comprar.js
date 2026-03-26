function analyzeBudget(prices, items, budget) {
  let affordableItems = [];
  let totalCost = 0;
  let outOfBudgetCount = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] <= budget) {
      affordableItems.push(items[i]);
      totalCost += prices[i];
    } else {
      outOfBudgetCount++;
    }
  }

  console.log(`Affordable items: ${affordableItems.join(", ")}`);
  console.log(`Total budget needed: ${totalCost}`);
  console.log(`Items out of budget: ${outOfBudgetCount}`);
}
