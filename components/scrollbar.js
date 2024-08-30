// scrollbar.js

import PerfectScrollbar from '../node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js';

document.addEventListener('DOMContentLoaded', function () {
  const tableWrapper = document.getElementById('tableWrapper');
  const ps = new PerfectScrollbar(tableWrapper, {
    suppressScrollX: true
  });
});
