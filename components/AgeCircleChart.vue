<template>
  <data-view :title="title" :title-id="titleId" :date="date" :url="url">
    <template v-slot:additionalDescription>
    </template>
    <doughnut-chart
      :chart-id="chartId"
      :chart-data="displayData"
      :options="displayOption"
      :height="300"
    />
    <template v-slot:infoPanel>
      <data-view-basic-info-panel
        :l-text="displayInfo.lText"
        :s-text="displayInfo.sText"
        :unit="displayInfo.unit"
      />
    </template>
    <template v-slot:footer>
      <open-data-link v-show="url" :url="url" />
    </template>
  </data-view>
</template>

<script>
import DataView from '@/components/DataView.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'
// import OpenDataLink from '@/components/OpenDataLink.vue'
import ExternalLink from '@/components/ExternalLink.vue'

export default {
  components: { DataView, DataViewBasicInfoPanel, ExternalLink },
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    titleId: {
      type: String,
      required: false,
      default: ''
    },
    chartId: {
      type: String,
      required: false,
      default: 'doughnut-chart'
    },
    chartData: {
      type: Array,
      required: false,
      default: () => []
    },
    date: {
      type: String,
      required: true,
      default: ''
    },
    unit: {
      type: String,
      required: false,
      default: ''
    },
    info: {
      type: String,
      required: false,
      default: ''
    },
    url: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    displayInfo() {
      if (this.isNotLoaded()) {
        return {
          lText: '',
          sText: '',
          unit: ''
        }
      }

      const chartData = this.chartData[this.chartData.length - 1]
      const total = chartData.cumulative
      //const remaining = chartData.transition
      //const patients = total - remaining
      return {
        lText: total.toString(),
        sText: this.info,
        unit: this.unit
      }
    },
    displayData() {
      if (this.isNotLoaded()) {
        return {
          labels: [''],
          datasets: [
            {
              label: '',
              data: '',
              backgroundColor: '',
              borderWidth: 0
            }
          ]
        }
      }
      //const colorArray = ['#174e9e','#68b8dd','#d16b16','#88b83e','#f2cf01','#019fe6','#c60019','#019c96','#fff001','#c83955']
      //const colorArray = ['#dd9cb4','#eeea55','#ebc061','#b2d6d4','#f2dae8','#c9d744','#b8b2d6','#afd0ef','#d7847e','#cbacbe']
      const colorArray = ['#e2b2c0','#fff353','#a5d1f4','#e4ad6d','#d685b0','#dbe159','#7fc2ef','#c4a6ca','#f9e697','#b3d3ac']
      return {
        labels: this.chartData.map(d => {
          return this.$t(d.label)
        }),
        datasets: [
          {
            label: this.chartData.map(d => {
              return this.$t(d.label)
            }),
            data: this.chartData.map(d => {
              return d.transition
            }),
            backgroundColor: this.chartData.map((_, index) => {
              return colorArray[index]
            }),
            borderWidth: 0
          }
        ]
      }
    },
    displayOption() {
      if (this.isNotLoaded()) {
        return {}
      }

      const unitAge = this.unit
      const unitPerson = this.$t('人')
      const label = this.$t('年代別')
      const chartData = this.chartData
      return {
        tooltips: {
          displayColors: true,
          callbacks: {
            label(tooltipItem) {
              const index = tooltipItem.index
              const numerator = chartData[index].transition
              // const numeratorUnit = index === 1 ? unitAge : unitPerson
              const numeratorUnit = index === 2 ? unitAge : unitPerson
              const denominator =
                chartData[0].transition + chartData[1].transition
              const denominatorLabel = label
              // return `${numerator} ${numeratorUnit} (${denominatorLabel}: ${denominator}${unitAge})`
              return `${numerator} ${numeratorUnit}`
            },
            title(tooltipItem, data) {
              return data.labels[tooltipItem[0].index]
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true
        },
        animation: { duration: 0 }
      }
    }
  },
  methods: {
    isNotLoaded() {
      return this.chartData.length === 0
    }
  }
}
</script>

<style lang="scss" module>
.Graph-Desc {
  margin: 10px 0;
  font-size: 12px;
  color: $gray-3;
}
.link {
  text-decoration: none;
}
ul.notes {
  margin-top: 10px;
  margin-bottom: 0;
  padding-left: 0 !important;
  font-size: 12px;
  color: $gray-3;

  > li {
    list-style-type: none;
  }
}
</style>
