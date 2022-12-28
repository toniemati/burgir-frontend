<template>
  <div class="zamowienia">
    <ButtonToBottom />

    <div class="zamowienia__content">
      <table class="zamowienia__table">
        <tr>
          <th>Id</th>
          <th>Data zamówienia</th>
          <th>Klient</th>
          <th>Dostawa</th>
          <th>Produkty</th>
          <th>Cena</th>
        </tr>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.order_date }}</td>
          <td>
            {{ order.customer.first_name }} {{ order.customer.last_name }}
          </td>
          <td>{{ order.delivery.id }}</td>
          <td>
            <div v-for="product in order.products" :key="product.id">
              <router-link :to="'/product/details/' + product.id">{{
                product.name
              }}</router-link>
            </div>
          </td>
          <td>
            {{
              order.products
                .reduce((prev, curr) => prev + curr.price, 0)
                .toFixed(2)
            }}
            zł
          </td>
        </tr>
      </table>

      <div class="summary">
        <h2>Podsumowanie</h2>

        <div>
          Liczba zamówień:
          <span class="summary__value">
            {{ orders.length }}
          </span>
        </div>

        <div>
          Liczba sprzedanych produktów:
          <span class="summary__value">
            {{ orders.reduce((prev, curr) => prev + curr.products.length, 0) }}
          </span>
        </div>

        <div>
          Liczba klientów:
          <span class="summary__value">
            {{ [...new Set(orders.map((o) => o.customer.id))].length }}
          </span>
        </div>

        <div>
          Cena wszystkich zamówień:
          <span class="summary__value">
            {{
              orders
                .reduce(
                  (prev, curr) =>
                    prev + curr.products.reduce((p, c) => p + c.price, 0),
                  0
                )
                .toFixed(2)
            }}
            zł
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonToBottom from "../../components/ButtonToBottom.vue";
import { API_URL } from "@/config";
import axios from "axios";
import { onMounted, ref } from "vue";
const orders = ref([]);

const getOrders = async () => {
  const response = await axios.get(API_URL + "orders");
  const { data } = await response;

  orders.value = data;
};

onMounted(() => {
  getOrders();
});
</script>

<style scoped>
.zamowienia {
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

@media only screen and (min-width: 768px) {
  .zamowienia {
    margin: 0 20px;
  }
}

.zamowienia__header {
  text-align: center;
  text-transform: uppercase;
}

.zamowienia__table {
  width: 100%;
  border-collapse: collapse;
  text-align: right;
  border-radius: 5px;
  overflow: hidden;
}

.zamowienia__table th {
  background: #f59705;
  color: #1f1f1f;
}

.zamowienia__table th,
.zamowienia__table td {
  padding: 10px;
}

.zamowienia__table tr:nth-child(even) {
  background: #1f1f1f;
}

.zamowienia__table tr {
  transition: background 0.2s ease-in-out;
}

.zamowienia__table tr:hover {
  background: #2b2b2b;
}

.zamowienia__table a {
  color: #f59705;
  text-decoration: none;
  font-weight: 600;
}

.summary {
  font-size: 16px;
}

.summary h2 {
  color: #f59705;
  margin: 20px 0 10px 0;
  font-weight: bold;
  font-size: 25px;
}

.summary__value {
  font-weight: bold;
  font-size: 18px;
}
</style>