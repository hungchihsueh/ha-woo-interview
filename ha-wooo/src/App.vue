<template>
  <div class="container my-3">
    <Sort class="align-self-end"/>
    <product-card />
  </div>
</template>

<script>
import ProductCard from "./components/ProductCard.vue";
import Sort from "./components/Sort.vue"
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
  props:{
    products:[
  {
    name: "Pie Shell - 9",
    shipment: "Tavu",
    price: "$811.36",
    preDiscount: "$456.90",
  },
  {
    name: "Foam Cup 6 Oz",
    shipment: "Ooba",
    price: "$964.23",
    preDiscount: "$416.40",
  },
  {
    name: "Vanilla Beans",
    shipment: "Mydeo",
    price: "$810.60",
    preDiscount: "$766.22",
  },
  {
    name: "Pastry - Chocolate Marble Tea",
    shipment: "BlogXS",
    price: "$708.18",
    preDiscount: "$412.15",
  },
  {
    name: "Grapefruit - White",
    shipment: "Voonder",
    price: "$194.92",
    preDiscount: "$335.13",
  },
  {
    name: "Lamb - Shoulder",
    shipment: "Skimia",
    price: "$948.35",
    preDiscount: "$577.74",
  },
  {
    name: "Juice - Ocean Spray Cranberry",
    shipment: "Yombu",
    price: "$488.27",
    preDiscount: "$290.20",
  },
  {
    name: "Orange Roughy 6/8 Oz",
    shipment: "Thoughtsphere",
    price: "$676.62",
    preDiscount: "$933.95",
  },
  {
    name: "Dried Cranberries",
    shipment: "Skilith",
    price: "$475.35",
    preDiscount: "$370.62",
  },
  {
    name: "Beef - Rib Eye Aaa",
    shipment: "Camido",
    price: "$180.48",
    preDiscount: "$397.38",
  },
]
  },
  components: {
    ProductCard,
    Sort
  },
};
</script>

<style></style>
