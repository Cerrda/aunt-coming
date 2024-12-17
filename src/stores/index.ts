import dayjs from 'dayjs'

export const useStore = defineStore('store', () => {
  const data = ref<Record<string, string[]>>({
    2024: ['12-08', '11-01'],
  })

  const isRecords = () => {
    const year = dayjs().year()
    const date = dayjs().format('MM-DD')

    return data.value[year] && data.value[year].includes(date)
  }
  const addOne = () => {
    const year = dayjs().year()
    const date = dayjs().format('MM-DD')

    data.value[year] ??= []
    if (!data.value[year].includes(date)) {
      data.value[year].unshift(date)
    }
  }
  const removeOne = (year: string, date: string) => {
    data.value[year] = data.value[year].filter(d => d !== date)
    if (!data.value[year].length) {
      delete data.value[year]
    }
  }
  const updateOne = (oldTime: string, newDate: string) => {
    const year = dayjs(oldTime).year()
    const date = dayjs(oldTime).format('MM-DD')

    data.value[year] = data.value[year].map(d => (d === date ? newDate : d))
  }

  return { data, addOne, removeOne, isRecords, updateOne }
}, { persist: true })
