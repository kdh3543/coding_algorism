let name = "test";
function log() {
  console.log(name);
}

function log2() {
  name = "test234";
  log();
}

log2();
