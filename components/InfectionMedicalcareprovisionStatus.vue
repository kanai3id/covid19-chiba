<template>
  <div class="InfectionMedicalcareprovisionStatus">
    <div class="InfectionMedicalcareprovisionStatus-heading">
      <h3 class="InfectionMedicalcareprovisionStatus-title">
        {{ $t('感染状況・医療提供体制') }}
        {{ date }}時点
      </h3>
    </div>
    <div class="InfectionMedicalcareprovisionStatus-Box">
      <div class="InfectionMedicalcareprovisionStatus-Headline">
        <app-link
          to="https://www.pref.chiba.lg.jp/shippei/press/2019/ncov-index.html"
        >
          {{ $t('感染状況') }}
        </app-link>
      </div>
      <div class="InfectionMedicalcareprovisionStatus-description">
        {{ $t('新規陽性者')
        }}<span> {{ statuses.data['新規陽性者'].toLocaleString() }}人</span> |
        {{ $t('検査数')
        }}<span>{{ statuses.data['検査数'].toLocaleString() }}件</span> ({{
          statisticDate
        }}{{ $t('参考値') }})
      </div>
    </div>
    <div class="InfectionMedicalcareprovisionStatus-Box">
      <div class="InfectionMedicalcareprovisionStatus-Headline">
        <app-link to="https://www.pref.chiba.lg.jp/kenfuku/kansenshou/ncov/byousyou-senyu.html">
          {{ $t('医療提供体制') }}
        </app-link>
      </div>
      <div class="InfectionMedicalcareprovisionStatus-description">
        {{ $t('入院数')
        }}<span> {{ statuses.data['入院数'].toLocaleString() }}人</span> ({{
          $t('確保病床数')
        }}<span>{{ statuses.data['確保病床数'].toLocaleString() }}床</span>)
      </div>
    </div>
    <div class="InfectionMedicalcareprovisionStatus-Box">
      <div class="InfectionMedicalcareprovisionStatus-Headline">
        <app-link to="https://info.vrs.digital.go.jp/dashboard">
          {{ $t('ワクチン接種状況') }}
        </app-link>
      </div>
      <div class="InfectionMedicalcareprovisionStatus-description">
        {{ $t('３回接種') }}:
        <span>
          {{ statuses.data['ワクチン３回'].toLocaleString() }} ({{
            statuses.data['ワクチン３割合'].toLocaleString()
          }}
          %)
        </span>
        , {{ $t('２回接種') }}:
        <span
          >{{ statuses.data['ワクチン２回'].toLocaleString() }} ({{
            statuses.data['ワクチン２割合'].toLocaleString()
          }}
          %)
        </span>
        , {{ $t('１回接種') }}:
        <span
          >{{ statuses.data['ワクチン１回'].toLocaleString() }} ({{
            statuses.data['ワクチン１割合'].toLocaleString()
          }}
          %)
        </span>
        ( {{ statuses.data['ワクチン日付'].toLocaleString() }}
        {{ $t('現在') }} ) - {{ $t('出典元:デジタル庁') }}
      </div>
    </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppLink from '@/components/AppLink.vue'
import InfectionMedicalcareprovisionStatus from '@/data/infection_medicalcareprovision_status.json'

export default Vue.extend({
  components: { AppLink },
  data() {
    const date = InfectionMedicalcareprovisionStatus.date
    const statisticDate =
      InfectionMedicalcareprovisionStatus.data['検査統計日時']
    return {
      statuses: InfectionMedicalcareprovisionStatus,
      date: this.$d(new Date(date), 'date'),
      statisticDate: this.$d(new Date(statisticDate), 'dateWithoutYear')
    }
  }
})
</script>

<style lang="scss">
.InfectionMedicalcareprovisionStatus {
  @include card-container();

  padding: 8px 18px;
  margin-bottom: 10px;

  .InfectionMedicalcareprovisionStatus-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .InfectionMedicalcareprovisionStatus-title {
      display: flex;
      align-items: center;
      padding: 0 0 4px 0;
      color: $gray-2;

      @include card-h2();
      @include font-size(14);
    }
  }

  .InfectionMedicalcareprovisionStatus-Box {
    overflow: hidden;

    .InfectionMedicalcareprovisionStatus-Headline {
      float: left;
      text-align: center;
      width: 10em;
      border: 1px solid;
      border-color: #000;
      margin: 0 4px 1px 0;
      color: #008830;

      @include font-size(12);
    }

    .InfectionMedicalcareprovisionStatus-description {
      @include font-size(12);

      padding: 3px 0 0 0;
      margin: 0;

      > span {
        color: #008830;
      }

      > a {
        @include text-link();

        text-decoration: none;
      }
    }
  }
}
</style>
