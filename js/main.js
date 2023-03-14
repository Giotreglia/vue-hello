const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Vue è una figata pazzesca!',
        image_src: 'https://primabergamo.it/media/2017/07/fantozzi-02.gif',
        image_alt: 'Fantozzi'
      }
    }
  }).mount('#app')