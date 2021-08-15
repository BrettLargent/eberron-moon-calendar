<script>
  import feather from "feather-icons";
  import { onMount } from "svelte";
  import { EberronData, YKDate } from "../utils/data.js";
  import Moon from "./Moon.svelte";
  export let selectedDate = new YKDate(1, 0, 998);
  export let type = "Moon";

  const yLabel = { Month: "MONTHS", Moon: "LUNAR_ORDER" };
  let { mm, yyyy } = selectedDate;
  let headerStr = "";
  let monthStr = EberronData.MONTHS[mm];

  $: {
    if (type === "Moon") {
      headerStr = `Moon phases for the month of ${monthStr}`;
    } else {
      headerStr = `Phases of ${monthStr} by Month`;
    }
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

  function getMoonData(date, moon) {
    const convergenceDate = EberronData.FULL_MOON_CONVERGENCE;
    const yearDiff = (date.yyyy - convergenceDate.yyyy) * 12 * 28;
    const monthDiff = (date.mm - convergenceDate.mm) * 28;
    const dayDiff = date.dd - convergenceDate.dd + monthDiff + yearDiff;
    return { days: dayDiff % (EberronData.MOONS[moon].lunar_cycle * 7), moon };
  }
  function handleKeyDown(event) {
    if ({ ArrowUp: 1, ArrowRight: 1 }[event.key]) {
      event.preventDefault();
      mm += 1;
      return;
    }
    if ({ ArrowDown: 1, ArrowLeft: 1 }[event.key]) {
      event.preventDefault();
      mm -= 1;
      return;
    }
  }

  onMount(() => {
    feather.replace();
  });
</script>

<div class="yk-moon-table">
  <h1>{headerStr}</h1>
  <div class="yk-moon-table-header row mb-2">
    <div class="yk-moon-table-header-group col-12 col-md-5 col-xl-3">
      <div class="yk-type-switch">
        <div class="yk-type-switch-btn">
          <input
            id="yk-type-switch-moon"
            type="radio"
            name="yk-type-switch"
            value="Moon"
            bind:group={type}
          />
          <label for="yk-type-switch-moon">Moon View</label>
        </div>
        <div class="yk-type-switch-btn">
          <input
            id="yk-type-switch-month"
            type="radio"
            name="yk-type-switch"
            value="Month"
            bind:group={type}
          />
          <label for="yk-type-switch-month">Month View</label>
        </div>
      </div>
    </div>
    <div
      class="yk-moon-table-header-group col-6 col-md-3 offset-md-1 offset-xl-3"
      on:wheel|preventDefault={(event) => (mm += event.deltaY > 0 ? -1 : 1)}
    >
      <div
        class="yk-moon-table-input-icon yk-moon-table-input-icon-left"
        on:click={() => (mm -= 1)}
      >
        <i data-feather="chevron-left" />
      </div>
      <input
        class="yk-moon-table-input month-input"
        type="text"
        readonly
        bind:value={monthStr}
        on:keydown={handleKeyDown}
      />
      <div
        class="yk-moon-table-input-icon yk-moon-table-input-icon-right"
        on:click={() => (mm += 1)}
      >
        <i data-feather="chevron-right" />
      </div>
    </div>
    <div
      class="yk-moon-table-header-group col-6 col-md-3"
      on:wheel|preventDefault={(event) => (yyyy += event.deltaY > 0 ? -1 : 1)}
    >
      <div
        class="yk-moon-table-input-icon yk-moon-table-input-icon-left"
        on:click={() => (yyyy += 1)}
      >
        <i data-feather="chevron-left" />
      </div>
      <input class="yk-moon-table-input" type="number" bind:value={yyyy} />
      <div
        class="yk-moon-table-input-icon yk-moon-table-input-icon-right"
        on:click={() => (yyyy -= 1)}
      >
        <i data-feather="chevron-right" />
      </div>
    </div>
  </div>
  <div class="yk-moon-table-body">
    <div class="yk-moon-table-row yk-moon-table-days">
      <div class="yk-moon-table-col yk-y-axis-label">{type}</div>
      {#each { length: 28 } as _, day}
        <div class="yk-moon-table-col">
          <div class="col-center-align">
            {day + 1}
          </div>
        </div>
      {/each}
    </div>
    {#each { length: 12 } as _, row}
      <div class="yk-moon-table-row">
        <div class="yk-moon-table-col yk-y-axis-label">
          {EberronData[yLabel[type]][row]}
        </div>
        {#each { length: 28 } as _, day}
          <div class="yk-moon-table-col moon-container">
            <Moon
              moonData={getMoonData(
                new YKDate(day + 1, selectedDate.mm, selectedDate.yyyy),
                EberronData[yLabel[type]][row]
              )}
            />
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>

<style>
  .yk-moon-table-header-group {
    position: relative;
  }
  .yk-type-switch {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
  }
  .yk-type-switch .yk-type-switch-btn {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .yk-type-switch input {
    position: absolute;
    width: 0;
    height: 0;
  }
  .yk-type-switch label {
    width: 100%;
    height: 100%;
    line-height: 2.875rem;
    border: 1px solid var(--dark-text-medium-emphasis);
    font-size: 1.25rem;
    font-weight: 500;
  }
  .yk-type-switch input#yk-type-switch-moon,
  .yk-type-switch input#yk-type-switch-moon + label {
    border-radius: 0.25rem 0 0 0.25rem;
    border-right-width: 0;
  }
  .yk-type-switch input#yk-type-switch-month,
  .yk-type-switch input#yk-type-switch-month + label {
    border-radius: 0 0.25rem 0.25rem 0;
    border-left-width: 0;
  }
  .yk-type-switch input:checked + label {
    background-color: var(--dark-bg);
  }
  .yk-type-switch input#yk-type-switch-moon:checked + label {
    border-right-width: 1px;
  }
  .yk-type-switch input#yk-type-switch-month:checked + label {
    border-left-width: 1px;
  }
  .yk-type-switch input:focus + label {
    box-shadow: 0 0 0 1px var(--dark-text-medium-emphasis);
  }
  .yk-moon-table-input-icon {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);
    cursor: pointer;
    user-select: none;
  }
  .yk-moon-table-input-icon-left {
    left: 0.75rem;
  }
  .yk-moon-table-input-icon-right {
    right: 0.75rem;
  }
  .month-input {
    cursor: default;
  }
  .yk-moon-table-input {
    width: 100%;
    border-radius: 0.25rem;
    background-color: var(--dark-bg);
    border: 1px solid var(--dark-text-medium-emphasis);
    font-size: 1.25rem;
    font-weight: 500;
    text-align: center;
  }
  .yk-moon-table-body {
    width: 100%;
    overflow-x: auto;
    border: 1px solid var(--dark-text-medium-emphasis);
  }
  .yk-moon-table-row.yk-moon-table-days {
    background-color: var(--dark-bg);
    font-weight: bold;
    border-bottom-style: double;
    border-bottom-width: 5px;
  }
  .yk-moon-table-row.yk-moon-table-days .yk-moon-table-col:not(:first-of-type) {
    position: relative;
  }
  .col-center-align {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .yk-moon-table-row {
    background-color: var(--dark-body);
    display: grid;
    width: 100%;
    grid-template-columns: 5.625rem repeat(28, calc((100% - 5.625rem) / 28));
    border: solid var(--dark-text-medium-emphasis);
    border-width: 0 0 1px 0;
  }
  .yk-moon-table-row:last-of-type {
    border-bottom-width: 0;
  }
  .yk-moon-table-col {
    border: solid var(--dark-text-medium-emphasis);
    border-width: 0 1px 0 0;
    padding: 0.5rem;
    min-width: 22px;
  }
  .yk-moon-table-col:last-of-type {
    border-right-width: 0;
  }
  .yk-moon-table-col.moon-container {
    position: relative;
  }
  .yk-y-axis-label {
    color: var(--dark-text-high-emphasis);
    position: sticky;
    left: 0;
    background: inherit;
    z-index: 1;
  }
  @media (max-width: 991.98px) {
    .yk-moon-table-row {
      width: calc(5.625rem + 28 * 40px);
      grid-template-columns: 5.625rem repeat(28, calc(40px));
    }
  }
  @media (max-width: 767.98px) {
    .yk-moon-table-header-group:first-of-type {
      margin-bottom: 0.5rem;
    }
  }
</style>
