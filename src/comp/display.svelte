<script lang="ts">
  export let data: any;
  export let choosen: number;

  function setSize(element: object) {
    element.setAttribute(
      "style",
      `width: ${window.innerWidth}px; height: ${window.innerHeight + 70}px`
    );
  }
</script>

<style>
  textarea {
    border: 0px;
    resize: none;
    height: 100vh;
    padding: 20px;
    background: #121920;
  }
</style>

<textarea dir="rtl" use:setSize readonly>{data[choosen]}</textarea>
