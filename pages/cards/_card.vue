<template>
  <div>
    <confirmed-cases-details-card
      v-if="this.$route.params.card == 'details-of-confirmed-cases'"
    />
    <confirmed-cases-number-card
      v-else-if="this.$route.params.card == 'number-of-confirmed-cases'"
    />
    <positive-rate-card
      v-else-if="this.$route.params.card == 'positive-rate-card'"
    />
    <residential-area-card
      v-else-if="this.$route.params.card == 'residential-area-card'"
    />
    <age-card v-else-if="this.$route.params.card == 'age-card'" />
    <kanto-card
      v-else-if="this.$route.params.card == 'kanto-card'"
    />
    <medical-treatment-card
      v-else-if="this.$route.params.card == 'medical-treatment-card'"
    />
    <medical-treatment-card
      v-else-if="this.$route.params.card == 'medical-treatment-card'"
    />
    <severely-patient-card
      v-else-if="this.$route.params.card == 'severely-patient-card'"
    />
  </div>
</template>

<script>
import Data from '@/data/data.json'
import age from '@/data/age.json'
import residentialarea from '@/data/residential-area.json'
import kanto from '@/data/kanto.json'
import medicaltreatment from '@/data/medical-treatment.json'
import severelypatient from '@/data/severely-patient.json'

// 検査陽性者の状況 : data.json
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
// 陽性患者数 : data.json
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
// 居住地の状況 : residential-area.json
import ResidentialAreaCard from '@/components/cards/ResidentialArea.vue'
// PCR,抗原検査状況 : test.json
import PositiveRateCard from '@/components/cards/PositiveRateCard.vue'
// 年代別 : age.json
import AgeCard from '@/components/cards/AgeCard.vue'
// 関東地区の状況 : kanto.json
import KantoCard from '@/components/cards/KantoCard.vue'
// 療養患者数 : medical-treatment.json
import MedicalTreatmentCard from '@/components/cards/MedicalTreatmentCard.vue'
// 重症者数 : severely-patient.json
import SeverelyPatientCard from '@/components/cards/SeverelyPatientCard.vue'

export default {
  components: {
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    PositiveRateCard,
    ResidentialAreaCard,
    AgeCard,
    KantoCard,
    MedicalTreatmentCard,
    SeverelyPatientCard
  },
  data() {
    let title, updatedAt
    switch (this.$route.params.card) {
      case 'details-of-confirmed-cases':
        title = this.$t('検査陽性者の状況')
        updatedAt = Data.patients.date
        break
      case 'number-of-confirmed-cases':
        title = this.$t('陽性患者数')
        updatedAt = Data.patients.date
        break
      case 'residential-area-card':
        title = this.$t('居住地の状況')
        updatedAt = residentialarea.date
        break
      case 'age-card':
        title = this.$t('入院患者数と病床数')
        updatedAt = age.age_summary.date
        break
      case 'positive-rate-card':
        title = this.$t('PCR,抗原検査状況')
        updatedAt = test.test_summary.date
        break
      case 'kanto-card':
        title = this.$t('関東地区の状況')
        updatedAt = kanto.date
        break
      case 'medical-treatment-card':
        title = this.$t('治療患者数')
        updatedAt = medicaltreatment.date
        break
      case 'severely-patient-card':
        title = this.$t('重傷者数')
        updatedAt = severelypatient.date
        break
    }

    const data = {
      title,
      updatedAt
    }
    return data
  },
  head() {
    const url = 'https://covid19-chiba.netlify.app'
    // const timestamp = new Date().getTime()
    const ogpImage = `${url}/ogp.png`
    /* const ogpImage =
      this.$i18n.locale === 'ja'
        ? `${url}/ogp/${this.$route.params.card}.png?t=${timestamp}`
        : `${url}/ogp/${this.$i18n.locale}/${this.$route.params.card}.png?t=${timestamp}` */
    const description = `${this.updatedAt} | ${this.$t(
      '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、千葉県非公式で開設したものです。'
    )}`

    return {
      title: this.title,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: url + this.$route.path + '/'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            this.title +
            ' | ' +
            this.$t('千葉県') +
            ' ' +
            this.$t('新型コロナウイルス感染症') +
            this.$t('対策サイト')
        },
        {
          hid: 'description',
          name: 'description',
          content: description
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ogpImage
        }
      ]
    }
  }
}
</script>
