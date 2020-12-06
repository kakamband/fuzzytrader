const math = require('../fuzzytrader').calctotalTip

test('Teste env var', () => {
	expect(process.env.URL_CRIPTO).toBe('https://apiv2.bitcoinaverage.com/indices/global/ticker/all?symbols=')
})

test('Total calculation', () => {
	const total = math(10,0.3)
	expect(total).toBe(13)
})

test('Total calculation with default tip', () => {
	const total = math(10)
	expect(total).toBe(12)
})

