<script>
  import feather from "feather-icons";
  import { onMount } from "svelte";
  import { EberronData, YKDate } from "../utils/data.js";
  export let selectedDate = new YKDate(1, 0, 998);

  const calendar = [[], [], [], []];
  for (let row = 0; row < calendar.length; row++) {
    for (let date = 1; date <= 7; date++) {
      calendar[row].push(date + row * 7);
    }
  }
  let { dd, mm, yyyy } = selectedDate;
  let monthStr = EberronData.MONTHS[mm];

  $: {
    selectedDate.dd = dd;
  }
  $: {
    if (mm > 11) {
      mm -= 12;
    } else if (mm < 0) {
      mm += 12;
    }
    selectedDate.mm = mm;
    monthStr = EberronData.MONTHS[mm];
  }
  $: {
    selectedDate.yyyy = yyyy;
  }

  onMount(() => {
    feather.replace();
  });
</script>

<div class="yk-calendar">
  <h2>{selectedDate}</h2>
  <div class="yk-calendar-header">
    <div
      class="yk-calendar-header-group"
      on:wheel|preventDefault={(event) => (mm += event.deltaY > 0 ? -1 : 1)}
    >
      <div
        class="yk-calendar-month-icon month-icon-decrease"
        on:click={() => (mm -= 1)}
      >
        <i data-feather="chevron-left" />
      </div>
      <input
        class="yk-calendar-input month-input"
        type="text"
        readonly
        bind:value={monthStr}
      />
      <div
        class="yk-calendar-month-icon month-icon-increase"
        on:click={() => (mm += 1)}
      >
        <i data-feather="chevron-right" />
      </div>
    </div>
    <div
      class="yk-calendar-header-group"
      on:wheel|preventDefault={(event) => (yyyy += event.deltaY > 0 ? -1 : 1)}
    >
      <input class="yk-calendar-input" type="number" bind:value={yyyy} />
      <div
        class="yk-calendar-year-icon year-icon-increase"
        on:click={() => (yyyy += 1)}
      >
        <i data-feather="chevron-up" />
      </div>
      <div
        class="yk-calendar-year-icon year-icon-decrease"
        on:click={() => (yyyy -= 1)}
      >
        <i data-feather="chevron-down" />
      </div>
    </div>
  </div>
  <div class="yk-calendar-body">
    <div class="yk-calendar-row yk-calendar-days">
      {#each EberronData.DAYS as day}
        <div class="yk-calendar-col">{day}</div>
      {/each}
    </div>
    {#each { length: 4 } as _, row}
      <div class="yk-calendar-row">
        {#each { length: 7 } as _, col}
          <div
            data-date={calendar[row][col]}
            class="yk-calendar-col"
            class:selected={dd === calendar[row][col]}
            on:click={() => (dd = calendar[row][col])}
          >
            {calendar[row][col]}
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>

<style>
  .yk-calendar {
    width: 100%;
  }
  .yk-calendar-header {
    width: 100%;
    display: grid;
    column-gap: 0.5rem;
    grid-template-columns: calc(60% - 0.25rem) calc(40% - 0.25rem);
    margin-bottom: 0.5rem;
  }
  .yk-calendar-header-group {
    position: relative;
  }
  .yk-calendar-month-icon {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);
    cursor: pointer;
    user-select: none;
  }
  .month-icon-decrease {
    left: 0;
  }
  .month-icon-increase {
    right: 0;
  }
  .yk-calendar-year-icon {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 50%;
    right: 0;
    cursor: pointer;
    user-select: none;
  }
  .year-icon-increase {
    transform: translateY(25%);
  }
  .year-icon-decrease {
    transform: translateY(75%);
  }
  .month-input {
    cursor: default;
  }
  .yk-calendar-input {
    width: 100%;
    border-radius: 0.25rem;
    background-color: lightgrey;
    border: 0;
    font-size: 1rem;
    text-align: center;
  }
  .yk-calendar-body {
    border: 1px solid black;
  }
  .yk-calendar-row.yk-calendar-days {
    background-color: lightgrey;
    font-weight: bold;
    border-bottom-style: double;
    border-bottom-width: 5px;
  }
  .yk-calendar-row {
    display: grid;
    grid-template-columns: repeat(7, calc(100% / 7));
    border: solid black;
    border-width: 0 0 1px 0;
    /* width: calc(100% + 1px); */
  }
  .yk-calendar-row:last-of-type {
    border-bottom-width: 0;
  }
  .yk-calendar-col {
    border: solid black;
    border-width: 0 1px 0 0;
    padding: 0.25rem;
  }
  .yk-calendar-col:last-of-type {
    border-right-width: 0;
  }
  .yk-calendar-row .yk-calendar-col:hover {
    background-color: lightblue;
    cursor: pointer;
  }
  .selected {
    background-color: lightcyan;
  }
</style>
