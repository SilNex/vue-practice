export const dateFormat = {
  methods: {
    getDateFormat(date) {
      if (date) {
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let fullDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDay()} ${hours}:${(date.getMinutes() < 10 ? '0' : '')}${minutes}`
        return fullDate
      } else {
        return null
      }
    }
  },
}
