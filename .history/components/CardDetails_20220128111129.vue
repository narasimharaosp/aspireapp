<template>
  <section>
    <div class="options">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="~assets/icons/Freezecard.svg" alt="Freeze card"/>
            Freeze card
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">
            <img src="~assets/icons/Setspendlimit.svg" alt="Set spend limit"/>
            Set spend limit
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="~assets/icons/GPay.svg" alt="Add to GPay"/>
            Add to GPay
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="~assets/icons/Replacecard.svg" alt="Replace card"/>
            Replace card
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="~assets/icons/Deactivatecard.svg" alt="Cancel card"/>
            Cancel card
          </a>
        </li>
      </ul>
    </div>
    <div class="transactions-wrapper">
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header v-b-toggle.accordion-1 header-tag="header" class="p-1" role="tab">
            <div>
              <img src="~assets/icons/Carddetails.svg" alt="Card details"/>
              Card details
            </div>
            <img v-if="visible" src="~assets/icons/UpArrow.svg" alt="up arrow"/>
            <img v-else src="~assets/icons/DownArrow.svg" alt="down arrow"/>
          </b-card-header>
          <b-collapse id="accordion-1" v-model="visible" visible accordion="my-accordion" role="tabpanel">
            {{card}}
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header v-b-toggle.accordion-2 header-tag="header" class="p-1" role="tab">
            <div>
              <img src="~assets/icons/RecentTracks.svg" alt="Recent transactions"/>
              Recent transactions
            </div>
            <img v-if="visible" src="~assets/icons/UpArrow.svg" alt="up arrow"/>
            <img v-else src="~assets/icons/DownArrow.svg" alt="down arrow"/>
          </b-card-header>
          <b-collapse id="accordion-2" v-model="visible2" accordion="my-accordion" role="tabpanel" class="recent-transactions">
            <!-- {{ card }} -->
            <div v-for="t in card.transactions" :key="t.id" class="transactions">
              <div class="logo">
                <img :src="require(`@/assets/icons/${t.logo}`)" :alt="t.name">
              </div>
              <div class="company-details">
                <div>{{t.name}}</div>
                <div>{{t.date}}</div>
                <div class="refund-icon">
                  <img src="~assets/icons/BusinessandFinance.svg" alt="Refund on debit card">
                </div>
                <div v-if="debit">
                  Refund on debit card
                </div>
                <div v-else>
                  Charged to debit card
                </div>
              </div>
              <div class="amount-details">

              </div>
            </div>
          </b-collapse>
        </b-card>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'CardDetails',
    props: {
      card: {
        type: Object,
        default: () => null
      }
    },
    data() {
      return {
        visible: false,
        visible2: false
      }
    }
  }
</script>
<style lang="scss">
section {
  position: absolute;
  width: 100%;
  left: 0;
  top: 490px;
  z-index: 2;
  background: #ffffff;
  color: #000000;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 72px;
  .options {
    padding: 20px;
    background-color: $light-blue;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    ul.navbar-nav{
      width: 100%;
      height: 56px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      li{
        display: inline-block;
      }
    }
    .nav-link{
      text-align: center;
      color: $dark-blue;
      font-size: 13px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 32px;
        height: 32px;
      }
    }
  }
  .transactions-wrapper {
    padding: $standard;
    .card {
      margin: 24px auto;
      border: 1px solid $gray !important;
      box-shadow: 0px 0px 8px $shadow-black;
      max-width: 366px;
      border-radius: 10px !important;
      header {
        padding: 0 $standard !important;
        font-size: 14px;
        background: $white;
        border: 0;
        color: $dark-blue;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: $light-white;
        height: 72px;
      }
    }
    .recent-transactions {
      .transactions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 24px;
        .logo {
          background: $circle-blue;
          width: 48px;
          height: 48px;
          border-radius: 100%;
          position: relative;
          z-index: 0;
          img{
            position: absolute;
            z-index: 1;
            top: 16px;
            left: 15px;
            width: 16px;
            height: 15px;
          }
        }
      }
    }
  }
}
</style>