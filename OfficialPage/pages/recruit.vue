<template>
  <main class="main">
    <Phonenav />
    <section class="content">
      <Logo />
      <h2>新規委員応募</h2>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeGHqRdQttPHsXAD_Ph4q-_xm112vpDxt7kl5tkHquFruc4yw/viewform?embedded=true"
        width="100%"
        height="1800"
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
}
</style>