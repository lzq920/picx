import {
  ElIcon,
  ElLoading,
  ElButton,
  ElSelect,
  ElTooltip,
  ElForm,
  ElInput,
  ElBadge,
  ElRadioGroup,
  ElRadio,
  ElStep,
  ElSteps,
  ElCheckbox,
  ElTag,
  ElLink,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElOption,
  ElFormItem,
  ElDialog,
  ElSwitch,
  ElTimeSelect,
  ElCascader
} from 'element-plus'
import type { App } from 'vue'

/**
 * Introduces component on demand.
 * Vite Plugin: https://github.com/element-plus/unplugin-element-plus
 * @param app {App}
 */
export default function styleImport(app: App) {
  ;[
    ElIcon,
    ElLoading,
    ElButton,
    ElSelect,
    ElTooltip,
    ElForm,
    ElInput,
    ElBadge,
    ElRadioGroup,
    ElRadio,
    ElStep,
    ElSteps,
    ElCheckbox,
    ElTag,
    ElLink,
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,
    ElOption,
    ElFormItem,
    ElDialog,
    ElSwitch,
    ElTimeSelect,
    ElCascader
  ].forEach((v: any) => {
    app.use(v)
  })
}
