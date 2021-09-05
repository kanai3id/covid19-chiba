<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <time-stacked-bar-chart
        :title="$t('ワクチンの接種状況')"
        :title-id="'vaccination-number-card'"
        :chart-id="'vaccination-number'"
        :chart-data="vaccinationGraph"
        :date="date"
        :items="vaccinationItems"
        :labels="vaccinationLabels"
        :unit="$t('人')"
        :data-labels="vaccinationDataLabels"
        :url="'https://cio.go.jp/c19vaccine_dashboard'"
      >
        <template v-slot:additionalDescription>
          <span>{{ $t('出典元：内閣官房 情報通信技術（ＩＴ）総合戦略室') }}</span>
          <ul>
            <li>
              {{
                $t( 'VRSに記録された接種券で集計されております。')
              }}
            </li>
            <li>
              {{ $t('医療従事者等の記録は含まれておりません。') }}
            </li>
          </ul>
        </template>
      </time-stacked-bar-chart>
    </client-only>
  </v-col>
</template>

<script>
import TimeStackedBarChart from '@/components/TimeStackedBarChart.vue'
import Data from '@/data/vaccination.json'

export default {
  components: {
    TimeStackedBarChart,
  },
  data() {
    const date = Data.date
    const vaccinationGraph = [
      Data.data['１回接種'],
      Data.data['２回接種'],
    ]
    const vaccinationItems = [
      this.$t('１回接種'),
      this.$t('２回接種')
    ]
    const vaccinationLabels = Data.data['年月日']
    const vaccinationDataLabels = [
      this.$t('１回接種'),
      this.$t('２回接種')
    ]
    return {
      date,
      vaccinationGraph,
      vaccinationItems,
      vaccinationLabels,
      vaccinationDataLabels,
    }
  },
}
</script>
