import Vue from 'vue'

export default (context: Vue) => {
  const userAgent = window.navigator.userAgent

  if (userAgent.includes('MSIE ') || userAgent.includes('Trident/')) {
    const headerEl = (context.$refs.header as Vue).$el
    const footerEl = (context.$refs.footer as Vue).$el
    const layoutEl = context.$refs.layout as HTMLElement
    const mainEl = context.$refs.main as HTMLElement
    const headerBorderBottomWidth = window.parseInt(window.getComputedStyle(headerEl).borderBottomWidth)
    const headerHeight = headerEl.clientHeight
    const footerHeight = footerEl.clientHeight
    const minMainHeight = layoutEl.clientHeight - (headerHeight + footerHeight + headerBorderBottomWidth)

    mainEl.style.boxSizing = 'border-box'
    mainEl.style.minHeight = `${minMainHeight}px`
  }
}
