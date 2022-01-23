<template>
  <div>
    <!-- 上部・ハンバーガーメニュー -->
    <section class="responsivemenu">
      <nuxt-link to="/" class="logo">デジタル委員会</nuxt-link>
      <button
        class="menu-trigger"
        v-on:click="open = !open"
        v-bind:class="{ active: open }"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </section>
    <!-- 上部・ハンバーガーメニュー終了 -->
    <!-- フルスクリーンナビゲーション -->
    <section class="hidemenu" v-bind:class="{ 'is-active': open }">
      <nav>
        <ul class="bigs">
          <nuxt-link
            tag="li"
            to="/"
            class="spa big"
            v-on:click.native="open = !open"
            ><span>ホーム</span></nuxt-link
          >
          <nuxt-link
            tag="li"
            to="/activity"
            class="spa big"
            v-on:click.native="open = !open"
            ><span>活動内容</span></nuxt-link
          >
          <nuxt-link
            tag="li"
            to="/order"
            class="spa big"
            v-on:click.native="open = !open"
            ><span>業務委託のご案内</span></nuxt-link
          >
        </ul>
        <ul class="smalls">
          <li class="small">
            <nuxt-link to="/recruit">新規委員応募</nuxt-link>
          </li>
          <li class="small">
            <nuxt-link to="/about">組織情報</nuxt-link>
          </li>
          <li class="small">
            <nuxt-link to="/divisions">各機関紹介</nuxt-link>
          </li>
          <li class="small">
            <nuxt-link to="/news">お知らせ</nuxt-link>
          </li>
          <li class="small">
            <nuxt-link to="/contact">コンタクト</nuxt-link>
          </li>
        </ul>
      </nav>
    </section>
    <!-- フルスクリーンナビゲーション終了 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: false,
    }
  },
}
</script>
<style lang="scss">
// 画面上部・ハンバーガーメニュー
.responsivemenu {
  position: fixed;
  display: none; //PCでは非表示
  background-color: #fff;
  width: 100vw;
  top: 0;
  padding: 20px;
  padding-left: 5%;
  margin-left: -5%;
  z-index: 100;

  .logo {
    width: max-content;
    font-size: 1.5em;
    text-decoration: none;
    font-weight: 700;
    display: block;
    color: black;

    &:visited {
      color: inherit;
    }
  }

  .menu-trigger,
  .menu-trigger span {
    display: inline-block;
    transition: all 0.4s;
    box-sizing: border-box;
  }

  .menu-trigger {
    position: fixed;
    width: 25px;
    height: 14px;
    background: none;
    border: none;
    appearance: none;
    cursor: pointer;
    right: 5vw;
    top: 4%;

    span {
      position: absolute;
      left: 0;
      width: 100%;
      height: 0.5px;
      background-color: #000;
      border-radius: 2px;

      &:nth-of-type(1) {
        top: 0;
      }

      &:nth-of-type(2) {
        top: 7px;
      }

      &:nth-of-type(3) {
        bottom: 0;
      }
    }

    &.active {
      span {
        &:nth-of-type(1) {
          transform: translateY(6.5px) rotate(-45deg);
        }

        &:nth-of-type(2) {
          opacity: 0;
        }

        &:nth-of-type(3) {
          transform: translateY(-6.5px) rotate(45deg);
        }
      }
    }
  }
}
// 画面上・ハンバーガーメニュー終了
// フルスクリーンナビゲーション
.hidemenu {
  display: block;
  visibility: hidden;
  flex-direction: column;
  align-items: left;
  justify-content: start;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  opacity: 0;
  transition: opacity 300ms;
  z-index: 9;

  &.is-active {
    opacity: 100;
    z-index: 99;
    visibility: visible;
  }

  nav {
    margin-top: calc(1.5em + 90px);
    margin-left: 5%;
    display: flex;
    flex-direction: column;

    .bigs {
      margin-bottom: 24px;

      .big {
        list-style: none;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 16px;

        a {
          color: #000;
          text-decoration: none;

          &:visited {
            color: inherit;
          }
        }
      }
    }

    .smalls {
      .small {
        list-style: none;
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 20px;

        a {
          color: #000;
          text-decoration: none;

          &:visited {
            color: inherit;
          }
        }
      }
    }
  }
}

@media (max-width: 1000px) {
  .responsivemenu {
    display: block;
  }
}
</style>