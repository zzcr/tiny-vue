import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('wizard#base-flow')

  const stepItems = page.locator('.tiny-wizard__steps-item')
  const charts = stepItems.locator('.tiny-wizard__chart')
  const names = stepItems.locator('.tiny-wizard__name')
  const chartCount = 5
  const itemStatus = [/is-ready/, /is-doing/]
  const descs = ['出差信息填写', '项目信息填写', '主管审批', '权签人审批', '完成申请']

  await expect(charts).toHaveCount(chartCount)
  for (let i = 0; i < chartCount; i++) {
    const items = charts.nth(i)
    const itemList = items.locator('span')
    const first = itemList.nth(0)
    const middle = itemList.nth(1)
    const last = itemList.nth(2)

    await expect(items).toHaveCSS('width', '168px')
    await expect(items).toHaveCSS('height', '32px')
    await expect(first).toHaveClass('tiny-wizard__chart-line')
    await expect(middle).toHaveClass(/tiny-wizard__chart-icon/)
    await expect(middle).toHaveText(String(i + 1))
    await expect(last).toHaveClass('tiny-wizard__chart-line')
    await expect(names.nth(i)).toHaveText(descs[i])

    if (i < 1) {
      await expect(stepItems.nth(i)).toHaveClass(itemStatus[i])
      await expect(first).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
      await expect(middle).toHaveCSS('background-color', 'rgb(255, 255, 255)')
    } else if (i === 1) {
      await expect(first).toHaveCSS('background-color', 'rgb(25, 25, 25)')
      await expect(middle).toHaveCSS('background-color', 'rgb(255, 255, 255)')
    } else {
      await expect(first).toHaveCSS('background-color', 'rgb(219, 219, 219)')
      await expect(middle).toHaveCSS('background-color', 'rgb(240, 240, 240)')
    }
  }
})
