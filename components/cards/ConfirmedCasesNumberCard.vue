<template>
  <v-col cols="12" md="6" class="DataCard">
    <patients-line-chart
      :date="Data.date"
      :daily-data="Data.patients_summary.data"
      :title-id="'number-of-confirmed-cases'"
      :chart-id="'time-bar-chart-patients'"
      :title="$t('陽性患者数')"
    />
  </v-col>
</template>

<script>
import Data from '@/data/patients_summary.json'
import PatientsLineChart from '@/components/PatientsLineChart.vue'

export default {
  components: {
    PatientsLineChart
  },
  data() {
    // 感染者数グラフ
    const data = {
      Data
    }
    return data
  }
}
</script>
