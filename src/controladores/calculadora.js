function somar (req, res) {
    const { num1, num2 } = req.query
    const numero1 = Number(num1)
    const numero2 = Number(num2)
    let somaTotal = numero1 + numero2
    res.send(somaTotal.toString());
}

function subtrair (req, res) {
    const { num1, num2 } = req.query
    const numero1 = Number(num1)
    const numero2 = Number(num2)
    let subtracaoTotal = numero1 - numero2
    res.send(subtracaoTotal.toString());
}

function multiplicar (req, res) {
    const { num1, num2 } = req.query
    const numero1 = Number(num1)
    const numero2 = Number(num2)
    let multiplicacaoTotal = numero1 * numero2
    res.send(multiplicacaoTotal.toString());
}

function dividir (req, res) {
    const { num1, num2 } = req.query
    const numero1 = Number(num1)
    const numero2 = Number(num2)
    let divisaoTotal = numero1 / numero2
    res.send(divisaoTotal.toString());
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}