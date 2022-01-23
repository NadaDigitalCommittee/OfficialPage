<template>
  <main class="main">
    <Phonenav />
    <section class="content">
      <Logo />
      <h2>組織情報</h2>
      <div class="wrapper">
        <h3>デジタル委員会とは？</h3>
        <p></p>
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