<template>
  <main id="app" class="main">
    <Mainnav />
    <Phonenav />
    <section class="contents">
      <div class="banner">
        <p>HP業務委託受付中</p>
        <div class="linkbox">
          <nuxt-link v-scroll-to="'#form'" to class="spalinkbox"
            >お申し込みはこちら</nuxt-link
          >
        </div>
      </div>
      <h2>業務委託のご案内</h2>
      <h4 style="font-size: 20px; margin-bottom: 20px">
        ※現在すぐにご依頼に対応できるとは限りません
      </h4>
      <p>
        デジタル委員会では、部活動や同好会、サークルなどのHPを作成する業務の委託を承っております。
      </p>
      <div class="comment">
        <p>
          <span
            >「HPで活動報告やPRをしたいがどうすればいいのかわからない......」</span
          >
        </p>
        <p>
          <span
            >「現在HP作成サービスを使っているが、自由度が低くやりたいことができていない......」</span
          >
        </p>
      </div>
      <p>
        のようなご不満をお持ちの方、ぜひデジタル委員会におまかせください。実現したいHPに最大限近づけるよう、柔軟に対応いたします。
      </p>
      <iframe
        id="form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSehcs7K2QT8ckJB2CiegrEycrbD0DxfH4PSB8fqe7r2Izilgw/viewform?embedded=true"
        width="100%"
        height="1300"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        >読み込んでいます…</iframe
      >
    </section>
    <Subnav />
  </main>
</template>
<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  duration: 1000,
  easing: [0, 0, 0.1, 1],
  offset: -100,
})
export default {}
</script>
<style lang="scss">
p {
  font-size: 18px;
}
h2 {
  font-size: 40px;
  margin-bottom: 30px;
}
.comment {
  margin: 30px 0;
  p {
    font-size: 22px;
    span {
      background: linear-gradient(transparent 70%, #ff7f7f 70%);
      font-weight: bold;
    }
    margin-bottom: 20px;
  }
}
.banner {
  margin-bottom: 30px;
}
#form {
  margin-top: 100px;
}
</style>