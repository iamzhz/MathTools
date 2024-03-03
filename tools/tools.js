function factor(number) { // 求number的公因数
    let factors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) factors.push(i);
    }
    return factors;
}