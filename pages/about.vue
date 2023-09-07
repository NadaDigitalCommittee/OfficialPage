<template>
  <main class="main">
    <Phonenav />
    <section class="content">
      <Logo />
      <h2>組織情報</h2>
      <div class="wrapper">
        <h3>デジタル委員会とは？</h3>
        <p>
          デジタル委員会が設立されたのは生徒会内のデジタル業務をまとめて行うことで無駄を減らしてより省力化し、人を集め技術をしっかりと継承していくためです。
        </p>
        <p>
          デジタル委員会の情報システム課では駅伝大会のホームページの作成や文化祭のホームページの作成、生徒会ホームページなどの、ホームページの維持、更新作業、デジタル委員会の動画課では動画の撮影や編集、公開なども行います。
        </p>
        <p>
          各生徒会、クラブのアカウントの管理など、生徒皆さん方の学校生活の快適性に直結するような委員会であるのでしっかりと責任をもって各行事などを円滑に行えるように業務を行ってまいりたいと思います。
        </p>
      </div>
    </section>
    <Subnav />
  </main>
</template>
<script>
export default {}
</script>
<style lang="scss">
.content {
  width: 75%;
  position: relative;
  z-index: 10;
  h2 {
    font-size: 40px;
    margin-bottom: 30px;
  }
  .wrapper {
    margin-bottom: 50px;

    h3 {
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 10px;
      color: black;
    }

    p {
      color: #222222;
      font-size: 18px;
      line-height: 2;
      font-weight: 400;
      text-align: justify;
      margin-bottom: 10px;
    }
  }
}
</style>