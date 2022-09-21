import ContactUs from '../ContactUs.vue'
import PopUp from '../PopUp.vue'
import BuyButton from './components/BuyButton.vue'

export default {
  components: {
    BuyButton,
    ContactUs,
    PopUp
  },
  data () {
    return {
      top: '',
      menuToggle: false,
      showContactBar: false
    }
  },
  computed: {
    isBlueBackground () {
      if (this.$route.name === 'index-privacy' || this.$route.name === 'index-job' || this.$route.name === 'index-jobDetail') {
        return 'blue-back'
      } else {
        return ''
      }
    },
    isShowMobileBackground () {
      if (this.$route.name === 'index-privacy' || this.$route.name === 'index-job' || this.$route.name === 'index-jobDetail' || this.$route.name === 'index-contactUsMobile' || this.$route.name === 'index-conusmobile' || this.$route.name === 'index-attractmobile') {
        return 'blue-back'
      } else {
        return ''
      }
    }
  }
}
