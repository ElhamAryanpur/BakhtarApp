<script lang="ts">
  import Menu from "./comp/menu.svelte";
  import Display from "./comp/display.svelte";

  let book = 0;

  function changeSubject(newValue: number) {
    book = newValue;
  }

  let data = [`Hello`, 'World'];
</script>

<style>
  div {
    overflow: hidden;
  }
</style>

<div class="pure-container" data-effect="pure-effect-slide">
    <input type="checkbox" id="pure-toggle-left" class="pure-toggle" data-toggle="left">
    <label class="pure-toggle-label" for="pure-toggle-left" data-toggle-label="left">
        <span class="pure-toggle-icon"></span>
    </label>

    <div class="pure-drawer" data-position="left">
        <Menu {changeSubject} />
    </div>
    <div class="pure-pusher-container">
        <div class="pure-pusher">
            <Display {data} choosen={book} />
        </div>
    </div>
    <label class="pure-overlay" for="pure-toggle-left" data-overlay="left"></label>
</div>
