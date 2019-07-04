<template>
  <div class="information">
    <div class="information__blocks">
    <div class="information__block">
      <h1 class="title information__title">
        Disrupt industries.<br/>
        Beyong blockchain.<br/>
        Gain advantage.
      </h1>
    </div>
    <div class="information__block">
      <p class="text information__text">Stop talking about blockchain</p>
      <p class="text information__text">Build the future with us NOW</p>
    </div>
    </div>
    <iframe src="https://player.vimeo.com/video/341052776?color=ffffff&title=0&byline=0&portrait=0" class="video" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {};
</script>

<style>
.information {
  margin-top: 200px;
  display: flex;
  justify-content: space-between;
}

.information__blocks {
  max-width: 700px;
}

.information__block {
  margin-bottom: 20px;
}

.information__text,
.information__title {
  color: #fff;  
}

.video {
  margin-top: -50px;
  width: 768px; 
  height: 432px;
  border: 2px solid #000;
}

@media (max-width: 1400px) {
  .video {
    width: 640px;
    height: 360px;
  }
}

@media (max-width: 1150px) {
  .video {
    width: 500px;
    height: 280px;
    margin-top: -20px;
  }

  .information {
    margin-top: 150px;
  }
}

@media (max-width: 1000px) {
  .information {
    flex-direction: column;
  }
  .video {
    margin-top: 30px;
  }
}

@media (max-width: 800px) {
  .information {
    margin-top: 100px;
  }
}

@media (max-width: 600px) {
  .video {
    width: 300px;
    height: 170px;
  }
}


</style>
