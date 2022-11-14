<template>
  <div>
    <h1 class="text-6xl">Your Cursor Hover The Box</h1>
  </div>
  <div class="board flex gap-1 m-5">
    <div class="flex-1 invisible"></div>
    <div class="board_item flex-1 border border-red-200">
      <img src="../assets/allkpop_1645217742_untitled-1.jpg" alt="" />
    </div>
    <div class="board_item flex-1 border border-red-200">
      <img src="../assets/f088b5ff791fb534c5f167817985d654.jpg" alt="" />
    </div>
    <div class="board_item flex-1 border border-red-200">
      <img src="../assets/female-kpop-idols-spring-fashion_iu.jpg" alt="" />
    </div>
    <div class="board_item flex-1 border border-red-200">
      <img src="../assets/how-to-dress-up-like-a-kpop-idol.jpg" alt="" />
    </div>
    <div class="board_item flex-1 border border-red-200">
      <img src="../assets/images.jpeg" alt="" />
    </div>
    <div class="board_item flex-1 border border-red-200">
      <img
        src="../assets/male-kpop-idol-best-fancam_wei-kim-yohan.jpeg"
        alt=""
      />
    </div>
    <div class="flex-1 invisible"></div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.board {
  width: 100vw;
  height: 100vh;
}
.board > div {
  cursor: pointer;
  height: 80%;
}

img {
  display: inline-block;
  width: 0px;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
}

div:hover > img {
  width: 100%;
  height: 100%;
  transition-duration: 1s;
}
</style>
