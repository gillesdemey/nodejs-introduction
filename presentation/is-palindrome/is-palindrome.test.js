const tap = require('tap')
const isPalindrome = require('./is-palindrome')

tap.test('English palindrome', t => {
  t.plan(1)

  const input = 'reviver'
  t.ok(isPalindrome(input))
})

tap.test('mixed case characters', t => {
  t.plan(1)

  const input = 'Kayak'
  t.ok(isPalindrome(input))
})

tap.test('UTF-8 palindrome', t => {
  t.plan(1)

  const input = 'キツツキ' // Kitsutsuki
  t.ok(isPalindrome(input))
})
