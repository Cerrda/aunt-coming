<template>
  <div class="tab-bar">
    <div class="tabs">
      <input id="tab-01" type="radio" name="tab" checked />
      <label for="tab-01" @click="$router.push({ name: 'Home' })">
        <svg>
          <use xlink:href="#icon-01" class="icon" />
          <use xlink:href="#icon-01" class="icon-border" />
          <use xlink:href="#icon-01-fill" class="icon-fill" />
        </svg>
      </label>
      <input id="tab-04" type="radio" name="tab" />
      <label for="tab-04" @click="$router.push({ name: 'My' })">
        <svg>
          <use xlink:href="#icon-04" class="icon" />
          <use xlink:href="#icon-04" class="icon-border" />
          <use xlink:href="#icon-04-fill" class="icon-fill" />
        </svg>
      </label>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <symbol id="icon-01" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
        <path d="M25.81,11.94,24.75,3a3.3,3.3,0,0,0-3.18-3H4.43A3.3,3.3,0,0,0,1.25,3L.19,11.94A7.8,7.8,0,0,0,0,13.68v9.25A3,3,0,0,0,2.85,26H11V19a2,2,0,0,1,4,0v7h8.15A3,3,0,0,0,26,22.93V13.68A7.8,7.8,0,0,0,25.81,11.94Z" />
      </symbol>
      <symbol id="icon-01-fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
        <path fill="var(--primary)" d="M25.81,11.94,24.75,3a3.3,3.3,0,0,0-3.18-3H21A19.48,19.48,0,0,1,1.5,19C1,19,.5,19,0,18.92v4A3,3,0,0,0,2.85,26H11V19a2,2,0,0,1,4,0v7h8.15A3,3,0,0,0,26,22.93V13.68A7.8,7.8,0,0,0,25.81,11.94Z" />
        <path fill="var(--secondary)" d="M13,19h0a2,2,0,0,1,2,2v5a0,0,0,0,1,0,0H11a0,0,0,0,1,0,0V21A2,2,0,0,1,13,19Z" />
        <path fill="var(--primary-light)" d="M1.5,19A19.48,19.48,0,0,0,21,0H4.43A3.3,3.3,0,0,0,1.25,3L.19,11.94A7.8,7.8,0,0,0,0,13.68v5.24C.5,19,1,19,1.5,19Z" />
      </symbol>
      <symbol id="icon-04" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
        <path d="M26,13A13,13,0,1,0,3.14,21.45a2.67,2.67,0,0,0-.72,1.83A2.7,2.7,0,0,0,4.86,26l0,0H20.56l0,0c.11,0,.22,0,.33,0a2.72,2.72,0,0,0,2.72-2.72,2.67,2.67,0,0,0-.72-1.83A12.93,12.93,0,0,0,26,13ZM11,13a2,2,0,0,1-4,0V12a2,2,0,0,1,4,0Zm8,0a2,2,0,0,1-4,0V12a2,2,0,0,1,4,0Z" />
      </symbol>
      <symbol id="icon-04-fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
        <rect fill="var(--secondary)" x="7" y="11" width="4" height="4" rx="2" />
        <rect fill="var(--secondary)" x="15" y="11" width="4" height="4" rx="2" />
        <path fill="var(--primary)" d="M26,13A13,13,0,0,0,20.74,2.57a19.32,19.32,0,0,1-2.93,7.6A2,2,0,0,1,19,12v1a2,2,0,0,1-3.93.49A19.45,19.45,0,0,1,1.5,19h0a12.87,12.87,0,0,0,1.66,2.45,2.67,2.67,0,0,0-.72,1.83A2.7,2.7,0,0,0,4.86,26l0,0H20.56l0,0c.11,0,.22,0,.33,0a2.72,2.72,0,0,0,2.72-2.72,2.67,2.67,0,0,0-.72-1.83A12.93,12.93,0,0,0,26,13Z" />
        <path fill="var(--primary-light)" d="M13,0A13,13,0,0,0,1.48,19h0a19.45,19.45,0,0,0,13.57-5.51A2,2,0,0,1,15,13V12a2,2,0,0,1,2.81-1.83,19.32,19.32,0,0,0,2.93-7.6A12.94,12.94,0,0,0,13,0ZM11,13a2,2,0,0,1-4,0V12a2,2,0,0,1,4,0Z" />
      </symbol>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
@keyframes stretch-animation {
  25% {
    margin-top: 10px;
    transform: scale3d(0.9, 1.2, 1);
  }
  75% {
    transform: scale3d(1.1, 0.95, 1);
  }
}

@keyframes drop-animation {
  70% {
    top: -7px;
    transform: scale(1, 2) rotate(45deg);
  }
  100% {
    top: 3px;
    transform: scale(1.5, 0.5) rotate(45deg);
  }
}

@keyframes clip-animation {
  from {
    clip-path: circle(0% at 50% -20%);
    opacity: 1;
  }
  to {
    clip-path: circle(110% at top);
    opacity: 1;
  }
}

@keyframes clip-animation-border {
  from {
    clip-path: circle(20% at 50% -20%);
    opacity: 1;
  }
  to {
    clip-path: circle(130% at top);
    opacity: 1;
  }
}
.tab-bar {
  --background: #fff;
  --grey: #c9cbd5;
  --primary: var(--van-primary-color);
  --primary-light: var(--van-primary-light-color);
  --secondary: var(--van-secondary-color);
  --width: calc(100% - 2 * var(--van-gap));
  --height: 75px;
  --border-radius: var(--height);

  height: calc(var(--height) + var(--van-gap));
  .tabs {
    position: fixed;
    inset: var(--van-gap);
    top: unset;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: var(--width);
    height: var(--height);
    padding: 0;
    padding: 0 15px;
    overflow: hidden;
    background: var(--background);
    border-radius: var(--border-radius);
    box-shadow: 0 10px 30px rgba(#414856, 0.1);
    label {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 26px;
      height: 26px;
      cursor: pointer;
      &::before {
        position: absolute;
        top: -30px;
        display: block;
        width: 4px;
        height: 4px;
        content: '';
        background: var(--primary-light);
        border-radius: 0% 100% 50% 50% / 0% 50% 50% 100%;
        transform: scale(1, 1) rotate(45deg);
        transform-origin: 50% 50%;
      }
      svg {
        position: relative;
        z-index: 2;
        width: 100%;
        height: 100%;
        .icon {
          fill: var(--grey);
        }
        .icon-border {
          opacity: 0;
          fill: #fff;
        }
        .icon-fill {
          opacity: 0;
        }
      }
    }
    input {
      display: none;
      &:checked {
        + label {
          &::before {
            animation: drop-animation 0.35s ease-in both;
          }
          svg {
            animation: stretch-animation 0.5s ease-out 0.3s;
            .icon-border {
              animation: clip-animation-border 0.5s ease 0.3s forwards;
            }
            .icon-fill {
              animation: clip-animation 0.5s ease 0.3s forwards;
            }
          }
        }
      }
    }
  }
}
</style>
