<template>
  <footer class="engage">
    <div class="contain">
      <div class="information">
        <div class="block">
          <h2 class="title">The time to engage is now.</h2>
          <p class="text">Let’s make blockchain tangible together and gain a</p>
          <p class="text">competitive advantage on the the growing,</p>
          <p class="text">new machine economy market.</p>
        </div>
      </div>
    </div>
    <contacts />
  </footer>
</template>

<script>
import Contacts from "./components/Contacts";

export default {
  name: "Footer",
  components: {
    Contacts
  }
};
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  min-height: 100vh;
  height: 100%;
  background: #ddd;
  padding-bottom: 400px;
}

.information {
  display: flex;
  flex-direction: column;
  height: 500px;
}

.block {
  margin: auto 0;
}

@media (max-width: 700px) {
  footer {
    padding-bottom: 600px;
  }
}
</style>
