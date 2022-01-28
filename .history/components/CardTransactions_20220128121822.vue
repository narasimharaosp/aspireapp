<template>
  <div v-for="t in card.transactions" :key="t.id" class="transactions">
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
</template>
