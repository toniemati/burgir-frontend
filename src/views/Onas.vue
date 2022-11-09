<template>
  <div class="onas">
    <h1 class="onas__header">O nas</h1>

    <h3 class="onas__subHeader">
      Jeśli chcesz spróbować nietuzinkowej kompozycji smakowej. Wyjść do
      klimatycznego miejsca z rodzinom lub przyjaciółmi. Zorganizować spotkanie
      - jesteśmy właśnie odpowiedzią na Twoje potrzeby.
    </h3>

    <div class="onas__content">
      <h2 class="content__header">Dowiedz się więcej</h2>

      <div class="content__text">
        Jeśli chcesz spróbować nietuzinkowej kompozycji smakowej. Wyjść do
        klimatycznego miejsca z rodzinom lub przyjaciółmi. Zorganizować
        spotkanie - jesteśmy właśnie odpowiedzią na Twoje potrzeby.&nbsp;<br /><br />Bar
        i burgerownia "Burgir" to miejsce, gdzie dania przygotowywane są z
        miłości i pasji do jedzenia. Każdy burger oraz kanapka to niecodzienna
        kompozycja smaków, autorskie przepisy Szef kuchni sprawiają, że nie jest
        to zwykły fastfood lecz ma w sobie coś więcej. Jest jego świetnym
        zamiennikiem- autorskie przepisy sprawiają, że dania są nie tylko
        smaczne, ale i zdrowe. Wyrąbane to miejsce,&nbsp;<br />
        gdzie każdy czuje się dobrze. My jesteśmy dla Was, a Wy dla
        nas.&nbsp;<br /><br />Gdzie możesz nas spotkać?&nbsp;<br />Na ul.
        Majstra 1337A.&nbsp;<br />Tam czekamy na Ciebie nasza super ekipa 👋<br />
      </div>
    </div>
  </div>
</template>

<style scoped>
.onas {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.onas__header {
  text-align: center;
  text-transform: uppercase;
}

.onas__subHeader {
  color: #f59705;
  font-size: 18px;
  text-align: center;
}

.onas__content {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.content__header {
  text-transform: uppercase;
  margin: 20px 0;
  text-align: center;
  color: #f59705;
}

/* .content__text {} */

@media only screen and (min-width:768px) {
  .content__text {
    padding: 20px 20px;
  }
}
</style>
