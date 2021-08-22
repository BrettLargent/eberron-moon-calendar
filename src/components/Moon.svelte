<script>
  import { EberronData } from "../utils/data.js";
  export let moonData;
  $: duration = EberronData.MOONTH_DATA[moonData.moon].lunar_cycle * 7;
  $: daysIntoDuration = moonData.days / duration;
  $: phaseClass =
    daysIntoDuration === 0
      ? "full"
      : daysIntoDuration < 0.5
      ? "waning"
      : daysIntoDuration === 0.5
      ? "new"
      : "waxing";
  $: phase = `transform: rotateY(calc(360deg * (${daysIntoDuration} - ${
    phaseClass === "waxing" ? 0.5 : 0
  })));`;
</script>

<div class="moon-container">
  <div class="moon {phaseClass}">
    <div class="disc" style={phase} />
  </div>
</div>

<style>
  :root {
    --front-color: #fff;
    --back-color: #121212;
  }
  .moon-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .moon {
    width: 24px;
    height: 24px;
    border: 2px solid var(--bs-gray-600);
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    background-color: var(--back-color);
    transform: translateZ(0);
  }

  .waxing.moon {
    background-color: var(--front-color);
  }

  .moon::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--front-color);
    width: 50%;
    height: 100%;
    z-index: -1;
  }

  .waxing.moon::before {
    background-color: var(--back-color);
  }

  .new.moon::before {
    background-color: var(--back-color);
  }

  .disc {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
  }

  .disc::before,
  .disc::after {
    content: " ";
    display: block;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    backface-visibility: hidden;
    z-index: -1;
  }

  .disc::before {
    background-color: var(--front-color);
  }
  .waxing .disc::before {
    background-color: var(--back-color);
  }

  .disc::after {
    background-color: var(--back-color);
    transform: rotateY(180deg);
  }
  .waxing .disc::after {
    background-color: var(--front-color);
  }
</style>
