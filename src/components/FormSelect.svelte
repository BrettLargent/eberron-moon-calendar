<script>
  import feather from "feather-icons";
  import { onMount } from "svelte";

  export let options = ["No values provided"];
  export let value = 0;

  let isOpen = false;
  let selectedLabel = "";

  $: selectedLabel = options[value];
  $: {
    value = Number.parseInt(value, 10);
    if (value > 11) {
      value -= 12;
    } else if (value < 0) {
      value += 12;
    }
  }

  function handleKeyDown(event) {
    if ({ Enter: 1, Escape: 1 }[event.key]) {
      isOpen = false;
      return;
    }

    if ({ ArrowUp: 1, ArrowDown: 1 }[event.key]) {
      isOpen = true;
    }

    if ({ ArrowDown: 1, ArrowRight: 1 }[event.key]) {
      event.preventDefault();
      value += 1;
      return;
    }
    if ({ ArrowUp: 1, ArrowLeft: 1 }[event.key]) {
      event.preventDefault();
      value -= 1;
      return;
    }
  }

  onMount(() => {
    feather.replace();
  });
</script>

<div
  class="yk-form-select"
  on:wheel|preventDefault={(event) => (value += event.deltaY > 0 ? 1 : -1)}
>
  <div class="yk-form-select-container">
    <input
      class="yk-form-select-input"
      type="text"
      readonly
      value={selectedLabel}
      on:click={(event) => event.preventDefault()}
      on:keydown={handleKeyDown}
      on:focus={() => (isOpen = true)}
      on:blur={() => (isOpen = false)}
    />
    <div
      class="yk-form-select-input-icon yk-form-select-input-icon-left"
      on:click={() => {
        value -= 1;
      }}
    >
      <i data-feather="chevron-left" />
    </div>
    <div
      class="yk-form-select-input-icon yk-form-select-input-icon-right"
      on:click={() => {
        value += 1;
      }}
    >
      <i data-feather="chevron-right" />
    </div>
  </div>
  {#if isOpen}
    <ul class="yk-form-select-dropdown" on:mousedown|preventDefault>
      {#each options as option, idx}
        <li
          class="yk-form-select-dropdown-item"
          class:active={value === idx}
          on:click={() => {
            value = idx;
            isOpen = false;
          }}
        >
          {option}
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  :root {
    --level-1: #1d1d1d;
    --level-3: #242424;
    --level-6: #2c2c2c;
    --level-12: #313131;
    --level-24: #383838;
  }
  .yk-form-select,
  .yk-form-select-container {
    position: relative;
  }
  .yk-form-select-input {
    cursor: pointer;
    width: 100%;
    border-radius: 0.25rem;
    background-color: var(--dark-bg);
    border: 1px solid var(--dark-text-medium-emphasis);
    font-size: 1.25rem;
    font-weight: 500;
    text-align: center;
  }
  .yk-form-select-input-icon {
    display: flex;
    position: absolute;
    cursor: pointer;
    user-select: none;
    bottom: 50%;
    transform: translateY(50%);
  }
  .yk-form-select-input-icon-left {
    left: 0.25rem;
  }
  .yk-form-select-input-icon-right {
    right: 0.25rem;
  }
  .yk-form-select-dropdown {
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    z-index: 2;
    width: 100%;
    top: 2.875rem;
    background-color: var(--level-1);
    border: 1.5px solid var(--dark-text-high-emphasis);
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .yk-form-select-dropdown-item {
    padding: 0.25rem 1rem;
    cursor: pointer;
  }
  .yk-form-select-dropdown-item.active,
  .yk-form-select-dropdown-item:hover {
    background-color: var(--level-24);
  }
</style>
