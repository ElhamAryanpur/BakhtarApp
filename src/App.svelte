<script>
  import Menu from "./comp/menu.svelte";
  import Display from "./comp/display.svelte";

  let choosen = 0;

  function changeSubject(newValue) {
    choosen = newValue;
  }

  let data = window.getData();

  const Data = [];
  for (let key in data) {
    Data.push(data[key].title);
  }

  window.addEventListener("resize", () => {
    window.location.reload();
  });

  if (navigator.serviceWorker) {
    navigator.serviceWorker.register("/BakhtarApp/sw.js", {
      scope: "/BakhtarApp/"
    });
  }
</script>

<style>
  div {
    overflow: hidden;
  }
</style>

<div class="pure-container" data-effect="pure-effect-slide">
  <input
    type="checkbox"
    id="pure-toggle-left"
    class="pure-toggle"
    data-toggle="left" />
  <label
    class="pure-toggle-label"
    for="pure-toggle-left"
    data-toggle-label="left">
    <span class="pure-toggle-icon" />
  </label>

  <div class="pure-drawer" data-position="left">
    <Menu {changeSubject} {Data} />
  </div>
  <div class="pure-pusher-container">
    <div class="pure-pusher">
      <Display {data} {choosen} />
    </div>
  </div>
  <label class="pure-overlay" for="pure-toggle-left" data-overlay="left" />
</div>
