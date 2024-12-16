import { klona } from 'klona'

/** 元素滚动到底部或者顶部 */
export function useScroll() {
  const scrollRef = ref<HTMLDivElement>()

  const scrollToBottom = () => nextTick(() => scrollRef.value && (scrollRef.value.scrollTop = scrollRef.value.scrollHeight))
  const scrollToTop = () => nextTick(() => scrollRef.value && (scrollRef.value.scrollTop = 0))

  return { scrollRef, scrollToBottom, scrollToTop }
}

/** 可重置状态的 ref */
export function useResettableRef<T>(val: T) {
  const initialVal = klona(val)
  const state = ref(val)
  const reset = () => {
    state.value = klona(initialVal)
  }

  return { reset, state }
}
