<script>
  import MoonTable from "./components/MoonTable.svelte";
  import { YKDate } from "./utils/data.js";
  let ykDate = new YKDate(1, 0, 998);
</script>

<main>
  <!-- 
    TODO
      - Improve moon phase logic / styling
      - Improve year selection
        - spinbutton
  -->
  <div class="container">
    <div class="row">
      <div class="col-12">
        <MoonTable type="Month" />
      </div>
    </div>
  </div>
</main>

<style>
  main {
    text-align: center;
  }
</style>
