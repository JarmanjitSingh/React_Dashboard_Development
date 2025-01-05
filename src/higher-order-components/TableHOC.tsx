import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import {
  Column,
  TableOptions,
  TableState,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

function TableHOC<T extends object>(
  columns: Column<T>[],
  data: T[],
  containerClassname: string,
  heading: string,
  showpagination: boolean = false
) {
  return function HOC() {
    const options: TableOptions<any> = {
      columns: columns as readonly Column<any>[],
      data,
      initialState: {
        pageSize: 4,
      } as Partial<TableState<T>>,
    };

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      page,
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage,
      pageCount,
      state,
    }: any = useTable(options, useSortBy, usePagination);

    return (
      <div className={`${containerClassname} p-6`}>
        <h2 className="text-lg font-bold mb-4">{heading}</h2>

        <table
          className="table-auto w-full border-collapse border border-gray-300"
          {...getTableProps()}
        >
          <thead className="bg-gray-100">
            {headerGroups.map((headerGroup: any) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="border-b">
                {headerGroup.headers.map((column: any) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="p-4 text-left text-gray-600 font-medium"
                  >
                    {column.render("Header")}
                    {column.isSorted && (
                      <span className="inline-block ml-2">
                        {column.isSortedDesc ? (
                          <AiOutlineSortDescending />
                        ) : (
                          <AiOutlineSortAscending />
                        )}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row: any) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="even:bg-gray-50">
                  {row.cells.map((cell: any) => (
                    <td
                      {...cell.getCellProps()}
                      className="p-4 text-gray-700 border-t"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

        {showpagination && (
          <div className="flex justify-between items-center mt-4">
            <button
              disabled={!canPreviousPage}
              onClick={previousPage}
              className={`px-4 py-2 rounded ${
                !canPreviousPage
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Prev
            </button>
            <span className="text-gray-600">
              Page {state.pageIndex + 1} of {pageCount}
            </span>
            <button
              disabled={!canNextPage}
              onClick={nextPage}
              className={`px-4 py-2 rounded ${
                !canNextPage
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    );
  };
}

export default TableHOC;
