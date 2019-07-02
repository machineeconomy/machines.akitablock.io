<template>
  <section class="Services">
    <div class="contain contain-fix">
      <h3 class="Services__title title">The modular service design</h3>
      <div class="machines__information text">
        <div
          class="machines__text machines__text-top"
        >
        <span class="purple">
        Machines' modular services can be integrated into existing systems and hardware or by adding external pc units that can be as small and cheap as a Raspberry Pi.</div>
        </span>
        <div
          class="machines__text machines__text-left"
        >
         <span class="aquamarine">
         Services and products made by your machine can be offered and sold directly M2M to other machines.</div>
         </span>
       <div class="machines__middle">
          <div class="machines__block-mid"></div>
          <div class="machines__blocks-top machines__blocks"><span class="purple">Integrate<br>your machine</span></div>
          <div class="machines__blocks-lt machines__blocks">
            <span class="aquamarine">
              Sell Service
              <br>+100i
            </span>
          </div>
          <div class="machines__blocks-lb machines__blocks">
            <span class="aquamarine">
              New Service
              <br>+500i
            </span>
          </div>
          <div class="machines__blocks-rt machines__blocks">
            <span class="pink">
              Buy Service
              <br>-50i
            </span>
          </div>
          <div class="machines__blocks-rb machines__blocks">
            <span class="pink">
              Alt. Service
              <br>-200i
            </span>
          </div>
          <div class="machines__blocks-bot machines__blocks">
            <span>Connect to<br>the Tangle</span>
          </div>
        </div>
        <div
          class="machines__text machines__text-right"
        >
         <span class="pink">
         Every machine needs at least power to work. In addition it can purchase information like building plans, GPS coordinates or sensor data.</div>
         </span>
        <div
          class="machines__text machines__text-bottom"
        >
          Machines is your gateway in and out of the DLT, it can generate private keys, securely store them and save valuable data on an immutable ledger</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.Services {
  margin-bottom: 500px;
}

.Services__title {
  text-align: center;
}

.machines__information {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 70px 1fr 70px;
  grid-gap: 25px;
}

.machines__middle {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 2fr 1fr 2fr 2fr 1fr 2fr;
  grid-gap: 15px 10px;
}

.machines__text {
  padding: 0px 20px;
}

.machines__text-top {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

.machines__text-left {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  margin-top: 115px;
}

.machines__text-right {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  margin-top: 115px;
}

.machines__text-bottom {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
}

.machines__block-mid {
  background: url("./../../../../public/machines_logo.png") no-repeat;
  background-size: contain;
  height: 200px;
  width: 200px;
  margin: auto;
  grid-column: 2 / 3;
  grid-row: 2 / 6;
}

.machines__blocks {
  background-color: #f2f2f2;
  height: 60px;
  text-align: center;
  max-width: 200px;
  width: 100%;
  margin: auto;
  font-weight: bold;
  line-height: 1;
  border-radius: 5px;
  display: flex;
}

.machines__blocks span {
    margin: auto;
}

.machines__blocks-top {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  position: relative;
  top: 10px;
}

.machines__blocks-lt {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
}

.machines__blocks-lb {
  grid-column: 1 / 2;
  grid-row: 4 / 5;
}

.machines__blocks-rt {
  grid-column: 3 / 4;
  grid-row: 3 / 4;
}

.machines__blocks-rb {
  grid-column: 3 / 4;
  grid-row: 4 / 5;
}

.machines__blocks-bot {
  grid-column: 2 / 3;
  grid-row: 6 / 7;
  position: relative;
  top: -20px;
}

.aquamarine {
  color: #0bc5fe;
}

.pink {
  color: #ec60aa;
}


.purple {
  color: #7030A0;
}

@media (max-width: 1000px) {
  .contain-fix {
    padding: 0px;
  }

  .machines__text-bottom {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
  }

  .machines__text-right {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    margin-top: 0;
  }

  .machines__text-left {
    grid-column: 2 / 3;
    grid-row: 5 / 6;
    margin-top: 0;
  }

  .machines__information {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .machines__blocks {
      height: 50px;
  }
}

@media (max-width: 1100px) {
  .Services {
    margin-bottom: 200px;
  }
}

@media (max-width: 700px) {
  .machines__block-mid {
    height: 150px;
    width: 150px;
  }
}

@media (max-width: 500px) {
  .machines__block-mid {
    height: 125px;
    width: 125px;
  }
}

@media (max-width: 400px) {
  .machines__information {
    grid-template-rows: 120px 1fr 100px 100px 100px;
    grid-gap: 20px 5px;
  }
}
</style>
