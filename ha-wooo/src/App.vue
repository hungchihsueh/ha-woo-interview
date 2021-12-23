<template>
  <div class="container my-3">
    <div class="d-flex justify-content-between align-items-center mb-5">
      <ShowCount />
      <Sort @sorted="arrSort" />
    </div>

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
import ShowCount from "./components/ShowCount.vue";

export default {
  name: "App",
  components: {
    ProductCard,
    Sort,
    Pagination,
    ShowCount,
  },
  methods: {
    arrSort(sorting) {
      console.log(sorting);
      this.newProducts = [...this.products];
      console.log(this.newProducts);
      let sortedProducts = this.newProducts;
      switch (sorting) {
        case "1":
          sortedProducts = this.newProducts.sort((a, b) => {
            return b.sold - a.sold;
          });
          this.newProducts = sortedProducts;
          break;
        case "2":
          sortedProducts = this.newProducts.sort((a, b) => {
            return b.date - a.date;
          });
          this.newProducts = sortedProducts;
          break;
        case "3":
          sortedProducts = this.newProducts.sort((a, b) => {
            return b.price - a.price;
          });
          this.newProducts = sortedProducts;
          break;
      }
      // let sortedProducts=this.newProducts.sort((a,b)=>{return b.date-a.date})
      // console.log(sortedProducts);
      this.newProducts = sortedProducts;
      console.log(this.newProducts);
    },
  },
  data() {
    return {
      newProducts: [],
      products: [
        {
          id: 1,
          name: "Pie Shell - 9",
          shipment: "Tavu",
          price: "456.90",
          preDiscount: "811.36",
          date: "20211211",
          sold: 50,
        },
        {
          id: 2,
          name: "Foam Cup 6 Oz",
          shipment: "Ooba",
          price: "416.40",
          preDiscount: "964.23",
          date: "20211212",
          sold: 49,
        },
        {
          id: 3,
          name: "Vanilla Beans",
          shipment: "Mydeo",
          price: "766.22",
          preDiscount: "810.60",
          date: "20211213",
          sold: 48,
        },
        {
          id: 4,
          name: "Pastry - Chocolate Marble Tea",
          shipment: "BlogXS",
          price: "412.15",
          preDiscount: "708.18",
          date: "20211214",
          sold: 47,
        },
        {
          id: 5,
          name: "Grapefruit - White",
          shipment: "Voonder",
          price: "194.92",
          preDiscount: "335.13",
          date: "20211215",
          sold: 46,
        },
        {
          id: 6,
          name: "Lamb - Shoulder",
          shipment: "Skimia",
          price: "577.74",
          preDiscount: "948.35",
          date: "20211216",
          sold: 45,
        },
        {
          id: 7,
          name: "Juice - Ocean Spray Cranberry",
          shipment: "Yombu",
          price: "290.20",
          preDiscount: "488.27",
          date: "20211217",
          sold: 44,
        },
        {
          id: 8,
          name: "Orange Roughy 6/8 Oz",
          shipment: "Thoughtsphere",
          price: "676.62",
          preDiscount: "933.95",
          date: "20211218",
          sold: 43,
        },
        {
          id: 9,
          name: "Dried Cranberries",
          shipment: "Skilith",
          price: "370.62",
          preDiscount: "475.35",
          date: "20211219",
          sold: 42,
        },
        {
          id: 10,
          name: "Beef - Rib Eye Aaa",
          shipment: "Camido",
          price: "180.48",
          preDiscount: "397.38",
          date: "202112120",
          sold: 41,
        },
      ],
    };
  },
};
</script>

<style></style>
