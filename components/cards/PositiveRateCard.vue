<template>
  <v-col cols="12" md="6" class="DataCard">
    <patients-line-chart
      :date="Data.date"
      :daily-data="Data.test_summary.data"
      :title-id="'positive-rate-card'"
      :chart-id="'positive-rate-chart'"
      :title="$t('PCR,抗原検査状況')"
    />
  </v-col>
</template>

<script>
import Data from '@/data/test_summary.json'
import PatientsLineChart from '@/components/TestsLineChart.vue'

export default {
  components: {
    PatientsLineChart
  },
  data() {
    const data = {
      Data
    }
    return data
  }
}
</script>
