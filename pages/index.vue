<template>
  <div class="MainPage">
    <div class="Header mb-3">
      <page-header :icon="headerItem.icon">{{ headerItem.title }}</page-header>
      <div class="UpdatedAt">
        <span>{{ $t('最終更新') }}</span>
        <time :datetime="updatedAt">{{ Data.lastUpdate }}</time>
      </div>
      <div
        v-show="!['ja', 'ja-basic'].includes($i18n.locale)"
        class="Annotation"
      >
        <span>{{ $t('注釈') }}</span>
      </div>
    </div>
    <whats-new class="mb-4" :items="newsItems" />
    <infection-medicalcareprovision-status />
    <card-row class="DataBlock">
      <!-- 検査陽性者の状況 -->
      <confirmed-cases-details-card />
      <residential-area-card />
      <confirmed-cases-number-card />
      <positive-rate-card />
      <age-card />
      <kanto-card />
      <medical-treatment-card />
      <severely-patient-card />
    </card-row
    <v-divider />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'

import Data from '@/data/data.json'
import News from '@/data/news.json'

import PageHeader from '@/components/PageHeader.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import CardRow from '@/components/cards/CardRow.vue'
import InfectionMedicalcareprovisionStatus from '@/components/InfectionMedicalcareprovisionStatus.vue'

import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import ResidentialAreaCard from '@/components/cards/ResidentialArea.vue'
import PositiveRateCard from '@/components/cards/PositiveRateCard.vue'
import AgeCard from '@/components/cards/AgeCard.vue'
import KantoCard from '@/components/cards/KantoCard.vue'
import MedicalTreatmentCard from '@/components/cards/MedicalTreatmentCard.vue'
import SeverelyPatientCard from '@/components/cards/SeverelyPatientCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
    WhatsNew,
    CardRow,
    InfectionMedicalcareprovisionStatus,
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    ResidentialAreaCard,
    PositiveRateCard,
    AgeCard,
    KantoCard,
    MedicalTreatmentCard,
    SeverelyPatientCard
  },
  data() {
    const data = {
      Data,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: this.$t('千葉の最新感染動向')
      },
      newsItems: News.newsItems
    }
    return data
  },
  computed: {
    updatedAt() {
      return convertDatetimeToISO8601Format(this.$data.Data.lastUpdate)
    }
  },
  head(): MetaInfo {
    return {
      title: this.$t('千葉の最新感染動向') as string
    }
  }
})
</script>

<style lang="scss" scoped>
.MainPage {
  .Header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    @include lessThan($small) {
      flex-direction: column;
      align-items: baseline;
    }
  }

  .UpdatedAt {
    @include font-size(14);

    color: $gray-3;
    margin-bottom: 0.2rem;
  }

  .Annotation {
    @include font-size(12);

    color: $gray-3;
    @include largerThan($small) {
      margin: 0 0 0 auto;
    }
  }
  .DataBlock {
    margin: 20px -8px;

    .DataCard {
      @include largerThan($medium) {
        padding: 10px;
      }

      @include lessThan($small) {
        padding: 4px 8px;
      }
    }
  }
}
</style>
