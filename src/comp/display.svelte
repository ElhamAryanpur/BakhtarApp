<script lang="ts">
  export let data: any;
  export let choosen: number;

  function setSize(element: object) {
    element.setAttribute(
      "style",
      `width: ${window.innerWidth - 40}px; height: ${window.innerHeight}px`
    );
  }
</script>

<style>
  div {
    overflow-y: auto;
    border: 0px;
    resize: none;
    height: 100vh;
    padding: 20px;
    background: #121920;
  }
</style>

<div dir="rtl" use:setSize>

<h2>{data[choosen].title}</h2>

{data[choosen].data}
</div>
