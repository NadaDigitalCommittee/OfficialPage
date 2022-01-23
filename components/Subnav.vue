<template>
  <section class="submenu">
    <nav>
      <ul>
        <nuxt-link tag="li" to="/recruit" class="spa">新規委員応募</nuxt-link>
        <nuxt-link tag="li" to="/about" class="spa">組織情報</nuxt-link>
        <nuxt-link tag="li" to="/divisions" class="spa">各機関紹介</nuxt-link>
        <nuxt-link tag="li" to="/news" class="spa">お知らせ</nuxt-link>
        <nuxt-link tag="li" to="/contact" class="spa">コンタクト</nuxt-link>
      </ul>
    </nav>
  </section>
</template>
<script>
export default {}
</script>
<style lang="scss">
.submenu {
  width: 25%;
  position: relative;
  z-index: 10;

  nav {
    ul {
      list-style: none;
      padding-left: 30px;
      margin-top: 80px;
      display: flex;
      flex-direction: column;

      .spa {
        list-style: none;
        padding-left: 20px;
        font-size: 14px;
        line-height: 2;
        font-weight: 700;
        text-decoration: none;
        color: black;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>