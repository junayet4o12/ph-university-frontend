import { useState } from "react";
import { TAcademicFaculty, TQueryParams } from "../../../types";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.api";
import { Button, Table, TableColumnsType, TableProps } from "antd";

type TTableData = Pick<TAcademicFaculty, '_id' | 'name'>
export default function AcademicFaculty() {
  const [params, setParams] = useState<TQueryParams[] | undefined>(undefined)
  const { data: semesterFaculty, isLoading, isFetching, error } = useGetAllAcademicFacultyQuery(params);


  if (isLoading) {
    return ''
  }
  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      dataIndex: 'name',
      showSorterTooltip: { target: 'full-header' },
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Action',
      key: 'x',
      render: () => {
        return <div><Button>Update</Button></div>
      }
    }
  ];

  const tableData = semesterFaculty?.data?.map(({ _id, name }) => ({
    _id,
    key: _id,
    name
  }))

  const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
    if (extra.action === 'filter') {
      const queryParams: TQueryParams[] = [];
      filters?.name?.forEach(item => (queryParams.push({ name: 'name', value: item })))
      setParams(queryParams)
    }
  };


  return (
    <Table<TTableData>
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: 'sorter-icon' }}
    />
  );
}