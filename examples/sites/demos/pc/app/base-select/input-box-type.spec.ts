import { test, expect } from '@playwright/test'

test('下划线默认', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('base-select#input-box-type')
  const wrap = page.locator('#input-box-type')
  const select = wrap.locator('.tiny-base-select').nth(0)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')

  await expect(select.locator('.tiny-input')).toHaveClass(/tiny-input-underline/)
  await expect(input).toHaveCSS('border-top-width', '0px')
  await expect(input).toHaveCSS('border-left-width', '0px')
  await expect(input).toHaveCSS('border-right-width', '0px')
  await expect(input).toHaveCSS('border-bottom-color', 'rgb(194, 194, 194)')
  await expect(select.locator('svg')).toHaveCSS('fill', 'rgb(128, 128, 128)')

  await select.click()
  await option.first().click()
  await expect(dropdown).toBeHidden()
  await expect(input).toHaveValue('北京')
})

test('下划线禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('base-select#input-box-type')
  const wrap = page.locator('#input-box-type')
  const select = wrap.locator('.tiny-base-select').nth(1)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')

  await expect(select.locator('.tiny-input')).toHaveClass(/tiny-input-underline/)
  await expect(input).toHaveCSS('border-top-width', '0px')
  await expect(input).toHaveCSS('border-left-width', '0px')
  await expect(input).toHaveCSS('border-right-width', '0px')
  await expect(input).toHaveCSS('border-bottom-color', 'rgb(219, 219, 219)')
  await expect(input).toHaveCSS('cursor', 'not-allowed')
  await expect(select.locator('svg')).toHaveCSS('fill', 'rgb(194, 194, 194)')
  const hasDisabled = await input.evaluate((input) => input.hasAttribute('disabled'))
  await expect(hasDisabled).toBe(true)

  await select.click()
  await expect(dropdown).toBeHidden()
  await expect(input).toHaveValue('')
})

test('下划线多选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('base-select#input-box-type')
  const wrap = page.locator('#input-box-type')
  const select = wrap.locator('.tiny-base-select').nth(2)
  const input = select.locator('.tiny-input__inner')
  const tag = wrap.locator('.tiny-tag')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')

  await expect(select.locator('.tiny-input')).toHaveClass(/tiny-input-underline/)
  await expect(input).toHaveCSS('border-top-width', '0px')
  await expect(input).toHaveCSS('border-left-width', '0px')
  await expect(input).toHaveCSS('border-right-width', '0px')
  await expect(input).toHaveCSS('border-bottom-color', 'rgb(194, 194, 194)')
  await expect(select.locator('.tiny-base-select__caret')).toHaveCSS('fill', 'rgb(128, 128, 128)')

  await select.click()
  await expect(dropdown).toBeVisible()
  await option.first().click()
  await expect(tag).toHaveCount(5)

  await expect(select.locator('.tiny-input')).toHaveClass(/tiny-input-underline/)
  await expect(select).toHaveClass(/tiny-base-select__multiple/)
})
