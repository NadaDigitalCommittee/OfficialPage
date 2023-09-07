<template>
  <main class="main">
    <Mainnav />
    <Phonenav />
    <section class="contents">
      <h2>活動内容</h2>
      <div class="wrapper">
        <p>
          デジタル委員会は、リモートワークまたはICT教室を使用して日々活動を行っています。
        </p>
      </div>
      <div class="wrapper">
        <h3 class="activity">主な活動（学校行事）</h3>
        <section class="row">
          <div class="name">文化祭</div>
          <p>
            文化祭は灘校を代表する行事であり、デジタル委員会でも動画コンテンツの作成管理や公式HPの作成など、多くの業務を行っています。
          </p>
          <div class="icon">
            <Movieicon />
            <Systemicon />
          </div>
        </section>
        <section class="row">
          <div class="name">体育祭</div>
          <p>
            体育祭では2021年度よりHPも導入しており、体育委員会と連携を取りつつデジタル面での運営を行っています。
          </p>
          <div class="icon">
            <Movieicon />
            <Systemicon />
          </div>
        </section>
        <section class="row">
          <div class="name">学芸祭</div>
          <p>学芸祭では動画の撮影、公開を動画課が行っています。</p>
          <div class="icon">
            <Movieicon />
          </div>
        </section>
        <section class="row">
          <div class="name">駅伝大会</div>
          <p>駅伝大会では体育委員と連携してPRのためのHP制作を行っています。</p>
          <div class="icon">
            <Systemicon />
          </div>
        </section>
      </div>
    </section>
    <Subnav />
  </main>
</template>
<script>
export default {}
</script>
<style lang="scss">
$boxshadow: 0px 0px 2px 0.5px #ccc;
.wrapper {
  margin-bottom: 50px;

  h3 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
    color: black;
  }
  .activity{
    margin-bottom: 30px;
  }

  p {
    color: #222222;
    font-size: 18px;
    line-height: 2;
    font-weight: 400;
    text-align: justify;
    margin-bottom: 10px;
  }
  .row {
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: $boxshadow;
    margin-bottom: 30px;
    p {
      line-height: 1.5;
      margin-bottom: 20px;
    }
    .name {
      font-size: 2em;
      font-weight: bold;
      padding-right: 50px;
      margin-bottom: 15px;
    }
    .icon {
      display: flex;
      justify-content: right;
    }
  }
}
</style>