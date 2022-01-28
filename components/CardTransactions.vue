<template>
  <div>
    <div v-for="t in transactions" :key="t.id" class="transactions">
      <div class="logo">
        <img v-if="t.logo" :src="require(`@/assets/icons/${t.logo}`)" :alt="t.name">
      </div>
      <div class="company-details">
        <div class="name">{{t.name}}</div>
        <div class="date">{{t.date}}</div>
        <div class="message">
          <div class="refund-icon">
            <img src="~assets/icons/BusinessandFinance.svg" alt="Refund on debit card">
          </div>
          <div class="refund-message">
            {{ t.debit ? 'Charged to debit card' : 'Refund on debit card' }}
          </div>
        </div>
      </div>
      <div class="amount-details">
        <div class="amount" :class="{'debit' : t.debit}">{{ t.debit ? '-' : '+' }} S$ {{t.amount}}</div>
        <img src="~assets/icons/Next.svg" alt="Amount details">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardTransactions',
  props: {
    transactions: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss">
.transactions {
  display: flex;
  justify-content: space-between;
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
  .company-details {
    .name {
      font-size: 14px;
      color: $black-two;
      font-weight: 400;
    }
    .date {
      font-size: 13px;
      color: $gray-a;
    }
    .message {
      display: flex;
      justify-content: space-between;
      padding-top: 12px;
      .refund-icon{
        background: $new-blue;
        border-radius: 10px;
        width: 24px;
        height: 20px;
        position: relative;
        z-index: 0;
        img {
          position: absolute;
          z-index: 1;
          width: 10px;
          height: 7px;
          top: 6px;
          left: 7px;
        }
      }
      .refund-message {
        color: $new-blue;
        font-size: 12px;
        font-weight: 400;
        padding-left: 5px;
      }
    }
  }
  .amount-details {
    display: flex;
    justify-content: space-between;
    .amount{
      font-size: 14px;
      color: $green-color;
      font-weight: 600;
      padding-right: 5px;
      &.debit{
        color: $black-two;
      }
    }
    img{
      width: 8px;
      height: 12px;
      margin-top: 5px;
    }
  }
}
</style>