<template>
  <div class="product-card p-0 d-flex flex-column align-items-start">
    <div class="product-card__badge badge p-2 ">New</div>
    <img src="https://via.placeholder.com/300" alt="" class="w-100" />
    <div class="w-100 px-1">
      <p class="product-card__name mt-1 mb-0">{{ name }}</p>
      <p class="product-card__shipment mt-0 mb-3">shipping method</p>
      <p class="product-card__price my-0 d-flex align-items-center">
        RM500<span class="ms-1">RM600</span>
      </p>
      <button
        class="product-card__addCart btn m-2 align-self-center bg-primary text-white"
      >
        add to cart
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductCard",
  props: {
    name: {
      type: String,
      default: "product name",
    },
  },
};
</script>
<style scoped>
.product-card {
  position: relative;
  width: 15rem;
  background: #eee;
  border: 1px solid transparent;
  transition: all 0.3s;
  box-shadow: 0 0;
}
.product-card:hover {
  width: 15rem;
  background: #eee;
  border: 1px solid #666;
  transform: translateY(-5px);
  box-shadow: 3px 3px 10px #666;
}
.product-card__badge {
    background: lightcoral;
  position: absolute;
  right: 5%;
  top: 2%;
}
.product-card img {
  object-fit: fill;
}
.product-card__name {
  font-size: 1.8rem;
  text-transform: capitalize;
}
.product-card__shipment {
  font-size: 1rem;
  color: rgb(150, 150, 150);
}
.product-card__price {
  color: orange;
  font-size: 1.5rem;
  font-weight: 900;
}
.product-card__price span {
  color: rgb(150, 150, 150);
  font-size: 1rem;
  text-decoration: line-through;
}
button {
  width: 90%;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 900;
  transition: 0.3s;
}
button:hover {
  transform: scale(1.05);
  width: 90%;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 900;
}
</style>
