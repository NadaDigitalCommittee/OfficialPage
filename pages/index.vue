<template>
  <main class="main">
    <Mainnav />
    <Phonenav />
    <section class="contents">
      <div>
        <div class="banner">
          <p>デジタル委員会 新規委員募集中</p>
          <div class="linkbox">
            <nuxt-link to="/recruit" class="spalinkbox">応募はこちら</nuxt-link>
          </div>
        </div>
        <div class="information">
          <h3>一般</h3>
          <h2>デジタル委員会が発足しました</h2>
          <p>2022年度01月20日、デジタル委員会が発足しました。</p>
        </div>
      </div>
    </section>
    <Subnav />
  </main>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>

<style lang="scss">
$bluecolor: #0f41af;
$graycolor: #666666;
$boxshadow: 0px 0px 2px 0.01px #ccc;
.contents {
  width: 50%;
  position: relative;
  z-index: 10;

  .banner {
    border-radius: 10px;
    box-shadow: $boxshadow;
    padding: 10px;

    p {
      padding: 10px 25px;
      font-weight: 700;
      line-height: 1.5;
      text-decoration: none;
      font-size: 25px;
    }

    .linkbox {
      width: 94%;
      margin: 10px 3%;

      .spalinkbox {
        padding: 10px 25px;
        color: #fff;
        background-color: $bluecolor;
        border-radius: 10px;
        display: block;
        font-weight: 700;
        line-height: 1.5;
        text-decoration: none;
        font-size: 20px;
        position: relative;
        z-index: 10;

        &::after {
          content: '\e5e1';
          font-family: 'Material Icons';
          position: absolute;
          right: 20px;
        }
      }
    }
  }

  .information {
    margin: 20px auto;
    padding: 20px 25px;
    border-radius: 10px;
    box-shadow: $boxshadow;
    background-color: #fcfcfc;

    h3 {
      font-size: 15px;
      font-weight: 300;
      color: $graycolor;
    }
    h2 {
      font-size: 23px;
      line-height: 1.5;
      margin-bottom: 10px;
    }

    p {
      font-size: 15px;
      font-weight: 400;
      line-height: 2;
      color: #222222;
    }
  }
}
</style>
