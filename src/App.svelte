<script>
  import MoonTable from "./components/MoonTable.svelte";
  import { YKDate } from "./utils/data.js";
  let ykDate = new YKDate(1, 0, 948);
</script>

<main>
  <!-- 
    TODO
      - Improve styling
      - Handle breakpoints
  -->
  <div class="container">
    <div class="row">
      <div class="col-12">
        <MoonTable selectedDate={ykDate} type="Moon" />
      </div>
    </div>
  </div>
</main>

<style>
  main {
    text-align: center;
  }
</style>
