import { createVuetify } from 'vuetify/dist/vuetify';
import 'vuetify/dist/vuetify.min.css'

export default createVuetify({
  theme: {
    themes: {
      light: {
        primary: '#5468E7',
        primary_dark: '#38386B',
        accent: '#CF33C8',
        secondary: '#CACDEF',
        background: '#FEF9F4',
        background_accent: '#FFEED7',
        success: '#18BD5D',
        warning: '#FF7100',
        danger: '#EF0000',
        error: '#EF0000',
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  }
})