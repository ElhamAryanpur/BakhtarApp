<script>
  export let changeSubject = () => {};

  let Data = ["history", "Geography", "Math"];
</script>

<style>
  table{
    position: relative;
    top: 20%;
    left: 10px;
  }
</style>

<table>
  {#each Data as menu, n}
    <tr>
      <button on:click={()=> changeSubject(n)}>{menu}</button>
    </tr>
  {/each}
</table>