const math = require('../fuzzytrader')

test('Total calculation', () => {
	const total = math(10,0.3)
	expect(total).toBe(13)
})

test('Total calculation with default tip', () => {
	const total = math(10)
	expect(total).toBe(12)
})

test('Teste env var', () => {
	expect(process.env.NODE_ENV).toBeDefined()
})

