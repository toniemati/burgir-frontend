<template>
  <div class="kontakt">
    <h1 class="kontakt__header">Kontakt</h1>

    <h3 class="kontakt__subHeader">
      Chcesz się dowiedzieć więcej lub już zaplanować wyjątkowe wydarzenie w
      wyjątkowym miejscu?
    </h3>

    <div class="kontakt__content">
      <h2 class="content__header">Skontaktuj się z nami</h2>

      <div class="content__info">
        <div>
          <div>Jan Kowalski - Menadżer</div>
          <div>Telefon: <a href="tel:123 45 67 89">123 45 67 89</a></div>
          <div>
            E-mail: <a href="mailto:jkowalski@burgir.pl">jkowalski@burgir.pl</a>
          </div>
        </div>

        <div>
          <div>Restauracja - rezerwacja stolików</div>
          <div>Telefon: <a href="tel:123 45 67 89">123 45 67 89</a></div>
        </div>

        <div>
          <div>ul. Majstra 1337A, 69-420 Mielno</div>
          <div>
            E-mail: <a href="mailto:poczta@burgir.pl">poczta@burgir.pl</a>
          </div>
        </div>
      </div>

      <div class="content__godziny">
        <h3 class="godziny__header">Godziny otwarcia:</h3>

        <div>poniedziałek - nieczynne</div>
        <div>wtorek, środa, czwartek - 15:00-20:00</div>
        <div>piątek - 15:00-22:00</div>
        <div>sobota - 12.00-22.00</div>
        <div>niedziela - 12:00-20:00</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.kontakt {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.kontakt__header {
  text-align: center;
  text-transform: uppercase;
}

.kontakt__subHeader {
  color: #f59705;
  font-size: 18px;
  text-align: center;
}

.kontakt__content {
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
.content__info {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

@media only screen and (min-width: 768px) {
  .content__info {
    flex-direction: row;
    justify-content: space-evenly;
  }
}

.content__info a {
  color: #f59705;
  text-decoration: none;
}

/* .content__godziny {} */

@media only screen and (min-width: 768px) {
  .content__godziny {
    width: fit-content;
    margin: 20px auto 0;
  }
}

.godziny__header {
  font-weight: bold;
  font-size: 16px;
  color: #f59705;
}
</style>
