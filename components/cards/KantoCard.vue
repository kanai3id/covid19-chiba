<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-table
      :title="$t('関東地区の状況')"
      :title-id="'kanto-card'"
      :chart-data="kantoTable"
      :chart-option="{}"
      :date="Data.date"
      :url="'https://toyokeizai.net/sp/visual/tko/covid19/'"
      :source="$t('オープンデータを入手')"
      :custom-sort="customSort"
    />
  </v-col>
</template>

<script>
import Data from '@/data/kanto.json'
import formatTable from '@/utils/formatKantoTable'
import DataTable from '@/components/DataTableKanto.vue'

export default {
  components: {
    DataTable
  },
  data() {
    const kantoTable = formatTable(Data.data)

    // 隣接県の状況 ヘッダー翻訳
    for (const header of kantoTable.headers) {
      header.text = this.$t(header.value)
    }
    // 隣接県の状況 中身の翻訳
    for (const row of kantoTable.datasets) {
      row['県名'] = this.getTranslatedWording(row['県名'])
    }

    const data = {
      Data,
      kantoTable
    }
    return data
  },
  methods: {
    getTranslatedWording(value) {
      if (value === '-' || value === '‐' || value == null) {
        // 翻訳しようとしている文字列が以下のいずれかだった場合、翻訳しない
        // - 全角のハイフン
        // - 半角のハイフン
        // - null
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
