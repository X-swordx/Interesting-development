<script>
export default {
  name: 'TriggerComp',

}
</script>

<template>
  <div
    class="container"
    tg-name="size"
    tg-edge="inset"
    tg-from="14"
    tg-to="18"
    tg-bezier="ease"
  >
    <div class="container" tg-name="opacity" tg-from="0" tg-to="1">
      <div class="sticky">
        <span
          class="text"
          tg-name="color"
          tg-from="1"
          tg-to="10"
          tg-steps="9"
          tg-map="1: black; 2: red; 3: orange; 4: yellow; 5: green; 6: cyan; 7: blue; 8: purple; 9,10: grey"
        >
          Trigger
        </span>
      </div>
    </div>
  </div>
</template>

<style>
  :root {
    font-family: Helvetica, sans-serif;
    font-size: 20px;
    --blur: 100;
    --opacity: 0;
  }

  body {
    padding: 0;
    margin: 0;
  }

  .container {
    height: 500vh;
  }

  .sticky {
    font-size: 10rem;
    font-weight: bold;
    letter-spacing: -0.03em;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    position: sticky;
    top: 0;
    font-size: calc(var(--size) * 1em);
  }
  .text {
    color: var(--color);
  }

  span {
    opacity: var(--opacity);
  }
</style>
