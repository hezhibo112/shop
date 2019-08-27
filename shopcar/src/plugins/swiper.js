import Swiper from 'swiper'
Swiper.use({
  name: 'pluginName',
  params: {
    pluginSwitch: false,
  },
  on: {
    init() {
      if (!this.params.pluginSwitch) return
    },

  }
})