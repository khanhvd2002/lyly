<template>
  <div class="product">
    <h3 class="header-text">Sản phẩm bán chạy</h3>
    <VRow class="container-product" justify-sm="space-between" justify="space-around">
      <div
        v-for="item in productList" :key="item.id"
      >
        <div class="product-content hover-card">
          <div class="product-img">
            <img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                 alt=""
            >
          </div>
          <div class="product-desc">
            <span class="product-name">
              {{ item.name }}
            </span>
            <div class="product-rating">
              <div style="display: flex; align-items: stretch">
                <span>{{ item.avg_rating }}</span>
                <VIcon size="16" icon="emojione:star"/>
              </div>
              <span>
               {{ item.total_sold }}
              </span>
            </div>
            <span class="product-price">
              {{ item.price }}
            </span>
          </div>
        </div>
      </div>
    </VRow>
  </div>
</template>

<script>
import { getProducts } from "@/api/product"

export default {
  name: "HotProduct",
  data() {
    return {
      productList: [],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      getProducts({ rating: true }).then(res => {
        this.productList = res.data
      })

    },
    handleToProduct(val) {
      this.$router.push({
        name: 'productDetail',
        query: { id: val.id },
        params: { title: val.name },

      })
    },
  },
}
</script>

<style lang="scss" scoped>

@media (max-width: 600px) {
  .product-content {
    height: 250px !important;
    width: 182px !important;;
    border-radius: 6px !important;;
    background-color: #fff;

    .product-img {
      padding: 6px 8px;
      width: 100%;
      height: 150px !important;;
      border-radius: 6px !important;;
      position: relative;

      img {
        overflow: hidden;
        object-fit: cover;
        width: 100%;
        border-radius: 8px;
        height: 100%;
      }
    }
  }
}

.product {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .container-product {
    max-width: 1200px;
    width: 100%;
    row-gap: 1rem;
    margin: 0;

    .product-content {
      height: 280px;
      width: 100%;
      max-width: 200px;
      border-radius: 10px;
      background-color: #fff;

      .product-img {
        padding: 6px 8px;
        width: 100%;
        height: 180px;
        border-radius: 6px;

        img {
          overflow: hidden;
          object-fit: cover;
          width: 100%;
          border-radius: 8px;
          height: 100%;
        }
      }

      .product-desc {
        display: flex;
        margin: 0 3%;
        gap: 3px;
        padding: 0px 6px;
        white-space: pre-wrap;
        flex-direction: column;
        height: 100px;

        .product-name {
          line-height: 20px;
          height: 40px;
          color: black;
        }

        .product-rating {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
        }

        .product-price {
          color: firebrick;
          font-size: 18px;
          font-weight: bold;
        }
      }
    }
  }
}

</style>
