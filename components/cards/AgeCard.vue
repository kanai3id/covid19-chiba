<template>
  <v-col cols="12" md="6" class="DataCard">
    <circle-chart
      :title="$t('年代別陽性患者数')"
      :title-id="'age-card'"
      :chart-data="ageGraph"
      :date="date"
      :unit="$t('人')"
    />
  </v-col>
</template>

<script>
import ageData from '@/data/age.json'
import formatVariableGraph from '@/utils/formatCircleGraph.ts'
import CircleChart from '@/components/AgeCircleChart.vue'

export default {
  components: {
    CircleChart
  },
  data() {
    return {
      date: String,
      ageGraph: []
    }
  },
  created() {
    this.setData()
  },
  methods: {
    setData() {
      this.ageGraph = formatVariableGraph(ageData.age_summary.data)
      this.date = ageData.age_summary.date
    }
  }
}
</script>
