(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{619:function(t,e,r){"use strict";r.r(e);var d=r(146),c=r(481),n=r(478),o=r(482),m=r(485),h=r(489),l=r(493),$=r(492),f=r(494),v=r(497),C=r(495),k=r(496),y=r(498),w=r(499),_={components:{ConfirmedCasesDetailsCard:l.a,ConfirmedCasesNumberCard:$.a,PositiveRateCard:v.a,ResidentialAreaCard:f.a,AgeCard:C.a,KantoCard:k.a,MedicalTreatmentCard:y.a,SeverelyPatientCard:w.a},data:function(){var title,t;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況"),t=d.patients.date;break;case"number-of-confirmed-cases":title=this.$t("陽性患者数"),t=d.patients.date;break;case"residential-area-card":title=this.$t("居住地の状況"),t=n.date;break;case"age-card":title=this.$t("入院患者数と病床数"),t=c.age_summary.date;break;case"positive-rate-card":title=this.$t("PCR検査状況(陰性化確認を除く)"),t=test.test_summary.date;break;case"kanto-card":title=this.$t("関東地区の状況"),t=o.date;break;case"medical-treatment-card":title=this.$t("治療患者数"),t=m.date;break;case"severely-patient-card":title=this.$t("重傷者数"),t=h.date}var data={title:title,updatedAt:t};return data},head:function(){var t="https://covid19-chiba.netlify.app",e="".concat(t,"/ogp.png"),r="".concat(this.updatedAt," | ").concat(this.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、千葉県非公式で開設したものです。"));return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:t+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("千葉県")+" "+this.$t("新型コロナウイルス感染症")+this.$t("対策サイト")},{hid:"description",name:"description",content:r},{hid:"og:description",property:"og:description",content:r},{hid:"og:image",property:"og:image",content:e}]}}},A=r(9),component=Object(A.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",["details-of-confirmed-cases"==this.$route.params.card?r("confirmed-cases-details-card"):"number-of-confirmed-cases"==this.$route.params.card?r("confirmed-cases-number-card"):"positive-rate-card"==this.$route.params.card?r("positive-rate-card"):"residential-area-card"==this.$route.params.card?r("residential-area-card"):"age-card"==this.$route.params.card?r("age-card"):"kanto-card"==this.$route.params.card?r("kanto-card"):"medical-treatment-card"==this.$route.params.card||"medical-treatment-card"==this.$route.params.card?r("medical-treatment-card"):"severely-patient-card"==this.$route.params.card?r("severely-patient-card"):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);