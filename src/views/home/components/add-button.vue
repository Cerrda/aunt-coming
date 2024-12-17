<script lang="ts" setup>
const { words = '' } = defineProps<{
  words: string
}>()
</script>

<template>
  <div class="wrapper">
    <input type="checkbox" />
    <div class="btn"></div>
    <div class="tooltip">
      <svg></svg><span>{{ words }}</span>
    </div>
    <svg></svg>
  </div>
</template>

<style lang="scss" scoped>
@keyframes pang-animation {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  40% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.1);
  }
}

@keyframes pang-animation {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  40% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.1);
  }
}

@keyframes plus-animation {
  0% {
    transform: rotate(0) scale(1);
  }
  20% {
    transform: rotate(60deg) scale(0.93);
  }
  55% {
    transform: rotate(35deg) scale(0.97);
  }
  80% {
    transform: rotate(48deg) scale(0.94);
  }
  100% {
    transform: rotate(45deg) scale(0.95);
  }
}

@keyframes plus-animation {
  0% {
    transform: rotate(0) scale(1);
  }
  20% {
    transform: rotate(60deg) scale(0.93);
  }
  55% {
    transform: rotate(35deg) scale(0.97);
  }
  80% {
    transform: rotate(48deg) scale(0.94);
  }
  100% {
    transform: rotate(45deg) scale(0.95);
  }
}

@keyframes plus-animation-reverse {
  0% {
    transform: rotate(45deg) scale(0.95);
  }
  20% {
    transform: rotate(-15deg);
  }
  55% {
    transform: rotate(10deg);
  }
  80% {
    transform: rotate(-3deg);
  }
  100% {
    transform: rotate(0) scale(1);
  }
}

@keyframes plus-animation-reverse {
  0% {
    transform: rotate(45deg) scale(0.95);
  }
  20% {
    transform: rotate(-15deg);
  }
  55% {
    transform: rotate(10deg);
  }
  80% {
    transform: rotate(-3deg);
  }
  100% {
    transform: rotate(0) scale(1);
  }
}

@keyframes stretch-animation {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(1.1, 0.9);
  }
  30% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.05, 0.95);
  }
  100% {
    transform: scale(1, 1);
  }
}

@keyframes stretch-animation {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(1.1, 0.9);
  }
  30% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.05, 0.95);
  }
  100% {
    transform: scale(1, 1);
  }
}
.wrapper {
  --background: var(--van-primary-color);
  --width: 70px;
  --height: 70px;
  --border-radius: var(--height);

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--width);
  height: var(--height);
  border-radius: var(--border-radius);
}
.wrapper .btn {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--width);
  height: var(--height);
  background: var(--background);
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px rgb(65 72 86 / 5%);
  animation: plus-animation-reverse 0.5s ease-out forwards;
}
.wrapper .btn::before,
.wrapper .btn::after {
  position: absolute;
  display: block;
  content: '';
  background: #fff;
  border-radius: 4px;
}
.wrapper .btn::before {
  width: 4px;
  height: 28px;
}
.wrapper .btn::after {
  width: 28px;
  height: 4px;
}
.wrapper .tooltip {
  position: absolute;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: fit-content;
  height: 75px;
  padding: 20px 35px;
  color: var(--van-primary-color);
  background: var(--van-secondary-color);
  border-radius: 70px;
  box-shadow: 0 10px 30px rgb(65 72 86 / 5%);
  opacity: 0;
  transition:
    opacity 0.15s ease-in,
    top 0.15s ease-in,
    width 0.15s ease-in;
}
.wrapper .tooltip > span {
  position: relative;
  width: 100%;
  white-space: nowrap;
  opacity: 0;
}
.wrapper .tooltip > svg {
  display: block;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 26px;
  cursor: pointer;
}
.wrapper .tooltip > svg .icon {
  opacity: 0.4;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
  transition: opacity 0.3s ease;
}
.wrapper .tooltip > svg:hover .icon {
  opacity: 1;
}
.wrapper .tooltip::after {
  position: absolute;
  bottom: -8px;
  left: 50%;
  z-index: 0;
  width: 20px;
  height: 20px;
  margin-left: -10px;
  content: '';
  background: var(--van-secondary-color);
  border-radius: 3px;
  transform: rotate(45deg);
}
.wrapper > svg {
  position: absolute;
  z-index: 1;
  width: 300px;
  height: 300px;
  transform: scale(0);
}
.wrapper > svg .shape {
  fill: none;
  stroke: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3px;
  transform-origin: 50% 20%;
}
.wrapper input {
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: var(--border-radius);
  opacity: 0;
}
.wrapper input:checked ~ svg {
  animation: pang-animation 1.2s ease-out forwards;
}
.wrapper input:checked ~ svg .shape:nth-of-type(1) {
  transform: translate(25px, 30%) rotate(40deg);
}
.wrapper input:checked ~ svg .shape:nth-of-type(2) {
  transform: translate(-4px, 30%) rotate(80deg);
}
.wrapper input:checked ~ svg .shape:nth-of-type(3) {
  transform: translate(12px, 30%) rotate(120deg);
}
.wrapper input:checked ~ svg .shape:nth-of-type(4) {
  transform: translate(8px, 30%) rotate(160deg);
}
.wrapper input:checked ~ svg .shape:nth-of-type(5) {
  transform: translate(21px, 30%) rotate(200deg);
}
.wrapper input:checked ~ svg .shape:nth-of-type(6) {
  transform: translate(0, 30%) rotate(240deg);
}
.wrapper input:checked ~ svg .shape:nth-of-type(7) {
  transform: translate(17px, 30%) rotate(280deg);
}
.wrapper input:checked ~ svg .shape:nth-of-type(8) {
  transform: translate(-3px, 30%) rotate(320deg);
}
.wrapper input:checked ~ svg .shape:nth-of-type(9) {
  transform: translate(25px, 30%) rotate(360deg);
}
.wrapper input:checked ~ .btn {
  animation: plus-animation 0.5s ease-out forwards;
}
.wrapper input:checked ~ .tooltip {
  top: -90px;
  width: fit-content;
  padding: 30px;
  opacity: 1;
  animation: stretch-animation 1s ease-out forwards 0.15s;
}
.wrapper input:checked ~ .tooltip > span {
  opacity: 1;
}
.socials {
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: block;
}
.socials > a {
  display: block;
  width: 30px;
  opacity: 0.2;
  transition: transform 0.3s cubic-bezier(0.38, -0.12, 0.24, 1.91);
  transform: scale(var(--scale, 0.8));
}
.socials > a:hover {
  --scale: 1;
} /* From Uiverse.io by javierBarroso */
</style>
