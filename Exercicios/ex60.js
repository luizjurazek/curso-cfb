function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function goldbachConjecture(num) {
    for (let i = 2; i <= num / 2; i++) {
        if (isPrime(i) && isPrime(num - i)) {
            return [i, num - i];
        }
    }
}

function verifyGoldbachConjecture(start, end) {
    for (let num = start; num <= end; num += 2) {
        const primes = goldbachConjecture(num);
        console.log(`${num} = ${primes[0]} + ${primes[1]}`);
    }
}

// Verificar para números pares entre 500 e 1000
verifyGoldbachConjecture(500, 1000);