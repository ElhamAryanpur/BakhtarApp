<script>
  export let Data;
  export let changeSubject = () => {};
</script>

<style>
  table{
    position: relative;
    top: 20%;
    left: 10px;
  }

  button{
    background: #121920;
    border: 0px solid #6AAAC9;
    font-weight: bold;
    border-radius: 5px;
  }

  button:hover{
    background: #18232e;
  }
</style>

<table>
  <tr>
    <button on:click={()=> window.downloadData()}>Download</button>
  </tr>
  {#each Data as menu, n}
    <tr>
      <button on:click={()=> changeSubject(n)}>{menu}</button>
    </tr>
  {/each}
</table>