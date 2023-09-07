<template>
  <main class="main">
    <Phonenav />
    <section class="content">
      <Logo />
      <h2>お知らせ</h2>
      <div class="information">
        <h3>一般</h3>
        <h2>デジタル委員会が発足しました</h2>
        <p>2022年度01月20日、デジタル委員会が発足しました。</p>
      </div>
    </section>
    <Subnav />
  </main>
</template>
<script>
export default {}
</script>
<style lang="scss">
$boxshadow: 0px 0px 2px 0.01px #ccc;
$graycolor: #666666;
.content {
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