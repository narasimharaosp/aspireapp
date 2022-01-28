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
      {{card}}
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <img src="~assets/icons/Carddetails.svg" alt="Card details"/>
            <div v-b-toggle.accordion-1>Card details</div>
            <img v-if="visible" src="~assets/icons/DownArrow.svg" alt="Card details"/>
            <img v-else src="~assets/icons/UpArrow.svg" alt="Card details"/>
          </b-card-header>
          <b-collapse id="accordion-1" v-model="visible" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p>asd;lkas;dkl;</p>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <img src="~assets/icons/RecentTracks.svg" alt="Recent transactions"/>
            <div v-b-toggle.accordion-2 block>Recent transactions</div>
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p>asd;lkas;dkl;111112222222</p>
            </b-card-body>
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
        text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
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
    .card {
      padding: 10px;
      header, button {
        background: $white;
        border: 0;
        color: $dark-blue;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:hover {

        }
      }
    }
  }
}
</style>