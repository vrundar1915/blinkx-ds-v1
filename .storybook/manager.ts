import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle:
      '<span style="align-items:center;display:inline-flex;gap:10px;"><img src="blinkx-logo.svg" alt="" style="height:28px;width:28px;display:block;" /><span style="color:#1a1e23;font-size:20px;font-weight:800;letter-spacing:0;">blinkX DS V1</span></span>',
    brandTarget: '_self',
    colorPrimary: '#171efd',
    colorSecondary: '#171efd',
  }),
})
