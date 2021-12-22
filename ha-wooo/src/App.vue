<template>
  <div class="container my-3">
    <Sort class="align-self-end" />

    <div class="d-flex flex-wrap justify-content-center">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :name="product.name"
        :price="product.price"
        :shipment="product.shipment"
        :preDiscount="product.preDiscount"
      />
    </div>

    <div class="d-flex justify-content-center">
      <Pagination />
    </div>
  </div>
</template>

<script>
import ProductCard from "./components/ProductCard.vue";
import Sort from "./components/Sort.vue";
import Pagination from "./components/Pagination.vue";
// let products = [
//   {
//     name: "Pie Shell - 9",
//     shipment: "Tavu",
//     price: "$811.36",
//     preDiscount: "$456.90",
//   },
//   {
//     name: "Foam Cup 6 Oz",
//     shipment: "Ooba",
//     price: "$964.23",
//     preDiscount: "$416.40",
//   },
//   {
//     name: "Vanilla Beans",
//     shipment: "Mydeo",
//     price: "$810.60",
//     preDiscount: "$766.22",
//   },
//   {
//     name: "Pastry - Chocolate Marble Tea",
//     shipment: "BlogXS",
//     price: "$708.18",
//     preDiscount: "$412.15",
//   },
//   {
//     name: "Grapefruit - White",
//     shipment: "Voonder",
//     price: "$194.92",
//     preDiscount: "$335.13",
//   },
//   {
//     name: "Lamb - Shoulder",
//     shipment: "Skimia",
//     price: "$948.35",
//     preDiscount: "$577.74",
//   },
//   {
//     name: "Juice - Ocean Spray Cranberry",
//     shipment: "Yombu",
//     price: "$488.27",
//     preDiscount: "$290.20",
//   },
//   {
//     name: "Orange Roughy 6/8 Oz",
//     shipment: "Thoughtsphere",
//     price: "$676.62",
//     preDiscount: "$933.95",
//   },
//   {
//     name: "Dried Cranberries",
//     shipment: "Skilith",
//     price: "$475.35",
//     preDiscount: "$370.62",
//   },
//   {
//     name: "Beef - Rib Eye Aaa",
//     shipment: "Camido",
//     price: "$180.48",
//     preDiscount: "$397.38",
//   },
// ];
export default {
  name: "App",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Pie Shell - 9",
          shipment: "Tavu",
          price: "$811.36",
          preDiscount: "$456.90",
        },
        {
          id: 2,
          name: "Foam Cup 6 Oz",
          shipment: "Ooba",
          price: "$964.23",
          preDiscount: "$416.40",
        },
        {
          id: 3,
          name: "Vanilla Beans",
          shipment: "Mydeo",
          price: "$810.60",
          preDiscount: "$766.22",
        },
        {
          id: 4,
          name: "Pastry - Chocolate Marble Tea",
          shipment: "BlogXS",
          price: "$708.18",
          preDiscount: "$412.15",
        },
        {
          id: 5,
          name: "Grapefruit - White",
          shipment: "Voonder",
          price: "$194.92",
          preDiscount: "$335.13",
        },
        {
          id: 6,
          name: "Lamb - Shoulder",
          shipment: "Skimia",
          price: "$948.35",
          preDiscount: "$577.74",
        },
        {
          id: 7,
          name: "Juice - Ocean Spray Cranberry",
          shipment: "Yombu",
          price: "$488.27",
          preDiscount: "$290.20",
        },
        {
          id: 8,
          name: "Orange Roughy 6/8 Oz",
          shipment: "Thoughtsphere",
          price: "$676.62",
          preDiscount: "$933.95",
        },
        {
          id: 9,
          name: "Dried Cranberries",
          shipment: "Skilith",
          price: "$475.35",
          preDiscount: "$370.62",
        },
        {
          id: 10,
          name: "Beef - Rib Eye Aaa",
          shipment: "Camido",
          price: "$180.48",
          preDiscount: "$397.38",
        },
      ],
    };
  },

  components: {
    ProductCard,
    Sort,
    Pagination,
  },
};
</script>

<style></style>
