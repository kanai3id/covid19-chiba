<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-table
      :title="$t('居住地の状況')"
      :title-id="'residential-area-card'"
      :chart-data="residentialAreaTable"
      :chart-option="{}"
      :date="Data.date"
      :info="sumInfoOfPatients"
    />
  </v-col>
</template>

<script>
import Data from '@/data/residential-area.json'
import formatGraph from '@/utils/formatGraph'
import formatTable from '@/utils/formatResidentialArea'
import { getDayjsObject } from '@/utils/formatDate'
import DataTable from '@/components/DataTableResidentialArea.vue'

export default {
  components: {
    DataTable
  },
  data() {
    const residentialAreaTable = formatTable(Data.residential_area.data)
    const lastDay = Data.date
    const dateAsOf = this.$d(getDayjsObject(lastDay).toDate(), 'date')

    const sumInfoOfPatients = {
      lText: 
      Data.total,
      sText: this.$t('{date}の累計', { date: dateAsOf }),
      unit: this.$t('人')
    }

    for (const row of residentialAreaTable.datasets) {
      row['市町村'] = this.getTranslatedWording(row['市町村'])
    }

    const data = {
      Data,
      residentialAreaTable,
      sumInfoOfPatients
    }
    return data
  },
  methods: {
    getTranslatedWording(value) {
      if (value === '-' || value === '‐' || value == null) {
        return value
      }

      return this.$t(value)
    },
    customSort(items) {
      return items
    }
  }
}
</script>
