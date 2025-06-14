function calculateSavings(income) {

    if (typeof income !== 'number') {
        return 'please provide a valid input.'
    }
    const houseRent = 5000;
    const mealCost = 3000;
    const personalExpense = 2000;
    const totalExpense = houseRent + mealCost + personalExpense;

    if (totalExpense > income) {
        return "Earn more..."
    }

    const savings = income - totalExpense;

    return savings;
}

const result = calculateSavings(7000)
console.log(result);