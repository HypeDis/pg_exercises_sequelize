const submitBtn = document.querySelector('#query-submit-btn');
const textArea = document.querySelector('#sql-query-text');
const resultsContainer = document.querySelector('#results-container');
// reset text on refresh
// textArea.value = '';
// create url queryparam generator

const generateUrlQuery = (baseUrl, queryObj) => {
  baseUrl += '?';
  baseUrl += Object.entries(queryObj).reduce((acc, cur) => {
    const queryKey = cur[0];
    const queryVal = cur[1];
    const queryStr = encodeURI(`${queryKey}=${queryVal}`);
    acc += queryStr;
    return acc;
  }, '');
  return baseUrl;
};

const createTable = resultsArr => {
  const tableHeaders = Object.keys(resultsArr[0]);
  const rowValuesArr = resultsArr.map(resultObj => Object.values(resultObj));
  const tableEl = document.createElement('table');

  // create header row
  const headerRow = document.createElement('tr');
  tableHeaders.forEach(colName => {
    const header = document.createElement('th');
    header.innerText = colName;
    headerRow.appendChild(header);
  });
  tableEl.appendChild(headerRow);

  // create data rows
  rowValuesArr.forEach(row => {
    const dataRow = document.createElement('tr');
    row.forEach(entry => {
      const dataEl = document.createElement('td');
      dataEl.innerText = entry;
      dataRow.appendChild(dataEl);
    });
    tableEl.appendChild(dataRow);
  });

  return tableEl;
};

submitBtn.onclick = () => {
  const url = generateUrlQuery('/query', { sql: textArea.value });

  fetch(url, {
    method: 'get',
  })
    .then(response => {
      return response.json();
    })
    .then(results => {
      if (!results.length) {
        resultsContainer.innerHTML = 'no results';
        return;
      }
      console.log(`${results}`);
      resultsContainer.innerHTML = '';
      const table = createTable(results);
      const jsonData = document.createElement('div');
      jsonData.style = 'width:25vw;';
      jsonData.innerText = JSON.stringify(results);
      resultsContainer.appendChild(table);
      resultsContainer.appendChild(jsonData);
    })
    .catch(e => {
      console.log(e);
      const resultsEl = document.createElement('div');
      resultsEl.innerText = JSON.stringify(e);
      resultsContainer.innerHTML = '';
      resultsContainer.appendChild(resultsEl);
    });
};
