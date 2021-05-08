// UI Variables
const createTicketBtn = document.querySelector("#create-ticket");
// Utility variables
let ticketsDb = [];

// Populate table with tickets
axios
  .get("http://localhost:4000/api/ticket")
  .then((res) => {
    ticketsDb = res.data.data;
    console.log(res.data.data);
  })
  .catch((err) => console.log(err));

// Ag Grid //
// Specify columns
const columnDefs = [
  { field: "title", lockPosition: true },
  { field: "user" },
  { field: "Department" },
  { field: "status" },
];

const rowData = [];

agGrid
  .simpleHttpRequest({ url: "http://localhost:4000/api/ticket" })
  .then((data) => {
    gridOptions.api.setRowData(data.data);
    gridOptions.api.sizeColumnsToFit(); //am adaugat asta sa nu mai arate bara orizontala jos, in tabel (vedem noi cum ramane mai incolo dar parca da mai bine asa)
  });

// let the grid know which columns and what data to use
const gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData,
  rowSelection: "single",
  onSelectionChanged: onSelectionChanged,
};
const mobileColumn = [
  { field: "title", lockPosition: true },
  { field: "status" },
];

const mq = window.matchMedia("(min-width: 960px)");

if (mq.matches) {
  setTimeout(function () {
    gridOptions.api.setColumnDefs(columnDefs);
    gridOptions.api.sizeColumnsToFit();
  });
} else {
  setTimeout(function () {
    gridOptions.api.setColumnDefs(mobileColumn);
    gridOptions.api.sizeColumnsToFit();
  });
}
// window.addEventListener("resize", function () {
//   setTimeout(function () {
//     if (window.innerWidth <= 480) {
//       gridOptions.api.setColumnDefs(mobileColumn);
//       gridOptions.api.sizeColumnsToFit();
//     }
//   });
// });

// lookup the container we want the Grid to use
const eGridDiv = document.querySelector("#myGrid");

// create the grid passing in the div to use together with the columns & data we want to use
new agGrid.Grid(eGridDiv, gridOptions);

function onSelectionChanged() {
  var selectedRows = gridOptions.api.getSelectedRows();
  console.log(selectedRows[0]);
}

function onFilterTextBoxChanged() {
  gridOptions.api.setQuickFilter(
    document.getElementById("filter-text-box").value
  ); //asta nu cred ca o sa ramana asa, trebuie facut altfel
}

// Listen for click event on create ticket button
// createTicketBtn.addEventListener("click", () => {
//   window.location.replace("../newticket.html");
// });

window.onload = async () => {
  await getUser();
  if (isLogged) {
    newTicket.style.display = "block";
    ticket.style.display = "block";
    logout.style.display = "block";
    ticketsContainer.style.display = "block";
  } else {
    login.style.display = "block";
    register.style.display = "block";
  }
};
