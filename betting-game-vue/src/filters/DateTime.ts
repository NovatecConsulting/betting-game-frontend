import Vue from 'vue'

export const dateTime = Vue.filter('dateTime', function(zonedDateTimeString: string) {
  if (!zonedDateTimeString) {
    return ''
  }
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  }
  return Intl.DateTimeFormat('de', options).format(Date.parse(zonedDateTimeString.slice(0, 16)))
})
