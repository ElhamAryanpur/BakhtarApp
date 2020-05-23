<script context="module">
  export function MakeOffline() {
    window.onload = () => {
      "use strict";

      if (
        "serviceWorker" in navigator &&
        document.URL.split(":")[0] !== "file"
      ) {
        navigator.serviceWorker.register("./sw.js");
      }
    };
  }
</script>
