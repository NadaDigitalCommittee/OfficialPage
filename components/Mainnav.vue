<template>
  <section class="menu">
    <nuxt-link tag="h1" to="/" class="logo"
      ><span>デジタル委員会</span></nuxt-link
    >
    <nav>
      <ul>
        <nuxt-link tag="li" to="/" class="spa"><span>ホーム</span></nuxt-link>
        <nuxt-link tag="li" to="/activity" class="spa"
          ><span>活動内容</span></nuxt-link
        >
        <nuxt-link tag="li" to="/order" class="spa"
          ><span>業務委託のご案内</span></nuxt-link
        >
      </ul>
    </nav>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
$bluecolor: #0f41af;
$graycolor: #666666;
$boxshadow: 0px 0px 2px 0.01px #ccc;
.menu {
  width: 25%;
  position: relative;
  z-index: 10;

  .logo {
    margin-bottom: 40px;
    font-size: 30px;
    font-weight: 700;
  }

  nav {
    ul {
      list-style: none;
      padding-left: 0;

      .spa {
        text-decoration: none;
        font-size: 16px;
        line-height: 3;
        font-weight: 500;
        cursor: pointer;

        &.nuxt-link-exact-active {
          color: $bluecolor;

          span {
            &:hover {
              color: #000;
            }
          }
        }

        span {
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
